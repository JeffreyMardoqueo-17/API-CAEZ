
import { GetConnection } from "../database/conection";

export const GetDocumentos = async (req, res) => {

    //consulta a la base de datos 
    try {
        const pool = await GetConnection();
        const result = await pool.request().query('SELECT * FROM TipoDocumento')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        console.log(`Hay errores y es:${error}`);
    }
};
//No se que es lo que pasa  
export const CreateNewDocumento = async (req, res)=>{

    const {name, description} = await req.body
    console.log(name, description)
    res.json('new document')
}