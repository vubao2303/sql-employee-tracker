const mysql = require(`mysql`);
const inquirer = require("inquirer");
const cTable = require("console.table");

//* Switching Logger to Chalk NPM Package to print colorful console.log messages
const chalk = require('chalk');

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
  console.log( chalk.magentaBright(`WELCOME TO DEBE COMPANY`)
	);
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
        "View departments",
        "Add role",
        "View roles",
        "View employees",
        "Add employee",
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

const depChoices = [];
function addRole() {

	let query = "SELECT * FROM department";
	connection.query(query, function (err, res) {
		res.forEach(function (element) {
      depChoices.push(element.department_name);
     
    });
  });
	inquirer.prompt([
    {
      type: "input",
      message: "What role would you like to add?",
      name: "title"
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "salary"
    },
		{
			name: "deptID",
			type: "list",
			message: "Which department does this role belong to?",
			choices: depChoices
		}
	]).then(function (response) {
		let query = "SELECT id FROM department WHERE department_name = ?";			
		connection.query(query,[response.deptID], function (err, res) {
      if(err) throw err;
      console.log(res);
      response.deptID = res[0].id;
      
			connection.query(
				"INSERT INTO role SET ?",
				{
					title: response.title,
					salary: response.salary,
					department_id: response.deptID
				}
			);			
		});
		mainPrompt()
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
    .then(function(response) {
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [response.emFirst, response.emLast, response.roleID, response.managerID], function(err, res) {
        if (err) throw err;
        console.table([response.emFirst] + " " + [response.emLast] + " added to the company!");
        mainPrompt();
      });
    });
}

// function VIEWDEPARTMENT all done 
function viewDepartments() {
	console.log(chalk.magentaBright(`CHECK OUT OUR AWESOME DEPARTMENTS`))
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
    mainPrompt();

  });
  // show (console.table)
}


function viewRoles(){
	console.log(chalk.magentaBright(`ALL THE ROLES IN DEBE'S COMPANY!`));
  var query = "SELECT title, salary, department_name FROM role LEFT JOIN department ON role.department_id= department.id;"
  connection.query(query, function (err, result) {
      if (err) throw err;
      console.table(result)
			mainPrompt();
	})

}

// view employees, view everything that is related to the employees 
function viewEmployees() {
  console.log(chalk.magentaBright(`ALL THE EXCELLENT EMPLOYEES IN DEBE'S COMPANY!`));
  var allEQuery =
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;";
  connection.query(allEQuery, function(err, response) {
    console.table(response);
    mainPrompt();
  });
  
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
        // let query = `INSERT INTO department (name) VALUES ("${response.deptName}")`
        //let query = `'UPDATE employee SET role_id=${response.updateRole} WHERE first_name= ${response.eeUpdate}`;
        //console.log(query);
  
        connection.query('UPDATE employee SET role_id= ?  WHERE first_name=?',[response.emUpdate, response.emName],function(err, res) {
          if (err) throw err;
          console.log("employee UPDATED ");
          mainPrompt();
        });
      });
  }

  