"use client";
import { MessageSquare } from "lucide-react";
export default function AskAssistantButton({ className }: { className?: string }) {
  return <button type="button" className={className} aria-haspopup="dialog" onClick={event => {
    event.currentTarget.focus({ preventScroll: true });
    window.dispatchEvent(new CustomEvent("open-assistant"));
  }}>
    <MessageSquare size={17} aria-hidden="true" /> Ask Panda Assistant
  </button>;
}
