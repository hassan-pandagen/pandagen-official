"use client";

// Low-friction "ask a question" door. Opens the Tawk chat (loading it on demand via
// the __openChat trigger in TawkToChat). Captures the curious-but-not-ready-to-quote
// majority as a conversation instead of a lost visit.
export default function AskExpertsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window === "undefined") return;
        (window as { __openChat?: () => void }).__openChat?.();
      }}
      className={className}
    >
      Have a question? Ask our experts <span aria-hidden="true">→</span>
    </button>
  );
}
