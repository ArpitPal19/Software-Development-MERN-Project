// import express from "express";
// import { connectDB } from "./scripts/db.js";
// import uploadRouter from "./routes/upload.js";

// console.log("🔑 OPENAI KEY EXISTS:", !!process.env.OPENAI_API_KEY);
// console.log("🗄️  MONGO URI EXISTS:", !!process.env.MONGODB_URI);

// const app = express();
// app.use(express.json());
// app.use("/api/upload", uploadRouter);

// async function startServer() {
//   await connectDB();

//   const PORT = process.env.PORT || 4000;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server started on port ${PORT}`);
//   });
// }

// startServer();



// import express from "express";
// import uploadRouter from "./routes/upload.js";
// import { connectDB } from "./scripts/db.js";

// const app = express();
// app.use(express.json());

// app.use("/api/upload", uploadRouter);

// await connectDB();

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server started on port ${PORT}`);
// });



// import "./config/env.js"; // 👈 MUST BE FIRST

// import express from "express";
// import uploadRouter from "./routes/upload.js";
// import { connectDB } from "./scripts/db.js";
// import searchRouter from "./routes/search.js";

// const app = express();
// app.use(express.json());

// app.use("/api/upload", uploadRouter);
// app.use("/api/search", searchRouter);

// await connectDB();

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server started on port ${PORT}`);
// });



// import "./config/env.js"; // 👈 MUST BE FIRST

// import express from "express";
// import { connectDB } from "./scripts/db.js";
// import uploadRouter from "./routes/upload.js";
// import searchRouter from "./routes/search.js";

// const app = express();
// app.use(express.json());

// // 🔥 CONNECT TO DB FIRST
// await connectDB();

// // ✅ THEN REGISTER ROUTES
// app.use("/api/upload", uploadRouter);
// app.use("/api/search", searchRouter);

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server started on port ${PORT}`);
// });




import "./config/env.js";

import express from "express";
import { connectDB } from "./scripts/db.js";
import uploadRouter from "./routes/upload.js";
import searchRouter from "./routes/search.js";

const app = express();
app.use(express.json());

await connectDB(); // 🔥 MUST BE BEFORE ROUTES

app.use("/api/upload", uploadRouter);
app.use("/api/search", searchRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
