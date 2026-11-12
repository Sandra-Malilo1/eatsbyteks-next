import { getSupabase } from '@/lib/supabase'

export type SiteSettings = {
  heading_font: string
  body_font: string
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const supabase = getSupabase()

  const { data } = await supabase
    .from('site_settings')
    .select('heading_font, body_font')
    .eq('id', 'global')
    .maybeSingle()

  return {
    heading_font: data?.heading_font ?? 'syne',
    body_font: data?.body_font ?? 'plus-jakarta-sans',
  }
}