// import { MongoClient } from "mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error("❌ MONGODB_URI is missing in .env");
// }

// const client = new MongoClient(process.env.MONGODB_URI);

// export async function connectDB() {
//   await client.connect();
//   console.log("📦 Connected to MongoDB Atlas!");
//   return client.db("knowledge_db");
// }

// export function getDb() {
//   return client.db("knowledge_db");
// }


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
