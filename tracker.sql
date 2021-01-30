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


-- employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Athena", "Fenix", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hestia", "Kennedy", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tyche", "Cavalera", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dionysus", "Aran", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Poseidon", "Freeman", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Zeus", "Menethil", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hera", "Drake", 4, 2);

-- roles 
INSERT INTO role (title, salary, department_id)
VALUES ("Fun Associate", 60000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 85000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 165000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Manager", 245000.00, 3);


INSERT INTO department (name)
VALUES ("Sales"),("Engineering"),("Finance");


-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;

SELECT * FROM my_employees;