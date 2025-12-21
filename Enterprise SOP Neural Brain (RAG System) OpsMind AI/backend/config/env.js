
import dotenv from "dotenv";
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  throw new Error("❌ OPENAI_API_KEY missing");
}

if (!process.env.MONGODB_URI) {
  throw new Error("❌ MONGODB_URI missing");
}

export {};
