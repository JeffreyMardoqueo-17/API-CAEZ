import {Route, Router} from "express"; //router permitira crear rutas URLS
import {GetTipoPago, POSTNewTypePayment} from '../controllers/TipoPago.controller'

const router = Router();
//creamos la ruta para traer
router.get('/TipoPago', GetTipoPago) //la ruta mas la funcion  asincrona
router.get('/TipoPago',POSTNewTypePayment ) //crear un nuevo tipo de pago

export default router;//exportamos el router