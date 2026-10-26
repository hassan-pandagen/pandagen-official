import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

// Structural checks and site conventions against actual server HTML. This is not a substitute for
// Google's eligibility/policy checks or a review of the truth of public claims.
export function auditStructuredData(html) {
  const errors = [];
  const nodes = [];
  const walk = value => {
    if (!value || typeof value !== "object") return;
    if (value["@type"]) nodes.push(value);
    Object.values(value).forEach(walk);
  };
  let blocks = 0;
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\btype=["']application\/ld\+json["']/i.test(match[1])) continue;
    blocks++;
    try { walk(JSON.parse(match[2])); }
    catch { errors.push("Invalid JSON-LD"); }
  }
  const hasType = (node, type) => [node["@type"]].flat().includes(type);
  const text = value => typeof value === "string" && value.trim().length > 0;
  const url = value => typeof value === "string" && /^https?:\/\/[^\s]+$/.test(value);
  const crumbs = nodes.filter(node => hasType(node, "BreadcrumbList"));
  // Google allows multiple trails, but this site renders only one. Keep its
  // schema in the visible Breadcrumb component instead of a second stale copy.
  if (crumbs.length > 1) errors.push(`Multiple breadcrumb trails (${crumbs.length}); check against visible navigation`);
  for (const node of nodes) {
    if (hasType(node, "BreadcrumbList")) {
      const items = node.itemListElement;
      if (!Array.isArray(items) || items.length < 2) errors.push("BreadcrumbList needs at least two entries");
      else items.forEach((item, i) => {
        if (!hasType(item, "ListItem") || item.position !== i + 1) errors.push("Invalid breadcrumb position/type");
        if (!text(item.name) && !text(item.item?.name)) errors.push("Missing breadcrumb entry name");
        const target = typeof item.item === "object" ? item.item["@id"] : item.item;
        if ((i < items.length - 1 || target !== undefined) && !url(target)) errors.push("Invalid breadcrumb URL");
      });
    }
    if (hasType(node, "FAQPage")) {
      if (!Array.isArray(node.mainEntity) || !node.mainEntity.length) errors.push("Empty FAQPage");
      else for (const question of node.mainEntity) {
        if (!hasType(question, "Question") || !text(question.name) || !hasType(question.acceptedAnswer ?? {}, "Answer") || !text(question.acceptedAnswer?.text)) errors.push("Incomplete FAQ question/answer");
      }
    }
    if ((hasType(node, "Article") || hasType(node, "BlogPosting")) && node.mainEntityOfPage) {
      if (!text(node.headline)) errors.push("Article missing headline");
      if (!node.author || !node.image || !node.datePublished) errors.push("Article missing author/image/datePublished");
      if (node.datePublished && node.dateModified && Date.parse(node.dateModified) < Date.parse(node.datePublished)) errors.push("Article modified before publication");
      for (const field of ["datePublished", "dateModified"]) if (node[field] && !Number.isFinite(Date.parse(node[field]))) errors.push(`Invalid Article ${field}`);
    }
    if (hasType(node, "Dataset")) {
      if (!text(node.name) || !text(node.description)) errors.push("Dataset missing name/description");
      if (typeof node.description === "string" && (node.description.trim().length < 50 || node.description.trim().length > 5000)) errors.push("Dataset description must contain 50 to 5000 characters");
      // Optional metadata must be usable when supplied; neither is required.
      if (node.url !== undefined && !url(node.url)) errors.push("Invalid Dataset URL");
      for (const download of [node.distribution ?? []].flat()) {
        if (!hasType(download, "DataDownload") || !url(download.contentUrl)) errors.push("Dataset distribution needs DataDownload with an absolute contentUrl");
      }
    }
    if (hasType(node, "ProfilePage")) {
      const entity = node.mainEntity?.["@type"] ? node.mainEntity : nodes.find(candidate => candidate["@id"] && candidate["@id"] === node.mainEntity?.["@id"]);
      if (!entity || (!hasType(entity, "Person") && !hasType(entity, "Organization")) || (!text(entity.name) && !text(entity.alternateName))) errors.push("ProfilePage needs a named Person or Organization mainEntity");
    }
    // Site convention: company facts intentionally exclude aggregate ratings.
    if (node["@id"] === "https://www.pandacodegen.com/#organization" && (node.aggregateRating || node.review)) errors.push("Self-serving company review markup is ineligible for Google review stars");
    if (hasType(node, "Organization") && node.serviceType) errors.push("serviceType belongs to Service, not Organization");
    if (hasType(node, "ItemList") && node.numberOfItems !== undefined && Array.isArray(node.itemListElement) && node.numberOfItems !== node.itemListElement.length) errors.push("ItemList count mismatch");
    if (node.breadcrumb?.["@id"] && !crumbs.some(crumb => crumb["@id"] === node.breadcrumb["@id"])) errors.push("Unresolved breadcrumb reference");
  }
  return { blocks, nodes, errors: [...new Set(errors)] };
}

