import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How PandaCodeGen uses necessary storage and separately controls optional analytics, marketing, calendar, and chat services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/cookies',
  },
  openGraph: {
    title: 'Cookie Policy | PandaCodeGen',
    description: 'How PandaCodeGen uses necessary storage and separately controls optional analytics, marketing, calendar, and chat services.',
    url: 'https://www.pandacodegen.com/cookies',
    siteName: 'PandaCodeGen',
    type: 'website',
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
