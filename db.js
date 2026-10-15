const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'educontrol',
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true
});

module.exports = pool;
