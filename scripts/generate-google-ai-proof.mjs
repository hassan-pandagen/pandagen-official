import { readFile, writeFile, mkdir } from "node:fs/promises";
const proofDir = new URL("../public/proof/", import.meta.url);
const data = JSON.parse(await readFile(new URL("google-ai-impressions.json", proofDir), "utf8"));
const points = data.rows;
const total = points.reduce((sum, row) => sum + row.impressions, 0);
const first = points.slice(0, 28).reduce((sum, row) => sum + row.impressions, 0);
const last = points.slice(-28).reduce((sum, row) => sum + row.impressions, 0);
if (total !== data.totalImpressions || points.length !== 92) throw new Error("Unexpected source series");
const x0 = 140, x1 = 1800, y0 = 350, y1 = 720, max = 400;
const line = points.map((row, i) => [(x0 + i / (points.length - 1) * (x1 - x0)).toFixed(2), (y1 - row.impressions / max * (y1 - y0)).toFixed(2)].join(",")).join(" ");
const ticks = [0,100,200,300,400].map(value => {
  const y = y1 - value / max * (y1-y0);
  return '<line x1="140" y1="'+y+'" x2="1800" y2="'+y+'" stroke="#1c1917" stroke-opacity=".13"/><text x="110" y="'+(y+12)+'" text-anchor="end" font-size="34">'+value+'</text>';
}).join("");
const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1912" height="914" viewBox="0 0 1912 914" role="img" aria-labelledby="title desc">'+
  '<title id="title">PandaCodeGen Google Generative AI impressions: June 12 to September 11, 2026</title>'+
  '<desc id="desc">All 92 daily readings, including dips. Total '+total+' impressions. First 28 days '+first+'; last 28 days '+last+'. Recreated from a Search Console export, not a Google interface screenshot. Impressions do not measure visits, sales or ChatGPT citations.</desc>'+
  '<rect width="1912" height="914" fill="#f5f4f0"/><g font-family="Arial,sans-serif" fill="#1c1917">'+
  '<text x="90" y="85" font-size="30" letter-spacing="3" fill="#7a2e0e">PANDACODEGEN.COM / GOOGLE SEARCH CONSOLE</text>'+
  '<text x="90" y="175" font-size="64" font-weight="700">Generative AI impressions</text>'+
  '<text x="90" y="238" font-size="36" fill="#5e5b55">9,843 total · June 12–September 11, 2026</text>'+
  '<text x="90" y="303" font-size="30" fill="#5e5b55">DAILY IMPRESSIONS</text>'+ticks+
  '<polygon points="140,720 '+line+' 1800,720" fill="#ad3d0b" fill-opacity=".08"/>'+
  '<polyline points="'+line+'" fill="none" stroke="#ad3d0b" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>'+
  '<text x="140" y="779" font-size="34">Jun 12</text><text x="967" y="779" text-anchor="middle" font-size="34">Jul 28</text><text x="1800" y="779" text-anchor="end" font-size="34">Sep 11</text>'+
  '<text x="90" y="852" font-size="30" fill="#5e5b55">RECREATED FROM EXPORT / FULL DAILY SERIES / IMPRESSIONS ARE NOT VISITS OR SALES</text></g></svg>';
await mkdir(proofDir, { recursive: true });
await writeFile(new URL("google-ai-impressions.svg", proofDir), svg);
await writeFile(new URL("google-ai-impressions.csv", proofDir), "Date,Impressions\n" + points.map(row => row.date+","+row.impressions).join("\n")+"\n");
console.log("Generated full-period Google AI visibility chart and CSV.");
