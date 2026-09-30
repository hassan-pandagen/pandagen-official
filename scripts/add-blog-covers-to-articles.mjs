import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await readFile(path.join(root, "public", "blog-covers", "manifest.json"), "utf8"));
let updated = 0;
for (const { id } of manifest) {
  const file = path.join(root, "src", "app", "blog", id, "page.tsx");
  let content = await readFile(file, "utf8");
  if (content.includes("<BlogCoverFigure")) continue;
  const author = content.indexOf("<BlogAuthor");
  if (author < 0) throw new Error(`No BlogAuthor in ${id}`);
  const end = content.indexOf("/>", author);
  if (end < 0) throw new Error(`No self-closing BlogAuthor in ${id}`);
  const lineStart = content.lastIndexOf("\n", author) + 1;
  const indent = content.slice(lineStart, author).match(/^\s*/)?.[0] ?? "";
  const insertion = `\n${indent}<BlogCoverFigure id="${id}" />`;
  content = content.slice(0, end + 2) + insertion + content.slice(end + 2);
  const importLine = 'import BlogCoverFigure from "@/components/blog/BlogCoverFigure";\n';
  content = importLine + content;
  await writeFile(file, content);
  updated++;
}
console.log(`Added cover figures to ${updated} blog articles`);
