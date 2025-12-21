
// import mongoose from "mongoose";

// const chunkSchema = new mongoose.Schema({
//   fileId: String,
//   content: String,
//   tokens: [String],
//   length: Number
// });

// export default mongoose.model("Chunk", chunkSchema);



import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema(
  {
    fileId: String,
    content: String,
    tokens: [String],
    length: Number,
    embedding: {
      type: [Number],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model("Chunk", chunkSchema);
