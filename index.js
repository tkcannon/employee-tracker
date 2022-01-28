const inquirer = require('inquirer');
const cTable = require('console.table');

const db = require('./db/connection');
const { getRoles } = require('./db/queries');


db.connect(err => {
  if (err) throw err;
  console.log('Database connected');
})

getRoles();

    // inquirer.prompt({
    //     type: 'list',
    //     name: 'next',
    //     message: 'What would you like to do?',
    //     choices: [
    //         'View Departments',
    //         'View Roles',
    //         'View Employees',
    //         'Add Department',
    //         'Add Role',
    //         'Add Employee',
    //         'Update Employee'
    //     ]
    // })
    //     .then(response => {
    //         console.log(response);
    //     })

