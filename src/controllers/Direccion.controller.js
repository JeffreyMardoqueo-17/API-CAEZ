import { json } from 'express';
import { GetConnection, sql } from '../database/conection'

    //COSAS IMPORTANTES
    ;
export const GetDirecciones = async (req, res) => {
    try {
        const pool = await GetConnection();

        // Llamar al stored procedure SPMostrarDireccion
        const result = await pool.request().execute('SPMostrarDireccion');

        // El resultado estará disponible en result.recordset
        const direcciones = result.recordset;

        console.log(direcciones);

        // Devolver la lista de direcciones como respuesta
        res.status(200).json(direcciones);
    } catch (error) {
        // Manejar cualquier error durante la obtención de direcciones
        console.error(`Error al obtener direcciones: ${error.message}`);
        res.status(500).json({ error: 'Error al obtener la lista de direcciones' });
    }
};
// /post
export const PostDireccion = async (req, res) => {
    // Constantes, que se pasarán del body
    const nwDireccion = req.body?.nwDireccion;  // Accede directamente al valor de nwDireccion
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

//MODIFICAR 
export const UpdateDireccion = async (req, res) => {
    // Obtén los datos de la dirección a modificar desde el cuerpo de la solicitud
    const { id, nuevoNombre } = req.body;

    try {
        // Verifica si los datos son válidos 
        if (!id || isNaN(id) || !nuevoNombre) {
            return res.status(400).json({ msg: "Datos de dirección no válidos" });
        }
        const pool = await GetConnection();
        // Llama al stored procedure con los valores necesarios
        await pool
            .request()
            .input("Id", sql.TinyInt, id)
            .input("NuevoNombre", sql.VarChar(80), nuevoNombre)
            .execute('SPModificarDireccion');
        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Dirección modificada correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al modificar la dirección en la base de datos" });
    }
};

//DELETE
export const DeleteDireccion = async (req, res) => {
    // Intenta obtener el ID de la dirección desde el cuerpo de la solicitud
    let direccionId = req.body.id;
    // Si no se encuentra en el cuerpo, intenta obtenerlo de los parámetros de la URL
    if (!direccionId) {
        direccionId = req.params.id;
    }
    try {
        // Verifica si el ID es válido (puedes agregar más validaciones según sea necesario)
        if (!direccionId || isNaN(direccionId)) {
            return res.status(400).json({ msg: "ID de dirección no válido" });
        }
        const pool = await GetConnection();
        // Llama al stored procedure con el valor del ID
        await pool.request().input("Id", sql.TinyInt, direccionId).execute('SPEliminarDireccion');
        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Dirección eliminada correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al eliminar la dirección en la base de datos" });
    }
};

//BUSCAR POR ID
export const GetDireccionPorId = async (req, res) => {
    try {
        const direccionId = req.body.id; // Obtén el ID desde el cuerpo JSON

        // Verifica si el ID es válido (puedes agregar más validaciones según sea necesario)
        if (!direccionId || isNaN(direccionId)) {
            return res.status(400).json({ msg: "ID de dirección no válido" });
        }

        const pool = await GetConnection();

        // Llama al stored procedure SPBuscarDireccionPorId
        const result = await pool.request().input("Id", sql.TinyInt, direccionId).execute('SPBuscarDireccionPorId');

        // El resultado estará disponible en result.recordset
        const direccionEncontrada = result.recordset;

        // Verifica si se encontró alguna dirección con el ID proporcionado
        if (direccionEncontrada.length === 0) {
            return res.status(404).json({ msg: "Dirección no encontrada" });
        }

        // Devolver la dirección encontrada como respuesta
        res.status(200).json(direccionEncontrada[0]); // Supongo que solo debería haber una dirección con el ID dado
    } catch (error) {
        // Manejar cualquier error durante la búsqueda de dirección por ID
        console.error(`Error al buscar dirección por ID: ${error.message}`);
        res.status(500).json({ error: 'Error al buscar la dirección por ID' });
    }
};