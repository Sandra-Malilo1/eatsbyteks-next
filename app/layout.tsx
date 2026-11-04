import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://eatsbyteksrecipes.com'),
  title: 'EatsByTeks | Recipes for Everyday Cooking',
  description:
    'EatsByTeks offers recipes for everyday cooking and memorable gatherings. Discover easy meals, ideas, and inspiration.',
  authors: [{ name: 'EatsByTeks' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EatsByTeks | Recipes for Everyday Cooking',
    description:
      'EatsByTeks offers recipes for everyday cooking and memorable gatherings. Discover easy meals, ideas, and inspiration.',
    url: 'https://eatsbyteksrecipes.com',
    siteName: 'EatsByTeks',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EatsByTeks | Recipes for Everyday Cooking',
    description:
      'EatsByTeks offers recipes for everyday cooking and memorable gatherings.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}