import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Why Is My GoHighLevel Site Slow? We Fix It With Custom Next.js | PandaCodeGen',
  description: "GoHighLevel sites score 20 to 45 on mobile PageSpeed and cannot rank on Google. We build a custom Next.js site that integrates with GHL's CRM, ranks organically, and loads under 1 second.",
  alternates: { canonical: '/services/gohighlevel' },
  keywords: [
    'gohighlevel slow website fix',
    'gohighlevel website alternative',
    'gohighlevel custom website',
    'ghl website replacement',
    'gohighlevel nextjs integration',
    'gohighlevel seo problems',
    'gohighlevel slow landing page',
    'replace gohighlevel website',
    'gohighlevel custom development',
    'ghl slow website',
  ],
  openGraph: {
    title: 'Why Is My GoHighLevel Site Slow? We Fix It With Custom Next.js | PandaCodeGen',
    description: "GoHighLevel sites score 20 to 45 on mobile PageSpeed. We build a custom Next.js site that integrates with GHL's CRM and ranks on Google.",
    url: 'https://www.pandacodegen.com/services/gohighlevel',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Is My GoHighLevel Site Slow? We Fix It With Custom Next.js | PandaCodeGen',
    description: "GHL sites score 20 to 45 on mobile PageSpeed. We build a custom Next.js site that integrates with GHL and ranks on Google.",
  },
};

export default function GoHighLevelServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/gohighlevel#service",
        "name": "GoHighLevel Website & Funnel Development",
        "description": "Keep GoHighLevel for CRM and automations. We build custom coded websites that integrate with GHL's API, or build a fully custom CRM + website solution. You own the code.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["GoHighLevel Development", "GHL Funnel Building", "GoHighLevel Migration", "GoHighLevel Alternative"],
        "priceRange": "$1,500 - $15,000",
        "telephone": "+13027738982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "GoHighLevel Development Tiers",
          "itemListElement": [
            { "@type": "Offer", "name": "Starter", "price": "1500", "priceCurrency": "USD", "description": "Simple funnel or 5 to 7 page landing site with full GHL API integration" },
            { "@type": "Offer", "name": "Growth", "price": "3000", "priceCurrency": "USD", "description": "15 to 40 page marketing site with GHL Workflows and Pipelines intact" },
            { "@type": "Offer", "name": "Scale", "price": "8000", "priceCurrency": "USD", "description": "Agency white-label, SaaS mode sub-accounts, member portals, complex Workflows" }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/gohighlevel#webpage",
        "url": "https://www.pandacodegen.com/services/gohighlevel",
        "name": "GoHighLevel Development & Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/gohighlevel#service" },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10T00:00:00-05:00",
        "dateModified": "2026-05-26T00:00:00-05:00",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "GoHighLevel", "item": "https://www.pandacodegen.com/services/gohighlevel" }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "alternateName": "Panda Code Gen",
        "url": "https://www.pandacodegen.com",
        "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
        "email": "info@pandacodegen.com",
        "foundingDate": "2026",
        "areaServed": "Worldwide",
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/gohighlevel#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will my GHL automations break during migration?", "acceptedAnswer": { "@type": "Answer", "text": "No. We build the new site in parallel while your GHL funnels stay live. When we launch, all forms and triggers connect to your existing GHL pipelines through the API. Everything keeps working." } },
          { "@type": "Question", "name": "Do I need to cancel GHL?", "acceptedAnswer": { "@type": "Answer", "text": "Not if you don't want to. Option B keeps GHL for CRM while upgrading your website. Option C replaces GHL entirely with a custom CRM. Most clients choose Option B because GHL's automation engine is solid." } },
          { "@type": "Question", "name": "How much does a custom site with GHL integration cost?", "acceptedAnswer": { "@type": "Answer", "text": "Typical agencies charge $8,000 to $25,000 and take 6-10 weeks. We meet you halfway. Three tiers: Starter starts at $1,500 (5 to 7 page landing site with GHL API integration). Growth starts at $3,000 (multi-page marketing site with full GHL API integration). Scale starts at $8,000 (agency white-label, member portals, complex GHL workflows). Your GHL CRM and automations stay fully intact." } },
          { "@type": "Question", "name": "Can you build custom landing pages that work with GHL?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build custom landing pages that load in under 1 second and push leads directly into your GHL CRM via API. Higher Quality Scores on Google Ads means lower cost per lead." } },
          { "@type": "Question", "name": "What if I want to leave GHL later?", "acceptedAnswer": { "@type": "Answer", "text": "If you chose Option B, your custom website already works independently. We can replace the GHL API connections with a custom backend whenever you're ready. No vendor lock-in, no rebuilding from scratch." } }
        ]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/gohighlevel#review-1",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and did not charge for revisions. Overall, their expertise and support were commendable.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/gohighlevel#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/gohighlevel#review-2",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen and had a great experience. Hassan was super helpful and communicative throughout the process. Even though I am not tech-savvy, he broke things down in a way that made sense to me. The service was excellent overall.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/gohighlevel#service" }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <p className="sr-only" data-speakable="true">PandaCodeGen replaces slow GoHighLevel websites with custom Next.js frontends that load under 1 second. GHL sites score 20 to 45 on mobile PageSpeed because GHL JavaScript blocks the main thread. We keep your GHL CRM, automations, and calendars intact while replacing only the public-facing site that customers and Google actually see.</p>
      <PageContent />
    </>
  );
}