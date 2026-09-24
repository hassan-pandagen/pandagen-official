import Link from "next/link";
import { ogImageForPath } from "@/lib/seo/og";
import lazyLoad from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import WorkPreviews from "@/components/home/WorkPreviews";
import CustomFeatures from "@/components/home/CustomFeatures";
import { alternatesFor } from "@/lib/i18n/config";
import { FOUNDING_DATE, ORGANIZATION_DESCRIPTION, ORGANIZATION_PROFILES } from "@/data/company-facts";
import { homeFaqs } from "@/data/home-faqs";

// Tell Next.js to statically generate this page at build time
// so critters can inline critical CSS into the HTML output
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom Website Design & Development | PandaCodeGen",
  description:
    "Custom business websites and online stores, with content your team can edit and code you own. Work directly with the founders, scope and price agreed upfront. Fixed pricing from $1,500.",
  // Self-referencing canonical plus reciprocal hreflang to the French and
  // German versions of this page. x-default points at English.
  alternates: alternatesFor("home", "en"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pandacodegen.com",
    siteName: "PandaCodeGen",
    title: "Custom Website Design & Development | PandaCodeGen",
    description:
      "Custom business websites and online stores you own outright. Your team edits the content; we agree scope and price before work starts. From $1,500.",
    images: [
      ogImageForPath("/"),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Design & Development | PandaCodeGen",
    description:
      "Custom business websites and online stores you own outright, with a content editor your team runs. Scope and price agreed before work starts.",
    images: [ogImageForPath("/")],
  },
};

// Lazy load below-the-fold components
const SocialProof = lazyLoad(() => import("@/components/home/SocialProof"));
const ServicesHub = lazyLoad(() => import("@/components/sections/ServicesHub"));
const HowItWorksSimple = lazyLoad(() => import("@/components/HowItWorksSimple"));
const FounderSection = lazyLoad(() => import("@/components/sections/FounderSection"));
const LatestBlog = lazyLoad(() => import("@/components/sections/LatestBlog"));
const TierQuiz = lazyLoad(() => import("@/components/sections/TierQuiz"));

