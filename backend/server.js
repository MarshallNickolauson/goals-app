import path from 'path';
import { fileURLToPath } from 'url';
import colors from 'colors';
import express from 'express';
import goalRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.BACKEND_PORT || 5000;

connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'development') {
    app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set NODE_ENV to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`.cyan.underline));
