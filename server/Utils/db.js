const mongoose = require("mongoose");

const URI = "mongodb+srv://Ankit:190120107005@cluster0.c7re1su.mongodb.net/AnkitDB?retryWrites=true&w=majority&appName=Cluster0";


const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successfull!");
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}


module.exports = connectDb;