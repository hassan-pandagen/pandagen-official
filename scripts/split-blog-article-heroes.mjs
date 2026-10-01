/** Move the cover into the opening band for articles with the shared template. */
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = path.resolve("src/app/blog");
const write = process.argv.includes("--write");
const files = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name === "page.tsx" && file !== path.join(root, "page.tsx")) files.push(file);
  }
}

function tag(node) {
  if (ts.isJsxElement(node)) return node.openingElement.tagName.getText();
  if (ts.isJsxSelfClosingElement(node)) return node.tagName.getText();
  return null;
}

walk(root);
let changed = 0;
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const parsed = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let article;
  function visit(node) {
    if (!article && ts.isJsxElement(node) && tag(node) === "article") article = node;
    ts.forEachChild(node, visit);
  }
  visit(parsed);
  if (!article) continue;

  const children = article.children.filter((node) => tag(node));
  const headerIndex = children.findIndex((node) => tag(node) === "header");
  const coverIndex = children.findIndex((node) => tag(node) === "BlogCoverFigure");
  if (headerIndex < 0 || coverIndex <= headerIndex || coverIndex - headerIndex > 4) continue;

  const header = children[headerIndex];
  const cover = children[coverIndex];
  if (!ts.isJsxElement(header) || !ts.isJsxSelfClosingElement(cover)) continue;
  if (header.openingElement.getText(parsed).includes("data-article-hero")) continue;

  const coverStart = cover.getStart(parsed);
  const coverLineStart = source.lastIndexOf("\n", coverStart - 1) + 1;
  const coverLineEnd = source.indexOf("\n", cover.end);
  const coverText = source.slice(coverStart, cover.end);
  if (coverLineEnd < 0 || source.slice(coverLineStart, coverLineEnd).trim() !== coverText.trim()) {
    throw new Error(`Cover is not on its own line: ${file}`);
  }

  const headerStart = header.getStart(parsed);
  const headerLineStart = source.lastIndexOf("\n", headerStart - 1) + 1;
  const indent = source.slice(headerLineStart, headerStart);
  const newline = source.includes("\r\n") ? "\r\n" : "\n";
  const edits = [
    { start: headerStart + "<header".length, end: headerStart + "<header".length, text: ' data-article-hero="split"' },
    { start: header.openingElement.end, end: header.openingElement.end, text: `${newline}${indent}  <div data-article-hero-copy>` },
    { start: header.closingElement.getStart(parsed), end: header.closingElement.getStart(parsed), text: `  </div>${newline}${indent}  <div data-article-hero-screen>${newline}${indent}    ${coverText}${newline}${indent}  </div>${newline}${indent}` },
    { start: coverLineStart, end: coverLineEnd + 1, text: "" },
  ];
  let output = source;
  for (const edit of edits.sort((a, b) => b.start - a.start)) {
    output = output.slice(0, edit.start) + edit.text + output.slice(edit.end);
  }
  const checked = ts.createSourceFile(file, output, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  if (checked.parseDiagnostics.length) {
    throw new Error(`Transformed article does not parse: ${file}`);
  }
  if (write) fs.writeFileSync(file, output);
  console.log(path.relative(process.cwd(), file));
  changed++;
}
console.log(`${write ? "Updated" : "Would update"} ${changed} article openings.`);
