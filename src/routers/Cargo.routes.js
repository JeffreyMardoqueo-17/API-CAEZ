import { Router } from "express"; //para cerar rutas
import { DeleteCargo, GetCargo, ModificarCargo, PostCargo, } from "../controllers/Cargo.controller";

const router = Router();
router.get(`/Cargo`, GetCargo)//aqui es donde se crea la ruta
router.post(`/Cargo`, PostCargo)
router.put(`/Cargo`, ModificarCargo)
router.delete(`/Cargo`, DeleteCargo)
export default router;