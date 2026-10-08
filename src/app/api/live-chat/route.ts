import { createHmac, timingSafeEqual } from "node:crypto";
import { redact } from "@/lib/assistant/log";

// ─────────────────────────────────────────────────────────────────────────────
// /api/live-chat: talking to Hassan from inside the assistant panel.
// ─────────────────────────────────────────────────────────────────────────────
// Added 7 Oct 2026, replacing Tawk.to at the owner's request: the visitor keeps
// typing in the same panel, and each conversation is a thread in the team's
// Slack. Hassan answers from the Slack app on his phone. (Telegram was the first
// choice; it needs a VPN in Pakistan, so Slack.)
//
// Two kinds of thread:
//   live   the visitor asked to chat with Hassan. Posted in the chat channel
//          with an @mention, so his phone rings.
//   watch  added 8 Oct 2026 at the owner's request: every assistant
//          conversation is mirrored, question and answer, into a watch channel
//          without a mention, so he can follow along and take over by replying
//          in the thread. A reply there turns the visitor's panel into a live
//          chat with him (AskAssistant.tsx).
//
//   GET  ?status=1                          is Hassan's Slack status Active?
//   GET  ?thread=&key=&kind=&after=         team replies newer than `after`
//   POST { watch: {question, answer} }      start a watch thread
//   POST { kind:"watch", thread, key, watch } add a turn to a watch thread
//   POST { questions, text }                start a live thread
//   POST { kind, thread, key, text, mention? } a visitor message in a thread
//
// There is no database. The thread is the conversation, and the browser keeps
// the thread id with a key signed here for that kind of thread, so nobody can
// read or post into a conversation they didn't start. The panel polls every few
// seconds while it is open; Slack's conversations.replies allows 50+ calls a
// minute. Replies are read from the thread and, for a message typed straight
// into the channel, from the channel (see channelRepliesTo).
//
// Emails and phone numbers are removed before anything reaches Slack, as they
// are in the assistant's own question log (src/lib/assistant/log.ts).
//
// The channel and user ids are not secrets. Only SLACK_BOT_TOKEN is, and it
// must be set in Vercel for production (the bot has chat:write, channels:history,
// groups:history and users:read, nothing else).
// ─────────────────────────────────────────────────────────────────────────────

const SLACK = "https://slack.com/api";
// The website chat channel in the Pandacodegen workspace, and Hassan.
const CHANNEL = process.env.SLACK_CHAT_CHANNEL || "C0C75TBMTCN";
// Where assistant conversations are mirrored: #assistant-watch, set to notify
// on mentions only, so Hassan's phone rings for a visitor who asks for him and
// not for every question.
const WATCH_CHANNEL = process.env.SLACK_WATCH_CHANNEL || "C0C7EJ8R3QE";
const HASSAN = process.env.SLACK_CHAT_USER || "U0C71JEN9SP";
const MAX_CHARS = 1000;
const STATUS_SECONDS = 30;

type Kind = "live" | "watch";

function kindOf(value: unknown): Kind {
  return value === "watch" ? "watch" : "live";
}

function channelFor(kind: Kind): string {
  return kind === "watch" ? WATCH_CHANNEL : CHANNEL;
}

function botToken(): string {
  const token = process.env.SLACK_BOT_TOKEN;
  if (!token) throw new Error("SLACK_BOT_TOKEN is not set");
  return token;
}

async function slack(method: string, params: Record<string, string>, post = false) {
  const headers = { Authorization: `Bearer ${botToken()}` };
  const res = post
    ? await fetch(`${SLACK}/${method}`, {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(params),
        signal: AbortSignal.timeout(8_000),
      })
    : await fetch(`${SLACK}/${method}?${new URLSearchParams(params)}`, { headers, signal: AbortSignal.timeout(8_000) });
  const data = await res.json();
  if (!data.ok) throw new Error(`slack ${method}: ${data.error}`);
  return data;
}

// ── Keys ────────────────────────────────────────────────────────────────────

function keyFor(thread: string, kind: Kind): string {
  const scope = kind === "watch" ? `watch:${thread}` : `live-chat:${thread}`;
  return createHmac("sha256", botToken()).update(scope).digest("base64url").slice(0, 32);
}

