// src/models/producto.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'productos',
  timestamps: false
})
export class Producto extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  nombre!: string;

  @Column({
    type: DataType.TEXT
  })
  descripcion!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  precio!: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  stock!: number;

  @Column({
    type: DataType.DATE,
    field: 'fecha_creacion',
    defaultValue: DataType.NOW
  })
  fechaCreacion!: Date;
}
