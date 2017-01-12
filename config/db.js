let mysql = require('mysql');
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'rubrind1Og',
    database : 'tutoriel'
});

connection.connect()

module.exports = connection