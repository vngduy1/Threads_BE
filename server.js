import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/db/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.listen(5000, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
