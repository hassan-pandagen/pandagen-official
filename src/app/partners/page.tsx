import type { Metadata } from 'next';
import PartnersContent from './PartnersContent';

export const metadata: Metadata = {
  title: 'White-Label Web Development for Agencies | PandaCodeGen',
  description: 'Partner with PandaCodeGen for white-label custom web development. We build under your brand with full NDA. Custom-coded sites, sub-second load times, agency pricing.',
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'White-Label Web Development for Agencies | PandaCodeGen',
    description: 'Partner with PandaCodeGen for white-label custom web development. We build under your brand with full NDA. Agency pricing, reliable delivery.',
    url: 'https://www.pandacodegen.com/partners',
    siteName: 'PandaCodeGen',
    type: 'website',
  },
};

export default function PartnersPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.pandacodegen.com/partners#service",
        "name": "White-Label Web Development Partnership",
        "description": "PandaCodeGen offers white-label custom web development for agencies. We build custom-coded websites under your brand, with full NDA, agency pricing, and reliable delivery.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": ["US", "GB", "AU", "CA"],
        "serviceType": ["White-Label Web Development", "Agency Partnership", "Custom Web Development", "Outsourced Development"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/partners#webpage",
        "url": "https://www.pandacodegen.com/partners",
        "name": "White-Label Web Development for Agencies | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/partners#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Partners", "item": "https://www.pandacodegen.com/partners" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/partners#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Do you sign NDAs for white-label projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every partnership starts with a mutual NDA before any project details are shared. Your client relationships and business information are fully protected. We have never disclosed a partner relationship to any client." } },
          { "@type": "Question", "name": "What is the minimum project size for agency partnerships?", "acceptedAnswer": { "@type": "Answer", "text": "We work with projects starting at $5,000. Most agency partners send us projects in the $8,000-$30,000 range. There is no maximum — we have delivered enterprise projects exceeding $60,000 for agency partners." } },
          { "@type": "Question", "name": "How do I communicate with my client if you're building the site?", "acceptedAnswer": { "@type": "Answer", "text": "You remain the sole point of contact for your client. We communicate only with you, never directly with your clients. All deliverables, updates, and handoffs go through you so your agency relationship stays intact." } },
          { "@type": "Question", "name": "What technologies do you build with?", "acceptedAnswer": { "@type": "Answer", "text": "We specialize in Next.js, React, TypeScript, Tailwind CSS, Supabase, Stripe, and Vercel. All sites are custom-coded — no WordPress, no Webflow, no page builders. Your clients get code that loads in under 1 second." } },
          { "@type": "Question", "name": "How fast can you turn around a project?", "acceptedAnswer": { "@type": "Answer", "text": "Standard business websites take 4-6 weeks. E-commerce or web app projects take 6-10 weeks. We provide weekly progress updates so you always know the status. Rush timelines are available for urgent client needs." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PartnersContent />
    </>
  );
}
