// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const URI = "mongodb+srv://ankitpundir1230:a5zunQgpSom4S0Sz@cluster0.amkxiv6.mongodb.net/Todo_app?retryWrites=true&w=majority&appName=Cluster0";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // mongoose.connect(URI);
// const connectDb = async () => {
//     try {
//         await mongoose.connect(URI);
//         console.log("connection successfull!");
//     } catch (error) {
//         console.error(error);
//         process.exit(0);
//     }
// }

// connectDb().then(() => {
//     app.listen(3000, () => {
//         console.log("Server is running on 3000")
//     })

// })



const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://ankitpundir1230:a5zunQgpSom4S0Sz@cluster0.amkxiv6.mongodb.net/Todo_app?retryWrites=true&w=majority&appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Specify the database and collection you want to use
    // const database = client.db('mern_admin');
    // const collection = database.collection('test');

    // Insert a single document
    // const doc = { name: "John Doe", email: "john.doe@example.com" };
    // const result = await collection.insertOne(doc);

    // console.log(`New document inserted with _id: ${result.insertedId}`);
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the connection function
run().catch(console.dir);
