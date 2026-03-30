"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TocHeading {
  id: string;
  text: string;
}

function toKebabCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

interface TableOfContentsProps {
  /** CSS selector for the container to scan for h2 elements. Defaults to "article". */
  containerSelector?: string;
}

export default function TableOfContents({
  containerSelector = "article",
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Discover headings on mount
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const h2Elements = container.querySelectorAll("h2");
    const discovered: TocHeading[] = [];

    h2Elements.forEach((h2) => {
      if (!h2.id) {
        h2.id = toKebabCase(h2.textContent || "");
      }
      discovered.push({ id: h2.id, text: h2.textContent || "" });
    });

    setHeadings(discovered);
  }, [containerSelector]);

  // Track active heading with IntersectionObserver
  useEffect(() => {
    if (headings.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the topmost visible heading
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0.1,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      // Collapse on mobile after clicking
      setIsOpen(false);
    },
    [],
  );

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="max-w-sm rounded-xl border border-stone-200 bg-stone-50 p-5 md:sticky md:top-24"
    >
      {/* Header: toggle on mobile, static on desktop */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between md:pointer-events-none"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
          In This Article
        </span>
        <svg
          className={`h-4 w-4 text-stone-400 transition-transform duration-200 md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Link list: hidden on mobile when collapsed, always visible on desktop */}
      <ul
        className={`mt-3 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } md:max-h-none md:opacity-100`}
      >
        {headings.map(({ id, text }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`block border-l-2 py-1 pl-3 text-sm transition-colors duration-150 ${
                  isActive
                    ? "border-cognac font-medium text-cognac"
                    : "border-transparent text-stone-600 hover:text-cognac"
                }`}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
