DELECT FROM <table name>;
-- to Delect whole row of table
 
DELETE FROM <table name> WHERE {comparision ..} ORDER BY {..} LIMIT ..
-- to Delete row from Table

--Examples:

//--* 1) DELETE FROM first WHERE Salary = 5000000 LIMIT 1;  --> delete first row with salary 5000000

//--* 2) DELETE FROM first ORDER BY DOB ASC LIMIT 1;    --> delete oldest person from row

//--* 3) Delete FROM first WHERE Name LIKE "J%" ORDER BY DOB ASC LIMIT 1;  -->delect row from first table where Name start from J patter and more older in age;


--** Not with UPDATE SET keyword is used
UPDATE <table name> SET <column name> = value 1, <column name> = value 2 WHERE {...}  ;
-- to update a row
-- Examples:

//--* 1) UPDATE first SET Name = "BW" WHERE Name = "BOB Williom%" LIMIT 1;   --> update first row with BOB Williom  Nmae to BW ;


--** Not with Alter Table Rename column <old> to <new> keyword is used 
ALTER TABLE <table name> RENAME COLUMN <old column name> TO <new column name> [datatype] [constraint]
-- to change table structure
-- Example:
//--* 1) ALTER TABLE Students
//--*    RENAME COLUMN Id TO ID;



ALTER TABLE <table name> ADD COLUMN <new column> [datatype];
-- to add new column in table


ALTER TABLE <table name> DROP COLUMN ;
-- to delete entire column and its data;



**********  SELECT statement with an "alias" for the column ***********
SELECT <col name> as <col name as alias> FROM first;
-- Example:
--* 1) SELECT DOB AS "Date of birth" FROM FIRST;   --> ( give us Alias name (Date of birth) instead of DOB)

--* 2) SELECT CONCAT(Fname," ",Lname) as FullName from first; -> (show concat of two column in one with " " example (Samir|Neupane is get as Samir Neupane))

--* 3) SELECT DISTINCT GPA from students;   -> (shoe only distinct gpt in GPA columns)

--* 4) SELECT COUNT(*) AS unMarried from students; --> (to cound result roe data )

--* 5) Select SUM(Salary) from Students;

--* 6)  SELECT Gender, COUNT(*) from students GROUP BY Gender;  --->(GROUP BY clause  is used to group rows that have the same values)

--* 7)SELECT Faculty, SUM(Faculty) as Fcount 
//-- FROM students
//-- GROUP BY Faculty
//-- HAVING Fcount > 1000;
