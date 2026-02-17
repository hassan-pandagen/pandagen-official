import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WordPress Development & Migration',
  description: 'Professional WordPress website development and migration services. We build WordPress sites and help businesses upgrade to custom-coded Next.js for maximum performance and SEO rankings.',
  alternates: {
    canonical: '/services/wordpress-migration',
  },
}

export default function WordPressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
