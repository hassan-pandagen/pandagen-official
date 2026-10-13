// Write aspect-appropriate .srt files from a film's TIMELINE captions.
// node tools/srt.mjs films/<film> out/<film>
// Line length per aspect: 16:9 42 chars, 1:1 34, 9:16 28; at most two lines, split near the middle.
import { readFileSync, writeFileSync } from "node:fs";
const [film, out] = process.argv.slice(2);
const T = new Function(`${readFileSync(`${film}/timeline.js`, "utf8")}; return TIMELINE;`)();
const ts = (s) => { const ms = Math.round(s * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, sec = Math.floor(ms / 1000) % 60; return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")},${String(ms % 1000).padStart(3, "0")}`; };
function wrap(text, max) {
  if (text.length <= max) return [text];
  const words = text.split(" ");
  let best = null;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" "), b = words.slice(i).join(" ");
    const worst = Math.max(a.length, b.length);
    if (!best || worst < best.worst) best = { lines: [a, b], worst };
  }
  return best.lines;
}
for (const [name, max] of [["captions_16x9.srt", 42], ["captions_1x1.srt", 34], ["captions_9x16.srt", 28]]) {
  const body = T.captions.map((c, i) => `${i + 1}\n${ts(c.t0)} --> ${ts(c.t1)}\n${wrap(c.text, max).join("\n")}\n`).join("\n");
  writeFileSync(`${out}/${name}`, body);
  console.log("wrote", `${out}/${name}`);
}
