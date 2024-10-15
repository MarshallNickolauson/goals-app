import express from 'express';
import dotenv from 'dotenv';
import goalRoutes from './routes/goalRoutes.js';

dotenv.config();
const port = process.env.BACKEND_PORT || 5000;

const app = express();

app.use('/api/goals', goalRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
