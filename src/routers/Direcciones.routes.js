import { Router } from "express";
import {GetDirecciones, PostDireccion} from '../controllers/Direccion.controller'

const router = Router();
router.get(`/Direcciones`, GetDirecciones);
router.post(`/Direcciones`, PostDireccion);

export default router;