// src/routes/productoRoutes.ts
import { Router } from 'express';
import { ProductoController } from '../controllers/productoController';

const router = Router();
const controller = new ProductoController();

router.post('/productos', controller.crear);
router.get('/productos', controller.obtenerTodos);
router.get('/producto', controller.obtenerPorId); // <- usa query param ?id=1
router.put('/producto/:id', controller.actualizar); // <- path param
router.delete('/producto/:id', controller.eliminar);

export default router;
