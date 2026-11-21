"use client";

import type { ReactNode } from "react";
import { setQuotePrefill } from "@/lib/quotePrefill";

// The homepage checklist shares its choices with the written-check buttons on that page.
let checklistTopics: string[] = [];
export function setChecklistTopics(topics: string[]) { checklistTopics = topics; }

export default function WrittenCheckButton({ className, children, location }: { className?: string; children: ReactNode; location: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        (window as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "cta_click", { cta: "written_check", location, ticked: checklistTopics.length });
        setQuotePrefill({ checklistTopics });
        window.dispatchEvent(new Event("open-quote-modal"));
      }}
    >
      {children}
    </button>
  );
}
