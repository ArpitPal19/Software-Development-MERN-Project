import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema({
  fileId: String,
  content: String,
  tokens: [String],
  length: Number
});

chunkSchema.index({ content: "text" });

export default mongoose.model("Chunk", chunkSchema);

