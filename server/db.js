const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Rc19931020",
  database: "unisole",
});

module.exports = pool;
