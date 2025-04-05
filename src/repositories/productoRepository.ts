// src/repositories/productoRepository.ts
import { Producto } from '../models/producto';

export class ProductoRepository {
  async crear(producto: Partial<Producto>): Promise<Producto> {
    return await Producto.create(producto);
  }

  async obtenerTodos(): Promise<Producto[]> {
    return await Producto.findAll();
  }

  async obtenerPorId(id: number): Promise<Producto | null> {
    return await Producto.findByPk(id);
  }

  async actualizar(id: number, datos: Partial<Producto>): Promise<[number]> {
    return await Producto.update(datos, {
      where: { id }
    });
  }

  async eliminar(id: number): Promise<number> {
    return await Producto.destroy({
      where: { id }
    });
  }
}
