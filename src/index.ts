import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
<<<<<<< HEAD
import connectDB from './config/dbConfig' // Adjust the path as needed
import customerRoutes from './routes/customerRoutes';
import cors from 'cors';
 
dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 5005;
 
// Middleware
app.use(cors());
app.use(express.json());
 
// Connect to MongoDB
connectDB();

app.use('/api/customers', customerRoutes);

app.listen(PORT, () => {
    console.log(`Customer Service is running on http://localhost:${PORT}`);
});
 
=======
import connectDB from './config/dbConfig'
import branchRoutes from './routes/branchRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse JSON request bodies

// Use branch routes
app.use('/api/branches', branchRoutes);

app.listen(PORT, () => {
    console.log(`Branch Service is running on http://localhost:${PORT}`);
});
>>>>>>> 214bf00c590712e3292124e677ed3aef0c949560
