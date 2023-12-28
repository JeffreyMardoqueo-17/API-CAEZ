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

        // Validar si 'nombre' es un string no vacío
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            return res.status(400).json({ msg: 'BAD REQUEST. El campo "nombre" es inválido o está vacío.' });
        }

        const pool = await GetConnection();
        const result = await pool
            .request()
            .input("Nombre", sql.VarChar(50), nombre)
            .execute("SPInsertarGrado");

        // Verificar si se afectaron filas en la inserción
        if (result.rowsAffected && result.rowsAffected[0] > 0) {
            res.status(201).json({ message: 'Nuevo grado agregado correctamente' });
        } else {
            res.status(500).json({ error: 'Error al insertar el registro en la base de datos' });
        }
    } catch (error) {
        console.error(`Error al agregar nuevo grado: ${error.message}`);
        res.status(500).json({ error: 'Error al insertar el registro en la base de datos' });
    }
};