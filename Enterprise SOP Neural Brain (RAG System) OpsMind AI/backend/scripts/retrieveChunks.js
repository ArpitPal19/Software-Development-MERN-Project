
import Chunk from "../models/Chunk.js";
import { tokenize } from "../utils/tokenizer.js";

export async function retrieveChunks(query, limit = 3) {
  const queryTokens = tokenize(query);

  const chunks = await Chunk.find({});

  const scored = chunks.map(chunk => {
    const matches = chunk.tokens.filter(t =>
      queryTokens.includes(t)
    ).length;

    return {
      chunk,
      score: matches
    };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.chunk);
}
