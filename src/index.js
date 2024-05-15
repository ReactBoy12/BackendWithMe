// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config({ path: "./env" });
const app = express();

// require("dotenv").config();f
// import express from "express";
// const app = express();

// function connectDB() {}

// connectDB();
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connection successful");
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed");
  });
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("Error", (error) => {
//       console.log("ERRR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("app is listening on port ", process.env.PORT);
//     });
//   } catch (error) {
//     console.error("ERROR:", error);
//     throw error;
//   }
// })();
