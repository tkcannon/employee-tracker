const db = require('./connection');

function getRoles() {
    db.query(
        'SELECT * FROM roles AS json;',
        function (err, results, fields) {
            if (err) throw err;
            console.log(results);
        }
    )
}

//select departments
//select roles
//select employees
//add department
//add role
//add employee
//update employee

module.exports = {getRoles};