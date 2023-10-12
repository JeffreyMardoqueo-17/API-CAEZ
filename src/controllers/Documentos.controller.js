//Exporto la coneccion 
import { GetConnection } from "../database/conection";


export const GetDocumentos = async (req, res) => {

    //consulta a la base de datos 
    const pool = await GetConnection();
    const result = pool.request().query('SELECT * FROM TipoDocumento')
    console.log(result)
    res.json('Documentos')
};