
import express from "express";
import multer from "multer";
import { parsePDF } from "../scripts/parsePdf.js";
import { chunkText } from "../scripts/splitText.js";
import Chunk from "../models/Chunk.js";
import { tokenize } from "../utils/tokenizer.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/ingest", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { path, originalname } = req.file;

    const text = await parsePDF(path);
    const chunks = chunkText(text);
   for (const chunkText of chunks) {
  await Chunk.create({
    fileId: originalname, 
    content: chunkText,
    tokens: tokenize(chunkText),
    length: chunkText.length
  });
}
    res.json({
      status: "success",
      chunks: chunks.length,
      document: originalname
    });
  } catch (err) {
    console.error("Ingestion error:", err);
    res.status(500).json({ error: "Ingestion failed" });
  }
});

export default router;





