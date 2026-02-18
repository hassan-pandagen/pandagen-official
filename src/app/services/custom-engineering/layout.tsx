import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web Apps & SaaS Development',
  description: 'Build scalable SaaS platforms, client portals, and AI-powered dashboards with Next.js. Enterprise-grade architecture. Own your IP.',
  keywords: [
    'custom web application development',
    'SaaS development',
    'Next.js application',
    'React dashboard',
    'client portal development',
    'enterprise web app',
    'AI integration services',
  ],
  openGraph: {
    title: 'Custom SaaS & Web Application Development',
    description: 'Build your own software platform with Next.js. Scalable SaaS, internal dashboards, AI tools. You own the code.',
    url: 'https://www.pandacodegen.com/services/custom-engineering',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom SaaS & Web Application Development',
    description: 'Build your own software platform with Next.js. Scalable SaaS, internal dashboards, AI tools. You own the code.',
  },
  alternates: {
    canonical: '/services/custom-engineering',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function CustomEngineeringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
