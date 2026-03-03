import PageContent from './PageContent';

export default function WixServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/wix#service",
        "name": "Wix Website Development & Migration Services",
        "description": "Professional Wix website development with migration path to custom-coded Next.js for businesses that want to own their platform and rank higher.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Wix Development", "Wix Migration", "Wix to Next.js", "Wix Alternative"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/wix#webpage",
        "url": "https://www.pandacodegen.com/services/wix",
        "name": "Wix Development & Migration | PandaGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wix#service" },
        "inLanguage": "en-US"
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
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/wix#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will I lose my Google rankings if I leave Wix?", "acceptedAnswer": { "@type": "Answer", "text": "No. We set up 301 redirects from every old URL to the new URL. Google treats it as the same content at a faster address. Rankings typically improve within 30-60 days because the new site is significantly faster." } },
          { "@type": "Question", "name": "Can I still edit my website without coding?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up a built-in content editor (like Sanity) with an easy visual editor. You can edit text, images, and blog posts just like you did on Wix — but without the speed and SEO limitations." } },
          { "@type": "Question", "name": "How long does it take to migrate from Wix?", "acceptedAnswer": { "@type": "Answer", "text": "4-6 weeks for a standard business site. Week 1: content export. Weeks 2-4: design and build. Week 5: SEO migration. Week 6: launch." } },
          { "@type": "Question", "name": "What about my Wix forms and contact pages?", "acceptedAnswer": { "@type": "Answer", "text": "All forms get rebuilt with better functionality. We can integrate with any email service (Mailchimp, ConvertKit) or CRM. Form submissions work exactly as before, but the page loads 5x faster." } },
          { "@type": "Question", "name": "Is custom code harder to maintain than Wix?", "acceptedAnswer": { "@type": "Answer", "text": "No. With a built-in content editor, content editing is just as easy. And because there are no plugins or themes to update, there's actually LESS maintenance. No monthly subscription fees, no broken updates." } }
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