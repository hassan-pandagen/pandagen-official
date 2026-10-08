"use client";

import type { CSSProperties, ReactNode } from "react";

// "Chat with our experts". Opens the chat panel (7 Oct 2026, replacing the
// Tawk.to widget). When Hassan is online the panel offers to chat with him
// directly; when he isn't, it offers a call or a message, and the assistant
// can answer general questions in the meantime.
export default function ChatExpertsButton({ className, style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => window.dispatchEvent(new Event("open-assistant"))}
    >
      {children}
    </button>
  );
}
