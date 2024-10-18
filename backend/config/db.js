import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        console.error("Add Mongo URI to .env!")
        console.error("(Add JWT secret too)")
        process.exit(1);
    }
}