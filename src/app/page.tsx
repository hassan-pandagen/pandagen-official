import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import HomeFaqSection from "@/components/home/HomeFaqSection";

// Tell Next.js to statically generate this page at build time
// so critters can inline critical CSS into the HTML output
export const dynamic = "force-static";

// Lazy load below-the-fold components
const TrustLogoBar = lazyLoad(() => import("@/components/sections/TrustLogoBar"));
const SocialProof = lazyLoad(() => import("@/components/home/SocialProof"));
const UnfairAdvantage = lazyLoad(() => import("@/components/sections/UnfairAdvantage"));
const ServicesHub = lazyLoad(() => import("@/components/sections/ServicesHub"));
const HowItWorksSimple = lazyLoad(() => import("@/components/HowItWorksSimple"));
const AIPowered = lazyLoad(() => import("@/components/sections/AIPowered"));
const RevenueCalculator = lazyLoad(() => import("@/components/sections/RevenueCalculator"));
const FounderSection = lazyLoad(() => import("@/components/sections/FounderSection"));
const AntiAgency = lazyLoad(() => import("@/components/sections/AntiAgency"));
const LatestBlog = lazyLoad(() => import("@/components/sections/LatestBlog"));

const homeFaqs = [
  {
    q: "What is WordPress migration and why do I need it?",
    a: "WordPress migration means moving your existing WordPress site to a custom coded platform, typically Next.js or a similar modern framework. If your WordPress site has a slow load time, you're losing revenue. Studies show every 1 second delay in page load time reduces conversions by 7%. WordPress plugin bloat, shared hosting overhead, and theme weight are the primary causes of slow load times. We migrate your content, SEO settings, and design to a custom coded website that loads in under 1 second, with no monthly plugin fees and no vendor lock in.",
  },
  {
    q: "How does the free AI website audit work?",
    a: "Our free AI audit analyzes your website's load time, Core Web Vitals, SEO performance, and security vulnerabilities in real-time. Simply enter your URL above and get a full breakdown of what's costing you revenue — including your average load time, PageSpeed score, and specific actionable recommendations. The audit takes under 30 seconds and requires no signup.",
  },
  {
    q: "How much faster will my site be after migration from WordPress or Shopify?",
    a: "Most WordPress and Shopify sites we migrate go from 4 to 8 second load times to under 1 second, an improvement of 80 to 95%. Our average PageSpeed score across all builds is 100/100. Load times under 1 second directly improve your Google rankings, lower bounce rates, and increase conversion rates. Faster sites also cost less to host because they require fewer server resources.",
  },
  {
    q: "Do you work with Shopify stores?",
    a: "Yes. We build custom Shopify storefronts using headless architecture and purpose built custom code. If your Shopify store is slow due to too many apps, a bloated theme, or unoptimized Liquid code, we replace it with a custom coded solution that delivers 4x faster load times with zero app bloat. You keep your Shopify backend for product management while we replace the slow frontend entirely.",
  },
  {
    q: "How long does a WordPress or Shopify migration take?",
    a: "Most migrations take 1 to 3 weeks depending on site complexity. Our process: Discovery call, Architecture planning, Build, QA testing, Launch. We handle the full migration including DNS transfer, redirect mapping, SEO preservation, and performance testing. There is zero downtime during the launch cutover. Your old site stays live until the new one is fully verified.",
  },
  {
    q: "Why not just use a faster WordPress host or a caching plugin?",
    a: "Faster hosting and caching plugins help marginally, but they don't fix the root cause: WordPress itself is heavy. PHP server rendering, plugin overhead, database queries, and theme bloat all add to your average load time regardless of the host. Plugins like WP Rocket or W3 Total Cache can shave off 0.3 to 0.5 seconds at best. The only permanent fix for a slow WordPress site is replacing it with a purpose built, custom coded website. That is exactly what we do.",
  },
];

export default function Home() {
  // Schema.org structured data for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "alternateName": "Panda Gen",
        "url": "https://www.pandacodegen.com",
        "image": "https://www.pandacodegen.com/logo.png",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 655,
          "height": 113
        },
        "description": "Custom web development agency specializing in WordPress migration, Shopify optimization, and custom web applications. Load times under 1 second guaranteed.",
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
        "sameAs": [
          "https://twitter.com/pandacodegen",
          "https://www.linkedin.com/company/pandacodegen",
          "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
          "https://github.com/hassan-pandagen",
          "https://clutch.co/profile/panda-code-gen",
          "https://www.trustpilot.com/review/pandacodegen.com"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "2",
          "bestRating": "5",
          "worstRating": "1"
        },
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
        "description": "We migrate WordPress and Shopify sites to custom coded websites. Load times under 1 second. Zero bloat. Enterprise level security.",
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
        "description": "We migrate WordPress and Shopify sites to custom coded websites. Load times under 1 second. Zero bloat. Enterprise level security and SEO.",
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
        "image": "https://www.pandacodegen.com/logo.png",
        "telephone": "+13022504340",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1914 Quail Feather Ct",
          "addressLocality": "Missouri City",
          "addressRegion": "TX",
          "postalCode": "77489",
          "addressCountry": "US"
        },
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
                "description": "Migrate your WordPress site to a custom coded website with load times under 1 second."
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
        "@id": "https://www.pandacodegen.com/#review-clutch-mcpatches",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Executive, MC Patches LLC"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Clutch",
          "url": "https://clutch.co"
        },
        "itemReviewed": { "@id": "https://www.pandacodegen.com/#organization" },
        "reviewBody": "Hassan was available to me at any time, and his response time was always less than an hour. Panda Code Gen successfully delivered a speedy, bug-free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and didn't charge for revisions. Overall, their expertise and support were commendable.",
        "datePublished": "2026-03-08",
        "url": "https://clutch.co/profile/panda-code-gen#reviews"
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/#review-trustpilot-marshall",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Marshall James"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Trustpilot",
          "url": "https://www.trustpilot.com"
        },
        "itemReviewed": { "@id": "https://www.pandacodegen.com/#organization" },
        "reviewBody": "I recently worked with PandaCodeGen and had a great experience. Hassan was super helpful and communicative throughout the process. Even though I'm not tech-savvy, he broke things down in a way that made sense to me. The service was pretty good overall.",
        "datePublished": "2026-03-10",
        "url": "https://www.trustpilot.com/review/pandacodegen.com"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/#faqpage",
        "mainEntity": homeFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
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
      <ScrollProgressBar />

      <Header />

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

      {/* FAQ Section */}
      <HomeFaqSection faqs={homeFaqs} />

      {/* Latest Blog Posts */}
      <LatestBlog />

      <Footer />
    </main>
  );
}
