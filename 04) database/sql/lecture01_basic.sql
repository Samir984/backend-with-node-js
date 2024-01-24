SHOW DATABASES; 
-- to show all the databases available on your system

USE <databases name>;
--  to select a particular database to run query;

SHOW TABLES;
-- to view all the table in the selected database;

CREARE DATABASE <name>;
--  to create a new database;

DROP DATABASE [IF EXISTS] <name>;
-- Delete database; 


DROP table <table name>
-- to delete table  from selected databases;


CREATE TABLE first (
    <column name 1> [datatype],
    <column name 2> [datatype],
    .               .
    .               .
);
-- with constraint
CREATE TABLE first (
    <column name 1> [datatype] [constraint 1],
    <column name 2> [datatype] [constraint 2],
    .               .
    .               .
);
--  to create table in selected database ;
-- Example:
//--* 1)CREATE TABLE students (
//--*     StudentID INT PRIMARY KEY,
//--*     Name VARCHAR(50),
//--*     DateOFBirth DATE,
//--*     Gender ENUM ("Male","Female","Other","Prefer Not To Say"),
//--*     GPA DECIMAL(3,2) CHECK (GPA BETWEEN 0.00 AND 4.00),
//--*     Faculty VARCHAR(50)
//--*     );



DESC <table name>
--  to seee structure and description of table


INSERT INTO table_name (<column name 1>, <column name 2>, ...)
VALUES (<value 1>, <value 2>, ...);
-- to inseert into table 
-- Examples:
//--* 1)
//--* INSERT INTO first (Name,DOB,Salary) 
//--* Values ("Samir Neupane","2002-02-18",5000000);

//--* 2)
//--* INSERT INTO students (StudentID, Name, DateOfBirth, Gender, GPA, Faculty)
//--* VALUES (1, 'Samir Neupane', '2002-02-18', 'MALE', 3.20, 'CSIT'),
//--*        (2, 'John Doe', '1998-05-21', 'MALE', 3.50, 'Engineering'),
//--*        (3, 'Jane Smith', '2000-11-15', 'FEMALE', 3.80, 'Business'),
//--*        (4, 'Alice Johnson', '1999-08-07', 'FEMALE', 3.75, 'Medicine'),
//--*        (5, 'Bob Williams', '2001-03-25', 'MALE', 3.90, 'Arts'),
//--*        (6, 'Emily Brown', '2003-09-12', 'FEMALE', 3.60, 'Science'),
//--*        (7, 'Michael Davis', '1997-12-30', 'MALE', 3.45, 'Law'),
//--*        (8, 'Sophia Miller', '2000-06-05', 'FEMALE', 3.85, 'Social Sciences');




SELECT * FROM <table name>;
-- to see whole table content
SELECT <column 1 name>,<column 2 name> FROM <table name>;
-- to see particular column

-- use of WHERE keyword with SELECT 
--  Examples:
//--* 1) SELECT * FROM students WHERE Name LIKE "%e%";     --> (get all rows with Name e letter in  between )

//--* 2) SELECT * FROM students WHERE Gender LIKE "_ale"; (Give _ale(Male) Pattern in Gender)

//--* 3) SELECT * FROM students WHERE NOT Gender = "Male"; (Give NOT Male from  Gender)

//--* 4) SELECT * FROM students
//--*    WHERE StudentID BETWEEN 2 AND 5;     -> (get all rows with in where StudentID is between 2 to 5 )

//--* 5) SELECT * FROM students 
//--*    WHERE Gender="Male" AND GPA > 3.5;

-- use of ORDER BY keyword with SELECT 
--  Examples:

//--* 1) SELECT * FROM students 
//--*    ORDER BY GPA DESC LIMIT 2;  --> ( give top 2 GPA holding row from students table)

//--* 2) SELECT * FROM students ORDER BY DateOfBirth DESC LIMIT 2; --> (give top 2 youngest students from table )

//--* 3) SELECT * FROM students ORDER BY DateOfBirth DESC LIMIT 2 OFFSET 2; --> (give top 2 youngest students from table after 2 offset (ex: A,B,C,D young students)=> you get (C,D) leaving 2 (A,B)des offset))

-- use of WHERE and ORDER BY keyword with SELECT 
-- Examples:

//--* 1) SELECT * FROM students 
//--      WHERE Gender = 'Male'
//--      ORDER BY DateOfBirth DESC
//--      LIMIT 2;se


