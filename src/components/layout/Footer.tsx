"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Github } from "lucide-react";

interface FooterProps {
  onOpenQuote?: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="bg-paper">

      {/* FLOATING MIDNIGHT CTA CARD */}
      <div className="container mx-auto px-6 pt-20">
        <div className="relative bg-[#0C0A09] rounded-[2.5rem] p-12 md:p-16 overflow-hidden">
          {/* Warm cognac glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cognac/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-800/60 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <p className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Ready to build?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Build something{" "}
              <span className="font-serif italic text-stone-400">Legendary.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-stone-100 transition-all"
              >
                Book Strategy Call <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* LINKS AREA */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-stone-200">

          {/* Brand + Contact Column */}
          <div>
            <Link href="/" className="inline-block text-2xl font-bold text-charcoal tracking-tight mb-4">
              PandaGen<span className="text-cognac">.</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Enterprise-grade web development. Built for speed. Priced for growth.
            </p>
            <div className="flex gap-2 flex-wrap mb-6">
              <a href="https://www.linkedin.com/company/pandacodegen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-charcoal hover:border-stone-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/PandaCodeGen" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-charcoal hover:border-stone-400 transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://github.com/hassan-pandagen" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-charcoal hover:border-stone-400 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587111848962" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-charcoal hover:border-stone-400 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/pandacodegen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-charcoal hover:border-stone-400 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <ul className="space-y-3 text-sm text-stone-500">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-stone-400" />
                <span>Missouri, USA</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-stone-400" />
                <Link href="tel:+13022504340" className="hover:text-charcoal transition-colors">+1 (302) 250-4340</Link>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-stone-400" />
                <Link href="mailto:info@pandacodegen.com" className="hover:text-charcoal transition-colors">info@pandacodegen.com</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-charcoal text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li><Link href="/services/wordpress-migration" className="hover:text-charcoal transition-colors">WordPress Migration</Link></li>
              <li><Link href="/services/custom-engineering" className="hover:text-charcoal transition-colors">Custom Engineering</Link></li>
              <li><Link href="/services/ecommerce" className="hover:text-charcoal transition-colors">E-Commerce</Link></li>
              <li><Link href="/services/wix" className="hover:text-charcoal transition-colors">Wix Migration</Link></li>
              <li><Link href="/services/squarespace" className="hover:text-charcoal transition-colors">Squarespace Migration</Link></li>
              <li><Link href="/services/webflow" className="hover:text-charcoal transition-colors">Webflow Migration</Link></li>
              <li><Link href="/services/gohighlevel" className="hover:text-charcoal transition-colors">GoHighLevel</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-charcoal text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li><Link href="/about" className="hover:text-charcoal transition-colors">About Us</Link></li>
              <li><Link href="/about/hassan" className="hover:text-charcoal transition-colors">Hassan Jamal</Link></li>
              <li><Link href="/about/imran" className="hover:text-charcoal transition-colors">Imran</Link></li>
              <li><Link href="/work" className="hover:text-charcoal transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-charcoal transition-colors">Blog</Link></li>
              <li><Link href="/partners" className="hover:text-charcoal transition-colors">Partners</Link></li>
              <li><Link href="/pricing" className="hover:text-charcoal transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-charcoal text-xs uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li><Link href="/privacy" className="hover:text-charcoal transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-charcoal transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-charcoal transition-colors">Cookies</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <p>&copy; 2026 PandaGen Code LLC. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
