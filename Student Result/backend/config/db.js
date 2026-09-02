import mongoose from "mongoose";
import { MONGO_URI } from "../util/env.js";
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);  
    }
}
export default connectDB;