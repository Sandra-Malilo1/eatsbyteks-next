'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

const tabs = [
  { href: '/admin', label: 'Recipes' },
  { href: '/admin/homepage', label: 'Homepage' },
  { href: '/admin/site-design', label: 'Site design' },
  { href: '/admin/footer', label: 'Footer' },
  { href: '/admin/seo', label: 'SEO' },
]

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white text-[#333]">
      <header className="bg-[#123222] text-[#f6f1c4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-xl font-light">EatsByTeks Admin</p>

          <nav className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const active =
                tab.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(tab.href)

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    active
                      ? 'bg-[#f6f1c4] text-[#123222]'
                      : 'bg-white/10 text-[#f6f1c4] hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">
        {children}
      </main>
    </div>
  )
}