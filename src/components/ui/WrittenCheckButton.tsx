"use client";

import type { ReactNode } from "react";
import { setQuotePrefill } from "@/lib/quotePrefill";

/** First line of the prefill; QuoteModal reads it to show the written-check heading. */
export const WRITTEN_CHECK_MARK = "FREE WRITTEN CHECK";

// 21 Nov 2026: the "Get your free written check" buttons used to link to /contact, which
// never mentioned the check. This opens the shared quote modal (same submitQuoteLead path,
// so the CRM and Slack get the lead) with the questions in the message box, where the
// visitor can see and edit them. The first line tells the founders what was asked for.
const QUESTIONS = `${WRITTEN_CHECK_MARK}
My business:
How customers book and pay today:
What we still do by hand (reminders, follow-ups, certificates, bookkeeping):
What I'd most like fixed:`;

export default function WrittenCheckButton({ className, children, location }: { className?: string; children: ReactNode; location: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        (window as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "cta_click", { cta: "written_check", location });
        setQuotePrefill(QUESTIONS);
        window.dispatchEvent(new Event("open-quote-modal"));
      }}
    >
      {children}
    </button>
  );
}
