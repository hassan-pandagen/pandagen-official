"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuoteModal from "@/components/ui/QuoteModal";

// Lazy load heavy/below-the-fold components for better initial load performance
const ProofMarquee = dynamic(() => import("@/components/ProofMarquee"));
const HowItWorksSimple = dynamic(() => import("@/components/HowItWorksSimple"));
const ClientResults = dynamic(() => import("@/components/sections/ClientResults"));
const ServicesHub = dynamic(() => import("@/components/sections/ServicesHub"));
const DiscoveryPortal = dynamic(() => import("@/components/DiscoveryPortal"));
const LatestBlog = dynamic(() => import("@/components/sections/LatestBlog"));

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Optimized scroll progress - uses passive listener and requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      if (progressRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Schema.org structured data for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaGen",
        "alternateName": "PandaGen Code",
        "url": "https://www.pandacodegen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Enterprise Next.js development agency specializing in WordPress migration, Shopify optimization, and custom web applications. Sub-second load times guaranteed.",
        "email": "hello@pandacodegen.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://twitter.com/pandacodegen",
          "https://linkedin.com/company/pandagen"
        ],
        "serviceType": [
          "Next.js Development",
          "WordPress Migration",
          "Shopify Headless Commerce",
          "React Development",
          "Web Performance Optimization",
          "Enterprise Web Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pandacodegen.com/#website",
        "url": "https://www.pandacodegen.com",
        "name": "PandaGen - Enterprise Next.js Development",
        "description": "We migrate WordPress & Shopify sites to custom Next.js architectures. Sub-second load times. Zero bloat. Enterprise-grade security.",
        "publisher": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/#webpage",
        "url": "https://www.pandacodegen.com",
        "name": "PandaGen | Enterprise Next.js & Shopify Architecture",
        "description": "We migrate WordPress & Shopify sites to custom Next.js architectures. Sub-second load times. Zero bloat. Enterprise-grade security and SEO.",
        "isPartOf": {
          "@id": "https://www.pandacodegen.com/#website"
        },
        "about": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/#service",
        "name": "PandaGen Development Services",
        "description": "Custom Next.js development, WordPress migration, and Shopify optimization for enterprise businesses.",
        "provider": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "WordPress to Next.js Migration",
                "description": "Migrate your WordPress site to a custom Next.js application with sub-second load times."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Headless Development",
                "description": "Build a custom Shopify storefront with Next.js for 4x faster load times."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Applications",
                "description": "Build SaaS platforms and dashboards with React and Next.js."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Global Noise Texture - This fixes the "Flat" look */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>

      {/* Scroll Progress Bar - CSS transform for GPU acceleration */}
      <div ref={progressRef} className="fixed top-0 left-0 right-0 h-1 bg-neon z-[70] origin-left will-change-transform" style={{ transform: "scaleX(0)" }} />

      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Hero Section */}
      <Hero />
      
      {/* THE GUARANTEE BANNER */}
      <div className="w-full bg-[#0A0A0A] border-y border-white/5 py-4 relative overflow-hidden group">
         <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors" />
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-3 text-sm font-bold uppercase tracking-widest text-green-400">
            <ShieldCheck className="w-5 h-5" />
            <span>30-Day Money-Back Guarantee on all Projects</span>
         </div>
      </div>

      {/* Proof Marquee (Trusted By) */}
      <ProofMarquee />

      {/* How It Works - Simple Client Journey (NEW - HIGH ON PAGE) */}
      <HowItWorksSimple />

      {/* Client Results - Data-Driven Social Proof */}
      <ClientResults />

      {/* Services Hub */}
      <ServicesHub />

      {/* Latest Blog Posts - SEO Interlinking */}
      <LatestBlog />

      {/* Discovery Portal (CTA) */}
      <DiscoveryPortal onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
