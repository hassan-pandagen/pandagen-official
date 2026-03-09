import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'WordPress Migration to Custom Code | PandaCodeGen',
  description: 'Professional WordPress to Next.js migration. Zero data loss, 301 redirects, preserved SEO rankings, and sub-second load times. From $5,900.',
  alternates: { canonical: '/services/wordpress-migration' },
  openGraph: {
    title: 'WordPress Migration to Custom Code | PandaCodeGen',
    description: 'Professional WordPress to Next.js migration. Zero data loss, 301 redirects, preserved SEO rankings, and sub-second load times.',
    url: 'https://www.pandacodegen.com/services/wordpress-migration',
    siteName: 'PandaCodeGen',
    type: 'website',
  },
};

export default function MigrationPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#service",
        "name": "WordPress Migration to Custom Code",
        "description": "Professional WordPress migration to custom-coded websites. Zero data loss, 2x faster load times, and bank-grade security.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["WordPress Migration", "WordPress to Custom Code", "WordPress Alternative"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#webpage",
        "url": "https://www.pandacodegen.com/services/wordpress-migration",
        "name": "WordPress Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wordpress-migration#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "WordPress Migration", "item": "https://www.pandacodegen.com/services/wordpress-migration" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#howto",
        "name": "How to Migrate from WordPress to Custom Next.js",
        "description": "A professional 6-step WordPress-to-Next.js migration process. Zero data loss, zero downtime, zero ranking drops.",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "minValue": "5900", "maxValue": "25000" },
        "totalTime": "P6W",
        "supply": [
          { "@type": "HowToSupply", "name": "WordPress site access (WP-Admin + FTP/cPanel)" },
          { "@type": "HowToSupply", "name": "Domain registrar access for DNS cutover" }
        ],
        "tool": [
          { "@type": "HowToTool", "name": "Next.js 14+" },
          { "@type": "HowToTool", "name": "Vercel (hosting)" },
          { "@type": "HowToTool", "name": "Sanity CMS or Contentful" }
        ],
        "step": [
          {
            "@type": "HowToStep", "position": 1, "name": "Full Site Audit",
            "text": "We audit every URL, page, blog post, image, plugin dependency, and SEO metadata on your WordPress site. This creates the complete migration map and identifies all 301 redirect requirements.",
            "url": "https://www.pandacodegen.com/services/wordpress-migration"
          },
          {
            "@type": "HowToStep", "position": 2, "name": "Architecture & Build",
            "text": "We build your new custom-coded site in Next.js — same content, same URL structure, zero WordPress. No plugins, no theme bloat. Every page hand-coded for maximum performance.",
            "url": "https://www.pandacodegen.com/services/wordpress-migration"
          },
          {
            "@type": "HowToStep", "position": 3, "name": "Content Migration",
            "text": "Every blog post, page, image, metadata, categories, and tags are migrated from the WordPress database. Content editors get a modern headless CMS — no coding required to edit.",
            "url": "https://www.pandacodegen.com/services/wordpress-migration"
          },
          {
            "@type": "HowToStep", "position": 4, "name": "URL Mapping & 301 Redirects",
            "text": "Every old WordPress URL is mapped to the new site with 301 permanent redirects. Google sees continuity. Link equity is preserved. Search rankings are protected.",
            "url": "https://www.pandacodegen.com/services/wordpress-migration"
          },
          {
            "@type": "HowToStep", "position": 5, "name": "Performance & SEO Testing",
            "text": "We run Google PageSpeed Insights, Lighthouse, and Core Web Vitals testing on every page. Target: 95+ score. We also verify all canonical URLs, meta titles, and schema markup before launch.",
            "url": "https://www.pandacodegen.com/services/wordpress-migration"
          },
          {
            "@type": "HowToStep", "position": 6, "name": "Zero-Downtime Launch + 30-Day Monitoring",
            "text": "We flip DNS while the old WordPress site stays live. No downtime window. Both sites run in parallel until all checks pass. 30 days of post-launch ranking and crawl monitoring included.",
            "url": "https://www.pandacodegen.com/services/wordpress-migration"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will I lose my Google rankings during migration?", "acceptedAnswer": { "@type": "Answer", "text": "No. We map every single URL from your old WordPress site to your new site with 301 redirects. Google treats it as the same page at a new address. Most clients see rankings recover within 2-4 weeks and improve within 60 days because the new site is faster." } },
          { "@type": "Question", "name": "How long does a WordPress migration take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical migration takes 4-6 weeks from start to launch. Week 1: Full audit and planning. Weeks 2-4: Build your new site. Week 5: Testing, content migration, URL mapping. Week 6: Launch with zero downtime." } },
          { "@type": "Question", "name": "What happens to my blog posts and content?", "acceptedAnswer": { "@type": "Answer", "text": "Everything migrates. Blog posts, pages, images, metadata, categories. We extract it all from your WordPress database and move it to a modern content editor where you can still edit content without touching code." } },
          { "@type": "Question", "name": "How much does a WordPress to Next.js migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the size and complexity of your site. A standard business site (10-30 pages) typically ranges from $5,000-$15,000. The ROI usually pays for itself within 3-6 months through reduced hosting costs, lower ad spend, and increased conversions." } },
          { "@type": "Question", "name": "Can I still edit my website after migration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up a content editor with a user-friendly dashboard. You can edit text, images, blog posts, and pages without any coding knowledge. It's simpler than WordPress: no plugins to update, no themes to manage." } }
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