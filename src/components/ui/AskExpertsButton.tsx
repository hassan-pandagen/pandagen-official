"use client";

import { useConsent } from "@/components/consent/ConsentProvider";

const TAWK_CONFIGURED = (() => {
  const candidate = process.env.NEXT_PUBLIC_TAWK_EMBED_URL?.trim();
  if (!candidate) return false;
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
