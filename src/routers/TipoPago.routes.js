import {Route, Router} from "express"; //router permitira crear rutas URLS
import {GetTipoPago, POSTNewTypePayment} from '../controllers/TipoPago.controller'

const router = Router();
//creamos la ruta para traer
router.get('/TipePago', GetTipoPago) //la ruta mas la funcion  asincrona
router.get(`/TypepaymentCreate`,POSTNewTypePayment )

export default router;//exportamos el router