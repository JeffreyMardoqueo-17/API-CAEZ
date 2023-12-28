
import { GetConnection, sql } from "../database/conection";
import { json } from "express";

export const GetGrados = async (req, res)=>{
    try {
        const pool = await GetConnection();
        const result = await pool.request().query('SELECT * FROM Grado')//esta linea de codigo hara una consulta y traera los datos de la tabla Grado
        console.log(result)//mostrare el resultado
        res.send(`Si funciona el de Grados mi rey: ${(result.recordset).json}`);
    } catch (error) {
        console.log(`Esto no sirve has algo bueno: ${error}`)
    }
}

export const NewGrado = async (req, res)=>{
    try {
        const name = req.body;
        if(name == null){
            return res.status(400).json({msg:'BAD REQUEST. por favor llena los datos guevooon'})
        }
        //GET CONNECITON
        const pool = await GetConnection();
        await pool
            .request()
            .input("name", sql.VarChar, name)
            .query("INSERT INTO Grado (name) VALUES (@name)")

        res.json({name})
    } catch (error) {
        res.status(500)
        console.log(`PAPUUU TENEMOS ERRORES, SON ESTOS: ${error}`)
    }
}