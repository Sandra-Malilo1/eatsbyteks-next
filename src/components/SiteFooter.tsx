'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

const FOOTER_EXPLORE = [
  { label: 'Home', href: '/' },
  { label: 'All recipes', href: '/recipes' },
]

const FOOTER_CATEGORIES = ['Breakfast', 'Lunch', 'Dinner', 'Dessert']

const CONTACT_EMAIL = 'Eatsbyteks@gmail.com'

const SUBSTACK_URL = 'https://substack.com/@eatsbyteks'

/* Order matters: [0] = Privacy Policy, [1] = Terms of Service. */
const FOOTER_LEGAL = [
  { label: 'Privacy Policy', href: '/EatsByTeks-Privacy-Policy.pdf' },
  { label: 'Terms of Service', href: '/EatsByTeks-Terms-of-Service.pdf' },
]

/* Social icons are inline SVGs so they never depend on a lucide version */
const svgProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const InstagramIcon = (
  <svg {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

const TikTokIcon = (
  <svg {...svgProps}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const YouTubeIcon = (
  <svg {...svgProps}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3z" fill="currentColor" />
  </svg>
)

const FOOTER_SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/eatsbyteks_/', icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tr.ee/dVG7zg4CMu', icon: TikTokIcon },
  { label: 'YouTube', href: 'https://tr.ee/6U-ToT3P2Z', icon: YouTubeIcon },
]

const PILLARS = [
  { label: 'Honest ingredients' },
  { label: 'Simple technique' },
  { label: 'Good taste' },
]

type SiteFooterProps = {
  /** Colour of the page directly above the footer */
  backdrop?: string
  /** Where the "Latest recipes" button goes */
  latestHref?: string
}

export function SiteFooter({ backdrop = '#f3f8f4', latestHref = '/recipes#browse' }: SiteFooterProps) {
  const year = 2026
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<'idle' | 'done'>('idle')

  const subscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !agreed) return
    window.open(SUBSTACK_URL, '_blank', 'noopener,noreferrer')
    setEmail('')
    setAgreed(false)
    setStatus('done')
  }

  return (
    <footer className="relative" style={{ backgroundColor: backdrop }} aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:pt-16 lg:px-8">
        {/* Call to action */}
        <div className="flex flex-col items-start justify-between gap-8 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-base text-[#1f4d3a]/65">Hungry?</p>
            <h2 className="mt-2 font-display text-4xl leading-[1.05] text-[#1f4d3a] sm:text-5xl lg:text-6xl">
              Let&apos;s cook something good
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3a] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#17402f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f] focus-visible:ring-offset-2"
            >
              Browse recipes
              <ArrowRight size={16} />
            </Link>
            <a
              href={latestHref}
              className="inline-flex items-center rounded-full border border-[#1f4d3a]/35 px-7 py-3 text-sm font-semibold text-[#1f4d3a] transition-colors hover:bg-[#1f4d3a]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f]"
            >
              Latest recipes
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className="grid gap-10 rounded-[1.75rem] bg-[#17402f] px-6 py-10 text-white sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-14 lg:py-14"
          aria-labelledby="newsletter-heading"
        >
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#c4eaa6] text-[#17402f]">
              <Mail size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 id="newsletter-heading" className="font-display text-3xl leading-tight text-white sm:text-4xl">
                Join the EatsByTeks newsletter
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                One easy recipe, a kitchen tip and the occasional new dish, straight to your inbox. No spam,
                unsubscribe any time.
              </p>
            </div>
          </div>

          <div className="lg:ml-auto lg:w-full lg:max-w-md">
            {status === 'done' ? (
              <p role="status" className="font-display text-lg text-white">
                Almost there! Finish subscribing on Substack in the tab that just opened.
              </p>
            ) : (
              <form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-11 w-full min-w-0 flex-1 rounded-full bg-white/10 px-5 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4eaa6] sm:text-sm"
                />
                <button
                  type="submit"
                  className="h-11 rounded-full bg-[#c4eaa6] px-7 text-sm font-semibold text-[#17402f] transition-colors hover:bg-[#d3f0ba] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17402f]"
                >
                  Join now
                </button>
                <label
                  htmlFor="footer-terms"
                  className="flex items-start gap-3 text-xs leading-relaxed text-white/75 sm:basis-full"
                >
                  <input
                    id="footer-terms"
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 size-4 shrink-0 accent-[#c4eaa6]"
                  />
                  <span>
                    I agree to the{' '}
                    <a
                      href={FOOTER_LEGAL[1].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline underline-offset-2 hover:text-[#c4eaa6]"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href={FOOTER_LEGAL[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline underline-offset-2 hover:text-[#c4eaa6]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 pb-14 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl font-bold text-[#17402f]">EatsByTeks</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#1f4d3a]/65">
              Everyday dinners and something sweet to finish, cooked in a real kitchen and written down so you can
              cook them too.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {FOOTER_SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full bg-[#17402f] text-white transition-colors hover:bg-[#2e6a4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f] focus-visible:ring-offset-2"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 break-all text-sm text-[#17402f] underline-offset-4 hover:underline"
            >
              <Mail size={18} aria-hidden="true" className="shrink-0" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">
            <nav aria-label="Explore" className="lg:min-w-[7.5rem]">
              <h3 className="text-sm font-semibold text-[#17402f]">Explore</h3>
              <ul className="mt-3 space-y-1 text-sm">
                {FOOTER_EXPLORE.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="inline-block py-1.5 text-[#1f4d3a]/65 underline-offset-4 transition-colors hover:text-[#17402f] hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Categories" className="lg:min-w-[7.5rem]">
              <h3 className="text-sm font-semibold text-[#17402f]">Categories</h3>
              <ul className="mt-3 space-y-1 text-sm">
                {FOOTER_CATEGORIES.map((c) => (
                  <li key={c}>
                    <Link
                      href={`/recipes?category=${encodeURIComponent(c)}`}
                      className="inline-block py-1.5 text-[#1f4d3a]/65 underline-offset-4 transition-colors hover:text-[#17402f] hover:underline"
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:min-w-[7.5rem]">
              <h3 className="text-sm font-semibold text-[#17402f]">How we cook</h3>
              <ul className="mt-3 space-y-1 text-sm text-[#1f4d3a]/65">
                {PILLARS.map((p) => (
                  <li key={p.label} className="py-1.5">
                    {p.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#1f4d3a]/15 pt-6 text-center text-sm text-[#1f4d3a]/60 sm:flex-row sm:text-left">
          <p>© {year} EatsByTeks. All recipes tested in our own kitchen.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            {FOOTER_LEGAL.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 underline-offset-4 transition-colors hover:text-[#17402f] hover:underline"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#hero-heading"
              className="py-2 underline-offset-4 transition-colors hover:text-[#17402f] hover:underline"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}