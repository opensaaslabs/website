import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenSaaSLabs | Open-source SaaS labs for AI-native builders',
  description:
    'OpenSaaSLabs curates templates, reference architectures, deployment guides, and governance playbooks for modern SaaS teams.',
  metadataBase: new URL('https://opensaaslabs.com'),
  openGraph: {
    title: 'OpenSaaSLabs',
    description: 'Build, ship, and self-host modern SaaS faster.',
    url: 'https://opensaaslabs.com',
    siteName: 'OpenSaaSLabs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenSaaSLabs',
    description: 'Open-source labs for AI-native SaaS builders.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
