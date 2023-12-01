import {Route, Router} from "express"; //router permitira crear rutas URLS
import {GetTipoPago, POSTNewTypePayment} from '../controllers/TipoPago.controller'

const router = Router();
//creamos la ruta para traer
router.get('/TipoPago', GetTipoPago) //la ruta mas la funcion  asincrona
router.get('/TipoPago',POSTNewTypePayment )

export default router;//exportamos el router