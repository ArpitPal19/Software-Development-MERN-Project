
// import { MongoClient } from "mongodb";
// import { getEmbedding } from "./embedding.js";

// const client = new MongoClient(process.env.MONGODB_URI);

// export async function storeChunks(chunks, filename) {
//   await client.connect();
//   const db = client.db("knowledge_db");
//   const col = db.collection("documents");

//   for (let i = 0; i < chunks.length; i++) {
//     const text = chunks[i];
//     const embedding = await getEmbedding(text); // generate vector
//     await col.insertOne({
//       text,
//       embedding,
//       metadata: { filename, chunkIndex: i }
//     });
//   }

//   await client.close();
// }



// scripts/storeVectors.js
// import { generateEmbedding } from "./embedding.js"; // ✅ must match named export

// import { getDb } from "./db.js";


// export async function storeChunks(chunks, filename) {
//   const db = getDb();
//   const collection = db.collection("documents");

//   for (let chunk of chunks) {
//     const embedding = await generateEmbedding(chunk);

//     await collection.insertOne({
//       filename,
//       text: chunk,
//       embedding,
//       createdAt: new Date()
//     });
//   }
// }



// import Chunk from "../models/Chunk.js";
// import { tokenize } from "../utils/tokenizer.js";

// export async function storeChunks(chunks, fileId) {
//   for (const chunkText of chunks) {
//     await Chunk.create({
//       fileId,
//       content: chunkText,
//       tokens: tokenize(chunkText),
//       length: chunkText.length
//     });
//   }
// }



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

