"use client";

import { useState } from "react";
import Link from "next/link";
import AssistantIcon from "./AssistantIcon";
import ui from "./PandaAssistant.module.css";
import { ArrowUpRight } from "lucide-react";
import { assistantWelcome } from "@/lib/assistant/presets";

export default function AssistantPrompt() {
  const [input, setInput] = useState("");
  const ask = (question: string) => {
    window.dispatchEvent(new CustomEvent("open-assistant", { detail: question.trim() || undefined }));
    setInput("");
  };
  return (
      <div className={ui.inlineCard}>
        <div className={ui.inlineTitle}>
          <AssistantIcon />
          <div>Panda Assistant</div>
          <span className={ui.aiLabel}>AI guide</span>
        </div>

        {/* h2, not h3: the card sits straight under the homepage h1 (Lighthouse heading-order, 9 Oct 2026). */}
        <h2 className={ui.inlineWelcome} style={{ textTransform: "none" }}>{assistantWelcome.heading} <span>{assistantWelcome.accent}</span></h2>
        <p className={ui.inlineIntro}>{assistantWelcome.body}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const submitter = (e.nativeEvent as SubmitEvent).submitter;
            if (submitter instanceof HTMLElement) submitter.focus();
            ask(input);
          }}
          className={ui.inlineComposer}
        >
          <label htmlFor="assistant-inline" className="sr-only">
            Ask a question
          </label>
          <textarea
            id="assistant-inline"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={600}
            placeholder="I have a website in mind…"
            rows={2}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
                event.preventDefault();
                ask(input);
              }
            }}
            className={ui.inlineInput}
          />
          <div className={ui.inlineComposerActions}>
            <span>Start with a question.</span>
            <button
              type="submit"
              className={ui.inlineSend}
              aria-haspopup="dialog"
            >
              {input.trim() ? "Send question" : "Let’s talk"}
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </form>
        <div className={ui.inlineFooter}>
          <span>AI answers can contain mistakes.</span>
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy
          </Link>
        </div>
      </div>
  );
}
