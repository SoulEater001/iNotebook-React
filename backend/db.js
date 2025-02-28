import mongoose from 'mongoose'
import 'dotenv/config'

// const mongoURI = "mongodb://127.0.0.1:27017/iNotebook?directConnection=true"; 
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

