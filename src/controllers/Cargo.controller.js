import { GetConnection } from "../database/conection";
import sql from 'mssql'

//Metodo get
export const GetCargo = async (req, res)=>{
    try{
        const pool = await GetConnection(); //conection
        const result = await pool.request().query(`SELECT * FROM Cargo`) //comando para traer todo
        console.log(result)
        res.send(`Si funciona mi rey: ${result}`)
        res.send(result.recordset)
    }catch(error){
        console.log(`Valio weeee, si hay errores y es en: ${error}`)
    }
}


///metodo post, para crear un nuevo cargo
export const PostCargo = async (req, res)=>{

    //constantes, que se pasaran del body
    const {cargo} = req.body;
    try {
        if(cargo == null){
            return res.status(400).json({msg: "no funciona, por avor llene todos los campos"})
        }
        const pool = await GetConnection();
        await pool.request().input("cargo", sql.VarChar, 'PRUEBA').query('INSERT INTO TipoDocumento(cargo) VALUES (@Nombre)')
    } catch (error) {
        console.log(`Èste es el error ${error}`)
    }
}