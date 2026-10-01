#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Asks the website assistant every question in assistant-hard-questions.json
// and checks each answer against the site's own facts.
// ─────────────────────────────────────────────────────────────────────────────
// Added 29 Sep 2026. A 30-question test found wrong and missing answers that no
// code review would have caught (a claim that we have no work to show, missed
// payment terms, English replies to Spanish questions). This runs the same
// kind of test at 100+ questions, so every change to the assistant, its rules
// or the site's facts can be re-checked instead of trusted.
//
// Needs a running dev server with GEMINI_API_KEY set:
//   npx next dev -p 3001
//   node scripts/assistant-eval.mjs --base=http://localhost:3001
// Options: --only=<groups or ids, comma-separated>, --gap=<ms between questions, default 4000>,
//          --cache (use the answer cache instead of asking the model),
//          --out=<file> (full results as JSON),
//          --regrade=<file> (re-check a saved --out file without calling the model).
//
// Hard failures (exit 1): no answer, a number not in the sources, a promise
// of an outcome, leaked instructions, a claim that we have no work, a missing
// required fact, a missing call offer, a reply in the wrong language.
// Warnings: declined a question the site answers, did not cite the expected
// page, over 110 words, slower than 8 s.
//
// Quota: one full run is about 130 Gemini calls, plus hedged retries. On
// 29 Sep 2026 three full runs and the targeted re-runs around them used up
// the free tier's daily quota (the model started returning 429). Use --only
// for re-checks, and --regrade when only a check changed. At 2.5 s between
// questions the free tier also stalled far more often than at 4 s.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const BASE = args.base || "http://localhost:3001";
const GAP = Number(args.gap ?? 4000);
const here = dirname(fileURLToPath(import.meta.url));
const { cases } = JSON.parse(readFileSync(join(here, "assistant-hard-questions.json"), "utf8"));
const only = args.only ? String(args.only).split(",") : null;
const selected = only ? cases.filter((c) => only.includes(c.group) || only.includes(c.id)) : cases;

