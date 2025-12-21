// import fs from "fs";
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);
// const pdfParse = require("pdf-parse");

// export async function parsePdf(filePath) {
//   const buffer = fs.readFileSync(filePath);
//   const data = await pdfParse(buffer);
//   return data.text;
// }


// import fs from "fs";
// import pdfParse from "pdf-parse/lib/pdf-parse.js";

// export async function parsePDF(filePath) {
//   const dataBuffer = fs.readFileSync(filePath);
//   const data = await pdfParse(dataBuffer);
//   return data.text;
// }



import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export async function parsePDF(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));

  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;

  let fullText = "";

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();

    const pageText = content.items.map(item => item.str).join(" ");
    fullText += pageText + "\n";
  }

  return fullText;
}




