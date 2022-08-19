const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'store'
});

mysqlConnection.connect( (err) => {
    if (!err) {
        console.log('db is connected');
    } else{
        console.log(err);
    }
});

module.exports = mysqlConnection;