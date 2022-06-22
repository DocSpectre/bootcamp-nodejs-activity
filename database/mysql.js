const mysql = require('mysql');

// default mysql port
// windows os = 3306
// mac os = 8889

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'docspectre_@',
    password: 'EX3FD443OMfHBJ5B',
    database: 'articles'
});

module.exports = db;