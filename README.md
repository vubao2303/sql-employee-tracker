# sql-employee-tracker

 Using the MySQL dependency as the database and to take the inforamtion stored in the database to create an internal tool to view employee, role, and department data as well as add an employee, role, or department. 
![Site](Assets/mainpage.png)

## Site-video 
[Demo Video](https://drive.google.com/file/d/1sT1G3WIel3KBlnAU-rYMioZblzMNnNo_/view)  


# Table of Contents 
[Tittle](#sql-employee-tracker)

[Guide Video](#Guide-Video)

[Heroku](#Heroku-Deployed)

[Table of Contents](#Table-of-Content)

[Description of Page Building](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Author](#Author)

[License](#License)


## Description of Page Building 
* In MYSQL 
  <ul> 
  <li> Create 3 tables: department, role, and employees
  <li> Insert Seeds file, which are value into tables such as names, id, title, salaries. 
  <li> Select table and create database in workbench
  </li>
  </ul>


* IN javascript file 
  <ul> 
  <li> 
  <li> 
  <li> 
  </li>
  </ul>
  
* nmp install to download packages and dependencies 
* populate MySQL database with three tables for employee, role, and department.
* add MySQL password to the server.js file to ensure that the connection to the database can be made and requests for actions can be pushed to the database



## Code Snippet

Install npm package 
npm install express

Required variables 
``` Javascript
const mysql = require(`mysql`);
const inquirer = require("inquirer");
const cTable = require("console.table");
```
Sets up connection 
``` Javascript
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "my_employees"
});
```


## Technologies Used
- Node - an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.
  * [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
- Git - version control system to track changes to source code
  * [Git](https://git-scm.com/)
- GitHub - hosts repository that can be deployed to GitHub Pages
  * [Github](https://github.com/)



## Author

* **B Tram Vu** 

- [Link to Portfolio Site](https://vubao2303.github.io/portfolio/)
- [Link to Github](https://github.com/vubao2303)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.