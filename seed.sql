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
VALUES ("Sales"),("Engineering"),("Finance")