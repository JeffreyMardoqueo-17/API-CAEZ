import { json } from 'express';
import { GetConnection, sql } from '../database/conection'

    //COSAS IMPORTANTES
    ;
export const GetDirecciones = async (req, res) => {
    try {
        const pool = await GetConnection();
        // Realizar la consulta SQL
        const result = await pool.request().query('SELECT * FROM Direccion');
        // Almacenar los resultados en una variable para mayor claridad
        const direcciones = result.recordset; //para que sirve el record set,  investigaro...
        console.log(direcciones);
        // Devolver la lista de grados como respuesta
        res.status(200).json(direcciones);
    } catch (error) {
        // Manejar cualquier error durante la obtención de grados
        console.error(`Error al obtener grados: ${error.message}`);
        res.status(500).json({ error: 'Error al obtener la lista de grados' });
    }
}

//post
export const PostDireccion = async (req, res) => {
//aqui estoy
    //constantes, que se pasaran del body
    const { nwDireccion } = req.body;
    try {
        if (nwDireccion == null) {
            return res.status(400).json({ msg: "no funciona, por avor llene todos los campos" })
        }
        const pool = await GetConnection();
        await pool.request().input("cargo", sql.VarChar, 'PRUEBA').query('INSERT INTO Direccion(nwDireccion) VALUES (@nwDireccion)');
        console.log(req)
    } catch (error) {
        console.log(`Èste es el error ${error}`)
    }
}