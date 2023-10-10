import app from "./app"
import './database/conection'

let port;
app.listen(app.get('port'))
console.log("Servidor en el puerto", app.get('port'))