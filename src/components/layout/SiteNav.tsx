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
// In-flow sticky navigation that contracts on scroll, with dropdowns and a menu panel.
// ─────────────────────────────────────────────────────────────────────────────
// Shared by the live redesign and preview routes. Keep the primary routes,
// founder profiles, contact methods and language switcher reachable here.
//   - the service list shows what you can build first, then platform options.
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
// 7 Oct 2026, owner: the small grey mono labels made the five link groups run
// together. Each group now starts with a rule and a bold heading in the text
// accent, which keeps AA contrast on the paper background.
const HEADING = T.accentText;
const GROUP_HEADING = "mb-4 border-t border-[#1C1917]/25 pt-4 text-[13px] font-bold uppercase tracking-[0.14em]";
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
  { name: "Small business websites", href: "/services/small-business-website-design" },
  { name: "Medical websites", href: "/services/medical-website-design" },
  { name: "WordPress websites & migration", href: "/services/wordpress-migration" },
  { name: "Online stores", href: "/services/ecommerce" },
  { name: "Custom software", href: "/services/custom-engineering" },
  { name: "CMS development", href: "/services/cms-development" },
  { name: "Backend development", href: "/services/backend-development" },
  { name: "AI SEO & GEO", href: "/services/ai-seo" },
];

const platformOptions = [
  { name: "WooCommerce stores", href: "/services/woocommerce" },
  { name: "Wix websites & migration", href: "/services/wix" },
  { name: "Squarespace websites & migration", href: "/services/squarespace" },
  { name: "Webflow websites & migration", href: "/services/webflow" },
  { name: "GoHighLevel", href: "/services/gohighlevel" },
];

const company = [
  { name: "Hassan Jamal, Lead Engineer", href: "/about/hassan" },
  { name: "Imran Raza Ladhani, Head of Marketing", href: "/about/imran" },
  { name: "Partners", href: "/partners" },
  { name: "Manifesto", href: "/manifesto" },
  { name: "Editorial policy", href: "/editorial-policy" },
  { name: "Security", href: "/security" },
];

// Independent client work only. Founder-affiliated projects are labelled as
// such on /work and are left out here, where there is no room for the label.
const shots = [
  { src: "/work/ladies-4-jesus.png", name: "Ladies 4 Jesus", href: "/work/ladies-4-jesus" },
  { src: "/work/emblematic-studio.png", name: "Emblematic Studio", href: "/work/emblematic-studio" },
  { src: "/work/mycustompatches.png", name: "MyCustomPatches", href: "/work/mycustompatches" },
];

const workProjects = [
  { name: "A Step Above Medical", href: "/work/a-step-above-medical", image: "/work/a-step-above-medical-preview-homepage.png", description: "Class bookings and a staff portal." },
  { name: "Ladies 4 Jesus", href: "/work/ladies-4-jesus", image: "/work/ladies-4-jesus.png", description: "Community stories, simple publishing." },
  { name: "Emblematic Studio", href: "/work/emblematic-studio", image: "/work/emblematic-studio.png", description: "A product catalogue built for enquiries." },
  { name: "MyCustomPatches", href: "/work/mycustompatches", image: "/work/mycustompatches.png", description: "An online storefront for custom patches." },
  { name: "Panda Patches", href: "/work/panda-patches", image: "/work/panda-patches.png", description: "From storefront to order management.", note: "Founder-affiliated business" },
];

