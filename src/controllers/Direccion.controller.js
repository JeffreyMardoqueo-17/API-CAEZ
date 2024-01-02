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
// /post
export const PostDireccion = async (req, res) => {
    // Constantes, que se pasarán del body
    const nwDireccion = req.body;
    try {
        if (nwDireccion == null) {
            return res.status(400).json({ msg: "No funciona, por favor llene todos los campos" });
        }

        const pool = await GetConnection();
        // Llama al stored procedure con el valor de nwDireccion
        await pool.request().input("Nombre", sql.VarChar, nwDireccion).execute('SPInsertarDireccion');

        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Dirección insertada correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al insertar la dirección en la base de datos" });
    }
};
