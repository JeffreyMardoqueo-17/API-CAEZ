import { Router } from "express";//con esto crearemos las rutas
import { GetGrados, NewGrado} from "../controllers/Grado.controller";

const router = Router();
router.get(`/Grado`, GetGrados) //esta es la ruta: como sera la direccion mas que metodo es
router.post('/Grado', NewGrado)

export default router;

