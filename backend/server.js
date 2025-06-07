const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// CONEXIÓN A LA BD
const db = require('./config/db');

// RUTA PRUEBA DE CONEXIÓN
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, resultados) => {
    if (err) {
      console.error('Error al consultar:', err);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    } else {
      res.json(resultados);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});