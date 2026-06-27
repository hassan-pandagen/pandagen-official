import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Services & Capabilities',
  description: 'WordPress migration, Shopify headless commerce, and custom web app development. Under a second load times, zero bloat, bank level security.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services & Capabilities | PandaCodeGen',
    description: 'WordPress migration, Shopify headless commerce, and custom web app development. Under a second load times, zero bloat.',
    url: 'https://www.pandacodegen.com/services',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Capabilities | PandaCodeGen',
    description: 'WordPress migration, Shopify headless commerce, and custom web app development. Under a second load times, zero bloat.',
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services#service",
        "name": "PandaCodeGen Development Services",
        "url": "https://www.pandacodegen.com/services",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "telephone": "+1-302-773-8982",
        "priceRange": "$1,500 - $60,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "provider": {
          "@type": "Organization",
          "@id": "https://www.pandacodegen.com/#organization",
          "name": "PandaCodeGen"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "WordPress to Next.js Migration",
                "description": "Migrate your WordPress site to a custom Next.js application with load times under 1 second, perfect SEO, and zero plugin maintenance. PandaCodeGen rebuilt MyCustomPatches from 45 to 90+ PageSpeed in about 22 days."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Platform Migrations (Shopify, Wix, Webflow, WooCommerce)",
                "description": "Migrate from Shopify, Wix, Webflow, or WooCommerce to a custom Next.js stack. Keep your SEO, kill the monthly app fees, and own 100% of the code."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Apps & Dashboards",
                "description": "Build custom client portals, internal dashboards, AI tools, and mobile apps with React and Next.js."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High Performance Shopify Stores",
                "description": "Custom headless Shopify storefronts that load instantly with Next.js. No templates, no monthly app fees."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "GoHighLevel Development & Integration",
                "description": "Custom GoHighLevel funnels, automations, and integrations wired into your stack so leads, CRM, and follow-up run on autopilot."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AEO, Tracking & Conversion Analytics",
                "description": "Answer Engine Optimization plus server-side tracking with the Meta Conversions API, so you stay visible in AI answers and measure every conversion accurately."
              }
            }
          ]
        }
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
        "knowsAbout": [
          "Next.js",
          "Headless commerce",
          "WordPress migration",
          "Shopify migration",
          "Wix migration",
          "Webflow migration",
          "WooCommerce migration",
          "GoHighLevel",
          "Answer Engine Optimization (AEO)",
          "Meta Conversions API"
        ],
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services#webpage",
        "url": "https://www.pandacodegen.com/services",
        "name": "Services & Capabilities | PandaCodeGen",
        "description": "Expert Next.js development services: WordPress migration, Shopify headless commerce, and custom web application development.",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageContent />
    </>
  );
}