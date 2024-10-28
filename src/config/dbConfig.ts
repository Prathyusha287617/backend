<<<<<<< HEAD
// src/config/dbconfig.ts
=======
>>>>>>> 214bf00c590712e3292124e677ed3aef0c949560
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
<<<<<<< HEAD
        await mongoose.connect(process.env.MONGODB_URI || '');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
=======
        await mongoose.connect(process.env.MONGO_URI || '');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
>>>>>>> 214bf00c590712e3292124e677ed3aef0c949560
    }
};

export default connectDB;
