import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //for accepting the json file
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //for managing the data coming from the url;
app.use(express.static("public")); //for keeping the pdf or images
app.use(express.cookieParser());

export { app };
