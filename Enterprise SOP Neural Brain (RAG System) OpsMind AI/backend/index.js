
import "./config/env.js";

import express from "express";
import { connectDB } from "./scripts/db.js";
import uploadRouter from "./routes/upload.js";
import searchRouter from "./routes/search.js";

const app = express();
app.use(express.json());

await connectDB();

app.use("/api/upload", uploadRouter);
app.use("/api/search", searchRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
