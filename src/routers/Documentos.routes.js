import {Route, Router} from "express"; //router permitira crear rutas URLS
const router = Router();

router.get('/Documentos', (req, res)=> res.send('Estamos en documentos'))

export default router;//exportamos el router