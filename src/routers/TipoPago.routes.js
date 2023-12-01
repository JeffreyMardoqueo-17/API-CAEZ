import {Route, Router} from "express"; //router permitira crear rutas URLS
import {GetTipoPago} from '../controllers/TipoPago.controller'

const router = Router();
//creamos la ruta para traer
router.get('/TipePago', GetTipoPago) //la ruta mas la funcion  asincrona


export default router;//exportamos el router