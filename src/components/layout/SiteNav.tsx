"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";
import { PHONE } from "@/data/company-facts";
import { T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Floating navigation bar with a full-screen menu. Redesign candidate, 23 Sep 2026.
// ─────────────────────────────────────────────────────────────────────────────
// Replaces Header.tsx only once approved; until then it is used by the
// /preview route alone. It carries everything Header.tsx carries, because each
// piece there has a dated reason:
//   - the service list keeps its 16 Sep order: what you are buying first, then
//     the platform you are leaving. The platform pages rank on those words.
//   - both founder pages stay linked (restored 11 Aug: /about/imran had been
//     all but orphaned).
//   - phone, email and the language switcher.
//   - the single QuoteModal instance that every "open-quote-modal" event opens.
//
// The menu is always in the HTML, hidden and inert while closed, so every link
// is present for crawlers on first load and nothing is fetched to open it.
// ─────────────────────────────────────────────────────────────────────────────

const QuoteModal = dynamic(() => import("@/components/ui/QuoteModal"), { ssr: false, loading: () => null });

const INK = T.ink;
const QUIET = T.quiet;
const ACCENT = T.accent; // logo dot and hover only; fills below use INK
const PAPER = T.paper;

const primary = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const buying = [
  { name: "Websites", href: "/services" },
  { name: "Online stores", href: "/services/ecommerce" },
  { name: "Custom software", href: "/services/custom-engineering" },
  { name: "AI SEO", href: "/services/ai-seo" },
];

const leaving = [
  { name: "Leaving WordPress", href: "/services/wordpress-migration" },
  { name: "Leaving WooCommerce", href: "/services/woocommerce" },
  { name: "Leaving Wix", href: "/services/wix" },
  { name: "Leaving Squarespace", href: "/services/squarespace" },
  { name: "Webflow", href: "/services/webflow" },
  { name: "GoHighLevel", href: "/services/gohighlevel" },
];

const company = [
  { name: "Hassan Jamal, Lead Engineer", href: "/about/hassan" },
  { name: "Imran Raza Ladhani, Lead Architect", href: "/about/imran" },
  { name: "Partners", href: "/partners" },
  { name: "Manifesto", href: "/manifesto" },
  { name: "Editorial policy", href: "/editorial-policy" },
  { name: "Security", href: "/security" },
];

// Independent client work only. Founder-affiliated projects are labelled as
// such on /work and are left out here, where there is no room for the label.
const shots = [
  { src: "/work/northdeck-group.png", name: "NorthDeck Group", href: "/work" },
  { src: "/work/emblematic-studio.png", name: "Emblematic Studio", href: "/work/emblematic-studio" },
  { src: "/work/mycustompatches.png", name: "MyCustomPatches", href: "/work/mycustompatches" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  // One QuoteModal for the page; any CTA opens it with this event.
  useEffect(() => {
    const openQuote = () => {
      setOpen(false);
      setQuoteOpen(true);
    };
    window.addEventListener("open-quote-modal", openQuote);
    return () => window.removeEventListener("open-quote-modal", openQuote);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on navigation, including back/forward, which no link click sees.
  // Adjusted during render rather than in an effect (React's documented pattern
  // for resetting state when a value changes).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Wait a tick: the menu is visibility:hidden until this render commits, and
    // a hidden element cannot take focus.
    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector<HTMLElement>("nav a")?.focus();
    }, 60);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !menuRef.current) return;
      // Keep focus inside the open menu (the close button is inside it).
      const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a,button,select")).filter(
        (el) => !el.hasAttribute("disabled"),
      );
      if (!items.length) return;
      const [firstEl, lastEl] = [items[0], items[items.length - 1]];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const openQuote = () => window.dispatchEvent(new Event("open-quote-modal"));

  return (
    <>
      {/* ── Floating bar ─────────────────────────────────────────────────── */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex justify-center px-4 pt-4 md:pt-5">
        <div
          className="pointer-events-auto flex w-full max-w-[560px] items-center justify-between gap-3 py-2 pl-5 pr-2 transition-shadow duration-300"
          style={{
            backgroundColor: "rgba(235,233,228,0.86)",
            backdropFilter: "blur(14px) saturate(1.2)",
            WebkitBackdropFilter: "blur(14px) saturate(1.2)",
            border: "1px solid rgba(28,25,23,0.08)",
            boxShadow: scrolled ? "0 10px 30px -12px rgba(28,25,23,0.28)" : "0 1px 0 rgba(255,255,255,0.5) inset",
          }}
        >
          <Link href="/" className="text-[19px] tracking-[-0.01em]" style={{ color: INK, fontFamily: "Zodiak, Georgia, serif", fontWeight: 700 }}>
            PandaCodeGen<span style={{ color: ACCENT }}>.</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openQuote}
              className="cta-solid hidden px-4 py-2.5 text-[14px] font-medium sm:inline-flex"
              style={{ backgroundColor: INK, color: PAPER }}
            >
              Talk to the founders
            </button>
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
              className="group flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
              style={{ border: `1px solid ${INK}` }}
            >
              <span className="sr-only">Open menu</span>
              <span className="h-px w-5 bg-[#1C1917] transition-transform group-hover:translate-x-0.5" />
              <span className="h-px w-5 bg-[#1C1917] transition-transform group-hover:-translate-x-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen menu ─────────────────────────────────────────────── */}
      <div
        id="site-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className="fixed inset-0 z-[70] overflow-y-auto transition-[opacity,visibility] duration-300"
        style={{ backgroundColor: PAPER, opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}
      >
        <div className="mx-auto grid min-h-full max-w-[1440px] gap-12 px-6 pb-10 pt-6 md:px-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex items-center justify-between lg:col-span-12">
            <Link href="/" onClick={() => close(false)} className="text-[19px]" style={{ color: INK, fontFamily: "Zodiak, Georgia, serif", fontWeight: 700 }}>
              PandaCodeGen<span style={{ color: ACCENT }}>.</span>
            </Link>
            <button
              type="button"
              onClick={() => close()}
              className="flex h-11 w-11 items-center justify-center text-[22px] leading-none text-white"
              style={{ backgroundColor: INK }}
            >
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          {/* Primary pages, large. */}
          <nav aria-label="Main" className="lg:col-span-5">
            <ul className="space-y-1">
              {primary.map((l, i) => (
                <li
                  key={l.href}
                  className="transition-[opacity,transform] duration-500"
                  style={{
                    transitionDelay: open ? `${80 + i * 45}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(14px)",
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => close(false)}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className="inline-block text-[44px] leading-[1.08] tracking-[-0.02em] no-underline transition-colors hover:text-[#AD3D0B] md:text-[64px]"
                    style={{ color: INK, fontFamily: "Zodiak, Georgia, serif", fontWeight: 700, textDecoration: "none" }}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Everything else, grouped the way a buyer thinks about it. */}
          <div className="grid gap-10 text-[16px] sm:grid-cols-2 lg:col-span-4 lg:content-start lg:pt-4">
            <MenuGroup title="What you are buying" links={buying} onPick={() => close(false)} />
            <MenuGroup title="Moving from" links={leaving} onPick={() => close(false)} />
            <MenuGroup title="The company" links={company} onPick={() => close(false)} />
            <div>
              <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.12em]" style={{ color: QUIET }}>
                Talk to us
              </p>
              <ul className="space-y-1.5">
                <li>
                  <a href="mailto:info@pandacodegen.com" style={{ color: INK }}>
                    info@pandacodegen.com
                  </a>
                </li>
                <li>
                  <a href={`tel:${PHONE.e164}`} style={{ color: INK }}>
                    {PHONE.display}
                  </a>
                </li>
              </ul>
              <div className="mt-4" style={{ color: INK }}>
                <LocaleSwitcher label="Language" className="text-sm" />
              </div>
            </div>
          </div>

          {/* Real finished work, fanned. */}
          <div className="relative hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              {shots.map((s, i) => (
                <Link
                  key={s.src}
                  href={s.href}
                  onClick={() => close(false)}
                  className="group relative mb-6 block overflow-hidden transition-[opacity,transform] duration-700"
                  style={{
                    transitionDelay: open ? `${160 + i * 90}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? `rotate(${[-2, 1.5, -1][i]}deg)` : "translateY(24px)",
                    boxShadow: "0 18px 40px -18px rgba(28,25,23,0.45)",
                  }}
                >
                  <Image
                    src={s.src}
                    alt={`${s.name} website`}
                    width={1912}
                    height={914}
                    sizes="(min-width: 1024px) 300px, 0px"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span
                    className="absolute bottom-2 left-2 px-2 py-1 text-[12px]"
                    style={{ backgroundColor: "rgba(235,233,228,0.92)", color: INK }}
                  >
                    {s.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-12">
            <button
              type="button"
              onClick={openQuote}
              className="cta-solid px-7 py-4 text-[17px] font-medium"
              style={{ backgroundColor: INK, color: PAPER }}
            >
              Talk to the founders
            </button>
          </div>
        </div>
      </div>

      {quoteOpen && <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />}
      <style>{`
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (prefers-reduced-motion: reduce) { .cta-solid { transition: none; } }
      `}</style>
    </>
  );
}

function MenuGroup({
  title,
  links,
  onPick,
}: {
  title: string;
  links: { name: string; href: string }[];
  onPick: () => void;
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.12em]" style={{ color: QUIET }}>
        {title}
      </p>
      <ul className="space-y-1.5">
        {links.map((l) => (
          <li key={l.href + l.name}>
            <Link href={l.href} onClick={onPick} style={{ color: INK }} className="hover:text-[#AD3D0B]">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
