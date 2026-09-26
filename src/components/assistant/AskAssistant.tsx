"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp, X } from "lucide-react";
import { setQuotePrefill } from "@/lib/quotePrefill";
import { T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// The website assistant: an inline prompt that opens a conversation panel.
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
// ─────────────────────────────────────────────────────────────────────────────

type Source = { title: string; url: string };
type Message = { role: "user" | "assistant"; content: string; sources?: Source[]; handoff?: boolean };

const STORE = "pcg-assistant-v1";
const SUGGESTIONS = ["What exactly do you do?", "What does a website cost?", "Will I lose my rankings if I move?"];

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
    sessionStorage.setItem(STORE, JSON.stringify(messages.slice(-20)));
  } catch {
    /* storage unavailable: the conversation just won't persist */
  }
}

export default function AskAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [panelInput, setPanelInput] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelInputRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => setMessages(load()), []);
  useEffect(() => save(messages), [messages]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const close = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    panelInputRef.current?.focus();
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    returnFocus.current = document.activeElement as HTMLElement;
    const next: Message[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setOpen(true);
    setInput("");
    setPanelInput("");
    setLoading(true);
    track("assistant_message", { turn: next.filter((m) => m.role === "user").length });
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.answer, sources: data.sources ?? [], handoff: Boolean(data.handoff) }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Sorry, something went wrong. You can reach Hassan and Imran at info@pandacodegen.com." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handoff() {
    const lines = messages.filter((m) => m.role === "user").map((m) => `- ${m.content}`);
    setQuotePrefill(`From my conversation with the website assistant:\n${lines.join("\n")}`);
    track("assistant_handoff");
    setOpen(false);
    window.dispatchEvent(new Event("open-quote-modal"));
  }

  function reset() {
    setMessages([]);
    panelInputRef.current?.focus();
  }

  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");

  return (
    <>
      {/* ── Inline prompt ─────────────────────────────────────────────── */}
      <div className="w-full max-w-[380px]">
        <p className="mb-3 flex items-center gap-2 text-[15px]" style={{ color: INK }}>
          <span
            className="rounded-full border px-1.5 py-px text-[11px] font-medium"
            style={{ borderColor: "rgba(28,25,23,0.25)", color: QUIET }}
          >
            AI
          </span>
          Ask PandaCodeGen
        </p>

        {lastAssistant ? (
          <div className="mb-3 text-[14px]" style={{ color: BODY }}>
            <p className="line-clamp-1">{lastAssistant.content}</p>
            <button
              type="button"
              onClick={() => {
                returnFocus.current = document.activeElement as HTMLElement;
                setOpen(true);
              }}
              className="mt-1 underline underline-offset-4"
              style={{ color: INK }}
            >
              Continue the conversation
            </button>
          </div>
        ) : (
          <div className="mb-3 flex flex-col items-start gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => ask(s)}
                className="rounded-full border px-4 py-2 text-left text-[15px] transition-colors hover:bg-black/[0.04]"
                style={{ borderColor: "rgba(28,25,23,0.18)", color: INK }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5 ring-2 ring-transparent ring-offset-2 transition-shadow focus-within:ring-[#AD3D0B]"
          style={{ backgroundColor: "rgba(28,25,23,0.06)" }}
        >
          <label htmlFor="assistant-inline" className="sr-only">
            Ask a question
          </label>
          <input
            id="assistant-inline"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={600}
            placeholder="How long does a rebuild take?"
            className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#5E5B55]"
            style={{ color: INK }}
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={!input.trim() || loading}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40"
            style={{ backgroundColor: INK }}
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
        <p className="mt-2 text-[12px]" style={{ color: QUIET }}>
          AI assistant.{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy
          </Link>
        </p>
      </div>

      {/* ── Conversation panel ────────────────────────────────────────── */}
      {open && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/35" onClick={close} aria-hidden="true" />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            className="absolute inset-0 flex flex-col sm:inset-y-3 sm:left-auto sm:right-3 sm:w-[520px]"
            style={{ backgroundColor: T.paper }}
          >
            <div className="flex items-start justify-between gap-4 px-6 pb-4 pt-6 sm:px-8">
              <div>
                <h2 id="assistant-title" className="text-[22px]" style={{ color: INK }}>
                  Ask PandaCodeGen
                </h2>
                <p className="text-[14px]" style={{ color: QUIET }}>
                  Answers from our own pages
                </p>
              </div>
              <div className="flex items-center gap-4">
                {messages.length > 0 && (
                  <button type="button" onClick={reset} className="text-[14px] underline underline-offset-4" style={{ color: INK }}>
                    Start over
                  </button>
                )}
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="flex h-11 w-11 items-center justify-center text-white"
                  style={{ backgroundColor: INK }}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div ref={listRef} aria-live="polite" className="flex-1 space-y-6 overflow-y-auto px-6 py-4 sm:px-8">
              {messages.length === 0 && (
                <p className="text-[15px]" style={{ color: BODY }}>
                  Ask about what we build, prices, timelines or moving an existing site. For anything specific to your
                  project, the founders reply directly.
                </p>
              )}
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <p className="max-w-[85%] rounded-[4px] px-4 py-3 text-[15px]" style={{ backgroundColor: T.paperHi, color: INK }}>
                      {m.content}
                    </p>
                  </div>
                ) : (
                  <div key={i}>
                    <p className="mb-1 font-mono text-[12px] tracking-wider" style={{ color: QUIET }}>
                      PandaCodeGen
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
                    {m.handoff && i === messages.length - 1 && (
                      <div className="mt-4 border-l-2 px-4 py-4" style={{ borderColor: ACCENT, backgroundColor: T.paperHi }}>
                        <p className="text-[15px]" style={{ color: INK }}>
                          Want Hassan and Imran to look at this? Your questions go into the enquiry form so you
                          don&apos;t have to repeat yourself. You can edit everything before sending.
                        </p>
                        <button
                          type="button"
                          onClick={handoff}
                          className="mt-3 px-5 py-3 text-[15px] font-medium text-white"
                          style={{ backgroundColor: ACCENT }}
                        >
                          Send to the founders
                        </button>
                      </div>
                    )}
                  </div>
                ),
              )}
              {loading && (
                <p className="text-[15px]" style={{ color: QUIET }}>
                  Looking through our pages…
                </p>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(panelInput);
              }}
              className="px-6 pb-4 pt-2 sm:px-8"
            >
              <div className="flex items-end gap-2 border border-[rgba(28,25,23,0.2)] bg-[#F5F4F0] p-2 transition-colors focus-within:border-[#AD3D0B]">
                <label htmlFor="assistant-panel" className="sr-only">
                  Write a message
                </label>
                <textarea
                  id="assistant-panel"
                  ref={panelInputRef}
                  rows={2}
                  maxLength={600}
                  value={panelInput}
                  onChange={(e) => setPanelInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      ask(panelInput);
                    }
                  }}
                  placeholder="Write a message"
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
              <p className="mt-3 text-[12px] leading-[1.5]" style={{ color: QUIET }}>
                Answers come from an AI and can contain mistakes. Messages are sent to Google to be answered and may
                be used to improve its products, so please don&apos;t share sensitive details.{" "}
                <Link href="/privacy" onClick={close} className="underline underline-offset-2">
                  Privacy
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
