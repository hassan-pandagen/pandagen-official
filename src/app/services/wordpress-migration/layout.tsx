import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WordPress to Next.js Migration',
  description: 'Escape WordPress bloat. We migrate your site to Next.js with zero data loss, 2x faster load times, and bank-grade security. Stop paying plugin fees forever.',
  keywords: [
    'WordPress to Next.js migration',
    'WordPress alternative',
    'headless WordPress',
    'WordPress replacement',
    'migrate WordPress to React',
    'WordPress performance issues',
    'WordPress security problems',
  ],
  openGraph: {
    title: 'WordPress Migration Services - Escape to Next.js',
    description: 'Transform your slow WordPress site into a lightning-fast Next.js application. Zero plugins, instant loading, impossible to hack.',
    url: 'https://www.pandacodegen.com/services/wordpress-migration',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Migration Services - Escape to Next.js',
    description: 'Transform your slow WordPress site into a lightning-fast Next.js application. Zero plugins, instant loading, impossible to hack.',
  },
  alternates: {
    canonical: '/services/wordpress-migration',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function WordPressMigrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
