import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Squarespace Hurting SEO? We Migrate to Next.js',
  description: "Squarespace scores 30 to 55 on mobile PageSpeed and no plugin fixes it. We migrate you to custom Next.js: 90+ PageSpeed, full SEO control, no monthly fees.",
  alternates: { canonical: '/services/squarespace' },
  keywords: [
    'squarespace migration service',
    'squarespace to nextjs',
    'squarespace alternative',
    'squarespace slow website',
    'squarespace seo limitations',
    'replace squarespace',
    'squarespace migration cost',
    'squarespace too slow',
    'squarespace speed fix',
    'squarespace to custom code',
  ],
  openGraph: {
    title: 'Squarespace Hurting SEO? We Migrate to Next.js | PandaCodeGen',
    description: "Squarespace scores 30 to 55 on Google PageSpeed. No plugin fixes it. We migrate to custom Next.js. 90+ PageSpeed, full SEO control, no monthly fees.",
    url: 'https://www.pandacodegen.com/services/squarespace',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Hurting SEO? We Migrate to Next.js | PandaCodeGen',
    description: "Squarespace scores 30 to 55 on PageSpeed. No plugin fixes it. We migrate to custom Next.js. 90+ PageSpeed, no monthly fees.",
  },
};

export default function SquarespaceServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/squarespace#service",
        "name": "Squarespace Migration to Custom Code",
        "description": "Professional Squarespace migration to custom coded Next.js websites. Faster loading, real SEO, full code ownership.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Squarespace Migration", "Squarespace to Next.js", "Squarespace Alternative", "Squarespace to Custom Code"],
        "priceRange": "$1,500 - $10,000",
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
          "name": "Squarespace Migration Tiers",
          "itemListElement": [
            { "@type": "Offer", "name": "Starter", "price": "1500", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Growth", "price": "3500", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Scale", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "5000", "maxPrice": "10000", "priceCurrency": "USD" } },
            { "@type": "Offer", "name": "Scale+", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "10000", "priceCurrency": "USD" } }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/squarespace#webpage",
        "url": "https://www.pandacodegen.com/services/squarespace",
        "name": "Squarespace Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/squarespace#service" },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10T00:00:00-05:00",
        "dateModified": "2026-05-12T00:00:00-05:00",
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Squarespace Migration", "item": "https://www.pandacodegen.com/services/squarespace" }
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
        "knowsAbout": ["Squarespace 7.1", "Fluid Engine", "Acuity Scheduling", "301 redirects", "Core Web Vitals", "Next.js"],
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/squarespace#review-clutch",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website. They did exactly what they said they would, delivering a blazing fast Next.js website with a 90+ PageSpeed score. The communication throughout was excellent.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/squarespace#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/squarespace#review-trustpilot",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen on rebuilding my business website and I am beyond impressed. Hassan handled everything professionally, and the final product exceeded my expectations. The site loads incredibly fast and looks stunning.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/squarespace#service" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/squarespace#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will my Squarespace site design transfer to custom code?", "acceptedAnswer": { "@type": "Answer", "text": "We don't copy-paste templates. We redesign your brand with custom code that's uniquely yours. We match your brand colors, fonts, and style, but make it faster, more professional, and fully customizable." } },
          { "@type": "Question", "name": "Can I still use Squarespace for my online store?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend migrating fully. But if you have a small store, we can integrate Shopify's Buy Button or Stripe checkout into your custom site so you keep selling without Squarespace's monthly fees." } },
          { "@type": "Question", "name": "How much does a Squarespace migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "Four tiers. Starter $1,500 (5 to 7 pages, custom Next.js). Growth $3,500 (15 to 50 pages with forms and blog). Scale $5,000 to $10,000 (Squarespace Commerce, Scheduling, member areas, 30+ pages). Scale+ $10,000+ for enterprise scope, custom-quoted after a scoping call. You also stop paying Squarespace $23 to $65 a month forever." } },
          { "@type": "Question", "name": "What if I have a blog on Squarespace?", "acceptedAnswer": { "@type": "Answer", "text": "All blog posts migrate with their content, images, dates, and URLs. We set up a content editor so you can write and publish new posts the same way, but your blog loads 4-5x faster." } },
          { "@type": "Question", "name": "Is the migration disruptive to my business?", "acceptedAnswer": { "@type": "Answer", "text": "No. Your Squarespace site stays live during the entire build. We develop the new site in parallel. On launch day, we point your domain to the new site. Zero downtime." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <p className="sr-only" data-speakable="true">PandaCodeGen migrates Squarespace sites to custom Next.js in 2 to 3 weeks. Squarespace scores 30 to 55 on Google PageSpeed Mobile because its template architecture loads all CSS and JavaScript on every page. No plugin fixes this. After migration you get 90+ PageSpeed, full SEO control, zero monthly platform fees, and code you own outright.</p>
      <PageContent />
    </>
  );
}
