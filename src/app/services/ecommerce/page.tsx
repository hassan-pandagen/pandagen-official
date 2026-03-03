import PageContent from './PageContent';

export default function EcommercePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/ecommerce#service",
        "name": "Shopify Headless & E-Commerce Development",
        "description": "Custom headless Shopify storefronts that load instantly. No templates, no monthly app fees, complete customization.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Shopify Headless", "E-Commerce Development", "Shopify Migration", "Custom Shopify Storefront"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/ecommerce#webpage",
        "url": "https://www.pandacodegen.com/services/ecommerce",
        "name": "Shopify Headless Development | PandaGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/ecommerce#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "E-Commerce", "item": "https://www.pandacodegen.com/services/ecommerce" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/ecommerce#faq",
        "mainEntity": [
          { "@type": "Question", "name": "What is custom Shopify?", "acceptedAnswer": { "@type": "Answer", "text": "Custom Shopify means you keep Shopify for everything it's great at (inventory, orders, payments, and customer management), but replace the slow Liquid theme with a custom-coded storefront that loads in under 1 second. Same dashboard, 4x faster store." } },
          { "@type": "Question", "name": "Will my Shopify apps still work?", "acceptedAnswer": { "@type": "Answer", "text": "Your backend apps (inventory, email, shipping) work as before. Frontend apps (review widgets, upsell popups) get rebuilt as native features in your custom code, so they load instantly instead of injecting slow JavaScript. You stop paying monthly app fees for features we build once." } },
          { "@type": "Question", "name": "How long does a custom storefront migration take?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 6-8 weeks. Week 1-2: API architecture and design. Weeks 3-6: Build custom storefront (product pages, cart, checkout). Week 7: Testing with live Shopify data. Week 8: Launch with zero downtime." } },
          { "@type": "Question", "name": "Will I lose sales during the migration?", "acceptedAnswer": { "@type": "Answer", "text": "No. Your existing Shopify store stays live throughout the entire build. We develop the new storefront in parallel. On launch day, we simply point your domain to the new site. Zero downtime, zero lost sales." } },
          { "@type": "Question", "name": "How much does a custom Shopify storefront cost?", "acceptedAnswer": { "@type": "Answer", "text": "A custom storefront typically ranges from $10,000-$30,000 depending on complexity (number of products, custom checkout flows, subscription features). Most stores recover this investment within 4-6 months through eliminated app fees and increased conversion rates." } }
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