import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Squarespace Migration to Custom Code | PandaCodeGen',
  description: "Escape Squarespace subscription fees and SEO limits. We migrate your site to custom Next.js, faster load times, better rankings, and you own it forever.",
  alternates: { canonical: '/services/squarespace' },
  openGraph: {
    title: 'Squarespace Migration to Custom Code | PandaCodeGen',
    description: "Escape Squarespace fees and SEO limits. We migrate to custom Next.js, faster, cheaper, and better rankings.",
    url: 'https://www.pandacodegen.com/services/squarespace',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Migration to Custom Code | PandaCodeGen',
    description: "Escape Squarespace fees and SEO limits. We migrate to custom Next.js, faster, cheaper, and better rankings.",
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
        "priceRange": "$4,000 - $12,000",
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "2",
          "reviewCount": "2"
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
        "alternateName": "Panda Gen",
        "url": "https://www.pandacodegen.com",
        "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
        "email": "info@pandacodegen.com",
        "foundingDate": "2026",
        "areaServed": "Worldwide",
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/squarespace#review-clutch",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website. They did exactly what they said they would, delivering a blazing fast Next.js website with a 100/100 PageSpeed score. The communication throughout was excellent.",
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
          { "@type": "Question", "name": "How much does a Squarespace migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "Standard business sites typically range from $4,000-$12,000 depending on number of pages and complexity. Over 3 years, you'll save $1,200-$2,400 in Squarespace subscription fees alone." } },
          { "@type": "Question", "name": "What if I have a blog on Squarespace?", "acceptedAnswer": { "@type": "Answer", "text": "All blog posts migrate with their content, images, dates, and URLs. We set up a content editor so you can write and publish new posts the same way, but your blog loads 4-5x faster." } },
          { "@type": "Question", "name": "Is the migration disruptive to my business?", "acceptedAnswer": { "@type": "Answer", "text": "No. Your Squarespace site stays live during the entire build. We develop the new site in parallel. On launch day, we point your domain to the new site. Zero downtime." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageContent />
    </>
  );
}
