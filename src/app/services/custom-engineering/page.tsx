import PageContent from './PageContent';

export default function EngineeringPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#service",
        "name": "Custom Web Apps & SaaS Development",
        "description": "Build scalable SaaS platforms, client portals, and AI-powered dashboards. Enterprise-grade architecture that scales to millions.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": "Worldwide",
        "serviceType": ["SaaS Development", "Web Application Development", "Custom Dashboard", "AI Integration"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#webpage",
        "url": "https://www.pandacodegen.com/services/custom-engineering",
        "name": "Custom Engineering | PandaGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/custom-engineering#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Custom Engineering", "item": "https://www.pandacodegen.com/services/custom-engineering" }
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