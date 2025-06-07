const db = require('../config/db');

// Listar todos los usuarios
const getAllUsuarios = (callback) => {
  db.query('SELECT * FROM usuarios', callback);
};

// Insertar nuevo usuario
const createUsuario = (usuario, callback) => {
  const sql = 'INSERT INTO usuarios (nombre, correo) VALUES (?, ?)';
  db.query(sql, [usuario.nombre, usuario.correo], callback);
};

// Actualizar usuario por ID
const updateUsuario = (id, usuario, callback) => {
  const sql = 'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?';
  db.query(sql, [usuario.nombre, usuario.correo, id], callback);
};

// Eliminar usuario por ID
const deleteUsuario = (id, callback) => {
  const sql = 'DELETE FROM usuarios WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario
};
