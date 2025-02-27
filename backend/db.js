import mongoose from 'mongoose'

const connectToMongo = async () => {
    await mongoose.connect(process.env.mongoURI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Failed to connect to MongoDB", error);
        });
};

export default connectToMongo;

