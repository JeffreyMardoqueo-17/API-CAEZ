
import { GetConnection } from "../database/conection";

export const GetDocumentos = async (req, res) => {

    //consulta a la base de datos 
    try {
        const pool = await GetConnection();
        const result = await pool.request().query('SELECT * FROM TipoDocumento') //consulta
        console.log(result)//muestro por cosola el result
        res.json(result.recordset)
    } catch (error) {
        console.log(`Hay errores y es:${error}`);
    }
};
//No se que es lo que pasa  
export const CreateNewDocumento = async (req, res) => {

    try {
        const { name, description } = await req.body //req resive o muestras cosas
        if (name == null || description == null) {
            return res.status(400).json({ msg: 'Heey papu por favor llena todos los campos' })
        } else if (name == null) {
            return res.status(400).json()
        }
        res.json(`New Document ${name} ${description}`)
    } catch (error) {
        console.log(`Los errores estan en: ${error}`)
    }
}