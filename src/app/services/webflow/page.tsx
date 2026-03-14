import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Webflow Migration to Custom Code | PandaCodeGen',
  description: 'Stop paying Webflow hosting premiums. We migrate your Webflow site to custom Next.js — faster loading, full SEO control, and you own the code forever.',
  alternates: { canonical: '/services/webflow' },
  openGraph: {
    title: 'Webflow Migration to Custom Code | PandaCodeGen',
    description: 'Stop paying Webflow hosting premiums. We migrate your Webflow site to custom Next.js — faster loading, full SEO control, and you own the code forever.',
    url: 'https://www.pandacodegen.com/services/webflow',
    siteName: 'PandaCodeGen',
    type: 'website',
  },
};

export default function WebflowServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/webflow#service",
        "name": "Webflow Migration to Custom Code",
        "description": "Professional Webflow migration to custom coded Next.js. Stop paying premium hosting fees. Get faster loading, full SEO control, and own your code.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Webflow Migration", "Webflow to Next.js", "Webflow Alternative", "Webflow to Custom Code"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/webflow#webpage",
        "url": "https://www.pandacodegen.com/services/webflow",
        "name": "Webflow Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/webflow#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Webflow Migration", "item": "https://www.pandacodegen.com/services/webflow" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/webflow#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Is custom code harder to use than Webflow's visual editor?", "acceptedAnswer": { "@type": "Answer", "text": "For content editing, no. We set up a content management system that's just as easy. For design changes, yes, you'll need a developer. But that's the trade-off: unlimited power vs. visual simplicity. Most businesses outgrow the visual editor anyway." } },
          { "@type": "Question", "name": "Can you recreate my Webflow animations in code?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Custom animations can do everything Webflow interactions can do, and more. We can even add interactions that Webflow's interaction panel can't handle: scroll-triggered 3D effects, page transitions, and real-time data animations." } },
          { "@type": "Question", "name": "What about Webflow's CMS?", "acceptedAnswer": { "@type": "Answer", "text": "We migrate all your CMS content to a headless CMS like Sanity or Contentful. No 10,000-item limit. Relational data, computed fields, and API access. You can query your content from anywhere: web, mobile, even AI agents." } },
          { "@type": "Question", "name": "How much does it cost to migrate from Webflow?", "acceptedAnswer": { "@type": "Answer", "text": "Standard business sites: $6,000-$15,000. Complex sites with custom CMS, e-commerce, or web app features: $15,000-$40,000. The savings on Webflow hosting ($500-2,500/year) partially offset the cost." } },
          { "@type": "Question", "name": "What if Webflow adds the features I need later?", "acceptedAnswer": { "@type": "Answer", "text": "It's possible. But Webflow has been promising server-side logic and better CMS for years. Meanwhile, custom code has no roadmap dependency. You build exactly what you need, when you need it." } }
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
