
import { GetConnection } from "../database/conection";
import sql from 'mssql';

//==================================Obtener documento=========

export const GetDocumentos = async (req, res) => {
    //consulta a la base de datos 
    try {
        const pool = await GetConnection();
        const result = await pool.request().query('SELECT * FROM TipoDocumento') //consulta
        console.log(result)//muestro por cosola el resultado
        res.send('todo bien, resive esto, esto es el metodo Get y esta GOOOD ¡Buena we!')
        res.json(result.recordset)
        // console.log("hola como andas")
    } catch (error) {
        console.log(`Hay errores y es:${error}`);
    }
};
//=================================METODO PARA CREAR UN DOCUMENTO====================
export const CreateNewDocumento = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ msg: 'Por favor, llena todos los campos requeridos (nombre).' });
        }

        const pool = await GetConnection();
        const requestCheck = new sql.Request();
        const checkQuery = `SELECT COUNT(*) AS count FROM TuTabla WHERE Nombre = @Nombre`; // Replace 'TuTabla' with your actual table name

        const checkResult = await requestCheck.input('Nombre', sql.VarChar(80), name).query(checkQuery);

        if (checkResult.recordset[0].count > 0) {
            return res.status(400).json({ msg: 'El tipo de documento ya existe.' });
        }

        const request = new sql.Request();
        const result = await request.input('Nombre', sql.VarChar(80), name).execute('SPInsertarTipoDoc');

        res.json({ msg: 'Nuevo tipo de documento creado con éxito.', result: result.recordset });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'Se produjo un error al procesar la solicitud' });
    }
};

//metodo de modificar
//metodo de eliminar