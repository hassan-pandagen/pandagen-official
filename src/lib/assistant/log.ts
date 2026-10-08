import "server-only";

// ─────────────────────────────────────────────────────────────────────────────
// Question log for the website assistant, 3 Oct 2026.
//
// Why: the only way to see what buyers actually ask, and which of those
// questions our pages don't answer yet, is to keep the questions. Each answer
// is appended to one Redis list per day in the Upstash database the audit rate
// limiter already uses; `npm run assistant:questions` reads it back as a
// report (scripts/assistant-questions.mjs).
//
// What is kept, per answer: the question with email addresses and phone
// numbers removed, the answer, the page it was asked from, the topics and
// language, whether our pages had the answer, and any error. No IP address,
// user agent, cookie or other identifier, so questions can't be tied to a
// person or to each other. The privacy notice (2.4) says this; change both
// together.
//
// Each day's list expires DAYS_KEPT days after its last write and holds at
// most MAX_PER_DAY entries, so a flood of junk can't grow it without limit.
//
// Writes happen only on the production deployment (or with ASSISTANT_LOG=on),
// after the response is sent (next/server `after`), with a short timeout, and
// never throw: a logging failure must not cost a visitor their answer.
// ─────────────────────────────────────────────────────────────────────────────

export interface QuestionLogEntry {
  at: string;
  q: string;
  a: string;
  turn: number;
  page: string | null;
  lang: string;
  topics: string[];
  cited: string[];
  handoff: boolean;
  /** Our pages didn't answer it: the model said so, or the answer was replaced. */
  gap: boolean;
  cached: boolean;
  ms: number;
  error?: string;
}

const DAYS_KEPT = 90;
const MAX_PER_DAY = 1000;
const MAX_CHARS = 600;

const EMAIL = /[\w.+-]+@[\w-]+(\.[\w-]+)+/g;
// Seven or more digits with spaces, dots, dashes or brackets between them.
const PHONE = /\+?\d[\d\s().-]{6,}\d/g;

export function redact(text: string): string {
  return text.replace(EMAIL, "[email]").replace(PHONE, "[phone]").slice(0, MAX_CHARS);
}

export function logKey(date: Date, prefix = process.env.ASSISTANT_LOG_KEY || "assistant:questions"): string {
  return `${prefix}:${date.toISOString().slice(0, 10)}`;
}

function redisConfig(): { url: string; token: string } | null {
  const enabled =
    process.env.ASSISTANT_LOG === "on" || (process.env.ASSISTANT_LOG !== "off" && process.env.VERCEL_ENV === "production");
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return enabled && url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

/** The path the question was asked from, without query string or domain. */
export function pageFrom(referer: string | null): string | null {
  if (!referer) return null;
  try {
    return new URL(referer).pathname.slice(0, 200);
  } catch {
    return null;
  }
}

export async function logQuestion(entry: QuestionLogEntry): Promise<void> {
  const config = redisConfig();
  if (!config) return;
  const key = logKey(new Date(entry.at));
  const record = JSON.stringify({ ...entry, q: redact(entry.q), a: redact(entry.a) });
  try {
    const res = await fetch(`${config.url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
      body: JSON.stringify([
        ["LPUSH", key, record],
        ["LTRIM", key, 0, MAX_PER_DAY - 1],
        ["EXPIRE", key, DAYS_KEPT * 24 * 60 * 60],
      ]),
      cache: "no-store",
      signal: AbortSignal.timeout(2_500),
    });
    if (!res.ok) console.warn(`[assistant] question log write failed: ${res.status}`);
  } catch (err) {
    console.warn("[assistant] question log write failed:", err instanceof Error ? err.message : err);
  }
}
