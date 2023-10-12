import app from "./app"
import './database/conection'
import sql from 'mssql'


let port;
app.listen(app.get('port'))
console.log("Servidor en el puerto", app.get('port'))