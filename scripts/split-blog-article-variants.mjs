/** Wrap the older article introductions in the same split cover treatment. */
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
    else if (entry.name === "page.tsx" && file !== path.join(root, "page.tsx") && !file.includes(`${path.sep}topic${path.sep}`)) files.push(file);
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
  if (source.includes('data-article-hero="split"')) continue;
  const parsed = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let title;
  let cover;
  function visit(node) {
    if (!title && tag(node) === "h1") title = node;
    if (!cover && tag(node) === "BlogCoverFigure") cover = node;
    ts.forEachChild(node, visit);
  }
  visit(parsed);
  if (!title || !cover || title.parent !== cover.parent || !ts.isJsxElement(title.parent)) continue;
  if (tag(title.parent) === "header") continue;

  const children = title.parent.children.filter((node) => tag(node));
  const titleIndex = children.indexOf(title);
  const coverIndex = children.indexOf(cover);
  if (coverIndex <= titleIndex || coverIndex - titleIndex > 5) continue;
  const previous = children[titleIndex - 1];
  const start = previous && ["div", "p", "span"].includes(tag(previous)) ? previous : title;
  const startLine = source.lastIndexOf("\n", start.getStart(parsed) - 1) + 1;
  const coverLine = source.lastIndexOf("\n", cover.getStart(parsed) - 1) + 1;
  const coverEnd = source.indexOf("\n", cover.end);
  if (coverEnd < 0 || source.slice(coverLine, coverEnd).trim() !== cover.getText(parsed).trim()) {
    throw new Error(`Cover is not on its own line: ${file}`);
  }
  const indent = source.slice(startLine, start.getStart(parsed));
  const newline = source.includes("\r\n") ? "\r\n" : "\n";
  const edits = [
    { at: startLine, text: `${indent}<div data-article-hero="split" data-article-hero-variant="nested">${newline}${indent}  <div data-article-hero-copy>${newline}` },
    { at: coverLine, text: `${indent}  </div>${newline}${indent}  <div data-article-hero-screen>${newline}` },
    { at: coverEnd + 1, text: `${indent}  </div>${newline}${indent}</div>${newline}` },
  ];
  let output = source;
  for (const edit of edits.sort((a, b) => b.at - a.at)) {
    output = output.slice(0, edit.at) + edit.text + output.slice(edit.at);
  }
  if (ts.createSourceFile(file, output, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX).parseDiagnostics.length) {
    throw new Error(`Transformed article does not parse: ${file}`);
  }
  if (write) fs.writeFileSync(file, output);
  console.log(path.relative(process.cwd(), file));
  changed++;
}
console.log(`${write ? "Updated" : "Would update"} ${changed} article openings.`);
