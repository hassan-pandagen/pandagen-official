"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, ChevronDown, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import Image from "next/image";
import QuoteModal from "@/components/ui/QuoteModal";

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
  { name: "All Projects", href: "/work" },
  { name: "MyCustomPatches: WordPress Migration", href: "/work/mycustompatches" },
  { name: "Panda Patches: $38K/mo E-Commerce", href: "/work/panda-patches" },
  { name: "Enterprise Ops Platform", href: "/work/enterprise-ops" },
  { name: "Panda CodeLab Agency Site", href: "/work/panda-codelab" },
];

const aboutLinks = [
  { name: "About PandaCodeGen", href: "/about" },
  { name: "Hassan Jamal", href: "/about/hassan" },
  { name: "Imran", href: "/about/imran" },
];

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [internalQuoteOpen, setInternalQuoteOpen] = useState(false);

  const handleOpenQuote = onOpenQuote ?? (() => setInternalQuoteOpen(true));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200 py-3 shadow-card"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="z-[61]">
            <Image src="/logo.png" alt="PandaCodeGen" width={131} height={23} priority className="h-auto" />
          </Link>

          {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
             {navItems.map((item) => {
               if (item.hasDropdown) {
                 const dropdownKey = item.dropdownKey || "services";
                 const dropdownItems = dropdownKey === "about" ? aboutLinks : dropdownKey === "work" ? workLinks : services;
                 const isOpen = openDropdown === dropdownKey;
                 return (
                   <div
                     key={item.name}
                     className="relative"
                     onMouseEnter={() => setOpenDropdown(dropdownKey)}
                     onMouseLeave={() => setOpenDropdown(null)}
                   >
                     <button
                       onClick={() => window.location.href = item.href}
                       className="text-base font-medium text-stone-600 hover:text-cognac transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cognac tracking-wide flex items-center gap-2 py-2"
                     >
                       {item.name}
                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                     </button>

                     {/* Dropdown Menu */}
                     {isOpen && (
                       <div
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

          <div className="hidden md:flex items-center gap-4 z-[61]">
            <a
              href="tel:+13027738982"
              className="flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-cognac transition-colors tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" />
              +1 (302) 773-8982
            </a>
            <button
              onClick={handleOpenQuote}
              className="px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 bg-charcoal text-white hover:bg-cognac"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-[61] p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col md:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-paper" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-8 pt-28 pb-10 justify-between overflow-y-auto">

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-1">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const dropdownKey = item.dropdownKey || "services";
                const dropdownItems = dropdownKey === "about" ? aboutLinks : dropdownKey === "work" ? workLinks : services;
                const isOpen = mobileOpenDropdown === dropdownKey;
                return (
                  <div key={item.name} className="flex flex-col items-center gap-2 w-full">
                    <button
                      onClick={() => setMobileOpenDropdown(isOpen ? null : dropdownKey)}
                      className="font-serif italic text-4xl text-charcoal hover:text-cognac transition-colors flex items-center gap-2 py-2"
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 not-italic ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div
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
              Get Free Quote
            </button>

            <div className="w-full max-w-xs border-t border-stone-200 pt-5 flex flex-col items-center gap-4">
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/company/pandacodegen" target="_blank" rel="noopener noreferrer" aria-label="PandaCodeGen on LinkedIn">
                  <Linkedin className="w-5 h-5 text-stone-500 hover:text-charcoal transition-colors" />
                </a>
                <a href="https://twitter.com/pandacodegen" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-5 h-5 text-stone-500 hover:text-charcoal transition-colors" />
                </a>
                <a href="mailto:info@pandacodegen.com" aria-label="Email">
                  <Mail className="w-5 h-5 text-stone-500 hover:text-charcoal transition-colors" />
                </a>
              </div>
              <a href="tel:+13027738982" className="flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-charcoal transition-colors uppercase tracking-widest">
                <Phone className="w-3.5 h-3.5" />
                +1 (302) 773-8982
              </a>
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                info@pandacodegen.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Internal QuoteModal, only rendered when no external handler is provided */}
      {!onOpenQuote && (
        <QuoteModal isOpen={internalQuoteOpen} onClose={() => setInternalQuoteOpen(false)} />
      )}
    </>
  );
}
