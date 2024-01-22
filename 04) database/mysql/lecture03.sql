--** IN MYSQL there are (INNER,LEFT,RIGHT,SELF,NATURAL) join available.

SELECT * FROM <table 1> [JOIN TYPE] JOIN <table 2> on {join condition}
-- help to joine to table ;
-- Examples

//--* 1)  SELECT * FROM students INNER JOIN parent USING(ID);    -> (show all overlapping join in table based on condition.)

//--* 2)  SELECT * FROM students LEFT JOIN parent ON parent.Id=students.Id;    ->( show all left table + intersection table and null in not match tuple in right)

//--* 3)  SELECT * FROM students RIGHT JOIN parent ON parent.Id=students.Id;    -> (show all right table + intersection table and null in not match tuple in left)

//--* 1)  SELECT * FROM students INNER JOIN parent ON parent.Id=students.Id;    -> (show all overlapping join in table based on condition.)





--** Union is valid with two table having column number of column;
(Select Id, Name From Students) Union (SELECT * from parent)  
-- combine two table result in one output;