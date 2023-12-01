
import { GetConnection } from "../database/conection";
import sql from 'mssql';

//metodo para obtener los tipo de pago ==========================================================
export const GetTipoPago = async (req, res) =>{
    /*Esto consultaea a la BD tipo: Select * FROM TipoPago */
    try{
        const pool = await GetConnection(); //llamo a lo que importe
        const result = await pool.request().query(`SELECT * FROM TipoPago`) //ESTO ES PARA HACER LA CONSULTA
        console.log(result)//aqui se mostrara el resultado en consola
        res.send(`Si funciona y esta es la respuesta de la consulta: ${result}`)
        res.json(result.recordset)
    } catch (error){
        console.log(`Valio, si hay errore y es en: ${error}`)
    }
}
//=========================METODO POST =================

export const CreateNewTypePayment = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}