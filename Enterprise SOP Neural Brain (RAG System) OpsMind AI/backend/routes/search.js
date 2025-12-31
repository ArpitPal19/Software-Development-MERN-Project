
import express from "express";
import { retrieveChunks } from "../services/retrieval.service.js";
import { rankChunks } from "../services/ranking.service.js";
import { buildAnswer } from "../services/answer.service.js";
import { cleanText } from "../utils/cleanText.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }
    const chunks = await retrieveChunks(query);
    const ranked = rankChunks(chunks, query);

    if (!ranked.length) {
      return res.json({
        query,
        answer: "No relevant information found.",
        sources: []
      });
    }

    const rawAnswer = buildAnswer(ranked);

    const cleanAnswer = cleanText(rawAnswer);

    const cleanedSources = ranked.slice(0, 3).map(chunk => ({
      ...chunk,
      content: cleanText(chunk.content)
    }));

    res.json({
      query,
      answer: cleanAnswer,
      sources: cleanedSources
    });

  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;
