import { GetConnection, sql } from "../database/conection";

//Metodo get
export const GetCargo = async (req, res) => {
    try {
        const pool = await GetConnection(); // Conexión
        const result = await pool.request().query(`SELECT * FROM Cargo`); // Comando para traer todo
        console.log(result);
        res.send(`Si funciona mi rey: ${result.recordset}`);
    } catch (error) {
        console.log(`Valió weeee, si hay errores y es en: ${error}`);
        res.status(500).send(`Valió weeee, si hay errores y es en: ${error}`); // También puedes enviar un mensaje de error al cliente
    }
};
//método post
export const PostCargo = async (req, res) => {
    // Constantes, que se pasarán del body
    const nwCargo = req.body?.nwCargo;  // Accede directamente en el contendio de la variable
    try {
        if (nwCargo == null) {
            return res.status(400).json({ msg: "No funciona, por favor llene todos los campos" });
        }
        const pool = await GetConnection();
        // Llama al stored procedure con el valor de nwDireccio
        await pool.request().input("Nombre", sql.VarChar, nwCargo).execute('InsertarCargo');
        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Cargo agregado correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al insertar cargo en la base de datos" });
    }
};
//MODIFICAR 
export const ModificarCargo = async (req, res) => {
    // Obtén los datos de la dirección a modificar desde el cuerpo de la solicitud
    const { id, nuevoNombre } = req.body;

    try {
        // Verifica si los datos son válidos 
        if (!id || isNaN(id) || !nuevoNombre) {
            return res.status(400).json({ msg: "El nuevo Carg no es valido " });
        }
        const pool = await GetConnection();
        // Llama al stored procedure con los valores necesarios
        await pool
            .request()
            .input("Id", sql.TinyInt, id)
            .input("NuevoNombre", sql.VarChar(80), nuevoNombre)
            .execute('SPModificarCargo');
        // Envía una respuesta exitosa
        return res.status(200).json({ msg: "Cargo modificada correctamente" });
    } catch (error) {
        console.log(`Este es el error: ${error}`);
        // Maneja el error y devuelve una respuesta apropiada
        return res.status(500).json({ msg: "Error al modificar el cargo  en la base de datos" });
    }
};
export const DeleteCargo = async (req, res) => {
    let cargoID = req.body.id;
    if (!cargoID) {
        cargoID = req.params.id;
    }
    try {
        if (!cargoID || isNaN(cargoID)) {
            // console.log("Si llega aqui")
            return res.status(400).json({ msg: "El ID de cargo no es valido o no existe" })
        }
        const pool = await GetConnection();
        await pool.request().input("Id", sql.TinyInt, cargoID).execute('EliminarCargo')
        return res.status(200).json({ msg: `El cargo con Id ${cargoID} a sido eliminado` })
    } catch (error) {
        console.log(`Este es el error ${error}`)
        return res.status(500).json({ msg: "Error al intentar eliminar el cargo en la base de datos" })
    }
}