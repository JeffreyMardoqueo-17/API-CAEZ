import { Router } from "express"; //para cerar rutas
import { GetCargo, } from "../controllers/Cargo.controller";

const router = Router();
router.get(`/Cargo`, GetCargo)//aqui es donde se crea la ruta

export default router;