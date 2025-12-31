
export function rankChunks(chunks, query) {
  const keywords = query.toLowerCase().split(" ");

  return chunks
    .map(chunk => {
      const score = keywords.reduce((acc, word) => {
        return acc + (chunk.content.toLowerCase().includes(word) ? 1 : 0);
      }, 0);

      return { ...chunk, score };
    })
    .sort((a, b) => b.score - a.score);
}
