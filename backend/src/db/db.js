import mongoose from "mongoose";
import { DB_NAME, MONGODB_URI } from "../constents.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connected failed`);
    console.error(error)
    process.exit(1);
  }
};

export default connectDB;
