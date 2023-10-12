import express from "express";
//exportar variable de entorno del puerto
import config from "./config";
//importamos ruta documentos
import DocumentosRoutes from './routers/Documentos.routes.js'


const app = express();//lo inicializo 

let port;
//settings
//configurar el puerto
app.set('port', config.port) //si existe la variable port, utilizalo sino utiliza el puerto 3000
app.use(DocumentosRoutes) //Aqui le digo : "app usa Documentos ruta"
export default app;
//18:21