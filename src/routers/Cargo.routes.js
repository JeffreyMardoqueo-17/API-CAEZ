import { Router } from "express"; //para cerar rutas
import { GetCargo, ModificarCargo, PostCargo, } from "../controllers/Cargo.controller";

const router = Router();
router.get(`/Cargo`, GetCargo)//aqui es donde se crea la ruta
router.post(`/Cargo`, PostCargo)
router.put(`/Cargo`, ModificarCargo)
export default router;