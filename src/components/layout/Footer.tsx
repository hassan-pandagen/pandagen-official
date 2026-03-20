"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Github, Linkedin, Mail, Facebook, Instagram, type LucideIcon } from "lucide-react";

interface FooterProps {
  onOpenQuote?: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="bg-[#F5F5F4] pt-20 border-t border-stone-200">

      {/* 1. FLOATING CTA CARD */}
      <div className="container mx-auto px-6 mb-24">
        <div className="relative rounded-[2.5rem] bg-[#0C0A09] overflow-hidden px-8 py-20 text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cognac/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-800/60 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-stone-300 mb-8">
              <Sparkles className="w-3 h-3 text-cognac" />
              Limited Availability
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to build something{" "}
              <span className="font-serif italic text-stone-300">Legendary?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full sm:w-auto px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-stone-100 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 transform duration-200"
              >
                Book Strategy Call <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EDITORIAL LINKS */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Brand & Socials */}
          <div className="lg:col-span-4 flex flex-col">
            <div>
              <Link href="/" className="text-3xl font-bold text-charcoal tracking-tight">
                PandaCodeGen<span className="text-cognac">.</span>
              </Link>
              <p className="mt-6 text-stone-600 leading-relaxed max-w-sm">
                We replace slow WordPress &amp; Shopify sites with custom built websites that load in under 1 second. No monthly fees. No vendor lock-in.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-stone-600">
                <li>📍 1914 Quail Feather Ct, Missouri City, TX 77489</li>
                <li>
                  <Link href="tel:+13022504340" className="hover:text-charcoal transition-colors">
                    📞 +1 (302) 250-4340
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <SocialPill href="https://x.com/PandaCodeGen" label="Twitter / X" isX />
              <SocialPill href="https://www.linkedin.com/company/pandacodegen" icon={Linkedin} label="LinkedIn" ariaLabel="PandaCodeGen on LinkedIn" />
              <SocialPill href="https://github.com/hassan-pandagen" icon={Github} label="GitHub" />
              <SocialPill href="https://www.facebook.com/profile.php?id=61587111848962" icon={Facebook} label="Facebook" />
              <SocialPill href="https://www.instagram.com/pandacodegen/" icon={Instagram} label="Instagram" />
              <SocialPill href="mailto:info@pandacodegen.com" icon={Mail} label="Email" />
            </div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="font-bold text-charcoal mb-8 text-xs uppercase tracking-widest border-b border-stone-300 pb-4">
              Services
            </h3>
            <ul className="space-y-4">
              <ServiceLink href="/services/wordpress-migration" text="WordPress Migration" />
              <ServiceLink href="/services/custom-engineering" text="Custom Engineering" />
              <ServiceLink href="/services/ecommerce" text="E-Commerce" />
              <ServiceLink href="/services/wix" text="Wix Migration" />
              <ServiceLink href="/services/squarespace" text="Squarespace Migration" />
              <ServiceLink href="/services/webflow" text="Webflow Migration" />
              <ServiceLink href="/services/woocommerce" text="WooCommerce Migration" />
              <ServiceLink href="/services/gohighlevel" text="GoHighLevel" />
            </ul>
          </div>

          {/* Featured Company Cards */}
          <div className="lg:col-span-5">
            <h3 className="font-bold text-charcoal mb-8 text-xs uppercase tracking-widest border-b border-stone-300 pb-4">
              Company
            </h3>
            <div className="grid gap-2">
              <FeaturedLink
                href="/work"
                title="Case Studies"
                desc="Real results. 100/100 scores. $0 hosting fees."
              />
              <FeaturedLink
                href="/partners"
                title="For Agencies"
                desc="White-label partnership. You sell, we build."
              />
              <FeaturedLink
                href="/about"
                title="About Us"
                desc="Meet the engineers, not the account managers."
              />
              <FeaturedLink
                href="/blog"
                title="Engineering Blog"
                desc="Deep dives into Next.js, SEO, and performance."
              />
              <FeaturedLink
                href="/contact"
                title="Contact Us"
                desc="Get a free quote or book a strategy call."
              />
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="border-t border-stone-200 bg-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-medium uppercase tracking-wide">
          <div className="flex flex-wrap gap-6 items-center">
            <span>&copy; 2026 PandaCodeGen LLC. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-cognac transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cognac transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-cognac transition-colors">Cookies</Link>
          </div>
          <div className="flex items-center gap-2 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            All Systems Operational
          </div>
        </div>
      </div>

    </footer>
  );
}

// Sub-components

interface SocialPillProps {
  href: string;
  label: string;
  ariaLabel?: string;
  icon?: LucideIcon;
  isX?: boolean;
}

function SocialPill({ href, icon: Icon, label, ariaLabel, isX }: SocialPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? label}
      className="group flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-600 hover:border-cognac hover:text-cognac transition-all shadow-xs hover:shadow-md"
    >
      {isX ? (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      <span>{label}</span>
    </a>
  );
}

function ServiceLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 text-stone-600 font-medium hover:text-charcoal transition-colors"
      >
        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-cognac" />
        {text}
      </Link>
    </li>
  );
}

function FeaturedLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 bg-white border border-stone-200 px-4 py-3 rounded-lg hover:border-cognac hover:shadow-xs transition-all duration-200"
    >
      <div>
        <h3 className="font-semibold text-sm text-charcoal group-hover:text-cognac transition-colors">
          {title}
        </h3>
        <p className="text-xs text-stone-500 mt-0.5">{desc}</p>
      </div>
      <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-cognac transition-colors shrink-0" />
    </Link>
  );
}
