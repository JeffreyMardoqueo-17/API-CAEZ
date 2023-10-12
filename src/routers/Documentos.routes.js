import {Route, Router} from "express"; //router permitira crear rutas URLS
import {GetDocumentos} from '../controllers/Documentos.controller' //tarigo el controlador de Get documentos



const router = Router(); 
//get para obtener
router.get('/Documents', GetDocumentos); 
//get para obtener un producto por ID
router.get('/Documentos', )
//post para crear
router.post('/Documentos', )
//para eliminar
router.delete('/Documentos', )
//pull para actualizar
router.put('/Documentos', )

export default router;//exportamos el router