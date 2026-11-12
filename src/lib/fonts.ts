import {
  DM_Sans,
  Inter,
  Lora,
  Playfair_Display,
  Poppins,
  Syne,
  Plus_Jakarta_Sans,
} from 'next/font/google'

export const fonts = {
  syne: Syne({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-heading',
    display: 'swap',
  }),

  'plus-jakarta-sans': Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
  }),

  inter: Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
  }),

  'playfair-display': Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
  }),

  poppins: Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-heading',
    display: 'swap',
  }),

  lora: Lora({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
  }),

  'dm-sans': DM_Sans({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
  }),
} as const

export type FontKey = keyof typeof fonts

export const FONT_OPTIONS = [
  { value: 'syne', label: 'Syne' },
  { value: 'plus-jakarta-sans', label: 'Plus Jakarta Sans' },
  { value: 'inter', label: 'Inter' },
  { value: 'playfair-display', label: 'Playfair Display' },
  { value: 'poppins', label: 'Poppins' },
  { value: 'lora', label: 'Lora' },
  { value: 'dm-sans', label: 'DM Sans' },
] as const

export const ALLOWED_FONT_VALUES = new Set(
  FONT_OPTIONS.map((font) => font.value),
)