import {Route, Router} from "express"; //router permitira crear rutas URLS
import { DeleteDocumento, GetDocumentos, PostDocumentos, PutDocumento } from '../controllers/Documentos.controller' //tarigo el controlador de Get documentos



const router = Router(); 
//get para obtener
router.get('/Documentos', GetDocumentos); 
//get para obtener un producto por ID
router.post('/Documentos',PostDocumentos )
//para eliminar
router.delete('/Documentos',DeleteDocumento )
//pull para actualizar
router.put('/Documentos', PutDocumento)

export default router;//exportamos el router