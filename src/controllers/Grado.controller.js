import { GetConnection, sql } from "../database/conection";

// Obtener la lista de grados
export const GetGrados = async (req, res) => {
    try {
        const pool = await GetConnection();
        // Realizar la consulta SQL
        const result = await pool.request().query('SELECT * FROM Grado');
        // Almacenar los resultados en una variable para mayor claridad
        const grados = result.recordset;
        console.log(grados);
        // Devolver la lista de grados como respuesta
        res.status(200).json(grados);
    } catch (error) {
        // Manejar cualquier error durante la obtención de grados
        console.error(`Error al obtener grados: ${error.message}`);
        res.status(500).json({ error: 'Error al obtener la lista de grados' });
    }
};

// Agregar un nuevo grado
export const NewGrado = async (req, res) => {
    try {
        const { nombre } = req.body;

        // Verificar si se proporcionó el nombre en la solicitud
        if (!nombre) {
            return res.status(400).json({ msg: 'BAD REQUEST. Por favor llena los datos correctamente' });
        }

        const pool = await GetConnection();

        // Ejecutar el procedimiento almacenado para insertar un nuevo grado
        await pool.request()
            .input("Nombre", sql.VarChar, nombre)
            .execute("SPInsertarGrado");

        // Indicar que el nuevo grado se agregó correctamente
        res.status(201).json({ message: 'Nuevo grado agregado correctamente' });
    } catch (error) {
        // Manejar cualquier error durante la inserción del nuevo grado
        console.error(`Error al agregar nuevo grado: ${error.message}`);
        res.status(500).json({ error: 'Error al insertar el registro en la base de datos' });
    }
};
