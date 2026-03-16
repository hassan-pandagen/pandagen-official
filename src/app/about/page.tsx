"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Rocket, Terminal, Code2, Cpu, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import { useState } from "react";
import QuoteModal from "@/components/ui/QuoteModal";
import LinkedInProof from "@/components/sections/LinkedInProof";

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.pandacodegen.com/about#webpage",
        "url": "https://www.pandacodegen.com/about",
        "name": "About PandaCodeGen - The Anti-Agency",
        "description": "Meet the engineers behind PandaCodeGen. We build web assets, not templates. Direct access to architects, fixed pricing, full code ownership.",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/#organization" },
        "inLanguage": "en-US",
        "datePublished": "2026-01-01",
        "dateModified": "2026-02-22"
      },
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "alternateName": "Panda Gen",
        "url": "https://www.pandacodegen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 655,
          "height": 113
        },
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "description": "Custom web development agency specializing in WordPress migration, Shopify optimization, and high performance business websites.",
        "email": "info@pandacodegen.com",
        "telephone": "+13022504340",
        "foundingDate": "2026",
        "areaServed": "Worldwide",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1914 Quail Feather Ct",
          "addressLocality": "Missouri City",
          "addressRegion": "TX",
          "postalCode": "77489",
          "addressCountry": "US"
        },
        "founder": [
          { "@type": "Person", "name": "Imran", "jobTitle": "Lead Solutions Architect" },
          { "@type": "Person", "@id": "https://www.pandacodegen.com/#/schema/person/hassan", "name": "Hassan Jamal", "jobTitle": "Lead Full-Stack Engineer", "url": "https://www.pandacodegen.com/about/hassan", "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/"] }
        ],
        "numberOfEmployees": { "@type": "QuantitativeValue", "value": 2 },
        "sameAs": [
          "https://twitter.com/pandacodegen",
          "https://www.linkedin.com/company/pandacodegen",
          "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
          "https://github.com/hassan-pandagen",
          "https://clutch.co/profile/panda-code-gen",
          "https://www.trustpilot.com/review/pandacodegen.com"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.pandacodegen.com/about" }
        ]
      }
    ]
  };

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      <ReadingProgressBar />
      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* 1. HERO with DNA STRIP */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-paper">
        {/* Warm stone ambient glow */}
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-stone-200/40 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-sm text-stone-600 mb-8">
            <Terminal className="w-4 h-4 text-stone-500" /> <span>The Anti-Agency</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-8 leading-tight">
            We don&apos;t build websites. <br />
            <span className="font-serif italic text-stone-500">We build assets.</span>
          </h1>

          <p className="text-xl text-stone-600 leading-relaxed mb-12">
            Most agencies sell you a template and disappear. We are engineers who grew up breaking WordPress sites and fixing them. PandaCodeGen was born from a simple truth: <strong className="text-charcoal">The web is too slow, and business owners are paying the price.</strong>
          </p>
        </div>

        {/* DNA STRIP (Fills the empty space) */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-stone-200 bg-white py-4">
            <div className="flex justify-center gap-8 md:gap-16 text-xs md:text-sm font-mono text-stone-500 uppercase tracking-widest">
                <span>Lightning Speed</span>
                <span>Bank Level Security</span>
                <span>Zero Monthly Fees</span>
                <span>You Own Everything</span>
            </div>
        </div>
      </section>

      {/* 2. TRACK RECORD (Quick Stats) */}
      <section className="container mx-auto px-6 py-12">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white border border-stone-200 rounded-2xl">
               <div className="text-4xl font-bold text-charcoal mb-2">4</div>
               <div className="text-sm text-stone-500 uppercase tracking-wider">Live Projects</div>
            </div>
            <div className="text-center p-6 bg-white border border-stone-200 rounded-2xl">
               <div className="text-4xl font-bold text-charcoal mb-2">98/100</div>
               <div className="text-sm text-stone-500 uppercase tracking-wider">Avg Lighthouse Score</div>
            </div>
            <div className="text-center p-6 bg-white border border-stone-200 rounded-2xl">
               <div className="text-4xl font-bold text-charcoal mb-2">&lt;1s</div>
               <div className="text-sm text-stone-500 uppercase tracking-wider">Avg Load Time</div>
            </div>
            <div className="text-center p-6 bg-white border border-stone-200 rounded-2xl">
               <div className="text-4xl font-bold text-charcoal mb-2">2026</div>
               <div className="text-sm text-stone-500 uppercase tracking-wider">Est. Year</div>
            </div>
         </div>
      </section>

      {/* 3. THE ENGINEERS (Real Photos) */}
      <section className="bg-[#0C0A09] py-20 px-6">
         <div className="container mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Meet the Engineers</h2>
            <p className="text-stone-500">No account managers. You talk directly to the architects.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* IMRAN */}
            <div className="group relative bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-colors duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/95 z-10" />
               <div className="h-96 w-full relative">
                  <Image src="/team/imran.png" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Imran - Lead Solutions Architect at PandaCodeGen" className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="px-3 py-1 bg-white/10 text-stone-300 text-[10px] font-bold uppercase tracking-wider rounded w-fit mb-2">Strategy</div>
                  <h3 className="text-3xl font-bold text-white mb-1">Imran</h3>
                  <p className="text-stone-400 font-mono text-sm mb-2">Lead Solutions Architect</p>
                  <div className="flex gap-3 mb-3 text-xs text-stone-500">
                     <span>8+ years</span>
                     <span>•</span>
                     <span>50+ projects</span>
                  </div>
                  <p className="text-stone-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">&ldquo;My job is to ensure your investment turns into measurable ROI.&rdquo;</p>
               </div>
            </div>

            {/* HASSAN */}
            <Link href="/about/hassan" className="group relative bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-colors duration-500 block">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/95 z-10" />
               <div className="h-96 w-full relative">
                  <Image src="/team/hassan.png" fill sizes="(max-width: 768px) 100vw, 50vw" alt="Hassan Jamal - Lead Full-Stack Engineer at PandaCodeGen" className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="px-3 py-1 bg-white/10 text-stone-300 text-[10px] font-bold uppercase tracking-wider rounded w-fit mb-2">Engineering</div>
                  <h3 className="text-3xl font-bold text-white mb-1">Hassan Jamal</h3>
                  <p className="text-stone-400 font-mono text-sm mb-2">Lead Full-Stack Engineer</p>
                  <div className="flex gap-3 mb-3 text-xs text-stone-500">
                     <span>7+ years</span>
                     <span>•</span>
                     <span>100k+ lines shipped</span>
                  </div>
                  <p className="text-stone-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">&ldquo;I obsess over milliseconds. I build the engines that run the business.&rdquo;</p>
                  <button
                     type="button"
                     onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open("https://www.linkedin.com/in/hassan-jamal-713ba6228/", "_blank"); }}
                     className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-full text-xs font-bold text-[#0A66C2] hover:bg-[#0A66C2]/30 transition-all"
                  >
                     <Linkedin className="w-3.5 h-3.5" /> Connect on LinkedIn
                  </button>
               </div>
            </Link>
         </div>
         </div>
      </section>

      {/* FOUNDER SPOTLIGHT, Hassan Jamal */}
      <section className="py-20 px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-sm text-stone-600 mb-6">
              <Code2 className="w-4 h-4 text-stone-500" /> Founder Spotlight
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">The Engineer Behind PandaCodeGen</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">No account managers. When you work with PandaCodeGen, you talk directly to the person writing the code.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left: Photo + Links */}
            <div className="md:col-span-2 flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-3xl overflow-hidden border-2 border-stone-200 relative mb-4">
                <Image src="/team/hassan.png" fill alt="Hassan Jamal - Founder & Lead Engineer at PandaCodeGen" className="object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Hassan Jamal</h3>
              <p className="text-stone-500 font-mono text-sm mb-1">Founder & Lead Full-Stack Engineer</p>
              <p className="text-stone-500 text-xs mb-4">Karachi University &middot; Missouri City, TX</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/hassan-jamal-713ba6228/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-full text-xs font-bold text-[#0A66C2] hover:bg-[#0A66C2]/30 transition-all"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</a>
                <a href="https://github.com/hassan-pandagen" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-full text-xs font-medium hover:bg-stone-100 hover:border-stone-400 transition-all text-stone-500">GitHub</a>
              </div>
            </div>

            {/* Right: Bio + Expertise */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <p className="text-stone-600 text-lg leading-relaxed mb-4">
                  I help e-commerce brands ditch Shopify fees and WordPress bloat with high performance custom code. One client was paying <strong className="text-charcoal">$3,200/month</strong> on Shopify Plus. Their storefront scored <strong className="text-charcoal">31 on Google PageSpeed</strong>. We migrated them to a custom build. Same features. Zero app fees. PageSpeed went from <strong className="text-charcoal">31 to 92</strong>.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Most agencies hand you a WordPress theme and call it a day. I build from scratch: custom code, no plugins, no bloat. No $500/month in SaaS fees just to run your store. You get a website that loads in under a second and costs nearly nothing to host.
                </p>
              </div>

              {/* Expertise Tags */}
              <div>
                <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {["Custom Website Engineering", "Shopify Speed Optimization", "WordPress & Platform Migrations", "Google Rankings & Speed", "Cloud Hosting & Databases", "Custom Business Software"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-500 font-medium">{skill}</span>
                  ))}
                </div>
              </div>

              {/* What I Build, compact */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <h4 className="text-charcoal font-bold text-sm mb-1">Custom Coded Storefronts</h4>
                  <p className="text-stone-500 text-xs">90+ PageSpeed. $0/month to run.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <h4 className="text-charcoal font-bold text-sm mb-1">Platform Migrations</h4>
                  <p className="text-stone-500 text-xs">Shopify Plus & WordPress to custom code.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <h4 className="text-charcoal font-bold text-sm mb-1">Admin Dashboards & SaaS</h4>
                  <p className="text-stone-500 text-xs">Replace $500+/mo in SaaS apps.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <h4 className="text-charcoal font-bold text-sm mb-1">Speed & Cost Audits</h4>
                  <p className="text-stone-500 text-xs">Free audit for stores paying $1k+/mo.</p>
                </div>
              </div>

              <Link href="/about/hassan" className="inline-flex items-center gap-2 text-cognac text-sm font-medium hover:underline">
                View full profile & articles &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Industry Standard Benefits) */}
      <section className="py-20 px-6 border-y border-stone-200 relative overflow-hidden">
         <div className="relative z-10 container mx-auto max-w-5xl">
             <div className="text-center mb-16">
                <h2 className="text-charcoal font-bold text-4xl mb-4">Why Choose PandaCodeGen</h2>
                <p className="text-stone-500 text-lg">What makes us different from traditional agencies</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-stone-400 transition-all">
                   <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold text-charcoal mb-3">Full Code Ownership</h3>
                   <p className="text-stone-500 leading-relaxed">You own 100% of the source code. No vendor lock-in, no recurring licensing fees. It&apos;s yours forever.</p>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-stone-400 transition-all">
                   <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold text-charcoal mb-3">Fixed Pricing</h3>
                   <p className="text-stone-500 leading-relaxed">No hourly rates or surprise invoices. You get a guaranteed fixed price upfront before we write a single line of code.</p>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-stone-400 transition-all">
                   <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold text-charcoal mb-3">Direct Access to Engineers</h3>
                   <p className="text-stone-500 leading-relaxed">No account managers or middlemen. You work directly with the developers building your product.</p>
                </div>
             </div>
         </div>
      </section>

      {/* LinkedIn Social Proof */}
      <LinkedInProof />

      {/* 5. MANIFESTO */}
      <section className="py-20 px-6">
         <div className="container mx-auto max-w-4xl bg-white border border-stone-200 rounded-2xl overflow-hidden text-sm">
            <div className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Our Mission: Eradicate Bloat.</h2>
                <p className="text-stone-500 text-lg leading-relaxed">
                    In 2026, WordPress still powers 43% of the web. Agencies make billions from plugin subscriptions.
                    Business owners pay thousands per month for websites that feel like 2010.
                </p>
                <p className="border-l-2 border-stone-300 pl-4 text-charcoal text-lg leading-relaxed">
                    We build websites using modern architecture. No bloat. No recurring plugin fees.
                    You get an asset you own, not a service you rent.
                </p>
            </div>
         </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
