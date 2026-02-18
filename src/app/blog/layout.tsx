import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Insights from the Engine Room',
  description: 'Expert insights on Next.js, WordPress migration, web performance, and modern architecture from PandaGen engineers.',
  keywords: [
    'Next.js blog',
    'WordPress migration guide',
    'web performance optimization',
    'React development blog',
    'web development insights',
    'enterprise web architecture',
  ],
  openGraph: {
    title: 'PandaGen Blog - Technical Insights & Best Practices',
    description: 'Deep dives into Next.js, WordPress alternatives, Shopify optimization, and building high-performance web applications.',
    url: 'https://www.pandacodegen.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PandaGen Blog - Technical Insights & Best Practices',
    description: 'Deep dives into Next.js, WordPress alternatives, Shopify optimization, and building high-performance web applications.',
  },
  alternates: {
    canonical: '/blog',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
