import app from "./app"
let port = 6000;
app.listen(app.get('port'))
console.log("Servidor en el puerto", app.get('port'))