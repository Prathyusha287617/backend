import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
 