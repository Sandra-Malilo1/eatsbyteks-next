'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import type { CSSProperties, FormEvent, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Clock3,
  Heart,
  Search,
} from 'lucide-react'
import { SiteLayout } from '@/components/SiteLayout'

import { RecipeDialog } from '@/components/RecipeDialog'
import {
  categories,
  categoryTiles,
  popularIngredients,
  recipeSlug,
} from '@/lib/recipes'

import type { Recipe } from '@/lib/recipes'
import { getSupabase } from "@/lib/supabase";
import { useRecipeShelf } from '@/lib/useRecipeShelf'
import { flatIngredients, parseIngredients, parseSteps } from '@/lib/cleanRecipe'

type DbRecipe = {
  id: number
  slug: string
  title: string
  category: Recipe['category']
  time_label: string
  description: string
  image_url: string
  ingredients: (string | { name: string; amount?: number | string; unit?: string })[]
  steps: string[]
  is_kenyan: boolean
  published: boolean
}

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[#2f6a45] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#123222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123222] focus-visible:ring-offset-2'

const lightBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[#f6f1c4] px-6 py-3 text-sm font-semibold text-[#123222] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'

const card =
  'border border-[#123222]/10 bg-white p-3 pb-5 shadow-[0_20px_40px_-30px_rgba(18,50,34,0.4)]'

const meta =
  'mt-2 flex items-center justify-center gap-3 text-xs text-[#123222]/60'

const tag =
  'rounded-full bg-[#eaf3df] px-2.5 py-0.5 font-semibold text-[#2f6a45]'

const TILE_SPANS = [
  'md:col-span-4 md:row-span-2',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-3',
  'md:col-span-3',
]

const minutes = (time: string) =>
  /hr/.test(time) ? 999 : parseInt(time, 10) || 999

/* Short teaser from a long description (the full post stays in the database
   and on the recipe page). Cuts at a sentence end when possible. */
const excerpt = (text: string, max = 180) => {
  const clean = (text ?? '').replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max)
  const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '))
  if (end > 60) return cut.slice(0, end + 1)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\-–—]$/, '') + '…'
}

