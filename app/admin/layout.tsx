import type { ReactNode } from 'react'

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-[#333]">
      <header className="bg-[#123222] text-[#f6f1c4]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <p className="text-xl font-light">EatsByTeks administration</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">
        {children}
      </main>
    </div>
  )
}