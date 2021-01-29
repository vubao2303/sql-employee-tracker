const mysql = require(`mysql`);
const inquirer = require("inquirer");
const cTable = require("console.table");


// port 3306 connection (√)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "my_employees"
});

// generate first mainPrompts (√)
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId) + "\n";
  mainPrompt() ;
  //  connection.end();//
});



// prompt questions (what would you like do do) (√)
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

// function addDeparment (√)
function addDepartment() {
  inquirer.prompt
  ({
    type: "input",
    message: "What department do you want to add?",
    name: "newDep"
  }).then(function(response){

    connection.query("INSERT INTO department(department_name) VALUES (?)", [response.newDep] , function(err, res) {
      if (err) throw err;
      console.table([response.newDep])
      mainPrompt()
  })
  })
};

// add ROLE
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

// add EMPLOYEES 
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
        console.table([answer.emFirst, answer.emLast] + " added to the company!");
        mainPrompt();
      });
    });
}

// function VIEWDEPARTMENT all done 
function viewDepartments() {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
    mainPrompt();

  });
  // show (console.table)
}

// // function ViewROLES ALL DONE 
// function viewRoles() {
//   console.log("Selecting all roles...\n");

//   connection.query("SELECT * FROM role", function(err, res) {
//     if (err) throw err;
//     console.table(res);
//     mainPrompt();
//   });
//   // show the  (console.table)
// }


function viewRoles(){
  console.log("ALL THE ROLES IN DEBE'S COMPANY");
  var query = "SELECT title, salary, department_name FROM role LEFT JOIN department ON role.department_id= department.id;"
  connection.query(query, function (err, result) {
      if (err) throw err;
      console.table(result)
      mainPrompt();
  })
}

// view employees, view everything that is related to the employees 
function viewEmployees() {
  console.log("Display all employees in DEBE's company!");
  var allEQuery =
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;";
  connection.query(allEQuery, function(err, answer) {
    console.log("\n Employees retrieved from Database \n");
    console.table(answer);
  });
  mainPrompt();
}


  function updateEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Which employee would you like to update?",
          name: "emName"
        },
  
        {
          type: "input",
          message: "What do you want to update this employee to?",
          name: "emUpdate"
        }
      ])
      .then(function(response) {
        // let query = `INSERT INTO department (name) VALUES ("${answer.deptName}")`
        //let query = `'UPDATE employee SET role_id=${answer.updateRole} WHERE first_name= ${answer.eeUpdate}`;
        //console.log(query);
  
        connection.query('UPDATE employee SET role_id= ?  WHERE first_name=?',[response.emUpdate, response.emName],function(err, res) {
          if (err) throw err;
          console.table(res);
          mainPrompt();
        });
      });
  }

  