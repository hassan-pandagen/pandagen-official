import PageContent from './PageContent';

export const metadata = {
  title: 'WooCommerce to Custom Code Migration | PandaGen',
  description: 'Escape WooCommerce hosting bills, plugin conflicts, and slow checkouts. We migrate your WooCommerce store to a custom-coded Next.js storefront you own forever.',
};

export default function WooCommerceServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/woocommerce#service",
        "name": "WooCommerce Migration & Custom E-Commerce Development",
        "description": "Migrate from WooCommerce to a custom-coded Next.js storefront. Sub-second load times, zero plugin fees, and full code ownership. Serving UK, Australia, Canada, Europe and US.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": ["US", "GB", "AU", "CA", "DE", "FR", "NL", "IE"],
        "serviceType": ["WooCommerce Migration", "WooCommerce to Next.js", "Custom E-Commerce", "Headless Commerce"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/woocommerce#webpage",
        "url": "https://www.pandacodegen.com/services/woocommerce",
        "name": "WooCommerce Migration to Custom Code | PandaGen",
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