function normalizeText(value) {
  return value.replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x([\da-f]+)|(\d+));/gi, (match, hex, decimal) => {
      const point = parseInt(hex ?? decimal, hex ? 16 : 10);
      return point <= 0x10ffff ? String.fromCodePoint(point) : match;
    })
    .replace(/&(?:amp|lt|gt|quot|apos|nbsp);/g, match => ({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&nbsp;": " " })[match])
    .replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
}

export function auditSchemaContent(html, nodes) {
  // Exclude scripts so serialized React payloads cannot masquerade as visible
  // content. Collapsed FAQ answers in server HTML still count as accessible.
  const body = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
  const visible = normalizeText(body);
  const errors = [];
  for (const faq of nodes.filter(node => node["@type"] === "FAQPage")) {
    for (const question of Array.isArray(faq.mainEntity) ? faq.mainEntity : []) {
      for (const value of [question.name, question.acceptedAnswer?.text]) {
        if (typeof value === "string" && !visible.includes(normalizeText(value))) errors.push(`FAQ text absent from rendered HTML: ${value.slice(0, 80)}`);
      }
    }
  }
  const nav = body.match(/<nav\b[^>]*aria-label=["']Breadcrumb["'][^>]*>([\s\S]*?)<\/nav>/i);
  if (nav) {
    const trail = nodes.find(node => node["@type"] === "BreadcrumbList");
    if (!trail || normalizeText(nav[1]) !== normalizeText(trail.itemListElement.map(item => item.name ?? item.item?.name ?? "").join(" "))) errors.push("Breadcrumb schema differs from visible trail");
  }
  return errors;
}

async function collect(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(files.map(entry => entry.isDirectory() ? collect(path.join(dir, entry.name)) : entry.name.endsWith(".html") ? [path.join(dir, entry.name)] : []))).flat();
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const files = await collect(process.argv[2]?.startsWith("--") ? ".next/server/app" : process.argv[2] ?? ".next/server/app");
  if (!files.length) throw new Error("No rendered HTML found. Run the production build first.");
  const counts = {};
  const failures = [];
  let blocks = 0;
  const documents = await Promise.all(files.map(async file => ({ file, html: await readFile(file, "utf8") })));
  // Optional running production server URL for a request-rendered page such as /blog.
  const urlIndex = process.argv.indexOf("--url");
  if (urlIndex !== -1) {
    const response = await fetch(process.argv[urlIndex + 1], { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`Page fetch failed: ${response.status}`);
    documents.push({ file: response.url, html: await response.text() });
  }
  for (const { file, html } of documents) {
    const result = auditStructuredData(html);
    result.errors.push(...auditSchemaContent(html, result.nodes));
    blocks += result.blocks;
    for (const node of result.nodes) for (const type of [node["@type"]].flat()) counts[type] = (counts[type] ?? 0) + 1;
    if (result.errors.length) failures.push({ file, errors: result.errors });
  }
  console.log(JSON.stringify({ pages: documents.length, blocks, types: counts, failures }, null, 2));
  process.exitCode = failures.length ? 1 : 0;
}