function validKey(thread: string, key: string, kind: Kind): boolean {
  if (!/^\d+\.\d+$/.test(thread) || typeof key !== "string") return false;
  const expected = Buffer.from(keyFor(thread, kind));
  const given = Buffer.from(key);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

// ── Text in and out of Slack ────────────────────────────────────────────────

// Slack reads <, > and & as markup, so a visitor can't ping @channel or post a
// disguised link. Emails and phone numbers are replaced first.
function toSlack(text: string, max = MAX_CHARS): string {
  return redact(text.slice(0, max)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Hassan's reply as plain text: mentions dropped, links written out.
function fromSlack(text: string): string {
  return text
    .replace(/<[@#!][^>]*>/g, "")
    .replace(/<(https?:[^|>]+)\|([^>]+)>/g, "$2 ($1)")
    .replace(/<(https?:[^>]+)>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();
}

function pageOf(request: Request): string {
  try {
    return new URL(request.headers.get("referer") ?? "").pathname;
  } catch {
    return "";
  }
}

// ── Limits (per server instance, like the assistant's) ───────────────────────

const hits = new Map<string, number[]>();

function limited(bucket: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(bucket) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) return true;
  recent.push(now);
  hits.set(bucket, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

function ipOf(request: Request): string {
  return (request.headers.get("x-forwarded-for") ?? "local").split(",")[0].trim();
}

// Same check as /api/assistant: a browser always sends Origin on a POST.
function fromThisSite(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// ── Status ──────────────────────────────────────────────────────────────────

let status: { online: boolean; at: number } | null = null;

async function hassanOnline(): Promise<boolean> {
  if (status && Date.now() - status.at < STATUS_SECONDS * 1000) return status.online;
  try {
    const data = await slack("users.getPresence", { user: HASSAN });
    status = { online: data.presence === "active", at: Date.now() };
  } catch (err) {
    console.warn("[live-chat] status check failed:", err instanceof Error ? err.message : err);
    status = { online: false, at: Date.now() };
  }
  return status.online;
}

// ── Replies typed in the channel instead of the thread ───────────────────────
// In the owner's first test (7 Oct 2026) his answer went into the channel, not
// the thread, and the visitor never saw it. A message Hassan (or anyone on the
// team) posts in the channel now belongs to the newest website conversation
// above it. Each channel's latest messages are fetched at most every few
// seconds and shared by every open chat, which keeps the Slack calls in limits.

type SlackMessage = { ts: string; user?: string; bot_id?: string; subtype?: string; text?: string };
const THREAD_START = /New chat from the website|is using the assistant/;
const recent = new Map<string, { messages: SlackMessage[]; at: number }>();

async function channelMessages(channel: string): Promise<SlackMessage[]> {
  const cached = recent.get(channel);
  if (cached && Date.now() - cached.at < 3_000) return cached.messages;
  const data = await slack("conversations.history", { channel, limit: "100" });
  recent.set(channel, { messages: data.messages as SlackMessage[], at: Date.now() });
  return data.messages as SlackMessage[];
}

function fromTeam(m: SlackMessage): boolean {
  return Boolean(m.user) && !m.bot_id && !m.subtype && m.user !== "USLACKBOT";
}

async function channelRepliesTo(channel: string, thread: string, after: string): Promise<SlackMessage[]> {
  const messages = (await channelMessages(channel)).slice().sort((a, b) => Number(a.ts) - Number(b.ts));
  const out: SlackMessage[] = [];
  let ours = false;
  for (const m of messages) {
    if (Number(m.ts) < Number(thread)) continue;
    if (m.bot_id && THREAD_START.test(m.text ?? "")) {
      ours = m.ts === thread;
      continue;
    }
    if (ours && fromTeam(m) && Number(m.ts) > Number(after)) out.push(m);
  }
  return out;
}

// ── Handlers ────────────────────────────────────────────────────────────────

export async function GET(request: Request) {
  const url = new URL(request.url);
  if (url.searchParams.has("status")) {
    return Response.json({ online: await hassanOnline() });
  }

  const kind = kindOf(url.searchParams.get("kind"));
  const thread = url.searchParams.get("thread") ?? "";
  const key = url.searchParams.get("key") ?? "";
  if (!validKey(thread, key, kind)) return Response.json({ error: "not found" }, { status: 404 });
  if (limited(`poll:${ipOf(request)}`, 40, 60_000)) return Response.json({ replies: [] }, { status: 429 });

  const channel = channelFor(kind);
  const after = /^\d+\.\d+$/.test(url.searchParams.get("after") ?? "") ? url.searchParams.get("after")! : thread;
  try {
    const [data, inChannel] = await Promise.all([
      slack("conversations.replies", { channel, ts: thread, oldest: after, limit: "50" }),
      channelRepliesTo(channel, thread, after),
    ]);
    const inThread = (data.messages as SlackMessage[]).filter((m) => m.ts !== thread && Number(m.ts) > Number(after) && fromTeam(m));
    const replies = [...inThread, ...inChannel]
      .sort((a, b) => Number(a.ts) - Number(b.ts))
      .map((m) => ({ ts: m.ts, text: fromSlack(m.text ?? "") }))
      .filter((m) => m.text);
    return Response.json({ replies });
  } catch (err) {
    console.warn("[live-chat] reading replies failed:", err instanceof Error ? err.message : err);
    return Response.json({ replies: [] }, { status: 502 });
  }
}

type Body = {
  kind?: string;
  thread?: string;
  key?: string;
  text?: string;
  mention?: boolean;
  questions?: unknown;
  watch?: { question?: unknown; answer?: unknown };
};

function turnText(watch: Body["watch"]): string[] {
  const question = typeof watch?.question === "string" ? watch.question.trim() : "";
  const answer = typeof watch?.answer === "string" ? watch.answer.trim() : "";
  return [question ? `*Visitor:* ${toSlack(question, 600)}` : "", answer ? `*Assistant:* ${toSlack(answer, 900)}` : ""].filter(Boolean);
}

export async function POST(request: Request) {
  if (!fromThisSite(request)) return Response.json({ error: "forbidden" }, { status: 403 });
  const ip = ipOf(request);

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad request" }, { status: 400 });
  }
  const kind = kindOf(body.kind);

  try {
    // An assistant turn, mirrored for the team. No mention: nobody's phone
    // rings for these. A failure here never reaches the visitor's answer.
    if (body.watch) {
      const lines = turnText(body.watch);
      if (!lines.length) return Response.json({ error: "bad request" }, { status: 400 });
      let thread = body.thread;
      if (thread) {
        if (!validKey(thread, body.key ?? "", "watch")) return Response.json({ error: "not found" }, { status: 404 });
        if (limited(`watch:${ip}`, 40, 10 * 60_000)) return Response.json({ ok: false }, { status: 429 });
      } else {
        if (limited(`watch-start:${ip}`, 5, 10 * 60_000)) return Response.json({ ok: false }, { status: 429 });
        const page = pageOf(request);
        const start = await slack(
          "chat.postMessage",
          { channel: WATCH_CHANNEL, text: `Someone is using the assistant${page ? ` on ${page}` : ""}. Reply in this thread to join the chat.` },
          true,
        );
        thread = start.ts as string;
      }
      await slack("chat.postMessage", { channel: WATCH_CHANNEL, thread_ts: thread, text: lines.join("\n") }, true);
      return Response.json({ thread, key: keyFor(thread, "watch") });
    }

    // A visitor's message in an existing conversation. `mention` is set on the
    // first message after a visitor in a watched conversation asks for Hassan,
    // so that one rings his phone.
    if (body.thread) {
      if (!validKey(body.thread, body.key ?? "", kind)) return Response.json({ error: "not found" }, { status: 404 });
      const text = typeof body.text === "string" ? body.text.trim() : "";
      if (!text) return Response.json({ error: "bad request" }, { status: 400 });
      if (limited(`msg:${ip}`, 30, 10 * 60_000)) {
        return Response.json({ error: "You've sent a lot of messages in a short time. Please wait a few minutes." }, { status: 429 });
      }
      const prefix = body.mention ? `<@${HASSAN}> *Visitor wants to chat with you:*` : "*Visitor:*";
      const data = await slack("chat.postMessage", { channel: channelFor(kind), thread_ts: body.thread, text: `${prefix} ${toSlack(text)}` }, true);
      return Response.json({ ts: data.ts });
    }

    // A new live conversation, started by the visitor's first message so the
    // notification on Hassan's phone says what they want. (The first version
    // opened the thread on the button click; in the owner's test the alert
    // read only "New chat from the website" and the message sat in the thread.)
    // Mentioning Hassan makes his phone ring even if the channel is muted.
    if (limited(`start:${ip}`, 3, 10 * 60_000)) {
      return Response.json({ error: "Please wait a few minutes before starting another chat." }, { status: 429 });
    }
    const questions = (Array.isArray(body.questions) ? body.questions : [])
      .filter((q): q is string => typeof q === "string" && q.trim().length > 0)
      .slice(-8)
      .map((q) => `> ${toSlack(q.trim(), 300)}`);
    const page = pageOf(request);
    const first = typeof body.text === "string" ? body.text.trim() : "";
    const text = [
      `<@${HASSAN}> New chat from the website${page ? ` (on ${page})` : ""}. Reply in this thread to answer.`,
      first ? `*Visitor:* ${toSlack(first)}` : "",
      questions.length ? `They asked the assistant first:\n${questions.join("\n")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const data = await slack("chat.postMessage", { channel: CHANNEL, text }, true);
    return Response.json({ thread: data.ts, key: keyFor(data.ts, "live") });
  } catch (err) {
    console.warn("[live-chat] posting failed:", err instanceof Error ? err.message : err);
    return Response.json({ error: "The chat isn't available right now. Please leave your email or phone instead." }, { status: 502 });
  }
}
