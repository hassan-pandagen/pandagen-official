"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

// Lightweight scroll-triggered fade-up wrapper. Replaces framer-motion's
// `motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}`
// pattern with a 1.5KB IntersectionObserver + CSS transition. Bundle savings:
// ~37KB gzipped vs framer-motion across the 30+ components that used basic fade-ups.
type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  rootMargin?: string;
  id?: string;
};

export default function FadeIn({
  children,
  as: Tag = "div",
  className,
  style,
  delay = 0,
  rootMargin = "0px 0px -10% 0px",
  id,
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.01 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  const props = {
    ref,
    id,
    className,
    style,
    "data-reveal": visible ? "visible" : "hidden",
    "data-stagger": delay > 0 ? String(delay) : undefined,
  } as Record<string, unknown>;

  return <Tag {...props}>{children}</Tag>;
}
