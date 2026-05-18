import mongoose from "mongoose";

const uri = process.env.MONGODB_URI!;

export async function connectDB() {
  try {
    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Error:", error);
  }
}