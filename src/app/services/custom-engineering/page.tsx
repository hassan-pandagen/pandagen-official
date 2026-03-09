import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Custom Web Apps & SaaS Development | PandaCodeGen',
  description: 'We build scalable SaaS platforms, client portals, and AI-powered dashboards from scratch. Fixed-price quotes, you own the code, enterprise-grade architecture.',
  alternates: { canonical: '/services/custom-engineering' },
  openGraph: {
    title: 'Custom Web Apps & SaaS Development | PandaCodeGen',
    description: 'Scalable SaaS platforms, client portals, and AI dashboards. Fixed-price, code ownership, enterprise-grade architecture.',
    url: 'https://www.pandacodegen.com/services/custom-engineering',
    siteName: 'PandaCodeGen',
    type: 'website',
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
        "description": "Build scalable SaaS platforms, client portals, and AI-powered dashboards. Enterprise-grade architecture that scales to millions.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["SaaS Development", "Web Application Development", "Custom Dashboard", "AI Integration"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#webpage",
        "url": "https://www.pandacodegen.com/services/custom-engineering",
        "name": "Custom Engineering | PandaCodeGen",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/custom-engineering#faq",
        "mainEntity": [
          { "@type": "Question", "name": "How long does it take to build a custom app?", "acceptedAnswer": { "@type": "Answer", "text": "A working MVP takes 4-6 weeks. A full-featured platform takes 8-16 weeks depending on complexity. We do sprint-based development so you see working features every week, not just at the end." } },
          { "@type": "Question", "name": "How much does custom development cost?", "acceptedAnswer": { "@type": "Answer", "text": "MVPs typically range from $8,000-$20,000. Full platforms range from $20,000-$60,000+. We give fixed-price quotes upfront. No hourly billing surprises. The ROI comes from owning the code (no SaaS fees) and having a product that actually scales." } },
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