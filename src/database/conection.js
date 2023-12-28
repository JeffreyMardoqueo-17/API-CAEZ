//importamos el modulo SQL 
import sql from 'mssql'
//configurando la base de datos
const dbSettings = {
    user: 'Jeffrey', //usuario de la base de datos
    password: 'jeffrey20068f',
    server: 'localhost',
    database: 'CAEZGestorPagosAlumnosBD',
    options:    {
        encrypt: true,
        trustServerCertificate: true
    },
}
//conecion asincrona, se intentara conectar atraves de una especie de promesa
export async function GetConnection() { //funcion para conectarse a la base de datos
    try {
        const pool = await sql.connect(dbSettings)//conectarse a la BD atraves de esos parametros => traera una coneccion
        // const result = await pool.request().query('SELECT * FROM Grado') //=> con la coneccion hare una peticion a la BD
        // console.log(result)
        return pool;

    } catch (error) {
        console.log(`El error de la conccion con la BD esta en: ${error}`)
    }
}
export {sql}