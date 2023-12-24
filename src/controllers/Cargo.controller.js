import { GetConnection } from "../database/conection";
import sql from 'mssql'

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

///metodo post, para crear un nuevo cargo
export const PostCargo = async (req, res) => {

    //constantes, que se pasaran del body
    const { cargo } = req.body;
    try {
        if (cargo == null) {
            return res.status(400).json({ msg: "no funciona, por avor llene todos los campos" })
        }
        const pool = await GetConnection();
        await pool.request().input("cargo", sql.VarChar, 'PRUEBA').query('INSERT INTO TipoDocumento(cargo) VALUES (@Nombre)')
    } catch (error) {
        console.log(`Èste es el error ${error}`)
    }
}