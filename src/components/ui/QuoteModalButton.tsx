"use client";

import type { ReactNode } from "react";

/**
 * Opens the global quote form modal (mounted once in Header, listens for the
 * "open-quote-modal" event). Lets server-component blog pages surface the
 * low-friction lead form as their PRIMARY CTA, with Cal.com booking secondary.
 */
export default function QuoteModalButton({
  className,
  children,
  cta = "blog_quote",
  location = "blog",
}: {
  className?: string;
  children: ReactNode;
  cta?: string;
  /** Analytics location label; defaults to "blog", where this button started. */
  location?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window === "undefined") return;
        (window as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "cta_click", {
          cta,
          location,
        });
        window.dispatchEvent(new Event("open-quote-modal"));
      }}
      className={className}
    >
      {children}
    </button>
  );
}
