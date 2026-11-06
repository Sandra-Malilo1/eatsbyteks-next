'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/></svg>\")"

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

const FOOTER_SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/eatsbyteks_/' },
  { label: 'TikTok', href: 'https://tr.ee/dVG7zg4CMu' },
  { label: 'YouTube', href: 'https://tr.ee/6U-ToT3P2Z' },
]

const PILLARS = [
  { label: 'Honest ingredients' },
  { label: 'Simple technique' },
  { label: 'Good taste' },
]

type SiteFooterProps = {
  /** Colour of the page directly above the wave */
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
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative z-10 -mb-px block h-14 w-full sm:h-24"
        aria-hidden="true"
      >
        <path
          d="M0,52 C180,112 360,2 560,48 C760,94 920,12 1100,52 C1260,86 1360,36 1440,56 L1440,120 L0,120 Z"
          fill="#12894f"
          fillOpacity="0.55"
        />
        <path d="M0,78 C200,30 420,116 660,70 C900,24 1120,108 1440,62 L1440,120 L0,120 Z" fill="#1f4d3a" />
      </svg>

      <div className="relative overflow-hidden bg-gradient-to-b from-[#1f4d3a] via-[#245c43] to-[#1a4a35] text-[#eef7f1]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: GRAIN, opacity: 0.55, mixBlendMode: 'soft-light' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 hidden size-[28rem] rounded-full bg-[#12894f]/25 blur-3xl sm:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 hidden size-[26rem] rounded-full bg-[#f7b32b]/10 blur-3xl sm:block"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-6 sm:pt-10 lg:px-8">
          {/* Call to action */}
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-base text-[#eef7f1]/70">Hungry?</p>
              <h2 className="mt-2 font-display text-4xl leading-[1.05] text-[#e8f7ee] sm:text-5xl lg:text-6xl">
                Let&apos;s cook something good
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-full bg-[#e8f7ee] px-7 py-3 text-sm font-semibold text-[#1f4d3a] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8f7ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f4d3a]"
              >
                Browse recipes
                <ArrowRight size={16} />
              </Link>
              <a
                href={latestHref}
                className="inline-flex items-center rounded-full border border-white/35 px-7 py-3 text-sm font-semibold text-[#eef7f1] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8f7ee]"
              >
                Latest recipes
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div
            className="my-12 grid gap-8 rounded-2xl bg-white/[0.07] p-6 ring-1 ring-white/15 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12"
            aria-labelledby="newsletter-heading"
          >
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#e8f7ee] text-[#1f4d3a]">
                <Mail size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 id="newsletter-heading" className="font-display text-2xl text-[#e8f7ee] sm:text-3xl">
                  Join the EatsByTeks newsletter
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#eef7f1]/75">
                  One easy recipe, a kitchen tip and the occasional new dish, straight to your inbox. No spam,
                  unsubscribe any time.
                </p>
              </div>
            </div>

            {status === 'done' ? (
              <p role="status" className="font-display text-lg text-[#e8f7ee]">
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
                  className="w-full flex-1 rounded-full bg-white px-5 py-3 text-base text-[#1f4d3a] placeholder:text-[#1f4d3a]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8f7ee] sm:text-sm"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#16a05d] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12894f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8f7ee]"
                >
                  Join now
                </button>
                <label
                  htmlFor="footer-terms"
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#eef7f1]/80 sm:basis-full"
                >
                  <input
                    id="footer-terms"
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 size-5 shrink-0 accent-[#16a05d]"
                  />
                  <span>
                    I agree to the{' '}
                    <a
                      href={FOOTER_LEGAL[1].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e8f7ee] underline underline-offset-4 hover:text-white"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href={FOOTER_LEGAL[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e8f7ee] underline underline-offset-4 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </form>
            )}
          </div>

          {/* Columns */}
          <div className="grid gap-12 pb-14 pt-2 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-display text-3xl text-[#e8f7ee]">EatsByTeks</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#eef7f1]/75">
                Everyday dinners and something sweet to finish, cooked in a real kitchen and written down so you can
                cook them too.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {FOOTER_SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/25 px-4 py-2 text-sm text-[#eef7f1] transition-colors hover:border-[#e8f7ee] hover:text-[#e8f7ee]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-6 inline-flex items-center gap-2 break-all text-sm text-[#e8f7ee] underline-offset-4 hover:text-white hover:underline"
              >
                <Mail size={18} aria-hidden="true" className="shrink-0" />
                {CONTACT_EMAIL}
              </a>
            </div>

            <nav aria-label="Explore" className="lg:col-span-2">
              <h3 className="font-display text-lg text-[#e8f7ee]">Explore</h3>
              <ul className="mt-3 space-y-1 text-sm">
                {FOOTER_EXPLORE.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="inline-block py-2 text-[#eef7f1]/80 underline-offset-4 transition-colors hover:text-[#e8f7ee] hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Categories" className="lg:col-span-2">
              <h3 className="font-display text-lg text-[#e8f7ee]">Categories</h3>
              <ul className="mt-3 space-y-1 text-sm">
                {FOOTER_CATEGORIES.map((c) => (
                  <li key={c}>
                    <Link
                      href={`/recipes?category=${encodeURIComponent(c)}`}
                      className="inline-block py-2 text-[#eef7f1]/80 underline-offset-4 transition-colors hover:text-[#e8f7ee] hover:underline"
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-3">
              <h3 className="font-display text-lg text-[#e8f7ee]">How we cook</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#eef7f1]/80">
                {PILLARS.map((p) => (
                  <li key={p.label}>{p.label}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-sm text-[#eef7f1]/60 sm:flex-row sm:text-left">
            <p>© {year} EatsByTeks. All recipes tested in our own kitchen.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
              {FOOTER_LEGAL.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 underline-offset-4 transition-colors hover:text-[#e8f7ee] hover:underline"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#hero-heading"
                className="py-2 underline-offset-4 transition-colors hover:text-[#e8f7ee] hover:underline"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}