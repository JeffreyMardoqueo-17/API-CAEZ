import { Router } from "express";
import { DeleteDireccion, GetDireccionPorId, GetDirecciones, PostDireccion, UpdateDireccion } from '../controllers/Direccion.controller'

const router = Router();
router.get(`/Direcciones`, GetDirecciones);
router.post(`/Direcciones`, PostDireccion);
router.delete(`/Direcciones`, DeleteDireccion)
router.put(`/Direcciones`, UpdateDireccion);
router.post('/direcciones/por-id', GetDireccionPorId); // Cambié la ruta y el método a POST, ya que generalmente las solicitudes de búsqueda no deben modificar datos

export default router;