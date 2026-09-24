"use client";

import type { CSSProperties, ReactNode } from "react";
import { hasConsent } from "@/components/consent/ConsentProvider";

// "Chat with our experts". If the visitor has already allowed live chat, this
// opens the human chat (Tawk.to) exactly as ServicesHub does. If they have not,
// it opens the founders' enquiry form instead of the cookie settings dialog:
// the owner found a settings panel a confusing answer to "chat" (24 Sep 2026).
// Chat still never loads without consent. Deliberately NOT the AI assistant:
// the label says experts, and a bot is not one.
export default function ChatExpertsButton({ className, style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => {
        const openChat = (window as { __openChat?: () => void }).__openChat;
        if (hasConsent("functional") && openChat) openChat();
        else window.dispatchEvent(new Event("open-quote-modal"));
      }}
    >
      {children}
    </button>
  );
}
