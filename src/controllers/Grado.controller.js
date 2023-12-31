// Grado.controller.js
import { GetConnection, sql } from "../database/conection";
import config from '../path/to/config';
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

// Nuevo Grado
export const NewGrado = async (req, res) => {
    try {
        const { nombre } = req.body;
        String.nombre;
        // Validar si 'nombre' es un string no vacío
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            return res.status(400).json({ msg: 'BAD REQUEST. El campo "nombre" es inválido o está vacío.' });
        }


        const pool = await GetConnection();

        // Validar la existencia del procedimiento almacenado
        const existsProcedure = await pool
            .request()
            .input('ProcedureName', sql.VarChar(50), 'SPInsertarGrado')
            .query('SELECT OBJECT_ID(@ProcedureName) AS ProcedureExists');

        if (!existsProcedure.recordset[0].ProcedureExists) {
            return res.status(500).json({ error: 'Error: El procedimiento almacenado no existe.' });
        }

        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(50), nombre)
            .execute('SPInsertarGrado');

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
