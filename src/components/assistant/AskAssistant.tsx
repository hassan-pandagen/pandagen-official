"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import AssistantIcon from "./AssistantIcon";
import ui from "./PandaAssistant.module.css";
import { ArrowUp, ArrowUpRight, X } from "lucide-react";
import { setQuotePrefill } from "@/lib/quotePrefill";
import { T } from "@/components/redesign/tokens";
import CalModalButton from "@/components/ui/CalModalButton";
import { getAttribution } from "@/lib/analytics/trafficSource";
import { trackFBEvent } from "@/components/FacebookPixel";
import { trackGAEvent } from "@/components/GoogleAnalytics";

// ─────────────────────────────────────────────────────────────────────────────
// The site-wide assistant, also opened by the homepage inline prompt.
// ─────────────────────────────────────────────────────────────────────────────
// Added 23 Sep 2026. Answers come from /api/assistant, which only uses the
// site's own audited content. When the visitor asks for a quote or describes a
// project, the answer carries handoff=true and the panel offers to send the
// conversation to the founders through the existing enquiry form, pre-filled
// via quotePrefill. The assistant never collects contact details itself: the
// form does, with its own consent text and delivery path.
//
// The conversation is kept in sessionStorage so it survives navigation within
// the visit and disappears when the tab closes. Every access is wrapped because
// storage can be unavailable (private windows, blocked site data).
//
// 29 Sep 2026: from the visitor's second question, and whenever the assistant
// cannot answer, the panel offers a call with Hassan: book a time directly
// (CalModalButton, which handles the calendar's consent choice) or leave an
// email and phone through the enquiry form, pre-filled with the conversation.
// Contact details still go only through that form, never into the chat.
//
// 5 Oct 2026: on the owner's request the email option is now a small form inside
// the panel instead of the enquiry modal. It posts to the same /api/submit-quote
// route with the same honeypot, fill-time check, attribution fields, privacy line
// and tracking events, so the delivery and spam layer is unchanged. The model
// still never sees contact details: they go straight from this form to that route.
//
// 7 Oct 2026: live chat with Hassan happens in this panel, replacing Tawk.to.
// When his Slack status is Active the panel offers "Chat with Hassan now"; the
// conversation becomes a thread in the team's Slack channel (/api/live-chat),
// the visitor keeps typing here, and his replies are fetched every few seconds.
// Live messages are marked `live` and never sent to the AI model.
//
// 8 Oct 2026, owner: every assistant conversation is also mirrored to Slack,
// question and answer, so Hassan can follow along ("watch" threads). If he
// replies in that thread the panel turns into a live chat with him. If the
// visitor asks for him first, the same thread is used and he is @mentioned.
//
// 8 Oct 2026, owner: when a visitor types an email or phone number into the
// chat, it never goes to the AI. The panel sends it to Hassan as an enquiry
// through /api/submit-quote (the contact form's route, with its spam checks),
// replies the way a person would, and if they then say it is urgent, rings
// Hassan in Slack.
// ─────────────────────────────────────────────────────────────────────────────

type Source = { title: string; url: string };

type Message = {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  handoff?: boolean;
  /** Part of a live chat with Hassan: shown, never sent to the AI. */
  live?: boolean;
  /** Who wrote an assistant-side live message: Hassan, or a note from the panel. */
  from?: "hassan" | "note";
};

type Live = { thread: string; key: string; after: string; kind?: "live" | "watch"; mention?: boolean };
type Watch = { thread: string; key: string };

const STORE = "pcg-assistant-v1";
const LIVE_STORE = "pcg-live-chat-v1";
const WATCH_STORE = "pcg-assistant-watch-v1";
const LIVE_NOTE_JOINED = "Hassan has joined the chat. You're talking to him now.";
const LEAD_STORE = "pcg-chat-lead-v1";
const LEAD_THANKS =
  "Thanks, I've passed this to Hassan, our lead engineer. He usually gets back within one business day, by email or a call, whichever you left. If it's urgent, just tell me here and I'll flag it to him.";
const LEAD_FAILED =
  "Sorry, I couldn't send that just now. Please use the form below, or email info@pandacodegen.com.";
const URGENT_NOTE = "Done, I've flagged it to Hassan as urgent.";

