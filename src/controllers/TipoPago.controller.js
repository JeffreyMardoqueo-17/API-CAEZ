
import { GetConnection } from "../database/conection";
import sql from 'mssql';

//metodo para obtener los tipo de pago ==========================================================
export const GetTipoPago = async (req, res) => {
    /*Esto consultaea a la BD tipo: Select * FROM TipoPago */
    try {
        const pool = await GetConnection(); //llamo a lo que importe
        const result = await pool.request().query(`SELECT * FROM TipoPago`) //ESTO ES PARA HACER LA CONSULTA
        console.log(result)//aqui se mostrara el resultado en consola
        res.send(`Si funciona y esta es la respuesta de la consulta: ${result}`)
        res.json(result.recordset)
    } catch (error) {
        console.log(`Valio, si hay errore y es en: ${error}`)
    }
}
//=========================METODO POST =================

export const POSTNewTypePayment = async (req, res) => {
    try {
        /*Recibira los datos que se ´pngan en el body */
        const { name } = req.body; //se obtendra nombre de lo que se obtenga o ponga en el DOM
        !name ? res.status(400).json({ msg: 'Por favor, llena todos los campos requeridos (nombre).' })
            : res.json('todo continuara');

        //continuacmos con la cracion enBD
        const pool = await GetConnection();
        const checkQuery = `SELECT * FROM TipoPago WHERE Nombre = @Nombre`;
        const checkResult = await pool.request().input('Nombre', sql.VarChar(80), name).query(checkQuery);

        if (checkResult.recordset[0].count > 0) {
            return res.status(400).json({ msg: 'El tipo de pago ya existe.' });
        }
        const insertQuery = 'EXEC SPInsertarTipoPago Nombre = @Nombre';
        const insertResult = await pool.request().input('Nombre', sql.VarChar(80), name).query(insertQuery);

        res.json({ msg: 'Nuevo tipo de documento creado con éxito.', result: insertResult.recordset });
    } catch (error) {

    }
}