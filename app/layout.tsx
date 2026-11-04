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