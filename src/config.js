import {config} from 'dotenv' //esta funcoin config lo que hara es leer las variables de entorno que eten definidas

config();
console.log(process.env.hello)
//va a guardar variables
export default{
    port: 4000
}