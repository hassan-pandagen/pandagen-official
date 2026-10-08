"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./ArticleReadingCue.module.css";

/** A small reading cue for long articles. It never changes the article itself. */
export default function ArticleReadingCue() {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const topFill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("main article");
    const indicator = root.current;
    if (!indicator || !article?.querySelector("h1")) {
      if (indicator) indicator.hidden = true;
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const distance = Math.max(1, article.offsetHeight - window.innerHeight);
      const value = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      indicator.hidden = article.offsetHeight < window.innerHeight * 1.5 || rect.bottom <= 0 || rect.top >= window.innerHeight;
      if (topFill.current) topFill.current.style.transform = `scaleX(${value})`;
      frame = 0;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = "ResizeObserver" in window ? new ResizeObserver(schedule) : null;
    observer?.observe(article);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div ref={root} className={styles.indicator} hidden>
      <div className={styles.topTrack} aria-hidden="true"><div ref={topFill} className={styles.topFill} /></div>
    </div>
  );
}
