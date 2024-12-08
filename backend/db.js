const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iNotebook?directConnection=true";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Failed to connect to MongoDB", error);
        });
};

module.exports = connectToMongo;