const dropdowns: Record<string, { name: string; href: string; note?: string }[]> = {
  Work: [{ name: "All work", href: "/work" }, ...workProjects],
  Services: [
    { name: "All services", href: "/services" },
    ...buying.slice(1),
    ...platformOptions,
  ],
  About: [
    { name: "About PandaCodeGen", href: "/about" },
    ...company.slice(0, 4),
  ],
};

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  // 10 Oct 2026: the menu's links are always in the server HTML so crawlers can follow
  // them (the closed panel is visibility:hidden, so it stays out of the tab order and
  // the accessibility tree). Only the screenshot column waits for the first open, so a
  // closed menu never downloads those images.
  const [menuMounted, setMenuMounted] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownX, setDropdownX] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const topNavRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    // preventScroll: focus lands while the page is still locked, and Chrome
    // then scrolled to the sticky button's place at the top of the page, so
    // closing the menu threw the reader back to the top (7 Oct 2026).
    if (returnFocus) buttonRef.current?.focus({ preventScroll: true });
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
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const compact = window.scrollY > 110;
        setScrolled(compact);
        if (compact) setActiveDropdown(null);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!topNavRef.current?.contains(event.target as Node) && !dropdownRef.current?.contains(event.target as Node)) setActiveDropdown(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // Close on navigation, including back/forward, which no link click sees.
  // Adjusted during render rather than in an effect (React's documented pattern
  // for resetting state when a value changes).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setActiveDropdown(null);
  }

  useEffect(() => {
    if (!open) return;
    // html is the element that scrolls on this site (globals.css gives it
    // overflow-x: clip), so locking body alone left the page free to move.
    const prev = document.body.style.overflow;
    const prevRoot = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
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
      document.documentElement.style.overflow = prevRoot;
    };
  }, [open, close]);

  const openQuote = () => window.dispatchEvent(new Event("open-quote-modal"));
  const openMenu = (button: HTMLButtonElement) => {
    buttonRef.current = button;
    setActiveDropdown(null);
    setMenuMounted(true);
    setOpen(true);
  };
  const showDropdown = (name: string, button: HTMLButtonElement) => {
    const width = name === "Work" ? 760 : name === "Services" ? 500 : 300;
    setDropdownX(Math.max(16, Math.min(button.getBoundingClientRect().left, window.innerWidth - width - 16)));
    dropdownTriggerRef.current = button;
    if (name === "Work" && activeDropdown !== "Work") setPreviewIndex(0);
    setActiveDropdown(name);
  };
  const preview = workProjects[previewIndex];

  return (
    <>
      {/* ── Floating bar ─────────────────────────────────────────────────── */}
      <header onMouseLeave={() => { if (!dropdownRef.current?.contains(document.activeElement)) setActiveDropdown(null); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActiveDropdown(null); }} onKeyDown={(event) => { if (event.key === "Escape" && activeDropdown) { setActiveDropdown(null); dropdownTriggerRef.current?.focus({ preventScroll: true }); } }} className={`sticky top-0 z-[60] flex min-h-[88px] items-center transition-colors duration-500 ${scrolled ? "border-b border-transparent bg-transparent" : "border-b border-[#1C1917]/15 bg-[#EBE9E4]"}`}>
        <div className={`mx-auto flex w-[calc(100%-16px)] items-center justify-between border px-2 transition-[max-width,min-height,padding,box-shadow,background-color,border-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none min-[380px]:w-[calc(100%-32px)] min-[380px]:px-4 md:px-6 xl:justify-start ${scrolled ? "min-h-[64px] max-w-[560px] gap-2 border-[#1C1917]/15 shadow-[0_14px_40px_-18px_rgba(28,25,23,.5)]" : "min-h-[86px] max-w-[1440px] gap-2 border-transparent sm:gap-6"}`} style={{ backgroundColor: scrolled ? "#EBE9E4" : "transparent" }}>
          <Link prefetch={false} href="/" className={`shrink-0 text-[16px] tracking-[-0.01em] transition-[font-size] duration-500 min-[380px]:text-[18px] sm:text-[21px] ${scrolled ? "sm:text-[19px]" : ""}`} style={{ color: INK, fontFamily: "Zodiak, Georgia, serif", fontWeight: 700 }}>PandaCodeGen<span style={{ color: ACCENT }}>.</span></Link>
          <nav ref={topNavRef} aria-label="Primary navigation" inert={scrolled} className={`hidden min-w-0 items-center gap-1 whitespace-nowrap transition-[max-width,opacity,transform] duration-500 motion-reduce:transition-none xl:ml-[clamp(35px,4vw,85px)] xl:flex ${scrolled ? "pointer-events-none max-w-0 scale-90 overflow-hidden opacity-0" : "max-w-[720px] scale-100 opacity-100"}`}>
            {primary.map((link) => dropdowns[link.name] ? (
              <button key={link.href} type="button" aria-expanded={activeDropdown === link.name} aria-controls="nav-dropdown" onMouseEnter={(event) => showDropdown(link.name, event.currentTarget)} onClick={(event) => showDropdown(link.name, event.currentTarget)} onKeyDown={(event) => {
                if (event.key === "ArrowDown" || (event.key === "Tab" && !event.shiftKey && activeDropdown === link.name)) {
                  event.preventDefault();
                  showDropdown(link.name, event.currentTarget);
                  requestAnimationFrame(() => dropdownRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
                }
              }} className={`flex items-center gap-1 px-3 py-3 text-[14px] font-semibold transition-colors hover:text-[#AD3D0B] focus-visible:text-[#AD3D0B] ${pathname.startsWith(link.href) ? "text-[#AD3D0B]" : "text-[#1C1917]"}`}>
                {link.name}<span aria-hidden="true" className={`text-[10px] transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`}>⌄</span>
              </button>
            ) : (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`px-3 py-3 text-[14px] font-semibold transition-colors hover:text-[#AD3D0B] focus-visible:text-[#AD3D0B] ${pathname === link.href ? "text-[#AD3D0B]" : "text-[#1C1917]"}`}>{link.name}</Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1 min-[380px]:gap-2 xl:ml-auto">
            <button type="button" onClick={openQuote} className="cta-solid inline-flex min-h-11 items-center px-2 py-2 text-[12px] font-semibold sm:hidden" style={{ backgroundColor: INK, color: PAPER }} aria-label="Talk to the founders">Talk</button>
            <button type="button" onClick={openQuote} className="cta-solid hidden min-h-11 items-center px-4 py-2 text-[14px] font-semibold sm:inline-flex" style={{ backgroundColor: INK, color: PAPER }}>Talk to the founders</button>
            <button type="button" aria-expanded={open} aria-controls="site-menu" aria-label="Open site menu" onClick={(event) => openMenu(event.currentTarget)} className="flex h-11 items-center gap-1 border border-[#1C1917] px-2 text-[13px] font-semibold text-[#1C1917] transition-colors hover:bg-[#1C1917] hover:text-white focus-visible:bg-[#1C1917] focus-visible:text-white min-[380px]:gap-2 min-[380px]:px-3"><span>Menu</span><span aria-hidden="true">☰</span></button>
          </div>
        </div>
        <div id="nav-dropdown" ref={dropdownRef} inert={!activeDropdown || scrolled} data-lenis-prevent className={`absolute top-full z-[65] hidden max-h-[calc(100dvh-104px)] overflow-y-auto overscroll-contain border border-[#1C1917]/15 shadow-[0_24px_60px_-20px_rgba(28,25,23,.35)] transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none xl:grid ${activeDropdown === "Work" ? "rounded-xl p-2" : "p-4"} ${activeDropdown && !scrolled ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`} style={{ left: dropdownX, width: activeDropdown === "Work" ? 760 : activeDropdown === "Services" ? 500 : 300, maxWidth: "calc(100vw - 32px)", backgroundColor: "#F5F4F0", gridTemplateColumns: activeDropdown === "Services" ? "repeat(2,minmax(0,1fr))" : "1fr", gap: "0 22px" }}>
          {activeDropdown === "Work" ? (
            <div className="grid grid-cols-[280px_minmax(0,1fr)] gap-2">
              <div className="px-1 pb-1 pt-3">
                <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5E5B55]">Selected work</p>
                {workProjects.map((project, index) => (
                  <Link key={project.href} href={project.href} prefetch={false} onMouseEnter={() => setPreviewIndex(index)} onFocus={() => setPreviewIndex(index)} onClick={() => setActiveDropdown(null)} aria-current={pathname === project.href ? "page" : undefined} className={`group relative block rounded-md px-3 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#AD3D0B] ${previewIndex === index ? "bg-[#E8E3DA] text-[#87300A]" : "text-[#1C1917] hover:bg-[#E8E3DA]"}`}>
                    <span className="flex items-center justify-between gap-2 text-[14px] font-semibold">{project.name}<span aria-hidden="true" className={previewIndex === index ? "opacity-100" : "opacity-0"}>&rarr;</span></span>
                    <span className="mt-1 block text-[12px] leading-relaxed text-[#5E5B55]">{project.note || project.description}</span>
                  </Link>
                ))}
                <Link href="/work" prefetch={false} onClick={() => setActiveDropdown(null)} className="mx-3 mt-3 flex items-center justify-between border-t border-[#1C1917]/15 py-3 text-[12px] font-semibold text-[#87300A] hover:underline">Explore all work <span aria-hidden="true">&rarr;</span></Link>
              </div>
              <Link href={preview.href} prefetch={false} onClick={() => setActiveDropdown(null)} className="group flex min-w-0 flex-col justify-center rounded-lg border border-[#1C1917]/10 bg-[#EBE9E4] p-5 text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#AD3D0B]" aria-label={`View ${preview.name} case study`}>
                <div key={preview.href} className="work-nav-preview">
                  <div className="overflow-hidden rounded-md border border-[#1C1917]/15 bg-[#F5F4F0] shadow-[0_12px_28px_-14px_rgba(28,25,23,.3)]">
                    <div aria-hidden="true" className="flex h-6 items-center gap-1 border-b border-[#1C1917]/10 px-2"><span className="h-1.5 w-1.5 rounded-full bg-[#1C1917]/25" /><span className="h-1.5 w-1.5 rounded-full bg-[#1C1917]/15" /><span className="h-1.5 w-1.5 rounded-full bg-[#1C1917]/15" /></div>
                    <div className="relative aspect-[16/10]">
                      <Image src={preview.image} alt={`${preview.name} website preview`} fill sizes="400px" className="object-cover object-top" />
                    </div>
                  </div>
                  <p className="mb-2 mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#87300A]">{preview.note || "Client project"}</p>
                  <p className="text-[24px] leading-tight" style={{ fontFamily: "Zodiak, Georgia, serif", fontWeight: 700 }}>{preview.name}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#5E5B55]">{preview.description}</p>
                </div>
                <span className="mt-6 flex items-center justify-between border-t border-[#1C1917]/15 pt-4 text-[12px] font-semibold text-[#87300A] group-hover:underline">View case study <span aria-hidden="true">&rarr;</span></span>
              </Link>
            </div>
          ) : (activeDropdown ? dropdowns[activeDropdown] : []).map((item) => <Link key={item.href} href={item.href} onClick={() => setActiveDropdown(null)} className="block border-b border-[#1C1917]/10 px-2 py-2.5 text-[14px] text-[#1C1917] transition-colors hover:text-[#AD3D0B] focus-visible:text-[#AD3D0B]"><span>{item.name}</span>{item.note && <span className="mt-0.5 block text-[11px] text-[#5E5B55]">{item.note}</span>}</Link>)}
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
        // 7 Oct 2026: without data-lenis-prevent the smooth-scroll library took
        // every wheel event, so the page behind moved and the menu itself could
        // not scroll (its lower links sat below the screen on a laptop).
        // overscroll-contain stops a scroll that reaches the end of the menu from
        // carrying on into the page.
        data-lenis-prevent
        onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}
        className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto overscroll-contain bg-[#1C1917]/65 px-3 py-3 transition-[opacity,visibility] duration-300 backdrop-blur-sm sm:px-6 sm:py-6"
        style={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}
      >
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 border border-[#1C1917] bg-[#EBE9E4] px-5 pb-7 pt-5 shadow-[0_26px_80px_rgba(0,0,0,.25)] transition-transform duration-300 motion-reduce:transition-none sm:px-8 lg:grid-cols-12 lg:gap-7" style={{ transform: open ? "scale(1)" : "scale(.97)" }}>
          <div className="flex items-center justify-between border-b border-[#1C1917]/25 pb-4 lg:col-span-12">
            <Link prefetch={false} href="/" onClick={() => close(false)} className="text-[19px]" style={{ color: INK, fontFamily: "Zodiak, Georgia, serif", fontWeight: 700 }}>
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
          <nav aria-label="Main" className="lg:col-span-4">
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
                    prefetch={open ? null : false}
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
            {/* 7 Oct 2026, owner: the button sat in its own row under every column,
                below the fold on a laptop. It now follows the main links. */}
            <button
              type="button"
              onClick={openQuote}
              className="cta-solid mt-10 px-7 py-4 text-[17px] font-medium"
              style={{ backgroundColor: INK, color: PAPER }}
            >
              Talk to the founders
            </button>
          </nav>

          {/* Everything else, grouped the way a buyer thinks about it. */}
          <div className="grid gap-x-10 gap-y-12 text-[17px] sm:grid-cols-2 lg:col-span-5 lg:content-start lg:pt-4">
            <MenuGroup active={open} title="Selected work" links={dropdowns.Work} onPick={() => close(false)} />
            <MenuGroup active={open} title="What you are buying" links={buying} onPick={() => close(false)} />
            <MenuGroup active={open} title="Platform options" links={platformOptions} onPick={() => close(false)} />
            <MenuGroup active={open} title="The company" links={company} onPick={() => close(false)} />
            <div>
              <p className={GROUP_HEADING} style={{ color: HEADING }}>
                Talk to us
              </p>
              <ul className="space-y-2">
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
          {menuMounted && <div className="relative hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              {shots.map((s, i) => (
                <Link
                  key={s.src}
                  href={s.href}
                  prefetch={open ? null : false}
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
          </div>}

        </div>
      </div>

      {quoteOpen && <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />}
      <style>{`
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        .work-nav-preview { animation: work-nav-reveal .2s ease-out; }
        @keyframes work-nav-reveal { from { opacity: .4; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .cta-solid { transition: none; } .work-nav-preview { animation: none; } }
      `}</style>
    </>
  );
}

// Hidden fixed-position menus can still intersect the viewport. Only warm their
// routes after opening; the links themselves are always in the HTML for crawlers.
function MenuGroup({
  active,
  title,
  links,
  onPick,
}: {
  active: boolean;
  title: string;
  links: { name: string; href: string; note?: string }[];
  onPick: () => void;
}) {
  return (
    <div>
      <p className={GROUP_HEADING} style={{ color: HEADING }}>
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href + l.name}>
            <Link prefetch={active ? null : false} href={l.href} onClick={onPick} style={{ color: INK }} className="hover:text-[#AD3D0B]">
              {l.name}{l.note && <span className="block text-[11px]" style={{ color: QUIET }}>{l.note}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
