import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
