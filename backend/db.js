import mongoose from 'mongoose'
import 'dotenv/config'

const mongoURI = process.env.MONGO_URI; 
const connectToMongo = async () => {
    await mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Failed to connect to MongoDB", error);
        });
};

export default connectToMongo;

