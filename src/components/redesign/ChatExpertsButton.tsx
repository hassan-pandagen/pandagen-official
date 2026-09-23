"use client";

import type { CSSProperties, ReactNode } from "react";

// Opens the live chat exactly as ServicesHub.tsx does today (window.__openChat,
// the human chat widget). Deliberately NOT the AI assistant: this button says
// "experts", and sending that click to a bot would misdescribe who answers.
export default function ChatExpertsButton({ className, style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => {
        (window as { __openChat?: () => void }).__openChat?.();
      }}
    >
      {children}
    </button>
  );
}
