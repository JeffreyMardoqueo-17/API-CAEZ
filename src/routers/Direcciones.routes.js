import { Router } from "express";
import {DeleteDireccion, GetDirecciones, PostDireccion, UpdateDireccion} from '../controllers/Direccion.controller'

const router = Router();
router.get(`/Direcciones`, GetDirecciones);
router.post(`/Direcciones`, PostDireccion);
router.delete(`/Direcciones`, DeleteDireccion)
router.put(`/Direcciones`, UpdateDireccion);

export default router;