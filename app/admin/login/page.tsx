'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabase } from '@/lib/supabase'

const inputClass =
  'w-full rounded border border-[#bbb] bg-white px-2.5 py-2 text-sm text-[#333] placeholder:text-[#999] focus:border-[#2f6a45] focus:outline-none focus:ring-2 focus:ring-[#2f6a45]/20'

export default function AdminLoginPage() {
  const supabase = getSupabase()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState('')

  async function handleSignIn(event: React.FormEvent) {
    event.preventDefault()
    setSigningIn(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Sign in failed. Check your email and password.')
      setSigningIn(false)
      return
    }

    router.replace('/admin')
  }

  return (
    <div className="grid min-h-screen place-items-center bg-[#f8f8f8] px-4">
      <div className="w-full max-w-sm overflow-hidden rounded border border-[#ccc] bg-white">
        <div className="bg-[#2f6a45] px-4 py-3">
          <h1 className="text-[13px] font-semibold uppercase tracking-wide text-white">
            Admin sign in
          </h1>
        </div>

        <form onSubmit={handleSignIn} className="grid gap-4 p-5">
          {error && (
            <p className="rounded border-l-4 border-[#ba2121] bg-[#ffefef] px-3 py-2 text-sm font-semibold text-[#ba2121]">
              {error}
            </p>
          )}

          <label className="block">
            <span className="text-sm font-bold text-[#333]">Email</span>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              className={`mt-1.5 ${inputClass}`}
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold text-[#333]">Password</span>

            <div className="relative mt-1.5">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                className={`${inputClass} pr-16`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded px-2.5 py-1 text-xs font-semibold text-[#2f6a45]"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </label>

          <button
            type="submit"
            disabled={signingIn}
            className="rounded bg-[#2f6a45] px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#123222] disabled:opacity-60"
          >
            {signingIn ? 'Signing in…' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  )
}