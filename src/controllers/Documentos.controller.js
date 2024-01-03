
import { GetConnection, sql } from '../database/conection'
    ;
export const GetDocumentos = async (req, res) => {
    try {
        const pool = await GetConnection();
        const result = await pool.request().execute('SPMostrarTipoDoc'); //ejecutas eñl SP que traera a todos los documentos
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
export const PostDocumentos = async (req, res) => {
    // Constantes, que se pasarán del body
    const nwDocumento = req.body?.nwDocumento;  // Accede directamente al valor de nwDocumento
    try {
        if (nwDocumento == null) {
            return res.status(400).json({ msg: "No funciona, por favor llene todos los campos" });
        }
        const pool = await GetConnection();
        // Llama al stored procedure con el valor de nwDocumento
        await pool.request().input("Nombre", sql.VarChar, nwDocumento).execute('SPInsertarTipoDoc');
        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Documento insertado  correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al insertar la documento en la base de datos" });
    }
};
//MODIFICAR 
export const PutDocumento = async (req, res) => {
    // Obtén los datos de la dirección a modificar desde el cuerpo de la solicitud
    const { id, nuevoNombre } = req.body;   
    try {
        // Verifica si los datos son válidos 
        if (!id || isNaN(id) || !nuevoNombre) {
            return res.status(400).json({ msg: "Datos de nuevo documento no válidos" });
        }
        const pool = await GetConnection();
        // Llama al stored procedure con los valores necesarios
        await pool
            .request()
            .input("Id", sql.TinyInt, id)
            .input("NuevoNombre", sql.VarChar(80), nuevoNombre)
            .execute('SPModificarTipoDoc');
        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Documento modificado correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al modificar el tipo documento en la base de datos" });
    }
};

//DELETE
export const DeleteDocumento  = async (req, res) => {
    // Intenta obtener el ID de la dirección desde el cuerpo de la solicitud
    let documentoID = req.body.id;
    // Si no se encuentra en el cuerpo, intenta obtenerlo de los parámetros de la URL
    if (!documentoID) {
        documentoID = req.params.id;
    }
    try {
        // Verifica si el ID es válido (puedes agregar más validaciones según sea necesario)
        if (!documentoID || isNaN(documentoID)) {
            return res.status(400).json({ msg: "ID de dirección no válido" });
        }
        const pool = await GetConnection();
        // Llama al stored procedure con el valor del ID
        await pool.request().input("Id", sql.TinyInt, documentoID).execute('SPEliminarTipoDoc');
        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Dirección eliminada correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al eliminar la dirección en la base de datos" });
    }
};
