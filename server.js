import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/db/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";
import messageRoutes from "./src/routes/messageRoutes.js";
import { v2 as cloudinary } from "cloudinary";
import { app, server } from "./src/socket/socket.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

//cloudinary.config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDDINARY_API_KEY,
  api_secret: process.env.CLOUDDINARY_API_SECRET,
});

//Middlewares
app.use(express.json({ limit: "50mb" })); //To parse JSON data in the req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);

server.listen(5000, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
