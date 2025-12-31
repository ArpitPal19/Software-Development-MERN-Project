
import Chunk from "../models/Chunk.js";

export async function retrieveChunks(query, limit = 5) {
  return await Chunk.find({
    $text: { $search: query }
  })
    .limit(limit)
    .lean();
}