const EMAIL_IN_TEXT = /[^\s@<>()"',;]+@[^\s@<>()"',;]+\.[a-z]{2,}/i;
const PHONE_IN_TEXT = /\+?\d[\d\s().-]{6,}\d/;
const URL_IN_TEXT = /\b(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}(?:\/[^\s]*)?/i;
const PHONE_CUE = /\b(call|phone|whatsapp|number|cell|mobile|tel|text me|reach me|contact me)\b/i;
const URGENT = /\b(urgent|urgently|asap|emergency|right away|today|immediately)\b/i;

function contactIn(text: string): { email: string; phone: string; url: string } | null {
  const email = text.match(EMAIL_IN_TEXT)?.[0] ?? "";
  const rest = email ? text.replace(email, " ") : text;
  const phoneMatch = rest.match(PHONE_IN_TEXT)?.[0] ?? "";
  // Budgets and dates ("10000-25000", "2024 2025") look like numbers too, so a number counts
  // as a phone only with a + prefix, a phone word nearby, or when it is most of the message.
  const looksLikePhone =
    phoneMatch.trim().startsWith("+") || PHONE_CUE.test(text) || rest.replace(phoneMatch, "").trim().length <= 20;
  const phone = phoneMatch.replace(/\D/g, "").length >= 7 && looksLikePhone ? phoneMatch.trim() : "";
  if (!email && !phone) return null;
  const url = rest.replace(phoneMatch, " ").match(URL_IN_TEXT)?.[0] ?? "";
  return { email, phone, url };
}
const LIVE_NOTE_START =
  "You're chatting with Hassan now. He can see what you asked the assistant and will reply here. Write your message below.";
const LIVE_NOTE_END = "Your chat with Hassan has ended. You can keep asking the assistant.";

const INK = T.ink;
const BODY = T.body;
const QUIET = T.quiet;
const ACCENT = T.accentText;

function track(name: string, params: Record<string, unknown> = {}) {
  (window as { gtag?: (...a: unknown[]) => void }).gtag?.("event", name, params);
}

function load(): Message[] {
  try {
    const raw = sessionStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as Message[]) : [];
  } catch {
    return [];
  }
}

function save(messages: Message[]) {
  try {
    sessionStorage.setItem(STORE, JSON.stringify(messages.slice(-40)));
  } catch {
    /* storage unavailable: the conversation just won't persist */
  }
}

function loadLive(): Live | null {
  try {
    const raw = sessionStorage.getItem(LIVE_STORE);
    return raw ? (JSON.parse(raw) as Live) : null;
  } catch {
    return null;
  }
}

function loadWatch(): Watch | null {
  try {
    const raw = sessionStorage.getItem(WATCH_STORE);
    return raw ? (JSON.parse(raw) as Watch) : null;
  } catch {
    return null;
  }
}

function saveWatch(watch: Watch | null) {
  try {
    if (watch) sessionStorage.setItem(WATCH_STORE, JSON.stringify(watch));
    else sessionStorage.removeItem(WATCH_STORE);
  } catch {
    /* storage unavailable */
  }
}

function saveLive(live: Live | null) {
  try {
    if (live) sessionStorage.setItem(LIVE_STORE, JSON.stringify(live));
    else sessionStorage.removeItem(LIVE_STORE);
  } catch {
    /* storage unavailable: the live chat lasts until the page changes */
  }
}

