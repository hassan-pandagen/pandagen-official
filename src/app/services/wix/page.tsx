import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Is Wix Slowing Down Your Business? We Migrate to Next.js',
  description: "Wix scores 30 to 60 on Google PageSpeed and blocks advanced SEO controls. We migrate to custom Next.js in 1 to 3 weeks. 90+ PageSpeed, no monthly fees, full SEO ownership.",
  alternates: { canonical: '/services/wix' },
  keywords: [
    'wix migration service',
    'wix to nextjs',
    'wix alternative',
    'wix slow website',
    'wix seo problems',
    'replace wix website',
    'wix migration cost',
    'wix to custom code',
    'wix slow loading fix',
    'wix seo limitations',
  ],
  openGraph: {
    title: 'Is Wix Slowing Down Your Business? We Migrate to Next.js | PandaCodeGen',
    description: "Wix scores 30 to 60 on PageSpeed and blocks advanced SEO. We migrate to custom Next.js in 1 to 3 weeks. 90+ PageSpeed, no monthly fees.",
    url: 'https://www.pandacodegen.com/services/wix',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Wix Slowing Down Your Business? We Migrate to Next.js | PandaCodeGen',
    description: "Wix scores 30 to 60 on PageSpeed and blocks SEO. We migrate to custom Next.js in 1 to 3 weeks. 90+ PageSpeed, no monthly fees.",
  },
};

export default function WixServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/wix#service",
        "name": "Wix Website Development & Migration Services",
        "description": "Professional Wix website development with migration path to custom coded Next.js for businesses that want to own their platform and rank higher.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Wix Development", "Wix Migration", "Wix to Next.js", "Wix Alternative"],
        "priceRange": "$1,500 - $10,000",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "telephone": "+13027738982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Wix Migration Tiers",
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
        "@id": "https://www.pandacodegen.com/services/wix#webpage",
        "url": "https://www.pandacodegen.com/services/wix",
        "name": "Wix Development & Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wix#service" },
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
          { "@type": "ListItem", "position": 3, "name": "Wix", "item": "https://www.pandacodegen.com/services/wix" }
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
        "knowsAbout": ["Wix Studio", "Velo", "Wix Stores", "Wix Bookings", "301 redirects", "Server-side rendering", "Schema control", "Next.js"],
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/wix#review-clutch",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website. They did exactly what they said they would, delivering a blazing fast Next.js website with a 90+ PageSpeed score. The communication throughout was excellent.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/wix#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/wix#review-trustpilot",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen on rebuilding my business website and I am beyond impressed. Hassan handled everything professionally, and the final product exceeded my expectations. The site loads incredibly fast and looks stunning.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/wix#service" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/wix#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will I lose my Google rankings if I leave Wix?", "acceptedAnswer": { "@type": "Answer", "text": "No. We set up 301 redirects from every old URL to the new URL. Google treats it as the same content at a faster address. Rankings typically improve within 30-60 days because the new site is significantly faster." } },
          { "@type": "Question", "name": "Can I still edit my website without coding?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up a built-in content editor (like Sanity) with an easy visual editor. You can edit text, images, and blog posts just like you did on Wix, but without the speed and SEO limitations." } },
          { "@type": "Question", "name": "How long does it take to migrate from Wix?", "acceptedAnswer": { "@type": "Answer", "text": "7 days to 3 weeks depending on site size. Foot-in-the-door migrations ship in 7 days. Growth sites take 2 to 3 weeks. Scale sites with Wix Stores or Bookings take 3 to 4 weeks." } },
          { "@type": "Question", "name": "What about my Wix forms and contact pages?", "acceptedAnswer": { "@type": "Answer", "text": "All forms get rebuilt with better functionality. We can integrate with any email service (Mailchimp, ConvertKit) or CRM. Form submissions work exactly as before, but the page loads 5x faster." } },
          { "@type": "Question", "name": "Is custom code harder to maintain than Wix?", "acceptedAnswer": { "@type": "Answer", "text": "No. With a built-in content editor, content editing is just as easy. And because there are no plugins or themes to update, there's actually LESS maintenance. No monthly subscription fees, no broken updates." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <p className="sr-only" data-speakable="true">PandaCodeGen migrates Wix sites to custom Next.js in 1 to 3 weeks. Wix scores 30 to 60 on Mobile PageSpeed and blocks advanced SEO controls. After migration you get 90+ PageSpeed, zero monthly platform fees, full code ownership, and rankings that climb because Google rewards faster Core Web Vitals.</p>
      <PageContent />
    </>
  );
}