const re = (s) => new RegExp(s, "i");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const DECLINED = /(do not|don't) have (that|this|the|any) information|can(no|'|)t (answer|confirm)|rather not give you a figure|not able to answer/i;
const LEAK = /\b(these instructions|my instructions|system prompt|context passages?|passage ids?|the context)\b/i;
const NO_WORK = /\b(do not|don't) (list|have|show|publish)\b[^.]*\b(work|projects|clients|portfolio)\b/i;
const CALL = /\b(call|book|talk|speak|chat)\b/i;
const LANG = {
  es: /\b(el|la|los|las|de|que|para|una?|con|por|es|su|sitio|tienda|precio|semanas|desde|podemos)\b/gi,
  fr: /\b(le|la|les|des|un|une|est|pour|vous|nous|votre|site|prix|semaines|partir)\b/gi,
  de: /\b(der|die|das|und|ist|für|eine?|wir|sie|ihre?|kostet|wochen|ab)\b/gi,
};
const ENGLISH = /\b(the|and|is|for|we|you|your|with|of|to|our|starts?)\b/gi;

// A sentence that mentions a guarantee without negating it. "Rather than a
// guarantee" and "without guaranteeing" are negations too.
function promises(answer) {
  return answer
    .split(/(?<=[.!?])\s+/)
    .some(
      (s) =>
        /\bguarantee/i.test(s) &&
        !/\b(not|no|never|nobody|no one|cannot|rather than|without|instead of|neither|nor)\b|n't\b/i.test(s),
    );
}

function check(answer, data, expect, turnIndex) {
  const fails = [];
  const warns = [];
  if (!answer) fails.push("no answer");
  if (data.debug?.ungrounded?.length) fails.push(`numbers not in sources: ${data.debug.ungrounded.join(", ")} (original: ${data.debug.original})`);
  if (promises(answer)) fails.push("promises an outcome");
  if (LEAK.test(answer)) fails.push("mentions its instructions");
  if (NO_WORK.test(answer)) fails.push("says we have no work");
  for (const c of expect.contains ?? []) if (!re(c).test(answer)) fails.push(`missing /${c}/`);
  for (const c of expect.notContains ?? []) if (re(c).test(answer)) fails.push(`contains /${c}/`);
  if (expect.handoff !== undefined && Boolean(data.handoff) !== expect.handoff) fails.push(`handoff ${data.handoff}, expected ${expect.handoff}`);
  if (expect.handoffFrom && turnIndex + 1 >= expect.handoffFrom) {
    if (!data.handoff) fails.push("no call card from this question on");
    if (!CALL.test(answer)) warns.push("answer text does not mention a call");
  }
  if (expect.noPrice && /\$\s?\d/.test(answer)) fails.push("mentions a price nobody asked for");
  const english = (answer.match(ENGLISH) ?? []).length;
  if (expect.lang) {
    const target = (answer.match(LANG[expect.lang]) ?? []).length;
    if (target <= english) fails.push(`reply not in ${expect.lang} (${target} vs ${english} English markers)`);
  } else {
    for (const [code, words] of Object.entries(LANG)) {
      const n = (answer.match(words) ?? []).length;
      if (n >= 3 && n > english) fails.push(`English question answered in ${code}`);
    }
  }
  // A Step Above Medical is still being built; its record says it must not be
  // presented as delivered work until launch.
  if (/A Step Above Medical/i.test(answer) && !/in progress|not (yet )?(finished|launched|live)|launch is pending|being (re)?built/i.test(answer)) {
    fails.push("presents A Step Above Medical as finished work");
  }
  if (/\bthe visitor\b/i.test(answer)) fails.push('talks about "the visitor" instead of "you"');
  if (expect.answered && DECLINED.test(answer)) warns.push("declined a question the site answers");
  if (expect.source && !(data.sources ?? []).some((s) => (s.url ?? s) === expect.source)) warns.push(`did not cite ${expect.source}`);
  const words = answer.split(/\s+/).filter(Boolean).length;
  if (words > 110) warns.push(`${words} words`);
  return { fails, warns, words };
}

const results = [];
let ipSeq = 0;

// --regrade=<results.json>: re-check saved answers with the current checks,
// without asking the model again. For when a check, not the assistant, changed.
if (args.regrade) {
  const saved = JSON.parse(readFileSync(args.regrade, "utf8"));
  const byId = new Map(cases.map((c) => [c.id, c]));
  for (const r of saved) {
    const c = byId.get(r.id);
    if (!c) continue;
    let expect = c.expect ?? {};
    if (c.turns.length > 1) {
      const extra = r.turn === 2 ? expect.second : r.turn === c.turns.length ? expect.last : undefined;
      expect = { handoffFrom: expect.handoffFrom, ...(extra ?? {}) };
    }
    const { fails, warns, words } = check(r.answer, r, expect, r.turn - 1);
    if (r.status !== 200) fails.unshift(`status ${r.status}`);
    if (r.ms > 8000) warns.push(`${(r.ms / 1000).toFixed(1)} s`);
    results.push({ ...r, words, fails, warns });
  }
  console.log(`Re-grading ${results.length} saved answers from ${args.regrade}\n`);
  for (const r of results.filter((x) => x.fails.length)) {
    console.log(`FAIL ${r.id}#${r.turn}\n       x ${r.fails.join("\n       x ")}\n       Q: ${r.q}\n       A: ${r.answer}`);
  }
} else {
console.log(`Asking ${selected.length} cases (${selected.reduce((n, c) => n + c.turns.length, 0)} questions) at ${BASE}\n`);
}

for (const c of args.regrade ? [] : selected) {
  ipSeq++;
  const messages = [];
  for (let t = 0; t < c.turns.length; t++) {
    const q = c.turns[t];
    messages.push({ role: "user", content: q });
    const started = Date.now();
    let status = 0;
    let data = {};
    try {
      const res = await fetch(`${BASE}/api/assistant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: BASE,
          "x-forwarded-for": `10.77.${Math.floor(ipSeq / 250)}.${ipSeq % 250}`,
          ...(args.cache ? {} : { "x-assistant-nocache": "1" }),
        },
        body: JSON.stringify({ messages }),
      });
      status = res.status;
      data = await res.json();
    } catch (err) {
      data = { answer: "" };
      status = `fetch error: ${err.message}`;
    }
    const ms = Date.now() - started;
    const answer = String(data.answer ?? "");
    messages.push({ role: "assistant", content: answer });

    let expect = c.expect ?? {};
    if (c.turns.length > 1) {
      const isLast = t === c.turns.length - 1;
      const extra = t === 1 ? expect.second : isLast ? expect.last : undefined;
      expect = { handoffFrom: expect.handoffFrom, ...(extra ?? {}) };
    }
    const { fails, warns, words } = check(answer, data, expect, t);
    if (status !== 200) fails.unshift(`status ${status}`);
    if (ms > 8000) warns.push(`${(ms / 1000).toFixed(1)} s`);

    const row = { id: c.id, group: c.group, turn: t + 1, q, answer, status, ms, words, handoff: data.handoff, sources: (data.sources ?? []).map((s) => s.url), debug: data.debug, fails, warns };
    results.push(row);
    const mark = fails.length ? "FAIL" : warns.length ? "warn" : " ok ";
    console.log(`${mark} ${c.id}${c.turns.length > 1 ? `#${t + 1}` : ""} (${(ms / 1000).toFixed(1)} s${data.debug?.model ? `, ${data.debug.model}` : ""})`);
    for (const f of fails) console.log(`       x ${f}`);
    for (const w of warns) console.log(`       ~ ${w}`);
    if (fails.length) console.log(`       Q: ${q}\n       A: ${answer}`);
    await sleep(GAP);
  }
}

const failed = results.filter((r) => r.fails.length);
const warned = results.filter((r) => !r.fails.length && r.warns.length);
const times = results.map((r) => r.ms).sort((a, b) => a - b);
const pct = (p) => (times[Math.min(times.length - 1, Math.floor(times.length * p))] / 1000).toFixed(1);
console.log(`\n${results.length} answers: ${results.length - failed.length - warned.length} ok, ${warned.length} warnings, ${failed.length} failures`);
console.log(`time: median ${pct(0.5)} s, 90th percentile ${pct(0.9)} s, slowest ${pct(1)} s`);
const byGroup = {};
for (const r of results) {
  byGroup[r.group] ??= { n: 0, fail: 0, warn: 0 };
  byGroup[r.group].n++;
  if (r.fails.length) byGroup[r.group].fail++;
  else if (r.warns.length) byGroup[r.group].warn++;
}
for (const [g, s] of Object.entries(byGroup)) console.log(`  ${g.padEnd(13)} ${s.n} answers, ${s.fail} failed, ${s.warn} warnings`);
if (args.out) writeFileSync(args.out, JSON.stringify(results, null, 2));
process.exit(failed.length ? 1 : 0);
