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
    PRIMARY KEY (id),
    -- FOREIGN KEY (department_id)
    -- REFERENCES department(id)   
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES role(id) 
);

-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;

-- testing 
INSERT INTO
    department.department_name
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

-- INSERT INTO
--     role
--     (title, salary, department_id)
-- VALUES
--     ("Sales Lead", 100000, 1),
--     ("Salesperson", 80000, 1),
--     ("Lead Engineer", 150000, 2),
--     ("Software Engineer", 120000, 2),
--     ("Accountant", 125000, 3),
--     ("Legal Team Lead", 250000, 4),
--     ("Lawyer", 190000, 4);

-- INSERT INTO
--     employee
--     (first_name, last_name, role_id, manager_id)
-- VALUES
--     ("Sean", "Carter", 1, 3),
--     ("Kanye", "West", 2, 1),
--     ("Aubrey", "Graham", 3, NULL),
--     ("Rakim", "Mayers", 4, 3),
--     ("Jermaine", "Cole", 5, NULL),
--     ("Scott", "Mescudi", 6, NULL),
--     ("Quavious", "Marshall", 7, 7),
--     ("Ermias", "Asghedom", 3, 2);

-- ALTER TABLE employee ADD FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL;