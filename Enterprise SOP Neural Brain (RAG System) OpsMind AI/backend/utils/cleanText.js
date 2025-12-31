
export function cleanText(text) {
  if (!text) return "";

  let t = text;
  t = t.replace(/intelleqacademy(\.com)?/gi, "");
  t = t.replace(/confidential/gi, "");
  t = t.replace(/system verified/gi, "");
  t = t.replace(/I\s*S\s*O\s*9\s*0\s*0\s*1\s*:\s*2\s*0\s*1\s*5/gi, "ISO 9001:2015");
  t = t.replace(/ISO\s*9\s*0\s*0\s*1/gi, "ISO 9001");
  t = t.replace(/\b(?:[A-Z]\s+){2,}[A-Z]+\b/g, m =>
    m.replace(/\s+/g, "")
  );
  t = t.replace(/QAQ\s*u\s*ali\s*ty/gi, "Quality");
  t = t.replace(/Q\s*A\s*t\s*m/gi, "QA");
  t = t.replace(/A\s*s\s*s\s*u\s*r\s*e\s*d/gi, "Assured");
  t = t.replace(/\b([A-Z])\b/g, "");
  t = t.replace(/([a-z])([A-Z])/g, "$1 $2");
  const seen = new Set();
  t = t
    .split(". ")
    .filter(s => {
      if (seen.has(s)) return false;
      seen.add(s);
      return true;
    })
    .join(". ");

  t = t.replace(/\s+/g, " ").trim();

  return t;
}
