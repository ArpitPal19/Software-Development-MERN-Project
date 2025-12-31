
import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("❌ MONGODB_URI missing");
  }

  try {
    await mongoose.connect(uri, {
      dbName: "knowledge_db"
    });

    console.log("📦 MongoDB connected (Mongoose)");
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  }
}
