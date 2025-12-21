
// import express from "express";
// import { retrieveChunks } from "../scripts/retrieveChunks.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   const { query } = req.body;

//   if (!query) {
//     return res.status(400).json({ error: "Query is required" });
//   }

//   const chunks = await retrieveChunks(query);

//   res.json({
//     query,
//     context: chunks
//   });
// });

// export default router;




import express from "express";
import { retrieveChunks } from "../scripts/retrieveChunks.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const results = await retrieveChunks(query);

    res.json({
      query,
      results
    });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;

