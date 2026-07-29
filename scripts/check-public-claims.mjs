import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const roots = [
  path.resolve("src/app/blog"),
  path.resolve("src/data/blog.ts"),
];

async function collect(target) {
  const stats = await import("node:fs/promises").then(({ stat }) => stat(target));
  if (stats.isFile()) return [target];
  const entries = await readdir(target, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const resolved = path.join(target, entry.name);
    if (entry.isDirectory()) return collect(resolved);
    return entry.isFile() && /\.(?:ts|tsx)$/.test(entry.name) ? [resolved] : [];
  }));
  return nested.flat();
}

const blocked = [
  {
    id: "ranking-retention-percentage",
    pattern: /(?:95\s*(?:to|–|-)\s*100|90\s*(?:to|–|-)\s*99)\s*%[^.\n]{0,90}(?:rank|traffic|authority)|(?:rank|traffic|authority)[^.\n]{0,90}(?:95\s*(?:to|–|-)\s*100|90\s*(?:to|–|-)\s*99)\s*%/i,
  },
  {
    id: "free-commercial-hosting",
    pattern: /(?:commercial|business|client|custom|next\.?js)[^.\n]{0,100}(?:free hosting|\$0\s*(?:\/|per)\s*(?:month|year)|zero dollars)|(?:free hosting|\$0\s*(?:\/|per)\s*(?:month|year)|zero dollars)[^.\n]{0,100}(?:commercial|business|client|custom|next\.?js)/i,
  },
  {
    id: "universal-subsecond",
    pattern: /(?:every|all|sites?|stores?|builds?|next\.?js|custom)[^.\n]{0,90}(?:load|loads|loading|lcp)[^.\n]{0,50}under 1 second/i,
  },
  {
    id: "ranking-or-revenue-causation",
    pattern: /(?:speed|pagespeed|core web vitals|lighthouse)[^.\n]{0,110}(?:double|triple|2[-–]?3[×x]|rank higher|ranking gain|\$[\d,]+\s*(?:in|of)?\s*(?:revenue|sales)|lost annual revenue)/i,
  },
  {
    id: "universal-payback",
    pattern: /(?:roi|payback)[^.\n]{0,50}(?:typically|usually|always)|breaks? even within|pay(?:s|ing)? for itself within/i,
  },
  {
    id: "absolute-platform-cure",
    pattern: /(?:the )?only (?:fix|solution|way)[^.\n]{0,100}(?:migrat|rebuild|next\.?js|custom code)/i,
  },
  {
    id: "unbounded-code-ownership",
    pattern: /(?:own|owns|ownership)[^.\n]{0,70}(?:entire codebase|100%|on day one|outright|forever)/i,
  },
  {
    id: "absolute-ai-crawler",
    pattern: /(?:every major ai crawler|ai assistants cannot see or cite|all ai crawlers)[^.\n]*/i,
  },
  {
    id: "absolute-cutover",
    pattern: /(?:never goes? down|never go dark|never lose a day of revenue|zero downtime guaranteed)/i,
  },
];

const allowedContext = [
  /not (?:promised|guaranteed)/i,
  /no (?:universal|guarantee)/i,
  /no fixed/i,
  /does not guarantee/i,
  /cannot guarantee/i,
  /do not (?:promise|guarantee|present)/i,
  /without promising/i,
  /rather than promising/i,
  /question:/i,
  /href=/i,
  /title:/i,
];

const findings = [];
for (const root of roots) {
  for (const file of await collect(root)) {
    const source = await readFile(file, "utf8");
    const lines = source.split(/\r?\n/);
    lines.forEach((line, index) => {
      for (const rule of blocked) {
        if (!rule.pattern.test(line)) continue;
        if (allowedContext.some((allowed) => allowed.test(line))) continue;
        findings.push({
          rule: rule.id,
          file: path.relative(process.cwd(), file).replaceAll("\\", "/"),
          line: index + 1,
          text: line.trim().slice(0, 240),
        });
      }
    });
  }
}

if (findings.length) {
  console.error(`Public-claim gate failed with ${findings.length} finding(s):`);
  for (const finding of findings) {
    console.error(`${finding.file}:${finding.line} [${finding.rule}] ${finding.text}`);
  }
  process.exitCode = 1;
} else {
  console.log("Public-claim gate passed: no prohibited universal commercial, ranking, performance, ownership, cutover, or AI-citation claims found.");
}
