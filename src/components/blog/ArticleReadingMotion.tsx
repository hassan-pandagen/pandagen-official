"use client";

import { useEffect, useRef } from "react";

/** Reading progress and restrained reveal for images only. */
export default function ArticleReadingMotion() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".article-preview-content");
    if (!article) return;

    let frame = 0;
    const update = () => {
      if (bar.current) {
        const start = article.getBoundingClientRect().top + window.scrollY;
        const distance = Math.max(1, article.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
        bar.current.style.transform = `scaleX(${progress})`;
      }
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let observer: IntersectionObserver | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) {
          entry.target.classList.remove("article-reveal-pending");
          observer?.unobserve(entry.target);
        }
      }, { rootMargin: "0px 0px -7% 0px", threshold: 0.01 });
      for (const element of article.querySelectorAll<HTMLElement>("figure")) {
        if (element.getBoundingClientRect().top > window.innerHeight * 0.9) {
          element.classList.add("article-reveal-pending");
          observer.observe(element);
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
      article.querySelectorAll(".article-reveal-pending").forEach(element => element.classList.remove("article-reveal-pending"));
    };
  }, []);

  return <div ref={bar} aria-hidden="true" className="fixed inset-x-0 top-0 z-70 h-[3px] origin-left bg-cognac" style={{ transform: "scaleX(0)" }} />;
}
