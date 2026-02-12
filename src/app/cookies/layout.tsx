import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'PandaGenCode LLC cookie policy. Learn about the cookies we use, how to manage preferences, and protect your privacy while browsing our website.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/cookies',
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
