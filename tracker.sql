-- create 3 tables (department, role, and employees )
-- about employees
-- manager
-- employers
DROP DATABASE IF EXISTS my_employees;

CREATE DATABASE my_employees;

USE my_employees;


CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,5) NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (department_id)
    REFERENCES department(id)   
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (role_id)
    REFERENCES role(id) 
);


role.department_id = department.id
join all of table department with all of table role 
join all of table 1 with 

CREATE TABLE overview (
    SELECT department.depName, employee.employeeID, employee.firstName, employee.lastName, roleTable.title, roleTable.salary
    FROM roleTable
    INNER JOIN departmentTable ON department.depID = roleTable.depID
    INNER JOIN employeeTable ON employee.roleID = roleTable.roleID
);
SELECT * FROM employeeRole;
SELECT * FROM overview;


-- -- testing 
-- INSERT INTO
--     department.department_name
-- VALUES
--     ("Sales"),
--     ("Engineering"),
--     ("Finance"),
--     ("Legal");

-- -- INSERT INTO
-- --     role
-- --     (title, salary, department_id)
-- -- VALUES
-- --     ("Sales Lead", 100000, 1),
-- --     ("Salesperson", 80000, 1),
-- --     ("Lead Engineer", 150000, 2),
-- --     ("Software Engineer", 120000, 2),
-- --     ("Accountant", 125000, 3),
-- --     ("Legal Team Lead", 250000, 4),
-- --     ("Lawyer", 190000, 4);

-- -- INSERT INTO
-- --     employee
-- --     (first_name, last_name, role_id, manager_id)
-- -- VALUES
-- --     ("Sean", "Carter", 1, 3),
-- --     ("Kanye", "West", 2, 1),
-- --     ("Aubrey", "Graham", 3, NULL),
-- --     ("Rakim", "Mayers", 4, 3),
-- --     ("Jermaine", "Cole", 5, NULL),
-- --     ("Scott", "Mescudi", 6, NULL),
-- --     ("Quavious", "Marshall", 7, 7),
-- --     ("Ermias", "Asghedom", 3, 2);

-- -- ALTER TABLE employee ADD FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL;


-- DROP DATABASE IF EXISTS p12_db;
-- CREATE database p12_db;

-- USE p12_db;

-- CREATE TABLE employee (
--   id INT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(30) NULL,
--   last_name VARCHAR(30) NULL,
--   role_id INT NULL,
--   manager_id INT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE role (
--   id INT NOT NULL AUTO_INCREMENT,
--   title VARCHAR(30) NULL,
--   salary DECIMAL(10,2) NULL,
--   department_id INT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE department (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(30) NULL,
--   PRIMARY KEY (id)
-- );





INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marcus", "Fenix", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leon", "Kennedy", 11, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Manny", "Cavalera", 9, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Samus", "Aran", 4, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gordon", "Freeman", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Arthas", "Menethil", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nathan", "Drake", 10, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Duke", "Nukem", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Revolver", "Ocelot", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cloud", "Strife", 8, 3);


INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 60000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 85000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Legal Advisor", 165000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Manager", 245000.00, 4);

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Legal");


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
-- SELECT * FROM my_employees;


SELECT employee_id, e.first_name, e.last_name, depdepartment_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
    FROM employee e
    LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee x
    ON e.manager_id = x.id`;

--         SELECT employee_id, employee.first_name, employee.last_name, department_name, role.tittle
--         FROM employee 
--         LEFT JOIN role 
--         ON employee.role_id = role.id
--         LEFT JOIN department
--         ON department.id = role.department_id 

--         SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
--     FROM employee e
--     LEFT JOIN role r
--     ON e.role_id = r.id
--     LEFT JOIN department d
--     ON d.id = r.department_id
--     LEFT JOIN employee x
-- 		ON e.manager_id = x.id`;
