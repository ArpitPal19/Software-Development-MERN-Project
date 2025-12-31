
import { cleanText } from "../utils/cleanText.js";

export function buildAnswer(chunks) {
  if (!chunks || chunks.length === 0) return "No relevant information found.";

  const rawText = chunks
    .slice(0, 1)
    .map(chunk => chunk.content)
    .join(" ");
  const cleaned = cleanText(rawText);

  return cleaned;
}


//test changes