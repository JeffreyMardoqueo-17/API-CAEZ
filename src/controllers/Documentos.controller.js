
import { GetConnection } from "../database/conection";
import sql from 'mssql';
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
export const CreateNewDocumento = async (req, res) => {
    try {
        const { name } = req.body; //esto es para recirbir ddel DOM

        if (!name) {
            return res.status(400).json({ msg: 'Por favor, llena todos los campos requeridos (nombre).'});
        }

        const pool = await GetConnection();
        // Define los parámetros para el SP
        const request = new sql.Request();
        const result = await pool.request.input('Nombre', sql.VarChar(80), name);
        // Ejecuta el SP
        await request.execute('SPInsertarTipoDoc');
        res.send('todo bien, resive esto, esto es el metodo Get y esta GOOOD ¡Buena we!')
        res.json(result.recordset)
        console.log(result)
        res.status(201).json({ msg: 'Nuevo tipo de documento creado con éxito.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'Se produjo un error al procesar la solicitud' });
    }
}
//metodo de modificar
//metodo de eliminar