// homeFaqs moved to src/data/home-faqs.ts (24 Sep 2026), unchanged.
export default function Home() {
  // Schema.org structured data for homepage
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "url": "https://www.pandacodegen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 655,
          "height": 113
        },
        "description": ORGANIZATION_DESCRIPTION,
        "email": "info@pandacodegen.com",
        "foundingDate": FOUNDING_DATE,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12250 S Kirkwood Rd, Apt 1128",
          "addressLocality": "Stafford",
          "addressRegion": "TX",
          "postalCode": "77477",
          "addressCountry": "US"
        },
        "areaServed": "Worldwide",
        "founder": [
          {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/about/hassan#person",
            "name": "Hassan Jamal",
            "jobTitle": "Co-founder and Lead Engineer",
            "url": "https://www.pandacodegen.com/about/hassan",
            // Personal profiles belong on the Person entity, not on the
            // Organization's sameAs.
            "sameAs": [
              "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
              "https://github.com/hassan-pandagen"
            ]
          },
          {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/about/imran#person",
            "name": "Imran Raza Ladhani",
            "jobTitle": "Co-founder and Lead Architect",
            "url": "https://www.pandacodegen.com/about/imran",
            "sameAs": [
              "https://www.linkedin.com/in/imran-raza-ladhani/"
            ]
          }
        ],
        // Company-owned profiles, confirmed by the owner as controlled and live
        // (2026-07-27). sameAs is an identity assertion, so a URL that starts
        // 404ing should be removed rather than left asserted.
        "sameAs": [...ORGANIZATION_PROFILES],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@pandacodegen.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "serviceType": [
          "Custom Web Development",
          "WordPress Migration",
          "Shopify Headless Commerce",
          "E-Commerce Development",
          "Web Performance Optimization",
          "Answer Engine Optimization (AEO)"
        ],
        "knowsAbout": [
          "Next.js development",
          "WordPress migration",
          "Shopify headless commerce",
          "WooCommerce migration",
          "Wix migration",
          "Squarespace migration",
          "Webflow migration",
          "GoHighLevel migration",
          "URL and redirect planning",
          "Core Web Vitals measurement",
          "Custom e-commerce development",
          "Server-side ad tracking (Meta Conversions API)",
          "Answer Engine Optimization (AEO)",
          "Technical SEO",
          "Headless CMS architecture",
          "Vercel deployment"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pandacodegen.com/#website",
        "url": "https://www.pandacodegen.com",
        "name": "PandaCodeGen - Custom Next.js Web Development",
        "description": "Custom Next.js websites you own outright, with fast pages and clear answers that search engines and AI assistants can quote.",
        "publisher": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/#webpage",
        "url": "https://www.pandacodegen.com",
        "name": "Custom Website Design & Development | PandaCodeGen",
        "description": "Custom Next.js websites you own outright, with fast pages and clear answers that search engines and AI assistants can quote.",
        "isPartOf": {
          "@id": "https://www.pandacodegen.com/#website"
        },
        "about": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
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
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Paper grain texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* SECTIONS REMOVED 13 Sep 2026, components kept and still importable.
          Measured against eleven competitor homepages with the same extractor:
          median 9 H2 sections, longest 12, this page 17. The excess was not
          spread evenly -- it sat in four services blocks, three pricing blocks,
          three "who we are" blocks and two CTAs, twelve blocks doing the work of
          five. Nothing here was cut to hit a word count; the auditor withdrew
          that target on 13 Sep as unvalidated. Each removal below is a
          duplicate or a block the audit named. To restore one, re-add its tag. */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Answer-first summary, extractable passage placed in the citation zone (first
          30% of the page). REWRITTEN 15 Sep 2026. Because it is written to be lifted
          by an assistant, it was also the densest concentration of stale claims left
          on the site, and the most likely passage to be quoted:

            - "no retainer" -- contradicted the $500/mo AI SEO service published 14 Sep
            - "no monthly platform fees" -- contradicted the hosting correction of 13 Sep,
              where provider costs continue and hosting can be billed
            - "rebuilds slow WordPress, Shopify, Webflow, Wix and Squarespace sites" --
              migration-led, and it told the reader their site was slow
            - "take 2 to 4 weeks" -- a universal timeline
            - "score 90 or better on Lighthouse, mobile and desktop" -- stated flat, when
              company-facts scopes it to the representative pages named in the written
              scope, verified across three recorded runs
            - "AI assistants such as ChatGPT, Claude and Perplexity can quote" -- implies
              selection, which the AI SEO page spends a FAQ saying nobody can promise
            - "web development" linked to an agency-facing blog post, not a service

          Nothing here needs a qualification because nothing here overstates. The
          timeline, performance target and running costs live on the pages that can
          state their conditions. */}
      <section className="px-6 pt-2 pb-6 md:pb-8 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <p data-speakable="true" className="text-base md:text-lg text-stone-600 leading-relaxed text-center">
            <strong className="text-charcoal">PandaCodeGen designs and builds fast business websites and{" "}
            <Link href="/services/ecommerce" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">online stores</Link>.</strong>{" "}
            We create new websites and redesign or rebuild existing sites around how your business works. When a
            project needs a{" "}
            <Link href="/services" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">migration</Link>,
            we plan how your content, URLs and integrations carry across. You get a content editor, training and
            code you own.
          </p>
        </div>
      </section>

      {/* SECTION ORDER, resequenced 10 Sep 2026.

          A structure audit measured the mobile homepage at ~30,000px and found
          that the buying decisions arrived late: situation-based service
          selection began around 9,787px, the tier finder around 22,058. Adding
          the work previews the day before had pushed selection down further, to
          11,699. The audit's recommended sequence is outcome and scope, then
          real projects, then a review, then service choices, then packages,
          then a short process, then a focused FAQ.

          This is a pure reorder. No section was cut and no copy changed, so
          nothing measured elsewhere is invalidated. Two constraints held it in
          place: the answer-first summary above stays in the first 30% of the
          page for extraction, and no two adjacent sections share a background,
          which is why the migration standard sits between services and the tier
          finder rather than immediately after the hero. */}

      {/* Real finished sites, before any claim about them. Projects precede the
          standards that describe how we build them. */}
      <WorkPreviews />

      {/* Public reviews and owner-confirmed project records */}
      <SocialProof />


      {/* Services Bento, premium bento grid (Paper) */}
      <ServicesHub />


      {/* What actually gets built, and who can change it afterwards. Placed
          where the 10 Sep feature audit asked for it: after a real project and
          before the packages, so the reader knows what a package contains
          before being asked to pick one. White between the charcoal band above
          and the paper of the tier finder below, which keeps the homepage rule
          that no two adjacent sections share a background. */}
      <CustomFeatures />

      {/* Tier Finder Quiz, "Which tier is right for me?" Packages, immediately
          after service selection rather than 22,000px below it. */}
      <TierQuiz />

      {/* How It Works, 4 Steps with Visual Diagrams */}
      <HowItWorksSimple />




      {/* Founders */}
      <FounderSection />


      {/* FAQ Section */}
      <HomeFaqSection faqs={homeFaqs} />

      {/* Latest Blog Posts */}
      <LatestBlog />

      <Footer />
    </main>
  );
}
