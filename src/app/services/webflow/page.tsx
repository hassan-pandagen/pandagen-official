import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Webflow Migration Service: Next.js From $1,500',
  description: 'Webflow charges $23 to $49 a month and still scores 55 to 75 on mobile PageSpeed. We migrate to custom Next.js from $1,500. 90+ PageSpeed, code you own.',
  alternates: { canonical: '/services/webflow' },
  keywords: [
    'webflow migration service',
    'webflow to nextjs migration',
    'webflow alternative',
    'webflow too expensive',
    'webflow migration cost',
    'webflow to custom code',
    'webflow nextjs agency',
    'webflow slow website fix',
    'replace webflow',
    'webflow seo limitations',
  ],
  openGraph: {
    title: 'Webflow Migration Service: Next.js From $1,500 | PandaCodeGen',
    description: 'Webflow charges $23 to $49/month and still scores 55 to 75 on PageSpeed. We migrate to custom Next.js. 90+ PageSpeed, no platform fees.',
    url: 'https://www.pandacodegen.com/services/webflow',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webflow Migration Service: Next.js From $1,500 | PandaCodeGen',
    description: 'Webflow costs $23 to $49/month and still scores 55 to 75 on PageSpeed. We migrate to custom Next.js. 90+ PageSpeed, no platform fees.',
  },
};

export default function WebflowServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/webflow#service",
        "name": "Webflow Migration to Custom Code",
        "description": "Professional Webflow migration to custom coded Next.js. Stop paying premium hosting fees. Get faster loading, full SEO control, and own your code.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Webflow Migration", "Webflow to Next.js", "Webflow Alternative", "Webflow to Custom Code"],
        "priceRange": "$1,500 - $10,000+",
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
          "name": "Webflow Migration Tiers",
          "itemListElement": [
            { "@type": "Offer", "name": "Starter", "price": "1500", "priceCurrency": "USD", "description": "5 to 7 page Webflow site rebuilt in custom Next.js with Sanity CMS and 301 redirect mapping" },
            { "@type": "Offer", "name": "Growth", "price": "3500", "priceCurrency": "USD", "description": "Business site with custom Webflow interactions recreated in code and full CMS collection migration" },
            { "@type": "Offer", "name": "Scale", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "5000", "maxPrice": "10000", "priceCurrency": "USD" }, "description": "Complex builds, Webflow Ecommerce, localization, 30+ pages" },
            { "@type": "Offer", "name": "Scale+", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "10000", "priceCurrency": "USD" }, "description": "Enterprise scope, custom-quoted after a scoping call" }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/webflow#webpage",
        "url": "https://www.pandacodegen.com/services/webflow",
        "name": "Webflow Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/webflow#service" },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10T00:00:00-05:00",
        "dateModified": "2026-05-26T00:00:00-05:00",
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Webflow Migration", "item": "https://www.pandacodegen.com/services/webflow" }
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
        "knowsAbout": ["Webflow CMS migration", "headless Sanity", "Vercel", "Core Web Vitals"],
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/webflow#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Is custom code harder to use than Webflow's visual editor?", "acceptedAnswer": { "@type": "Answer", "text": "For content editing, no. We set up a content management system that's just as easy. For design changes, yes, you'll need a developer. But that's the trade-off: unlimited power vs. visual simplicity. Most businesses outgrow the visual editor anyway." } },
          { "@type": "Question", "name": "Can you recreate my Webflow animations in code?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Custom animations can do everything Webflow interactions can do, and more. We can even add interactions that Webflow's interaction panel can't handle: scroll-triggered 3D effects, page transitions, and real-time data animations." } },
          { "@type": "Question", "name": "What about Webflow's CMS?", "acceptedAnswer": { "@type": "Answer", "text": "We migrate all your CMS content to a headless CMS like Sanity or Contentful. No 10,000-item limit. Relational data, computed fields, and API access. You can query your content from anywhere: web, mobile, even AI agents." } },
          { "@type": "Question", "name": "How much does it cost to migrate from Webflow?", "acceptedAnswer": { "@type": "Answer", "text": "Typical agencies charge $20,000 to $60,000 and take 10-16 weeks. We meet you halfway. Four tiers: Starter starts at $1,500 (5 to 7 pages, custom Next.js). Growth starts at $3,500 (business sites with custom interactions and CMS). Scale is $5,000 to $10,000 (complex builds, Webflow Ecommerce, localization, 30+ pages). Scale+ is $10,000+ for enterprise scope, custom-quoted after a scoping call. You also stop paying $39 to $235/month in Webflow fees forever." } },
          { "@type": "Question", "name": "What if Webflow adds the features I need later?", "acceptedAnswer": { "@type": "Answer", "text": "It's possible. But Webflow has been promising server-side logic and better CMS for years. Meanwhile, custom code has no roadmap dependency. You build exactly what you need, when you need it." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <p className="sr-only" data-speakable="true">PandaCodeGen migrates Webflow sites to custom Next.js in 2 to 4 weeks. Webflow charges $23 to $49 per month and still scores 55 to 75 on mobile PageSpeed. After migration you get 90+ PageSpeed, zero monthly platform fees, full code ownership, and no more CMS item limits or bandwidth overages.</p>
      <PageContent />
    </>
  );
}
