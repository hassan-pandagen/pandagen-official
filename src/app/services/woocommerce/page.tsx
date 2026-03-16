import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'WooCommerce to Custom Code Migration | PandaCodeGen',
  description: 'Escape WooCommerce hosting bills, plugin conflicts, and slow checkouts. We migrate your WooCommerce store to a custom coded Next.js storefront you own forever.',
  alternates: {
    canonical: '/services/woocommerce',
  },
  openGraph: {
    title: 'WooCommerce to Custom Code Migration | PandaCodeGen',
    description: 'Escape WooCommerce hosting bills, plugin conflicts, and slow checkouts. We migrate your WooCommerce store to a custom coded Next.js storefront you own forever.',
    url: 'https://www.pandacodegen.com/services/woocommerce',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce to Custom Code Migration | PandaCodeGen',
    description: 'Escape WooCommerce hosting bills, plugin conflicts, and slow checkouts. We migrate your store to a custom Next.js storefront you own forever.',
  },
};

export default function WooCommerceServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/woocommerce#service",
        "name": "WooCommerce Migration & Custom E-Commerce Development",
        "description": "Migrate from WooCommerce to a custom coded Next.js storefront. Under a second load times, zero plugin fees, and full code ownership. Serving UK, Australia, Canada, Europe and US.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": ["US", "GB", "AU", "CA", "DE", "FR", "NL", "IE"],
        "serviceType": ["WooCommerce Migration", "WooCommerce to Next.js", "Custom E-Commerce", "Headless Commerce"],
        "priceRange": "$8,000 - $25,000",
        "image": "https://www.pandacodegen.com/og-image.jpg"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/woocommerce#webpage",
        "url": "https://www.pandacodegen.com/services/woocommerce",
        "name": "WooCommerce Migration to Custom Code | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/woocommerce#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "WooCommerce Migration", "item": "https://www.pandacodegen.com/services/woocommerce" }
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
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/woocommerce#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will I lose my WooCommerce orders and customer data during migration?", "acceptedAnswer": { "@type": "Answer", "text": "No. We export your full order history, customer records, and product catalog from WooCommerce before we touch anything. All data migrates to your new platform. Nothing is deleted until you confirm everything transferred correctly." } },
          { "@type": "Question", "name": "How much does a WooCommerce to custom code migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "A standard WooCommerce store migration typically ranges from $8,000-$25,000 depending on the number of products, custom checkout flows, and integrations. Over 3 years, most stores save $3,000-$8,000 in eliminated hosting fees, plugin subscriptions, and developer maintenance." } },
          { "@type": "Question", "name": "Can I still use Stripe and PayPal after leaving WooCommerce?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate Stripe and PayPal directly into your custom storefront using their official APIs. No payment gateway plugins needed. Your checkout is faster, more reliable, and you save the WooCommerce payment plugin fees." } },
          { "@type": "Question", "name": "How long does a WooCommerce migration take?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 6-8 weeks. Week 1-2: product export and new architecture. Weeks 3-5: build custom storefront with cart, checkout, and product pages. Week 6-7: data migration and testing. Week 8: zero-downtime launch." } },
          { "@type": "Question", "name": "What happens to my WooCommerce SEO rankings after migration?", "acceptedAnswer": { "@type": "Answer", "text": "We map every product URL, category page, and blog post with 301 redirects so Google sees continuity. Combined with faster load times and improved Core Web Vitals, most clients see rankings improve within 30-60 days of launch." } }
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
