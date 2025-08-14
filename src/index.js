import dotenv from "dotenv";
import mongoosef from "mongoose";
import connectToDatabase from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./env"
});


connectToDatabase()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error("Database connection failed:", err);  
    process.exit(1); // Exit the process if the database connection fails
});





















/* * This file is the entry point of the application.
 * It connects to the MongoDB database and starts the Express server.
import express from "express";
const app = express();
( async () =>{
    try{
        await mongoosef.connect(`${process.env.MONGO_URI}/``${DBNAME}`);
        app.on('error', (err) => {
            console.error("Server error:", err);  
            throw err; // Re-throw the error to stop the server  
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    }
    catch(err){
        console.error("Database connection failed:", err);
        throw err; // Re-throw the error to stop the server
    }
})()
    */