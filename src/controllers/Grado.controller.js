import { GetConnection, sql } from "../database/conection";

export const GetGrados = async (req, res) => {
    try {
        const pool = await GetConnection();
        const result = await pool.request().query('SELECT * FROM Grado');
        console.log(result.recordset);
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error(`Error al obtener grados: ${error}`);
        res.status(500).json({ error: 'Error al obtener la lista de grados' });
    }
};

//NEW GRADO 
export const NewGrado = async (req, res) => {
    try {
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({ msg: 'BAD REQUEST. Por favor llena los datos correctamente' });
        }

        const pool = await GetConnection();
        await pool
            .request()
            .input("Nombre", sql.VarChar, nombre)
            .execute("SPInsertarGrado");

        res.status(201).json({ message: 'Nuevo grado agregado correctamente' });
    } catch (error) {
        console.error(`Error al agregar nuevo grado: ${error.message}`);
        res.status(500).json({ error: 'Error al insertar el registro en la base de datos' });
    }
};
