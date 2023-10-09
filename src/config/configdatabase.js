// configuracion de la base de datos
const sql = require('mssql');

// Configura la cadena de conexión a SQL Server
const config = { //creamos un objeto con las propiedadades de la coneccio
  user: 'tu_usuario',
  password: 'tu_contraseña',
  server: 'tu_servidor', // nombre del servidor
  database: 'gestordepagos',
  options: {
    encrypt: true, // Para conexiones seguras (solo si estás utilizando SSL)
  },
};

// Crea un objeto de pool de conexiones
const pool = new sql.ConnectionPool(config);

// Conecta al servidor SQL Server
pool.connect()
  .then(() => {
    console.log('Conexión exitosa a SQL Server.');
  })
  .catch((err) => {
    console.error('Error de conexión a SQL Server:', err);
  });

module.exports = pool;
