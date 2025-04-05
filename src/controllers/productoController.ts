// src/controllers/productoController.ts
import { Request, Response } from 'express';
import { ProductoRepository } from '../repositories/productoRepository';

const repo = new ProductoRepository();

export class ProductoController {
  async crear(req: Request, res: Response) {
    try {
      const producto = await repo.crear(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el producto.' });
    }
  }

  async obtenerTodos(_req: Request, res: Response) {
    try {
      const productos = await repo.obtenerTodos();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos.' });
    }
  }

  async obtenerPorId(req: Request, res: Response) {
    try {
      const id = parseInt(req.query.id as string);
      const producto = await repo.obtenerPorId(id);
      if (producto) {
        res.json(producto);
      } else {
        res.status(404).json({ mensaje: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar el producto.' });
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const actualizado = await repo.actualizar(id, req.body);
      if (actualizado[0] === 1) {
        res.json({ mensaje: 'Producto actualizado correctamente.' });
      } else {
        res.status(404).json({ mensaje: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el producto.' });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const eliminado = await repo.eliminar(id);
      if (eliminado) {
        res.json({ mensaje: 'Producto eliminado.' });
      } else {
        res.status(404).json({ mensaje: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el producto.' });
    }
  }
}
