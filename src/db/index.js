import mongoose from 'mongoose';
import { DBNAME } from '../constants.js';

const connectToDatabase = async () => {
    try {
        const connectionInstancce = await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`)
        console.log(`Connected to MongoDB database1 HOST: ${connectionInstancce.connection.host}`);
    }catch(error){
        console.log("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
}
export default connectToDatabase;