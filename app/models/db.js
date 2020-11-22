const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Cria a conexão com o banco de dados.
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});

// Abre uma conexão MySQL.
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;