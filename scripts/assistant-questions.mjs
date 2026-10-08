// ─────────────────────────────────────────────────────────────────────────────
// What visitors ask the website assistant, read back from the question log
// (src/lib/assistant/log.ts). Added 3 Oct 2026.
//
//   npm run assistant:questions               the last 30 days
//   npm run assistant:questions -- --days=7   the last 7 days
//   npm run assistant:questions -- --json     every entry, as JSON
//
// The most useful section is "Not answered by our pages": each line is a
// question a buyer asked that no page answers yet. Answer it on the right
// page (a service FAQ, the pricing page, a blog post) and the assistant picks
// it up on the next deploy.
//
// Reads UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from the
// environment or .env.local. Read-only: it never writes to the log.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync } from "node:fs";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const DAYS = Math.min(Math.max(Number(args.days) || 30, 1), 90);
const PREFIX = process.env.ASSISTANT_LOG_KEY || "assistant:questions";

function env(name) {
  if (process.env[name]) return process.env[name];
  try {
    const line = readFileSync(".env.local", "utf8")
      .split(/\r?\n/)
      .find((l) => l.startsWith(`${name}=`));
    return line ? line.slice(name.length + 1).replace(/^"|"$/g, "").trim() : undefined;
  } catch {
    return undefined;
  }
}

const url = (env("UPSTASH_REDIS_REST_URL") || env("KV_REST_API_URL") || "").replace(/\/$/, "");
const token = env("UPSTASH_REDIS_REST_TOKEN") || env("KV_REST_API_TOKEN");
if (!url || !token) {
  console.error("Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (or put them in .env.local).");
  process.exit(1);
}

const keys = Array.from({ length: DAYS }, (_, i) => {
  const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
  return `${PREFIX}:${d.toISOString().slice(0, 10)}`;
});

const res = await fetch(`${url}/pipeline`, {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify(keys.map((k) => ["LRANGE", k, 0, -1])),
});
if (!res.ok) {
  console.error(`Upstash returned ${res.status}`);
  process.exit(1);
}
const entries = (await res.json())
  .flatMap((r) => r.result ?? [])
  .map((raw) => {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  })
  .filter(Boolean)
  .sort((a, b) => a.at.localeCompare(b.at));

if (args.json) {
  console.log(JSON.stringify(entries, null, 2));
  process.exit(0);
}

const normalise = (q) => q.toLowerCase().replace(/\s+/g, " ").replace(/[\s?!.]+$/, "").trim();
function tally(values) {
  const counts = new Map();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}
const pct = (n) => (entries.length ? `${Math.round((n / entries.length) * 100)}%` : "0%");
const day = (at) => at.slice(0, 10);

const answered = entries.filter((e) => !e.error);
const gaps = answered.filter((e) => e.gap);
const errors = entries.filter((e) => e.error);
const conversations = entries.filter((e) => e.turn === 1).length;

console.log(`Assistant questions, last ${DAYS} days`);
console.log(`${entries.length} questions in ${conversations} conversations, on ${new Set(entries.map((e) => day(e.at))).size} days`);
console.log(`Not answered by our pages: ${gaps.length} (${pct(gaps.length)}) · errors: ${errors.length} · call box shown: ${pct(entries.filter((e) => e.handoff).length)}`);

console.log(`\nNot answered by our pages (newest first)`);
if (!gaps.length) console.log("  none");
for (const [q, n] of tally(gaps.slice().reverse().map((e) => e.q))) console.log(`  ${n > 1 ? `${n}x ` : ""}${q}`);

console.log(`\nAsked more than once`);
const repeats = tally(entries.map((e) => normalise(e.q))).filter(([, n]) => n > 1);
if (!repeats.length) console.log("  none yet");
for (const [q, n] of repeats.slice(0, 25)) console.log(`  ${n}x ${q}`);

console.log(`\nTopics`);
for (const [t, n] of tally(entries.flatMap((e) => (e.topics?.length ? e.topics : ["(none)"])))) console.log(`  ${n}  ${t}`);

console.log(`\nAsked from`);
for (const [p, n] of tally(entries.map((e) => e.page ?? "(unknown)")).slice(0, 15)) console.log(`  ${n}  ${p}`);

const langs = tally(entries.map((e) => e.lang));
if (langs.length > 1) {
  console.log(`\nLanguages`);
  for (const [l, n] of langs) console.log(`  ${n}  ${l}`);
}

if (errors.length) {
  console.log(`\nErrors (the visitor saw "Sorry, I can't answer right now")`);
  for (const [m, n] of tally(errors.map((e) => `${day(e.at)}  ${e.error}`)).slice(0, 15)) console.log(`  ${n}x ${m}`);
}

console.log(`\nEvery question, oldest first`);
for (const e of entries) {
  const flag = e.error ? "ERR " : e.gap ? "GAP " : "    ";
  console.log(`  ${e.at.slice(0, 16).replace("T", " ")} ${flag}${e.turn > 1 ? `#${e.turn} ` : ""}${e.q}`);
}
