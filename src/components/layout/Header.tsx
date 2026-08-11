"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import Image from "next/image";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";

// Lazy load: QuoteModal pulls in framer-motion (~80kb).
// Only load when user actually opens the modal.
const QuoteModal = dynamic(() => import("@/components/ui/QuoteModal"), {
  ssr: false,
  loading: () => null,
});

interface HeaderProps {
  onOpenQuote?: () => void;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownKey?: string;
}

const navItems: NavItem[] = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Work", href: "/work", hasDropdown: true, dropdownKey: "work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about", hasDropdown: true, dropdownKey: "about" },
];

const services = [
  { name: "All Services", href: "/services" },
  { name: "WordPress Migration", href: "/services/wordpress-migration" },
  { name: "Custom Engineering", href: "/services/custom-engineering" },
  { name: "E-Commerce", href: "/services/ecommerce" },
  { name: "WooCommerce Migration", href: "/services/woocommerce" },
  { name: "Wix Migration", href: "/services/wix" },
  { name: "Squarespace Migration", href: "/services/squarespace" },
  { name: "Webflow Migration", href: "/services/webflow" },
  { name: "GoHighLevel", href: "/services/gohighlevel" },
];

const workLinks = [
  { name: "Our Work", href: "/work" },
  { name: "Get your migration plan", href: "/contact" },
];

