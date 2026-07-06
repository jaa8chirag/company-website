import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'QuickMindsSolutions | Enterprise IT Solutions & Software Development',
    template: '%s | QuickMindsSolutions',
  },
  description:
    'QuickMindsSolutions is a premier IT solutions company delivering enterprise-grade software development, cloud solutions, AI integration, and digital transformation for businesses worldwide. 500+ projects, 150+ clients, 12+ years of excellence.',
  keywords: [
    'IT solutions company',
    'software development',
    'web development',
    'mobile app development',
    'cloud solutions',
    'AI solutions',
    'digital transformation',
    'enterprise software',
    'DevOps',
    'UI UX design',
    'QuickMindsSolutions',
  ],
  authors: [{ name: 'QuickMindsSolutions', url: 'https://quickmindssolutions.com' }],
  creator: 'QuickMindsSolutions',
  publisher: 'QuickMindsSolutions',
  metadataBase: new URL('https://quickmindssolutions.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quickmindssolutions.com',
    title: 'QuickMindsSolutions | Enterprise IT Solutions & Software Development',
    description:
      'Premier IT solutions company specializing in enterprise software development, cloud, AI, and digital transformation. 500+ projects delivered globally.',
    siteName: 'QuickMindsSolutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuickMindsSolutions - Enterprise IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickMindsSolutions | Enterprise IT Solutions',
    description: 'Premier IT solutions company — 500+ projects, 150+ clients, 12+ years of excellence.',
    creator: '@quickmindssolutions',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://quickmindssolutions.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563EB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'QuickMindsSolutions',
              url: 'https://quickmindssolutions.com',
              logo: 'https://quickmindssolutions.com/logo.png',
              description: 'Premier IT solutions company specializing in enterprise software development.',
              foundingDate: '2013',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'customer service',
                email: 'hello@quickmindssolutions.com',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Innovation Drive, Suite 400',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94105',
                addressCountry: 'US',
              },
              sameAs: [
                'https://linkedin.com/company/quickmindssolutions',
                'https://twitter.com/quickmindssolutions',
                'https://github.com/quickmindssolutions',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-secondary">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
