"use client";

import { useState } from "react";
import Link from "next/link";
import AssistantIcon from "./AssistantIcon";
import ui from "./PandaAssistant.module.css";
import { ArrowUp } from "lucide-react";
import { assistantSuggestions } from "@/lib/assistant/presets";
import { T } from "@/components/redesign/tokens";

const INK = T.ink;
const QUIET = T.quiet;

export default function AssistantPrompt() {
  const [input, setInput] = useState("");
  const ask = (question: string) => {
    if (!question.trim()) return;
    window.dispatchEvent(new CustomEvent("open-assistant", { detail: question }));
    setInput("");
  };
  return (
      <div className={ui.inlineCard}>
        <div className={ui.inlineTitle}><AssistantIcon /><div>Panda Assistant<small>Your AI guide to a better website</small></div></div>

        <div className="mb-3 flex flex-col items-start gap-2">
          {assistantSuggestions.map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => ask(suggestion)}
              className="rounded-full border px-4 py-2 text-left text-[15px] transition-colors hover:bg-black/[0.04]"
              style={{ borderColor: "rgba(28,25,23,0.18)", color: INK }}>
              {suggestion}
            </button>
          ))}
        </div>

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
            className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-[#5E5B55]"
            style={{ color: INK }}
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={!input.trim()}
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
  );
}
