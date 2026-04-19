import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Next.js Development Agency | Custom Web Apps & SaaS | PandaCodeGen',
  description: 'We build custom Next.js web apps, SaaS platforms, and client portals from scratch. Fixed-price quotes, you own the code, built to scale from day one.',
  alternates: { canonical: '/services/custom-engineering' },
  keywords: [
    'nextjs development agency',
    'custom web development agency',
    'saas development agency',
    'custom web app development',
    'nextjs agency',
    'custom website development',
    'nextjs saas development',
    'custom next.js development',
    'web app development agency',
    'custom portal development',
  ],
  openGraph: {
    title: 'Next.js Development Agency | Custom Web Apps & SaaS | PandaCodeGen',
    description: 'Custom Next.js web apps, SaaS platforms, and client portals from scratch. Fixed-price quotes, you own the code, built to scale.',
    url: 'https://www.pandacodegen.com/services/custom-engineering',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Development Agency | Custom Web Apps & SaaS | PandaCodeGen',
    description: 'Custom Next.js web apps, SaaS platforms, and client portals. Fixed-price quotes, you own the code, built to scale.',
  },
};

export default function EngineeringPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#service",
        "name": "Custom Web Apps & SaaS Development",
        "description": "Build scalable SaaS platforms, client portals, and AI-powered dashboards. Enterprise level architecture that scales to millions.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["SaaS Development", "Web Application Development", "Custom Dashboard", "AI Integration"],
        "priceRange": "$3,000 - $60,000",
        "telephone": "+13027738982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78702",
          "addressCountry": "US"
        },
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Custom Development Tiers",
          "itemListElement": [
            { "@type": "Offer", "name": "Foot in the Door", "price": "3000", "priceCurrency": "USD", "description": "Marketing site, internal tool, or small portal. 1 to 2 weeks." },
            { "@type": "Offer", "name": "Growth", "price": "10000", "priceCurrency": "USD", "description": "SaaS MVP, client portal, or full dashboard. 3 to 5 weeks." },
            { "@type": "Offer", "name": "Scale", "price": "25000", "priceCurrency": "USD", "description": "Multi-tenant SaaS, complex integrations. 6 to 12 weeks." }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#webpage",
        "url": "https://www.pandacodegen.com/services/custom-engineering",
        "name": "Custom Engineering | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/custom-engineering#service" },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10T00:00:00-05:00",
        "dateModified": "2026-04-18T00:00:00-05:00",
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Custom Engineering", "item": "https://www.pandacodegen.com/services/custom-engineering" }
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
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#review-clutch",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website. They did exactly what they said they would, delivering a blazing fast Next.js website with a 100/100 PageSpeed score. The communication throughout was excellent.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/custom-engineering#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#review-trustpilot",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen on rebuilding my business website and I am beyond impressed. Hassan handled everything professionally, and the final product exceeded my expectations. The site loads incredibly fast and looks stunning.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/custom-engineering#service" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#faq",
        "mainEntity": [
          { "@type": "Question", "name": "How long does it take to build a custom app?", "acceptedAnswer": { "@type": "Answer", "text": "A working MVP takes 4-6 weeks. A full-featured platform takes 8-16 weeks depending on complexity. We do sprint-based development so you see working features every week, not just at the end." } },
          { "@type": "Question", "name": "How much does custom development cost?", "acceptedAnswer": { "@type": "Answer", "text": "Typical dev shops charge $50,000 to $200,000+ and take 3-6 months. We meet you halfway. Three tiers: Foot-in-the-Door starts at $3,000 (small internal tool or marketing site with clear scope). Growth starts at $10,000 (SaaS MVP, client portal, or full dashboard with custom business logic). Scale starts at $25,000 (multi-tenant SaaS, complex integrations, enterprise features). Fixed-price quotes. No hourly billing surprises. You own 100% of the code and IP from Day 1." } },
          { "@type": "Question", "name": "Can I add AI features to my app?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate OpenAI and Claude APIs directly into your product. Examples: AI chat support, document analysis, automated data extraction, content generation, and smart search. These features are built natively, not bolted on." } },
          { "@type": "Question", "name": "What if I already have a Bubble/no-code app?", "acceptedAnswer": { "@type": "Answer", "text": "We migrate your logic and data to custom code. Your users don't notice a difference except that everything is faster. We handle database migration, auth setup, and API recreation." } },
          { "@type": "Question", "name": "Do I own the code?", "acceptedAnswer": { "@type": "Answer", "text": "100%. You get the full GitHub repository, all documentation, and deployment access. It's your intellectual property from day one. You can hire any developer in the world to maintain or extend it." } }
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