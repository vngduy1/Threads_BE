import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect successfully!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

export default connect;
