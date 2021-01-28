const mysql = require(`mysql`);
const inquirer = require("inquirer");
const cTable = require("console.table");



const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "my_employees"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId) + "\n";

  mainPrompt() ;
  //  connection.end();//
});

// prompt questions (what would you like do do)

function mainPrompt() {
  inquirer
    .prompt({
    type: "list",
    name: 'action',
    message: 'What would you like to do?',
    choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role"
      ] 
    })
    .then(function(response) {
      // Switch case and generate fucnction depends on action's choice
      switch (response.action) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":

          addEmployee();
          break;
        case "View departments":
          viewDepartments();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          endConnection();
      }
    });
}

function addDepartment() {
  inquirer.prompt({
    type: "input",
    message: "What department do you want to add?",
    name: "deptName"
  }).then(function(response){
    connection.query("INSERT INTO department (name) VALUES (?)", [response.deptName] , function(err, res) {
      if (err) throw err;
      console.table([response.deptName])
      mainPrompt()
      
  })
  })
};

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role would you like to add?",
        name: "roleTitle"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "roleSalary"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptId"
      }
    ])
    .then(function(response) {
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [response.roleTitle, response.roleSalary, response.deptID], function(err, res) {
        if (err) throw err;
        console.table(res);
        mainPrompt()
      });
    });
}


function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the employee's first name ?",
        name: "emFirst"
      },
      {
        type: "input",
        message: "What's the employee's last name ?",
        name: "emLast"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
      }
    ])
    .then(function(answer) {
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.emFirst, answer.emLast, answer.roleID, answer.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        mainPrompt();
      });
    });
}

function viewDepartments() {
  
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
    mainPrompt();

  });
  // show (console.table)
}


function viewRoles() {
  console.log("Selecting all roles...\n");
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    console.table(res);
    mainPrompt();
  });
  // show the  (console.table)
}

function viewEmployees() {
 
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.table(res);
    mainPrompt();
  });
  // show the (console.table)
}

  

  // -- have them join if call on 
  // at one point i have to join these table information/value/column together
  // I am gonna need to use 
  // view department just one thing 
  // view employees join all of it 
  // view role, then I join left join 