export default function AskAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [open, setOpen] = useState(false);
  const [panelInput, setPanelInput] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelInputRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadState, setLeadState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [leadError, setLeadError] = useState("");
  const leadLoadedAt = useRef(0);
  const [hassanOnline, setHassanOnline] = useState(false);
  const [live, setLive] = useState<Live | null>(null);
  const [liveStarting, setLiveStarting] = useState(false);
  const [liveError, setLiveError] = useState("");
  const [unread, setUnread] = useState(false);
  const afterRef = useRef("");
  const openRef = useRef(false);
  const [watch, setWatch] = useState<Watch | null>(null);
  const watchRef = useRef<Watch | null>(null);
  const liveRef = useRef<Live | null>(null);
  const watchQueue = useRef<Promise<void>>(Promise.resolve());
  const [leadSent, setLeadSent] = useState(false);
  const [restored, setRestored] = useState(false);
  const panelOpenedAt = useRef(0);

  useEffect(() => {
    setMessages(load());
    const stored = loadLive();
    const watched = loadWatch();
    if (stored) {
      afterRef.current = stored.after;
      setLive(stored);
    } else if (watched) {
      afterRef.current = watched.thread;
    }
    if (watched) setWatch(watched);
    setRestored(true);
  }, []);
  // Nothing is written back until the stored conversation has been read: the
  // first render's empty state used to overwrite it, so a reload lost the chat
  // (found 8 Oct 2026; every time in development, by timing luck in production).
  useEffect(() => {
    if (restored) save(messages);
  }, [messages, restored]);
  useEffect(() => {
    liveRef.current = live;
    if (restored) saveLive(live);
  }, [live, restored]);
  useEffect(() => {
    watchRef.current = watch;
    if (restored) saveWatch(watch);
  }, [watch, restored]);
  useEffect(() => {
    openRef.current = open;
    if (open) setUnread(false);
    if (open && !panelOpenedAt.current) panelOpenedAt.current = Date.now();
  }, [open]);
  useEffect(() => {
    try {
      setLeadSent(sessionStorage.getItem(LEAD_STORE) === "1");
    } catch {
      /* storage unavailable */
    }
  }, []);

  // Is Hassan's Slack status Active? Asked each time the panel opens.
  useEffect(() => {
    if (!open || live) return;
    let cancelled = false;
    fetch("/api/live-chat?status=1")
      .then((r) => r.json())
      .then((d) => !cancelled && setHassanOnline(Boolean(d.online)))
      .catch(() => !cancelled && setHassanOnline(false));
    return () => {
      cancelled = true;
    };
  }, [open, live]);

  // Hassan's replies: every 4 seconds while the panel is open, every 15 while
  // it is closed, so the launcher can say he replied. A watched assistant
  // conversation is checked less often; his first reply there is the takeover.
  const pollThread = live?.thread || watch?.thread;
  const pollKey = live?.thread ? live.key : watch?.key;
  const pollKind = live?.thread ? live.kind ?? "live" : "watch";
  useEffect(() => {
    if (!pollThread || !pollKey) return;
    let stopped = false;
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      try {
        const res = await fetch(
          `/api/live-chat?kind=${pollKind}&thread=${encodeURIComponent(pollThread)}&key=${encodeURIComponent(pollKey)}&after=${encodeURIComponent(afterRef.current || pollThread)}`,
        );
        if (res.ok) {
          const data = await res.json();
          const replies: { ts: string; text: string }[] = Array.isArray(data.replies) ? data.replies : [];
          if (!stopped && replies.length) {
            afterRef.current = replies[replies.length - 1].ts;
            const fromHassan = replies.map((r) => ({ role: "assistant" as const, content: r.text, live: true, from: "hassan" as const }));
            const watched = watchRef.current;
            if (!liveRef.current && watched) {
              // He replied in a watched conversation: hand the panel to him.
              const taken: Live = { thread: watched.thread, key: watched.key, after: afterRef.current, kind: "watch" };
              liveRef.current = taken;
              setLive(taken);
              setWatch(null);
              track("assistant_takeover");
              setMessages((m) => [...m, { role: "assistant", content: LIVE_NOTE_JOINED, live: true, from: "note" }, ...fromHassan]);
            } else {
              setLive((l) => (l ? { ...l, after: afterRef.current } : l));
              setMessages((m) => [...m, ...fromHassan]);
            }
            if (!openRef.current) setUnread(true);
          }
        }
      } catch {
        /* offline for a moment: try again on the next tick */
      }
      const chatting = Boolean(liveRef.current);
      if (!stopped) timer = setTimeout(poll, openRef.current ? (chatting ? 4_000 : 6_000) : chatting ? 15_000 : 30_000);
    };
    void poll();
    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, [pollThread, pollKey, pollKind]);

  useEffect(() => {
    if (open) document.body.dataset.assistantChatOpen = "true";
    else delete document.body.dataset.assistantChatOpen;
    return () => { delete document.body.dataset.assistantChatOpen; };
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const close = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    if (window.matchMedia("(min-width: 601px)").matches) panelInputRef.current?.focus();
    else panelRef.current?.focus({ preventScroll: true });
    // Focus trap, mirrored from QuoteModal.tsx's proven implementation: Tab
    // and Shift+Tab loop within the panel instead of escaping to the page
    // behind it. Flagged in a design review (26 Sep) -- this dialog had
    // role="dialog"/aria-modal but no actual trap, so a keyboard user could
    // tab straight through it into the background.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.getClientRects().length > 0);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    // Lock html too: it is the element that scrolls on this site (see SiteNav).
    const prev = document.body.style.overflow;
    const prevRoot = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      document.documentElement.style.overflow = prevRoot;
    };
  }, [open, close]);

  // Keep the mobile panel above the software keyboard, including iOS panning.
  useEffect(() => {
    if (!open) return;
    const viewport = window.visualViewport;
    const update = () => {
      panelRef.current?.style.setProperty("--assistant-viewport-height", `${viewport?.height ?? window.innerHeight}px`);
      panelRef.current?.style.setProperty("--assistant-viewport-top", `${viewport?.offsetTop ?? 0}px`);
    };
    update();
    viewport?.addEventListener("resize", update);
    viewport?.addEventListener("scroll", update);
    return () => {
      viewport?.removeEventListener("resize", update);
      viewport?.removeEventListener("scroll", update);
    };
  }, [open]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    returnFocus.current = document.activeElement as HTMLElement;
    const next: Message[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setOpen(true);
    setPanelInput("");
    setLoading(true);
    track("assistant_message", { turn: next.filter((m) => m.role === "user").length });
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => !m.live).map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          content: data.answer || "Sorry, something went wrong. You can reach Hassan and Imran at info@pandacodegen.com.",
          sources: data.sources ?? [],
          handoff: Boolean(data.handoff),
        },
      ]);
      if (typeof data.answer === "string" && data.answer) mirror(q, data.answer);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Sorry, something went wrong. You can reach Hassan and Imran at info@pandacodegen.com.",
          handoff: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // Copies a question and the assistant's answer into this visit's Slack watch
  // thread, creating it on the first turn. Queued so two quick questions can't
  // open two threads. Failures are ignored: the visitor's answer never waits.
  function mirror(question: string, answer: string) {
    watchQueue.current = watchQueue.current.then(async () => {
      if (liveRef.current) return;
      const watched = watchRef.current;
      try {
        const res = await fetch("/api/live-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            watched
              ? { kind: "watch", thread: watched.thread, key: watched.key, watch: { question, answer } }
              : { watch: { question, answer } },
          ),
        });
        if (!res.ok || watched) return;
        const data = await res.json();
        if (typeof data.thread === "string" && typeof data.key === "string") {
          const created = { thread: data.thread, key: data.key };
          watchRef.current = created;
          if (!liveRef.current) afterRef.current = data.thread;
          setWatch(created);
        }
      } catch {
        /* the conversation just isn't mirrored */
      }
    });
  }

  function handoff() {
    const lines = messages.filter((m) => m.role === "user").map((m) => `- ${m.content}`);
    setQuotePrefill(`From my conversation with the website assistant:\n${lines.join("\n")}`);
    track("assistant_handoff");
    setOpen(false);
    window.dispatchEvent(new Event("open-quote-modal"));
  }

  // The Slack thread is created by the visitor's first message (see
  // /api/live-chat), so this only switches the panel into chat mode.
  function startLive() {
    if (live) return;
    setLiveError("");
    track("assistant_live_chat");
    const watched = watchRef.current;
    if (watched) {
      // Keep one thread per visitor: continue the watched one and ring Hassan.
      setLive({ thread: watched.thread, key: watched.key, after: afterRef.current || watched.thread, kind: "watch", mention: true });
      setWatch(null);
    } else {
      setLive({ thread: "", key: "", after: "", kind: "live" });
    }
    setMessages((m) => [...m, { role: "assistant", content: LIVE_NOTE_START, live: true, from: "note" }]);
    if (window.matchMedia("(min-width: 601px)").matches) panelInputRef.current?.focus();
    else panelRef.current?.focus({ preventScroll: true });
  }

  async function sendLive(text: string) {
    const t = text.trim();
    if (!t || !live || liveStarting) return;
    setPanelInput("");
    setLiveError("");
    setMessages((m) => [...m, { role: "user", content: t, live: true }]);
    const starting = !live.thread;
    if (starting) setLiveStarting(true);
    try {
      const res = await fetch("/api/live-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          starting
            ? { text: t, questions: messages.filter((m) => m.role === "user" && !m.live).map((m) => m.content) }
            : { kind: live.kind ?? "live", thread: live.thread, key: live.key, text: t, mention: Boolean(live.mention) },
        ),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setLiveError(typeof data.error === "string" ? data.error : "That message didn't send. Please try again.");
      } else if (starting && typeof data.thread === "string") {
        afterRef.current = data.thread;
        setLive({ thread: data.thread, key: data.key, after: data.thread, kind: "live" });
      } else if (live.mention) {
        setLive((l) => (l ? { ...l, mention: false } : l));
      }
    } catch {
      setLiveError("That message didn't send. Please check your connection and try again.");
    } finally {
      if (starting) setLiveStarting(false);
    }
  }

  function endLive() {
    setLive(null);
    setWatch(null);
    watchRef.current = null;
    setLiveError("");
    afterRef.current = "";
    setMessages((m) => [...m, { role: "assistant", content: LIVE_NOTE_END, live: true, from: "note" }]);
  }

  // Contact details typed into the chat go to Hassan as an enquiry, never to the
  // AI model. The visitor's earlier questions go with them.
  async function captureLead(text: string, found: { email: string; phone: string; url: string }) {
    setPanelInput("");
    const asked = messages.filter((m) => m.role === "user" && !m.live).map((m) => `- ${m.content}`);
    setMessages((m) => [...m, { role: "user", content: text, live: true }]);
    setLoading(true);
    const formData = new FormData();
    formData.append("name", "Website chat visitor");
    if (found.email) formData.append("email", found.email);
    if (found.phone) formData.append("phone", found.phone);
    formData.append(
      "details",
      [
        "Left in the website assistant chat.",
        found.url ? `Website: ${found.url}` : "",
        asked.length ? `They asked the assistant:\n${asked.join("\n")}` : "",
        `Their message: ${text}`,
      ]
        .filter(Boolean)
        .join("\n\n"),
    );
    formData.append("_t", String(panelOpenedAt.current || Date.now() - 60_000));
    const attribution = getAttribution();
    formData.append("trafficSource", attribution.source);
    formData.append("trafficMedium", attribution.medium);
    if (attribution.campaign && attribution.campaign !== "none") formData.append("trafficCampaign", attribution.campaign);
    if (attribution.landingPage) formData.append("landingPage", attribution.landingPage);
    formData.append("submittedFrom", window.location.pathname);
    if (attribution.firstVisit) formData.append("firstVisit", attribution.firstVisit);
    let reply = LEAD_THANKS;
    try {
      const res = await fetch("/api/submit-quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error(String(res.status));
      trackFBEvent("Lead", { content_name: "Quote Request", content_category: "Assistant Chat", value: 0, currency: "USD" });
      trackGAEvent("quote_submit", { form: "assistant_chat_message" });
      setLeadSent(true);
      try {
        sessionStorage.setItem(LEAD_STORE, "1");
      } catch {
        /* storage unavailable */
      }
    } catch {
      reply = LEAD_FAILED;
    } finally {
      setLoading(false);
    }
    setMessages((m) => [...m, { role: "assistant", content: reply, live: true, handoff: reply === LEAD_FAILED }]);
    if (reply === LEAD_THANKS) mirror(text, reply);
  }

  // After they've left details, "it's urgent" rings Hassan in Slack: in the
  // conversation's watch thread if there is one, otherwise in a new chat thread.
  async function flagUrgent(text: string) {
    setPanelInput("");
    setMessages((m) => [...m, { role: "user", content: text, live: true }]);
    const watched = watchRef.current;
    const asked = messages.filter((m) => m.role === "user" && !m.live).map((m) => m.content);
    try {
      await fetch("/api/live-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          watched
            ? { kind: "watch", thread: watched.thread, key: watched.key, text: `URGENT: ${text}`, mention: true }
            : { text: `URGENT (they left contact details by email): ${text}`, questions: asked },
        ),
      });
    } catch {
      /* the enquiry email has already reached him */
    }
    setMessages((m) => [...m, { role: "assistant", content: URGENT_NOTE, live: true }]);
  }

  function send(text: string) {
    if (live) {
      void sendLive(text);
      return;
    }
    const t = text.trim();
    if (!t || loading) return;
    const found = contactIn(t);
    if (found) void captureLead(t, found);
    else if (leadSent && URGENT.test(t)) void flagUrgent(t);
    else void ask(t);
  }

  function openLeadForm() {
    leadLoadedAt.current = Date.now();
    setLeadOpen(true);
    setLeadState("idle");
    setLeadError("");
    track("assistant_handoff", { mode: "inline" });
  }

  async function submitLead(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (leadState === "sending") return;
    const formData = new FormData(event.currentTarget);
    if (formData.get("website_url_confirm")) {
      setLeadState("sent");
      return;
    }
    if (!String(formData.get("email") ?? "").trim() && !String(formData.get("phone") ?? "").trim()) {
      setLeadState("error");
      setLeadError("Please add an email address or a phone number.");
      return;
    }
    const lines = messages.filter((m) => m.role === "user").map((m) => `- ${m.content}`);
    formData.append("details", `From my conversation with the website assistant:\n${lines.join("\n")}`);
    if (leadLoadedAt.current > 0) formData.append("_t", String(leadLoadedAt.current));
    const attribution = getAttribution();
    formData.append("trafficSource", attribution.source);
    formData.append("trafficMedium", attribution.medium);
    if (attribution.campaign && attribution.campaign !== "none") formData.append("trafficCampaign", attribution.campaign);
    if (attribution.landingPage) formData.append("landingPage", attribution.landingPage);
    formData.append("submittedFrom", window.location.pathname);
    if (attribution.firstVisit) formData.append("firstVisit", attribution.firstVisit);
    setLeadState("sending");
    setLeadError("");
    try {
      const res = await fetch("/api/submit-quote", { method: "POST", body: formData });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(typeof data?.error === "string" ? data.error : "Something went wrong.");
      }
      trackFBEvent("Lead", { content_name: "Quote Request", content_category: "Assistant Chat", value: 0, currency: "USD" });
      trackGAEvent("quote_submit", { form: "assistant_chat" });
      setLeadState("sent");
    } catch (err) {
      setLeadState("error");
      setLeadError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function reset() {
    setLeadOpen(false);
    setLeadState("idle");
    setLive(null);
    setWatch(null);
    watchRef.current = null;
    setLiveError("");
    afterRef.current = "";
    setLeadSent(false);
    try {
      sessionStorage.removeItem(LEAD_STORE);
    } catch {
      /* storage unavailable */
    }
    setMessages([]);
    if (window.matchMedia("(min-width: 601px)").matches) panelInputRef.current?.focus();
    else panelRef.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    const onOpen = (event: Event) => {
      const question = (event as CustomEvent<unknown>).detail;
      if (typeof question === "string" && question.trim()) void ask(question);
      else {
        returnFocus.current = document.activeElement as HTMLElement;
        setOpen(true);
      }
    };
    window.addEventListener("open-assistant", onOpen);
    return () => window.removeEventListener("open-assistant", onOpen);
  });

  return (
    <>
      {/* ── Inline prompt ─────────────────────────────────────────────── */}
      <button
        type="button"
        aria-label={unread ? "Hassan replied. Open Panda Assistant" : "Open Panda Assistant, our AI assistant"}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          returnFocus.current = document.activeElement as HTMLElement;
          setOpen(true);
        }}
        className={ui.launcher}
        style={{ display: open ? "none" : undefined }}
        aria-controls="panda-assistant-panel"
      >
        <AssistantIcon />
        <span className={ui.launcherLabel}>{unread ? "Hassan replied" : "Panda Assistant"}</span>
        {unread && <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-600" aria-hidden="true" />}
      </button>

      {/* ── Conversation panel ────────────────────────────────────────── */}
      {open && (
        <div data-assistant-dialog data-lenis-prevent className="fixed inset-0 z-[100] overscroll-contain">
          <div className={ui.backdrop} onClick={close} aria-hidden="true" />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            id="panda-assistant-panel"
            tabIndex={-1}
            className={ui.panel}
          >
            <div className={ui.header}>
              <div className={ui.identity}>
                <AssistantIcon />
                <div>
                <h2 id="assistant-title" className="text-[22px]" style={{ color: INK }}>
                  {live ? "Chat with Hassan" : "Panda Assistant"}
                </h2>
                <p className="text-[14px]" style={{ color: QUIET }}>
                  {live ? "Hassan Jamal, lead engineer" : "AI guide · PandaCodeGen"}
                </p>
                </div>
              </div>
              <div className={ui.headerActions}>
                {live ? (
                  <button type="button" onClick={endLive} className="text-[14px] underline underline-offset-4" style={{ color: INK }}>
                    Back to the assistant
                  </button>
                ) : messages.length > 0 && (
                  <button type="button" onClick={reset} className="text-[14px] underline underline-offset-4" style={{ color: INK }}>
                    Start over
                  </button>
                )}
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close Panda Assistant"
                  className={ui.close}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div ref={listRef} aria-live="polite" className={ui.messages}>
              {messages.length === 0 && (
                <>
                  <div className={ui.welcome}>

                    <h3>How can we help?</h3>
                    <p>Ask about our services, pricing or your next website. Get an answer from our published guides, or connect with the founders.</p>
                    <div className={ui.suggestions} aria-label="Suggested questions">
                      {["What could you build for my business?", "What does a website cost?", "Can I keep my CRM and change my website?"].map(question => <button key={question} type="button" onClick={() => send(question)}>{question}<ArrowUpRight size={16} aria-hidden="true" /></button>)}
                    </div>
                  </div>
                  {hassanOnline && (
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={startLive}
                        className="border border-[#1C1917] px-4 py-2.5 text-[15px] font-medium text-[#1C1917]"
                      >
                        Or chat with Hassan now
                      </button>
                      <span className="inline-flex items-center gap-2 text-[13px]" style={{ color: BODY }}>
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#2f7d4f]" />
                        He&apos;s online
                      </span>
                    </div>
                  )}
                  {liveError && (
                    <p role="alert" className="text-[14px]" style={{ color: ACCENT }}>
                      {liveError}
                    </p>
                  )}
                </>
              )}
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <p className={ui.userBubble}>
                      {m.content}
                    </p>
                  </div>
                ) : m.from === "note" ? (
                  <p key={i} className="border-l-2 py-1 pl-3 text-[14px]" style={{ borderColor: QUIET, color: BODY }}>
                    {m.content}
                  </p>
                ) : (
                  <div key={i} className={ui.answer}>
                    <p className="mb-1 font-mono text-[12px] tracking-wider" style={{ color: m.from === "hassan" ? ACCENT : QUIET }}>
                      {m.from === "hassan" ? "Hassan · Lead engineer" : "Panda · AI assistant"}
                    </p>
                    <p className="whitespace-pre-line text-[16px] leading-[1.55]" style={{ color: INK }}>
                      {m.content}
                    </p>
                    {m.sources && m.sources.length > 0 && (
                      <ul className="mt-2 space-y-1 text-[13px]">
                        {m.sources.map((s) => (
                          <li key={s.url}>
                            <Link href={s.url} onClick={close} style={{ color: ACCENT }}>
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    {m.handoff && i === messages.length - 1 && !loading && !live && (
                      <div className="mt-4 border-l-2 px-4 py-4" style={{ borderColor: ACCENT, backgroundColor: T.paperHi }}>
                        <p className="text-[15px] font-medium" style={{ color: INK }}>
                          Want to go through it in detail?
                        </p>
                        <p className="mt-1 text-[15px]" style={{ color: BODY }}>
                          Hassan, our lead engineer, can guide you properly for your own site. Book a quick chat, or
                          leave your email or phone and he&apos;ll get back to you. Your questions go with it, so you
                          don&apos;t have to repeat yourself.
                        </p>
                        {hassanOnline && (
                          <div className="mt-3 flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={startLive}
                              className="bg-[#7A2E0E] px-5 py-3 text-[15px] font-medium text-white"
                            >
                              Chat with Hassan now
                            </button>
                            <span className="inline-flex items-center gap-2 text-[13px]" style={{ color: BODY }}>
                              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#2f7d4f]" />
                              He&apos;s online
                            </span>
                          </div>
                        )}
                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <span
                            onClickCapture={() => {
                              track("assistant_book_call");
                              // 5 Oct 2026: closing in the same tick unmounted the button before
                              // CalModalButton's handler opened the calendar, so nothing happened.
                              // Close after the click has been handled.
                              setTimeout(() => setOpen(false), 0);
                            }}
                          >
                            <CalModalButton
                              fallbackHref="https://cal.com/pandagen/discovery"
                              className={
                                hassanOnline
                                  ? "border border-[#1C1917] px-5 py-3 text-[15px] font-medium text-[#1C1917]"
                                  : "bg-[#7A2E0E] px-5 py-3 text-[15px] font-medium text-white"
                              }
                            >
                              Book a quick chat
                            </CalModalButton>
                          </span>
                          {!leadOpen && (
                            <button
                              type="button"
                              onClick={openLeadForm}
                              className="px-5 py-3 text-[15px] font-medium underline underline-offset-4"
                              style={{ color: INK }}
                            >
                              Leave your email or phone
                            </button>
                          )}
                        </div>
                        {liveError && (
                          <p role="alert" className="mt-3 text-[14px]" style={{ color: ACCENT }}>
                            {liveError}
                          </p>
                        )}
                        {leadOpen && leadState === "sent" && (
                          <p role="status" className="mt-4 text-[15px]" style={{ color: INK }}>
                            Thanks, it&apos;s sent. Hassan will get back to you.
                          </p>
                        )}
                        {leadOpen && leadState !== "sent" && (
                          <form onSubmit={submitLead} className="relative mt-4 grid gap-3" aria-label="Leave your details for Hassan">
                            <label className="grid gap-1 text-[13px]" style={{ color: BODY }}>
                              Name
                              <input name="name" required maxLength={100} autoComplete="name" className="border px-3 py-2 text-[15px]" style={{ borderColor: QUIET, backgroundColor: T.paper, color: INK }} />
                            </label>
                            <label className="grid gap-1 text-[13px]" style={{ color: BODY }}>
                              Email
                              <input name="email" type="email" maxLength={254} autoComplete="email" className="border px-3 py-2 text-[15px]" style={{ borderColor: QUIET, backgroundColor: T.paper, color: INK }} />
                            </label>
                            <label className="grid gap-1 text-[13px]" style={{ color: BODY }}>
                              Phone
                              <input name="phone" type="tel" maxLength={50} autoComplete="tel" className="border px-3 py-2 text-[15px]" style={{ borderColor: QUIET, backgroundColor: T.paper, color: INK }} />
                            </label>
                            <p className="-mt-1 text-[12px]" style={{ color: QUIET }}>Email or phone, whichever suits you. One is enough.</p>
                            <input name="website_url_confirm" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
                            {leadState === "error" && (
                              <p role="alert" className="text-[14px]" style={{ color: ACCENT }}>
                                {leadError} You can also email info@pandacodegen.com.
                              </p>
                            )}
                            <div className="flex flex-wrap items-center gap-3">
                              <button type="submit" disabled={leadState === "sending"} className="bg-[#7A2E0E] px-5 py-3 text-[15px] font-medium text-white disabled:opacity-60">
                                {leadState === "sending" ? "Sending..." : "Send to Hassan"}
                              </button>
                              <button type="button" onClick={handoff} className="text-[14px] underline underline-offset-4" style={{ color: BODY }}>
                                Use the full form
                              </button>
                            </div>
                            <p className="text-[12px] leading-[1.5]" style={{ color: QUIET }}>
                              We use your details to reply to your message. Read our <Link href="/privacy" className="underline underline-offset-2">privacy notice</Link>.
                            </p>
                          </form>
                        )}
                      </div>
                    )}
                  </div>
                ),
              )}
              {/* 4 Oct 2026: three typing dots instead of "Looking through our pages…",
                  at the owner's request. role="status" keeps a spoken cue for screen readers;
                  with reduced motion the dots stay still. */}
              {loading && (
                <div role="status" aria-label="PandaCodeGen is typing" className="flex items-center gap-1.5 py-2">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      aria-hidden="true"
                      className="assistant-typing-dot h-2 w-2 rounded-full"
                      style={{ backgroundColor: QUIET, animationDelay: `${i * 0.18}s` }}
                    />
                  ))}
                  <style>{`
                    .assistant-typing-dot { animation: assistant-typing 1.1s ease-in-out infinite; }
                    @keyframes assistant-typing { 0%, 80%, 100% { opacity: .3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-4px); } }
                    @media (prefers-reduced-motion: reduce) { .assistant-typing-dot { animation: none; opacity: .6; } }
                  `}</style>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(panelInput);
              }}
              className={ui.composer}
            >
              <div className={ui.inputWell}>
                <label htmlFor="assistant-panel" className="sr-only">
                  Write a message
                </label>
                <textarea
                  id="assistant-panel"
                  ref={panelInputRef}
                  rows={2}
                  maxLength={live ? 1000 : 600}
                  value={panelInput}
                  onChange={(e) => setPanelInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(panelInput);
                    }
                  }}
                  placeholder={live ? "Message Hassan" : "Ask about your project…"}
                  className="min-h-[48px] flex-1 resize-none bg-transparent px-2 py-2 text-[16px] outline-none placeholder:text-[#5E5B55]"
                  style={{ color: INK }}
                />
                <button
                  type="submit"
                  aria-label="Send"
                  disabled={!panelInput.trim() || loading}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40"
                  style={{ backgroundColor: INK }}
                >
                  <ArrowUp className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              {live && liveError && (
                <p role="alert" className="mt-2 text-[13px]" style={{ color: ACCENT }}>
                  {liveError}
                </p>
              )}
              <details className={ui.privacy}>
                <summary>{live ? "Conversation privacy" : "AI can make mistakes. Privacy & data use"}</summary>
              {live ? (
                <p className="mt-3 text-[12px] leading-[1.5]" style={{ color: QUIET }}>
                  Your messages go to Hassan through our team&apos;s Slack and are kept there as a record of the
                  conversation. Please don&apos;t share sensitive details.{" "}
                  <Link href="/privacy" onClick={close} className="underline underline-offset-2">
                    Privacy
                  </Link>
                </p>
              ) : (
              <p className="mt-3 text-[12px] leading-[1.5]" style={{ color: QUIET }}>
                Answers come from an AI and can contain mistakes. Messages go through Vercel to an AI model to be
                answered, and the model&apos;s provider doesn&apos;t keep them. We keep questions for 90 days, with emails and phone numbers removed,
                to improve our answers. Our team can also see the conversation in Slack and may join in. Please don&apos;t share sensitive details.{" "}
                <Link href="/privacy" onClick={close} className="underline underline-offset-2">
                  Privacy
                </Link>
              </p>
              )}
              </details>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
