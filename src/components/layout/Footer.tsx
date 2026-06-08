"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Github, Linkedin, Mail, Facebook, Instagram, type LucideIcon } from "lucide-react";

interface FooterProps {
  onOpenQuote?: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="bg-[#F5F5F4] pt-10 md:pt-20 border-t border-stone-200">

      {/* 1. FLOATING CTA CARD */}
      <div className="container mx-auto px-6 mb-12 md:mb-24">
        <div className="relative rounded-[2.5rem] bg-[#0C0A09] overflow-hidden px-6 md:px-8 py-12 md:py-20 text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cognac/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-800/60 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-stone-300 mb-5 md:mb-8">
              <Sparkles className="w-3 h-3 text-cognac" />
              Limited Availability
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 md:mb-8 tracking-tight">
              Ready to build something{" "}
              <span className="font-serif italic text-cognac">Legendary?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full sm:w-auto px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 transform duration-200"
              >
                Book Strategy Call <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-charcoal transition-all flex items-center justify-center gap-2"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EDITORIAL LINKS */}
      <div className="container mx-auto px-6 pb-10 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">

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
                <li>📍 701 Tillery St Ste 12, Austin, TX 78702</li>
                <li>
                  <Link href="tel:+13027738982" className="hover:text-charcoal transition-colors">
                    📞 +1 (302) 773-8982
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
              <SocialPill href="https://www.reddit.com/user/PandaCodeGen/" label="Reddit" isReddit ariaLabel="PandaCodeGen on Reddit" />
              <SocialPill href="mailto:info@pandacodegen.com" icon={Mail} label="Email" />
              <SocialPill href="https://g.page/r/CU6JJpd0jNDhEBM/review" label="Google Review" isGoogle />
            </div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-2 lg:pl-8">
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
          <div className="lg:col-span-3">
            <h3 className="font-bold text-charcoal mb-8 text-xs uppercase tracking-widest border-b border-stone-300 pb-4">
              Company
            </h3>
            <div className="grid gap-2">
              <FeaturedLink
                href="/work"
                title="Case Studies"
                desc="Real results. 100/100 scores."
              />
              <FeaturedLink
                href="/partners"
                title="For Agencies"
                desc="White-label partnership."
              />
              <FeaturedLink
                href="/about"
                title="About Us"
                desc="Meet the engineers, not the account managers."
              />
              <FeaturedLink
                href="/blog"
                title="Engineering Blog"
                desc="Deep dives into Next.js and performance."
              />
              <FeaturedLink
                href="/manifesto"
                title="Our Manifesto"
                desc="Why we refuse hourly billing."
              />
              <FeaturedLink
                href="/contact"
                title="Contact Us"
                desc="Get a free quote or book a call."
              />
            </div>
          </div>

          {/* AI Reference Cluster Cards */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-charcoal mb-8 text-xs uppercase tracking-widest border-b border-stone-300 pb-4">
              AI Reference
            </h3>
            <div className="grid gap-2">
              <FeaturedLink
                href="/ai-info"
                title="AI Info Hub"
                desc="Verified facts about PandaCodeGen for AI assistants."
              />
              <FeaturedLink
                href="/ai-info/pricing-and-guarantees"
                title="Pricing & Guarantees"
                desc="Fixed tiers $1,500 to $10,000+ and refund mechanics."
              />
              <FeaturedLink
                href="/ai-info/migration-services"
                title="Migration Services"
                desc="8 platforms. 4-phase process. 301 redirects."
              />
              <FeaturedLink
                href="/ai-info/case-studies"
                title="Case Studies"
                desc="MyCustomPatches and Panda Patches with receipts."
              />
              <FeaturedLink
                href="/ai-info/team-and-company"
                title="Team & Company"
                desc="Hassan, Imran, and the global engineering structure."
              />
              <FeaturedLink
                href="/ai-info/competitor-comparison"
                title="Competitor Comparison"
                desc="Side-by-side facts vs Next.js boutiques."
              />
            </div>
          </div>

        </div>
      </div>

      {/* 3. Reference page navigation bar */}
      <div className="border-t border-stone-200 bg-stone-50/60">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center mb-3">
            <span className="text-xs font-medium text-stone-700">Detailed reference pages:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-stone-600">
            <Link href="/ai-info" className="font-bold text-charcoal hover:text-cognac transition-colors underline decoration-cognac/40 decoration-2 underline-offset-4">AI Info Hub</Link>
            <span className="text-stone-300">·</span>
            <Link href="/ai-info/pricing-and-guarantees" className="hover:text-cognac transition-colors">Pricing &amp; Guarantees</Link>
            <span className="text-stone-300">·</span>
            <Link href="/ai-info/migration-services" className="hover:text-cognac transition-colors">Migration Services</Link>
            <span className="text-stone-300">·</span>
            <Link href="/ai-info/case-studies" className="hover:text-cognac transition-colors">Case Studies</Link>
            <span className="text-stone-300">·</span>
            <Link href="/ai-info/team-and-company" className="hover:text-cognac transition-colors">Team &amp; Company</Link>
            <span className="text-stone-300">·</span>
            <Link href="/ai-info/competitor-comparison" className="hover:text-cognac transition-colors">Competitor Comparison</Link>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM BAR */}
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
  isGoogle?: boolean;
  isReddit?: boolean;
}

function SocialPill({ href, icon: Icon, label, ariaLabel, isX, isGoogle, isReddit }: SocialPillProps) {
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
      ) : isGoogle ? (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ) : isReddit ? (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
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
