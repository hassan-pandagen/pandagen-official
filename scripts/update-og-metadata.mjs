import { promises as fs } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const appRoot = path.join(projectRoot, "src", "app");
const checkOnly = process.argv.includes("--check");

const oldImageUrls = [
  "https://www.pandacodegen.com/og-image.jpg",
  "/og-image.jpg",
  "https://www.pandacodegen.com/work/panda-patches.png",
  "https://www.pandacodegen.com/work/pandacodelab.png",
  "https://www.pandacodegen.com/work/mycustompatches.png",
  "https://www.pandacodegen.com/work/panda-operations.png",
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function pageFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await pageFiles(absolute)));
    if (entry.isFile() && entry.name === "page.tsx") files.push(absolute);
  }

  return files;
}

function routeForFile(file) {
  const relativeDirectory = path.relative(appRoot, path.dirname(file));
  if (!relativeDirectory) return "/";
  return `/${relativeDirectory.split(path.sep).join("/")}`;
}

function ensureHelperImport(source, helpers) {
  if (helpers.size === 0) return source;

  const existingPattern = /import\s*\{([^}]+)\}\s*from\s*["']@\/lib\/seo\/og["'];?\r?\n?/;
  const existing = source.match(existingPattern);
  const names = new Set(helpers);

  if (existing) {
    for (const name of existing[1].split(",").map((value) => value.trim()).filter(Boolean)) names.add(name);
    const replacement = `import { ${[...names].sort().join(", ")} } from "@/lib/seo/og";\n`;
    return source.replace(existingPattern, replacement);
  }

  const importLine = `import { ${[...names].sort().join(", ")} } from "@/lib/seo/og";\n`;
  const directive = source.match(/^(?:"use (?:client|server)"|'use (?:client|server)');\r?\n/);
  if (directive) return `${directive[0]}${importLine}${source.slice(directive[0].length)}`;
  return `${importLine}${source}`;
}

function migrateSource(source, route) {
  let next = source;
  const routeLiteral = JSON.stringify(route);

  for (const oldUrl of oldImageUrls) {
    const escaped = escapeRegExp(oldUrl);
    const completeImageObject = new RegExp(
      `\\{\\s*url:\\s*["']${escaped}["']\\s*,\\s*width:\\s*1200\\s*,\\s*height:\\s*630(?:\\s*,\\s*alt:\\s*(?:["'][^"']*["']|[^}]+))?\\s*\\}`,
      "g",
    );
    next = next.replace(completeImageObject, `ogImageForPath(${routeLiteral})`);
  }

  for (const oldUrl of oldImageUrls) {
    const escaped = escapeRegExp(oldUrl);
    next = next.replace(new RegExp(`["']${escaped}["']`, "g"), `ogImageUrlForPath(${routeLiteral})`);
  }

  next = next.replace(
    new RegExp(`\\[\\s*ogImageUrlForPath\\(${escapeRegExp(routeLiteral)}\\)\\s*\\]`, "g"),
    `[ogImageForPath(${routeLiteral})]`,
  );

  const helpers = new Set();
  if (next.includes("ogImageForPath(")) helpers.add("ogImageForPath");
  if (next.includes("ogImageUrlForPath(")) helpers.add("ogImageUrlForPath");

  return ensureHelperImport(next, helpers);
}

const files = await pageFiles(appRoot);
const changed = [];

for (const file of files) {
  const source = await fs.readFile(file, "utf8");
  if (!oldImageUrls.some((url) => source.includes(url))) continue;

  const route = routeForFile(file);
  const migrated = migrateSource(source, route);
  if (migrated === source) continue;

  changed.push(path.relative(projectRoot, file));
  if (!checkOnly) await fs.writeFile(file, migrated, "utf8");
}

console.log(`${checkOnly ? "Would update" : "Updated"} ${changed.length} page metadata files.`);
for (const file of changed) console.log(file);
