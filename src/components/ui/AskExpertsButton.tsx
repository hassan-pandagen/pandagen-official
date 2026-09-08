"use client";

import { useConsent } from "@/components/consent/ConsentProvider";

// Mirrors the fallback in TawkToChat. Without it this button hid itself whenever
// NEXT_PUBLIC_TAWK_EMBED_URL was unset, which is what happened from 29 Jul to
// 3 Aug 2026: the hero's low-friction "ask a question" door quietly disappeared.
// Keep the two in sync; if the embed URL moves, change it in both places.
const DEFAULT_TAWK_EMBED_URL = "https://embed.tawk.to/69861ee219d9521c3a42fa82/1jgpuh9j5";

const TAWK_CONFIGURED = (() => {
  const candidate = process.env.NEXT_PUBLIC_TAWK_EMBED_URL?.trim() || DEFAULT_TAWK_EMBED_URL;
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" && url.hostname === "embed.tawk.to";
  } catch {
    return false;
  }
})();

// Low-friction "ask a question" door. Opens the Tawk chat (loading it on demand via
// the __openChat trigger in TawkToChat). Captures the curious-but-not-ready-to-quote
// majority as a conversation instead of a lost visit.
export default function AskExpertsButton({ className }: { className?: string }) {
  const { preferences, openPreferences } = useConsent();

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window === "undefined") return;
        if (!TAWK_CONFIGURED) {
          window.location.assign("/contact#contact-quote-form");
          return;
        }
        if (!preferences?.functional) {
          window.__tawkOpenPending = true;
          openPreferences("chat");
          return;
        }
        (window as { __openChat?: () => void }).__openChat?.();
      }}
      className={className}
    >
      Have a question? Ask our experts <span aria-hidden="true">→</span>
    </button>
  );
}
