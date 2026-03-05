"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuoteModal from "@/components/ui/QuoteModal";

// Lazy load below-the-fold components
const TrustLogoBar = dynamic(() => import("@/components/sections/TrustLogoBar"));
const SocialProof = dynamic(() => import("@/components/home/SocialProof"));
const UnfairAdvantage = dynamic(() => import("@/components/sections/UnfairAdvantage"));
const ServicesHub = dynamic(() => import("@/components/sections/ServicesHub"));
const HowItWorksSimple = dynamic(() => import("@/components/HowItWorksSimple"));
const AIPowered = dynamic(() => import("@/components/sections/AIPowered"));
const RevenueCalculator = dynamic(() => import("@/components/sections/RevenueCalculator"));
const FounderSection = dynamic(() => import("@/components/sections/FounderSection"));
const AntiAgency = dynamic(() => import("@/components/sections/AntiAgency"));
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
        "name": "PandaCodeGen",
        "alternateName": "PandaCodeGen Code",
        "url": "https://www.pandacodegen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Custom web development agency specializing in WordPress migration, Shopify optimization, and custom web applications. Sub-second load times guaranteed.",
        "email": "info@pandacodegen.com",
        "telephone": "+13022504340",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Missouri City",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://twitter.com/pandacodegen",
          "https://www.linkedin.com/company/pandacodegen",
          "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
          "https://github.com/hassan-pandagen"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@pandacodegen.com",
          "telephone": "+13022504340",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "serviceType": [
          "Custom Web Development",
          "WordPress Migration",
          "Shopify Store Optimization",
          "E-Commerce Development",
          "Web Performance Optimization",
          "Business Website Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pandacodegen.com/#website",
        "url": "https://www.pandacodegen.com",
        "name": "PandaCodeGen - Custom Web Development",
        "description": "We migrate WordPress & Shopify sites to custom-coded websites. Sub-second load times. Zero bloat. Enterprise-grade security.",
        "publisher": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.pandacodegen.com/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/#webpage",
        "url": "https://www.pandacodegen.com",
        "name": "PandaCodeGen | Custom Web Development & Shopify Optimization",
        "description": "We migrate WordPress & Shopify sites to custom-coded websites. Sub-second load times. Zero bloat. Enterprise-grade security and SEO.",
        "isPartOf": {
          "@id": "https://www.pandacodegen.com/#website"
        },
        "about": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10",
        "dateModified": "2026-03-01",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/#service",
        "name": "PandaCodeGen Development Services",
        "description": "Custom web development, WordPress migration, and Shopify optimization for growing businesses.",
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
                "name": "WordPress Migration",
                "description": "Migrate your WordPress site to a custom-coded website with sub-second load times."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Store Optimization",
                "description": "Build a custom Shopify storefront for 4x faster load times."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Applications",
                "description": "Build custom business tools, dashboards, and web applications."
              }
            }
          ]
        }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/#review-mycustompatches",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Organization", "name": "MyCustomPatches.net" },
        "itemReviewed": { "@id": "https://www.pandacodegen.com/#organization" },
        "reviewBody": "Migrated our 10-year-old WordPress site to a custom Next.js platform. Load time dropped from 3+ seconds to 0.7 seconds, PageSpeed went from 40 to 100/100, and hosting cost dropped from $150/month to $0. Zero data loss, zero downtime during cutover."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-paper text-charcoal overflow-x-hidden">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Paper grain texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      {/* Scroll Progress Bar */}
      <div ref={progressRef} className="fixed top-0 left-0 right-0 h-1 bg-cognac z-[70] origin-left will-change-transform" style={{ transform: "scaleX(0)" }} />

      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Hero */}
      <Hero />

      {/* Trust Stats Strip — 98+ PageSpeed, <1s load, $0 fees, 100% ownership */}
      <TrustLogoBar />

      {/* Social Proof — quiet confidence strip (Paper) */}
      <SocialProof />

      {/* Unfair Advantage — financial grid stats (White) */}
      <UnfairAdvantage />

      {/* Services Bento — premium bento grid (Paper) */}
      <ServicesHub />

      {/* How It Works — 4 Steps with Visual Diagrams */}
      <HowItWorksSimple />

      {/* AI-Powered — Speed Comparison */}
      <AIPowered />

      {/* Revenue Recovery Calculator */}
      <RevenueCalculator />

      {/* Founders */}
      <FounderSection />

      {/* Anti-Agency Manifesto */}
      <AntiAgency />

      {/* Latest Blog Posts */}
      <LatestBlog />

      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