// The two founder links were removed in 3e93feb (30 Jul 2026) when the nav was
// rewritten, along with the phone number and the case-study dropdown. Restored
// 11 Aug 2026 because the imbalance had become severe: /about/hassan is linked
// from 82 pages (an author byline on every blog post) while /about/imran had
// only 5. Founder pages are entity pages — they carry the credentials that
// support everything else on the site — and one of them was effectively orphaned.
const aboutLinks = [
  { name: "About PandaCodeGen", href: "/about" },
  { name: "Hassan Jamal, Lead Engineer", href: "/about/hassan" },
  { name: "Imran Raza Ladhani, Lead Architect", href: "/about/imran" },
  { name: "Our Manifesto", href: "/manifesto" },
  { name: "Editorial Policy", href: "/editorial-policy" },
  { name: "Security", href: "/security" },
];

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [internalQuoteOpen, setInternalQuoteOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuReturnFocusRef = useRef<HTMLElement | null>(null);

  const handleOpenQuote = onOpenQuote ?? (() => setInternalQuoteOpen(true));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Let any CTA across the site open the quote modal via a window event,
  // e.g. a "Get your migration plan" button. Keeps the modal a single instance.
  useEffect(() => {
    const openQuote = () => {
      if (onOpenQuote) onOpenQuote();
      else setInternalQuoteOpen(true);
    };
    window.addEventListener("open-quote-modal", openQuote);
    return () => window.removeEventListener("open-quote-modal", openQuote);
  }, [onOpenQuote]);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1280px)");
    const closeMenuAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };

    desktopMedia.addEventListener("change", closeMenuAtDesktop);
    return () => desktopMedia.removeEventListener("change", closeMenuAtDesktop);
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [openDropdown]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    mobileMenuReturnFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : mobileMenuButtonRef.current;
    document.body.style.overflow = "hidden";

    const focusFirstMenuControl = window.requestAnimationFrame(() => {
      const firstControl = mobileMenuRef.current?.querySelector<HTMLElement>(
        'button:not([disabled]), a[href]:not([tabindex="-1"])'
      );
      firstControl?.focus();
    });

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !mobileMenuRef.current) return;

      const focusable = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFirstMenuControl);
      document.removeEventListener("keydown", handleMenuKeyDown);
      document.body.style.overflow = previousOverflow;

      const returnTarget = mobileMenuReturnFocusRef.current;
      window.requestAnimationFrame(() => {
        if (returnTarget?.isConnected) returnTarget.focus();
      });
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
          isScrolled
            ? "bg-white/95 border-b border-stone-200 py-3 shadow-card"
            : "bg-paper/90 py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="z-[61]">
            <Image src="/logo.png" alt="PandaCodeGen" width={131} height={23} priority className="h-auto" />
          </Link>

          {/* Desktop Navigation */}
           <nav className="hidden xl:flex items-center gap-8" aria-label="Primary navigation">
             {navItems.map((item) => {
               if (item.hasDropdown) {
                 const dropdownKey = item.dropdownKey || "services";
                 const dropdownItems = dropdownKey === "about" ? aboutLinks : dropdownKey === "work" ? workLinks : services;
                 const isOpen = openDropdown === dropdownKey;
                 return (
                    <div
                      key={item.name}
                      className="relative"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
                        aria-expanded={isOpen}
                        aria-controls={`desktop-${dropdownKey}-submenu`}
                       className="text-base font-medium text-stone-600 hover:text-cognac transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cognac tracking-wide flex items-center gap-2 py-2"
                     >
                       {item.name}
                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                     </button>

                     {/* Dropdown Menu */}
                     {isOpen && (
                        <div
                          id={`desktop-${dropdownKey}-submenu`}
                         className="absolute top-full left-0 mt-0 w-56 bg-white border border-stone-200 rounded-lg shadow-elevated z-50 pointer-events-auto"
                       >
                         <div className="py-2">
                           {dropdownItems.map((dropItem) => (
                             <Link
                               key={dropItem.name}
                               href={dropItem.href}
                               onClick={() => setOpenDropdown(null)}
                               className="block px-4 py-3 text-sm font-medium text-stone-600 hover:text-cognac hover:bg-stone-50 transition-colors"
                             >
                               {dropItem.name}
                             </Link>
                           ))}
                         </div>
                       </div>
                     )}
                   </div>
                 );
               }

               return (
                 <Link
                   key={item.name}
                   href={item.href}
                   className="text-base font-medium text-stone-600 hover:text-cognac transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cognac tracking-wide"
                 >
                   {item.name}
                 </Link>
               );
             })}
          </nav>

          <div className="hidden xl:flex items-center gap-4 z-[61]">
            {/* Renders only on pages that have a French and German version. */}
            <LocaleSwitcher label="Language" className="text-sm" />
            <button
              onClick={handleOpenQuote}
              className="px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 bg-charcoal text-white hover:bg-cognac"
            >
              Get your migration plan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuButtonRef}
            className="xl:hidden z-[61] p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-site-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
      <div
        ref={mobileMenuRef}
        id="mobile-site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed inset-0 z-50 flex flex-col xl:hidden overflow-hidden animate-fade-in"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-paper" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />

        {/* Content */}
        <div data-lenis-prevent className="relative z-10 flex flex-col h-full px-8 pt-28 pb-10 justify-between overflow-y-auto">

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const dropdownKey = item.dropdownKey || "services";
                const dropdownItems = dropdownKey === "about" ? aboutLinks : dropdownKey === "work" ? workLinks : services;
                const isOpen = mobileOpenDropdown === dropdownKey;
                return (
                  <div key={item.name} className="flex flex-col items-center gap-2 w-full">
                    <button
                      onClick={() => setMobileOpenDropdown(isOpen ? null : dropdownKey)}
                      aria-expanded={isOpen}
                      aria-controls={`mobile-${dropdownKey}-submenu`}
                      className="font-serif italic text-4xl text-charcoal hover:text-cognac transition-colors flex items-center gap-2 py-2"
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 not-italic ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div
                        id={`mobile-${dropdownKey}-submenu`}
                        className="flex flex-col items-center gap-1 w-full pb-2"
                      >
                        {dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileOpenDropdown(null);
                            }}
                            className="text-sm font-medium text-stone-500 hover:text-cognac transition-colors py-1.5 tracking-wide"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif italic text-4xl text-charcoal hover:text-cognac transition-colors py-2"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Anchor */}
          <div className="flex flex-col items-center gap-5 mt-10">
            <button
              onClick={() => { setIsMobileMenuOpen(false); handleOpenQuote(); }}
              className="w-full max-w-xs py-4 bg-charcoal text-white font-bold rounded-full text-center hover:bg-cognac transition-all"
            >
              Get your migration plan
            </button>

            <div className="w-full max-w-xs border-t border-stone-200 pt-5 flex justify-center">
              <a href="mailto:info@pandacodegen.com" className="flex min-h-11 items-center gap-2 px-3 text-xs font-bold text-stone-600 hover:text-charcoal transition-colors uppercase tracking-widest">
                <Mail className="w-5 h-5 text-cognac" aria-hidden="true" />
                info@pandacodegen.com
              </a>
            </div>
          </div>

        </div>
      </div>
      )}

      {/* Internal QuoteModal, only mounted when actually opened (lazy loads framer-motion) */}
      {!onOpenQuote && internalQuoteOpen && (
        <QuoteModal isOpen={internalQuoteOpen} onClose={() => setInternalQuoteOpen(false)} />
      )}
    </>
  );
}
