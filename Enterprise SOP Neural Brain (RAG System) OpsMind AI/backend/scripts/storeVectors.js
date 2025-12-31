
import Chunk from "../models/Chunk.js";
export async function storeChunks(chunks, fileId) {
  const docs = chunks.map((chunk) => ({
    fileId,
    content: chunk,
    tokens: chunk.split(" "),
    length: chunk.length
  }));

  await Chunk.insertMany(docs);
}

