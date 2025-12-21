// import OpenAI from "openai";

// if (!process.env.OPENAI_API_KEY) {
//   throw new Error("❌ OPENAI_API_KEY is missing");
// }

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function generateEmbedding(text) {
//   const res = await client.embeddings.create({
//     model: "text-embedding-3-small",
//     input: text,
//   });
//   return res.data[0].embedding;
// }


import "../config/env.js"; // 👈 REQUIRED

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateEmbedding(text) {
  const response = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text
  });

  return response.data[0].embedding;
}




