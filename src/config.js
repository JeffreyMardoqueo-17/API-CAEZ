import {config} from 'dotenv' //esta funcoin config lo que hara es leer las variables de entorno que esten definidas

config();
//va a guardar variables
export default{
    port: process.env.PORT || 4000 //si en las variables de entorno existe el PORT utilizalo sino usa el 4000
}