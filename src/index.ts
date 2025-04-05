// src/index.ts
import express from 'express';
import cors from 'cors';
import { sequelize } from './config/config';
import productoRoutes from './routes/productoRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', productoRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error de conexión:', err);
  });
