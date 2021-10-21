const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  password: 'serafim86',
  database: 'mvc_example',
  user: 'root',
});

module.exports = connection;