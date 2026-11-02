import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL in .env.local')
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
}

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey,
)

// Optional helper if any other file uses getSupabase()
export function getSupabase(): SupabaseClient {
  return supabase
}