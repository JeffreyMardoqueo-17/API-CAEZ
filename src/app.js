import express from "express";
//exportar variable de entorno del puerto
import config from "./config";

const app = express();//lo inicializo 

let port;
//settings
//configurar el puerto
app.set('port', config.port) //si existe la variable port, utilizalo sino utiliza el puerto 3000

export default app;