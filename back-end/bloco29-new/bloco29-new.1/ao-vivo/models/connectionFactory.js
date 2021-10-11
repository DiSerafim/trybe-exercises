const mysql = require('mysql2/promise');

const connection = (schema) => mysql.createPool(schema);

module.exports = connection;