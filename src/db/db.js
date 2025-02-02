import { connect } from "mongoose";
import { MONGODB_URI } from "../config.js";



export const connectDb = async () => {
    try {
        await connect(MONGODB_URI);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
        
    }
}