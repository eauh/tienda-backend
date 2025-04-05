import { Sequelize } from 'sequelize-typescript'
import { Producto } from '../models/producto'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '192.168.88.135',
  port: 5432,
  username: 'postgres',
  password: 'Guate2025++',
  database: 'tienda',
  models: [Producto],
  logging: false,
});
