'use client'

import { useEffect, useState } from 'react'
import { getSupabase } from '@/lib/supabase'

const FONT_OPTIONS = [
  { value: 'syne', label: 'Syne' },
  { value: 'plus-jakarta-sans', label: 'Plus Jakarta Sans' },
  { value: 'inter', label: 'Inter' },
  { value: 'playfair-display', label: 'Playfair Display' },
  { value: 'poppins', label: 'Poppins' },
  { value: 'lora', label: 'Lora' },
  { value: 'dm-sans', label: 'DM Sans' },
]

const inputClass =
  'w-full rounded border border-[#bbb] bg-white px-2.5 py-2 text-sm text-[#333] focus:border-[#2f6a45] focus:outline-none focus:ring-2 focus:ring-[#2f6a45]/20'

export default function SiteDesignPage() {
  const supabase = getSupabase()

  const [headingFont, setHeadingFont] = useState('syne')
  const [bodyFont, setBodyFont] = useState('plus-jakarta-sans')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function loadSettings() {
      const { data } = await supabase
        .from('site_settings')
        .select('heading_font, body_font')
        .eq('id', 'global')
        .maybeSingle()

      if (data) {
        setHeadingFont(data.heading_font)
        setBodyFont(data.body_font)
      }
    }

    loadSettings()
  }, [supabase])

  async function saveFonts() {
    setSaving(true)
    setMessage('')

    const { error } = await supabase
      .from('site_settings')
      .update({
        heading_font: headingFont,
        body_font: bodyFont,
        updated_at: new Date().toISOString(),
      })
      .eq('id', 'global')

    setSaving(false)
    setMessage(
      error
        ? `Could not save font settings: ${error.message}`
        : 'Font settings updated.',
    )
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-light text-[#3a5444]">
        Site design
      </h1>

      <div className="overflow-hidden rounded border border-[#d4e3cb] bg-white">
        <h2 className="bg-[#2f6a45] px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-white">
          Typography
        </h2>

        <div className="grid gap-4 p-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold">Heading font</span>

            <select
              value={headingFont}
              onChange={(event) => setHeadingFont(event.target.value)}
              className={`mt-1.5 ${inputClass}`}
            >
              {FONT_OPTIONS.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-bold">Body font</span>

            <select
              value={bodyFont}
              onChange={(event) => setBodyFont(event.target.value)}
              className={`mt-1.5 ${inputClass}`}
            >
              {FONT_OPTIONS.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center justify-between border-t border-[#eee] bg-[#f8f8f8] p-4">
          {message && (
            <p className="text-sm font-semibold text-[#2f6a45]">
              {message}
            </p>
          )}

          <button
            type="button"
            onClick={saveFonts}
            disabled={saving}
            className="rounded bg-[#2f6a45] px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#123222] disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Save font settings'}
          </button>
        </div>
      </div>
    </div>
  )
}