function mapSupabaseRecipe(row: DbRecipe): Recipe {
  const lines = (row.ingredients ?? []).map((ingredient) => {
    if (typeof ingredient === 'string') return ingredient
    const amount = ingredient.amount ? ` — ${ingredient.amount}` : ''
    const unit = ingredient.unit ? ` ${ingredient.unit}` : ''
    return `${ingredient.name}${amount}${unit}`
  })

  /* drops junk lines, turns "Cake:" style lines into section names */
  const { groups } = parseIngredients(lines, row.title)
  const steps = parseSteps(row.steps)

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    time: row.time_label,
    description: excerpt(row.description),
    image: row.image_url,
    ingredients: flatIngredients(groups),
    /* one pasted paragraph becomes separate steps */
    method: steps.join('\n'),
    /* extra fields the quick view uses to show sections and numbered steps */
    ingredientGroups: groups,
    steps,
  } as Recipe
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    io.observe(el)

    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`eat-reveal ${on ? 'is-in' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

function RecipesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mainRef = useRef<HTMLElement>(null)

  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [query, setQuery] = useState('')
  const [onlySaved, setOnlySaved] = useState(false)
  const { saved, selected, setSelected, toggleSaved } = useRecipeShelf()

  useEffect(() => {
    let active = true

    async function loadRecipes() {
      try {
        const { data, error: supabaseError } = await getSupabase()
          .from('recipes')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })

        if (!active) return

        if (supabaseError) {
          setError(supabaseError.message)
          setLoading(false)
          return
        }

        setRecipes((data as DbRecipe[]).map(mapSupabaseRecipe))
        setLoading(false)
      } catch (loadError) {
        if (!active) return

        setError(
          loadError instanceof Error
            ? loadError.message
            : 'Unexpected error loading recipes.',
        )
        setLoading(false)
      }
    }

    loadRecipes()

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const el = mainRef.current
    if (!el) return

    let frame = 0

    const update = () => {
      frame = 0

      const y = window.scrollY
      const max =
        document.documentElement.scrollHeight - window.innerHeight

      el.style.setProperty('--sy', String(Math.round(y)))
      el.style.setProperty(
        '--p',
        String(max > 0 ? Math.min(1, y / max) : 0),
      )
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)

      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const rawCategory = searchParams.get('category')
  const category =
    rawCategory && categories.includes(rawCategory)
      ? rawCategory
      : 'All recipes'

  const inCategory = category !== 'All recipes'

  const goToCategory = (value: string) => {
    router.push(
      value === 'All recipes'
        ? '/recipes'
        : `/recipes?category=${encodeURIComponent(value)}`,
    )
  }

  const terms = query
    .toLowerCase()
    .split(',')
    .map((term) => term.trim())
    .filter(Boolean)

  /* Chips work one at a time: picking one replaces the previous pick,
     and clicking the highlighted chip again clears it. */
  const toggleTerm = (ingredient: string) => {
    const key = ingredient.toLowerCase()
    setQuery(terms.length === 1 && terms[0] === key ? '' : key)
  }

  const showCategories =
    !inCategory && !onlySaved && terms.length === 0

  const results = recipes.filter(
    (recipe: Recipe) =>
      (!inCategory || recipe.category === category) &&
      (!onlySaved || saved.includes(recipe.id)) &&
      terms.every((term) =>
        `${recipe.title} ${recipe.description} ${recipe.ingredients.join(' ')}`
          .toLowerCase()
          .includes(term),
      ),
  )

  const countFor = (value: string) =>
    recipes.filter((recipe: Recipe) => recipe.category === value).length

  const featured: Recipe | undefined =
    recipes.find((recipe: Recipe) => recipe.id === 18) ?? recipes[0]

  const quick = recipes
    .filter((recipe: Recipe) => minutes(recipe.time) <= 30)
    .slice(0, 10)

  const jumpToBrowse = (event: FormEvent) => {
    event.preventDefault()
    document
      .getElementById('browse')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const rootVars = {
    '--sy': 0,
    '--p': 0,
  } as CSSProperties

  return (
    <SiteLayout>
      <style>{`
        @keyframes eat-rise {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.97);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        .eat-rise {
          animation: eat-rise .9s cubic-bezier(.2,.7,.2,1) both;
        }

        .eat-rise-2 {
          animation-delay: .12s;
        }

        .eat-rise-3 {
          animation-delay: .24s;
        }

        .eat-reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .eat-reveal.is-in {
          opacity: 1;
          transform: none;
        }

        .eat-hide-scroll {
          scrollbar-width: none;
        }

        .eat-hide-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .eat-rise {
            animation: none;
          }

          .eat-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .eat-parallax {
            transform: none !important;
          }
        }
      `}</style>

      <main ref={mainRef} style={rootVars} className="bg-[#eaf3df]">
        <div
          aria-hidden="true"
          className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[#8fb88a]"
          style={{ transform: 'scaleX(var(--p))' }}
        />

        {error && (
          <section className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
              <p className="font-semibold">Could not load recipes</p>
              <p className="mt-1 text-sm">{error}</p>
            </div>
          </section>
        )}

        {loading && (
          <section className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
            <div className="rounded-2xl bg-white p-5 text-[#123222]">
              Loading recipes…
            </div>
          </section>
        )}

        {/* HEADER: heading, line, then search + filters in one panel (no hero, no images) */}
        <section
          className="mx-auto max-w-7xl px-5 pb-6 pt-12 sm:pt-16 lg:px-8"
          aria-labelledby="hero-heading"
        >
          {inCategory && (
            <Link
              href="/recipes"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2f6a45] hover:underline"
            >
              <ArrowLeft size={16} /> All categories
            </Link>
          )}

          <h1
            id="hero-heading"
            className="eat-rise font-display text-5xl leading-[1.02] text-[#123222] sm:text-6xl xl:text-7xl"
          >
            {inCategory ? (
              category
            ) : (
              <>
                Cook something
                <span className="relative mt-1 block w-fit italic text-[#2f6a45]">
                  worth sharing
                  <svg
                    viewBox="0 0 300 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9 C60 2 120 13 180 6 C230 1 270 9 298 5"
                      stroke="#8fb88a"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </>
            )}
          </h1>

          <p className="eat-rise eat-rise-2 mt-8 max-w-md border-l-2 border-[#8fb88a] pl-4 text-base leading-relaxed text-[#123222]/70 sm:text-lg">
            {inCategory
              ? 'Pick a meal to see its full recipe, ingredients and method.'
              : 'Search by dish or by what is in your kitchen, then cook it step by step.'}
          </p>

          <div className="eat-rise eat-rise-3 mt-10 rounded-[2rem] bg-white p-5 shadow-[0_30px_60px_-35px_rgba(18,50,34,0.45)] ring-1 ring-[#cfe3c0] sm:p-6">
            {/* search */}
            <form
              onSubmit={jumpToBrowse}
              role="search"
              className="flex items-center rounded-full bg-[#eaf3df] p-1.5 transition-shadow focus-within:ring-2 focus-within:ring-[#2f6a45]/40"
            >
              <label className="relative flex flex-1 items-center">
                <Search className="pointer-events-none absolute left-4 size-4 text-[#2f6a45]" />

                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  placeholder="Try garlic, basil or chicken"
                  aria-label="Search recipes or ingredients"
                  className="h-11 w-full rounded-full bg-transparent pr-3 text-sm text-[#123222] outline-none placeholder:text-[#123222]/45"
                  style={{ paddingLeft: '2.75rem' }}
                />
              </label>

              <button type="submit" className={`${primaryBtn} h-11 px-6`}>
                Find recipes
              </button>
            </form>

            {/* categories + saved */}
            <div
              className="mt-5 flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Categories"
            >
              {categories.map((value: string) => {
                const on = value === category && !onlySaved

                return (
                  <button
                    key={value}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => {
                      setOnlySaved(false)
                      goToCategory(value)
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      on
                        ? 'bg-[#2f6a45] text-white'
                        : 'bg-[#eaf3df] text-[#123222] hover:bg-[#d7e9c8]'
                    }`}
                  >
                    {value}
                  </button>
                )
              })}

              <button
                type="button"
                onClick={() => setOnlySaved(!onlySaved)}
                aria-pressed={onlySaved}
                className={`ml-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  onlySaved
                    ? 'border-[#123222] bg-[#123222] text-[#f6f1c4]'
                    : 'border-[#2f6a45] text-[#123222] hover:bg-[#eaf3df]'
                }`}
              >
                <Bookmark size={15} /> Saved ({saved.length})
              </button>
            </div>

            {/* ingredient filter */}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#e1eed5] pt-4">
              <span className="mr-1 text-sm font-medium text-[#123222]/60">
                In your kitchen:
              </span>

              {popularIngredients.map((ingredient: string) => {
                const on = terms.includes(ingredient.toLowerCase())

                return (
                  <button
                    key={ingredient}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleTerm(ingredient)}
                    className={`rounded-full border px-3.5 py-1 text-xs font-semibold transition-colors ${
                      on
                        ? 'border-[#2f6a45] bg-[#2f6a45] text-white'
                        : 'border-[#bcd7aa] text-[#123222] hover:border-[#2f6a45]'
                    }`}
                  >
                    {ingredient}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="browse"
          className="relative mx-auto max-w-7xl scroll-mt-24 px-5 pb-12 pt-8 sm:pt-12 lg:px-8"
        >
          {showCategories ? (
            <>
              <Reveal>
                <h2 className="font-display text-3xl text-[#123222] sm:text-4xl">
                  What are you cooking?
                </h2>

                <p className="mt-2 max-w-md text-sm text-[#123222]/70">
                  Choose a category to see its meals.
                </p>
              </Reveal>

              <div className="mt-8 grid auto-rows-[22rem] gap-5 md:grid-cols-6 md:auto-rows-[19rem]">
                {categoryTiles.map((tile, index) => {
                  const count = countFor(tile.category)

                  return (
                    <Reveal
                      key={tile.category}
                      delay={(index % 3) * 90}
                      className={
                        TILE_SPANS[index] ?? 'md:col-span-3'
                      }
                    >
                      <button
                        type="button"
                        onClick={() => goToCategory(tile.category)}
                        className={`group relative flex size-full flex-col text-left transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2f6a45]/50 ${card}`}
                      >
                        <div className="relative min-h-0 flex-1 overflow-hidden bg-[#d7e9c8]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={tile.image}
                            alt=""
                            loading="lazy"
                            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-[#f6f1c4] text-[#123222] transition-transform group-hover:translate-x-1">
                            <ArrowRight size={18} />
                          </span>
                        </div>

                        <div className="pt-4 text-center">
                          <h3 className="font-display text-xl text-[#123222] sm:text-2xl">
                            {tile.label}
                          </h3>

                          <p className="mt-1 text-xs text-[#123222]/60">
                            {tile.sub} · {count}{' '}
                            {count === 1 ? 'recipe' : 'recipes'}
                          </p>
                        </div>
                      </button>
                    </Reveal>
                  )
                })}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h2 className="font-display text-3xl text-[#123222] sm:text-4xl">
                  {onlySaved
                    ? 'Your saved recipes'
                    : inCategory
                      ? category
                      : 'Search results'}
                </h2>

                <p className="text-sm text-[#123222]/70">
                  {results.length}{' '}
                  {results.length === 1 ? 'recipe' : 'recipes'}
                </p>
              </div>

              {results.length ? (
                <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((recipe: Recipe, index: number) => {
                    const isSaved = saved.includes(recipe.id)

                    return (
                      <Reveal
                        key={recipe.id}
                        delay={(index % 3) * 90}
                        className="h-full"
                      >
                        <article
                          className={`group flex h-full flex-col transition-shadow hover:shadow-[0_30px_60px_-28px_rgba(18,50,34,0.65)] ${card}`}
                        >
                          <div className="relative aspect-[4/5] overflow-hidden bg-[#d7e9c8]">
                            <Link
                              href={`/recipe/${recipeSlug(recipe)}`}
                              tabIndex={-1}
                              aria-hidden="true"
                              className="block size-full"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={recipe.image}
                                alt={recipe.title}
                                loading="lazy"
                                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </Link>

                            <span className="absolute bottom-3 left-3 rounded-full bg-[#f6f1c4] px-3 py-1 text-xs font-semibold text-[#123222]">
                              {recipe.category}
                            </span>

                            <button
                              type="button"
                              onClick={() => toggleSaved(recipe.id)}
                              aria-pressed={isSaved}
                              aria-label={
                                isSaved
                                  ? `Remove ${recipe.title} from saved`
                                  : `Save ${recipe.title}`
                              }
                              className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 shadow-md backdrop-blur transition-transform hover:scale-110"
                            >
                              <Heart
                                size={18}
                                className={
                                  isSaved
                                    ? 'fill-[#c0392b] text-[#c0392b]'
                                    : 'text-[#2f6a45]'
                                }
                              />
                            </button>
                          </div>

                          <div className="flex flex-1 flex-col px-2 pt-4">
                            <h3 className="text-center font-display text-2xl leading-tight text-[#123222]">
                              {recipe.title}
                            </h3>

                            <p className="mt-2 line-clamp-2 text-center text-sm leading-relaxed text-[#123222]/70">
                              {recipe.description}
                            </p>

                            <p className={meta}>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock3
                                  size={13}
                                  className="text-[#2f6a45]"
                                />
                                {recipe.time}
                              </span>

                              <span>
                                {recipe.ingredients.length} ingredients
                              </span>
                            </p>

                            <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                              <Link
                                href={`/recipe/${recipeSlug(recipe)}`}
                                className={primaryBtn}
                              >
                                View recipe <ArrowRight size={15} />
                              </Link>

                              <button
                                type="button"
                                onClick={() => setSelected(recipe)}
                                className="text-sm font-semibold text-[#2f6a45] underline-offset-4 hover:underline"
                              >
                                Quick view
                              </button>
                            </div>
                          </div>
                        </article>
                      </Reveal>
                    )
                  })}
                </div>
              ) : (
                <div className="mt-10 rounded-[2rem] bg-white px-6 py-16 text-center ring-1 ring-[#d3e5c5]">
                  <h3 className="font-display text-3xl text-[#123222]">
                    No recipes match yet.
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm text-[#123222]/70">
                    Remove an ingredient, clear the search or switch off the
                    saved filter.
                  </p>

                  <button
                    type="button"
                    className={`${primaryBtn} mt-6`}
                    onClick={() => {
                      setQuery('')
                      setOnlySaved(false)
                      goToCategory('All recipes')
                    }}
                  >
                    Back to categories
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {showCategories && featured && (
          <>
            <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
              <Reveal>
                <div className="grid overflow-hidden rounded-[2.5rem] bg-[#123222] text-[#f6f1c4] lg:grid-cols-2">
                  <div className="relative min-h-[18rem] overflow-hidden lg:min-h-[28rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.image}
                      alt={featured.title}
                      loading="lazy"
                      className="eat-parallax absolute inset-0 size-full scale-125 object-cover"
                      style={{
                        transform:
                          'translate3d(0, calc(var(--sy) * -0.04px + 40px), 0) scale(1.15)',
                      }}
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
                    <p className="text-sm font-medium text-[#bfe0b4]">
                      Cook this week
                    </p>

                    <h2 className="font-display text-4xl leading-tight text-[#fbf8dc] sm:text-5xl">
                      {featured.title}
                    </h2>

                    <p className="line-clamp-4 max-w-md text-base leading-relaxed text-[#d4e8cc]">
                      {featured.description}
                    </p>

                    <p className="inline-flex items-center gap-2 text-sm text-[#bfe0b4]">
                      <Clock3 size={16} /> {featured.time} ·{' '}
                      {featured.ingredients.length} ingredients
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/recipe/${recipeSlug(featured)}`}
                        className={lightBtn}
                      >
                        View recipe <ArrowRight size={15} />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setSelected(featured)}
                        className="rounded-full px-4 py-3 text-sm font-semibold text-[#f6f1c4] underline-offset-4 hover:underline"
                      >
                        Quick view
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {quick.length > 0 && (
              <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
                <Reveal>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <h2 className="font-display text-3xl text-[#123222] sm:text-4xl">
                        Ready in 30 minutes or less
                      </h2>

                      <p className="mt-2 text-sm text-[#123222]/70">
                        Swipe or scroll sideways for quick weeknight meals.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <div className="eat-hide-scroll -mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:-mx-8 lg:px-8">
                  {quick.map((recipe: Recipe) => (
                    <Link
                      key={recipe.id}
                      href={`/recipe/${recipeSlug(recipe)}`}
                      className={`group w-64 shrink-0 snap-start sm:w-72 ${card}`}
                    >
                      <div className="aspect-[4/5] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <h3 className="mt-4 text-center font-display text-xl leading-snug text-[#123222]">
                        {recipe.title}
                      </h3>

                      <p className={meta}>
                        <span className={tag}>{recipe.category}</span>

                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 size={13} className="text-[#2f6a45]" />
                          {recipe.time}
                        </span>
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <RecipeDialog
        recipe={selected}
        saved={selected ? saved.includes(selected.id) : false}
        onSave={() => {
          if (selected) toggleSaved(selected.id)
        }}
        onClose={() => setSelected(null)}
      />
    </SiteLayout>
  )
}

export default function RecipesPage() {
  return (
    <Suspense fallback={null}>
      <RecipesContent />
    </Suspense>
  )
}