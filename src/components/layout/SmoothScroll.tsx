"use client";

import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

// Matches `scroll-padding-top` on html in globals.css, so the native hash jump
// and the Lenis animation settle on the same pixel instead of fighting by 4px.
const HEADER_OFFSET = 100;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopViewport = window.matchMedia("(min-width: 768px)");
    let lenis: Lenis | null = null;
    let disposed = false;

    const destroyLenis = () => {
      lenis?.destroy();
      lenis = null;
    };

    const init = () => {
      if (lenis || disposed || reducedMotion.matches || !desktopViewport.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1,
        // Anchors are handled below instead of by Lenis. See onAnchorClick.
        anchors: false,
        stopInertiaOnNavigate: true,
      });
    };

    // Lenis resolves an element target as `rect.top + this.animatedScroll`, its own
    // internal scroll value rather than the document's. That value has not synced
    // with the page before the first real scroll event, so on a freshly loaded page
    // every contents link landed short by the drift: measured at 654px on the DIY
    // cost article and over 3,000px on the AEO playbook, putting the heading below
    // the fold instead of under the header. Passing an absolute pixel position skips
    // that arithmetic. The native jump still runs, so the hash and focus target are
    // unchanged; this only corrects where Lenis then settles.
    const onAnchorClick = (event: MouseEvent) => {
      if (!lenis || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const url = new URL(link.href, window.location.href);
      const here = new URL(window.location.href);
      if (url.host !== here.host || url.pathname !== here.pathname || !url.hash) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      lenis.scrollTo(target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
    };
    document.addEventListener("click", onAnchorClick);

    const reconcile = () => {
      if (reducedMotion.matches || !desktopViewport.matches) {
        destroyLenis();
        return;
      }

      init();
    };

    reducedMotion.addEventListener("change", reconcile);
    desktopViewport.addEventListener("change", reconcile);
    reconcile();

    return () => {
      disposed = true;
      document.removeEventListener("click", onAnchorClick);
      reducedMotion.removeEventListener("change", reconcile);
      desktopViewport.removeEventListener("change", reconcile);
      destroyLenis();
    };
  }, []);

  // This adds no DOM wrapper and makes every Framer Motion consumer respect the
  // operating-system motion preference, including dialogs and audit states.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
