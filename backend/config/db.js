const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

conexion.connect(error => {
  if (error) {
    console.error('Error de conexión a la BD:', error);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = conexion;