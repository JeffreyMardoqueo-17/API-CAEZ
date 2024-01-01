import express from "express";
//exportar variable de entorno del puerto
import config from "./config";
//importamos ruta documentos
import DocumentosRoutes from './routers/Documentos.routes.js'
//rutas de Tipo Pagod
import TipoPagoRoutes from './routers/TipoPago.routes'
//Cargo
import CargoRoutes from './routers/Cargo.routes'
//Grados 
import GradoRoutes from './routers/Grado.routes'
//direcciones
import DireccionesRouter from './routers/Direcciones.routes.js'
import { json } from "express";


const app = express();//lo inicializo 
let port;
//settings
//configurar el puerto
app.set('port', config.port) //si existe la variable port, utilizalo sino utiliza el puerto 3000

//middlowers
app.use(express.json())
app.use(express.json())
app.use(express.urlencoded({extends: false})) //esto es para resivir datos de formularios
app.use(DocumentosRoutes, TipoPagoRoutes,CargoRoutes, GradoRoutes, DireccionesRouter) //Aqui le digo : "app usa Documentos ruta"
export default app;


//draw folder structure