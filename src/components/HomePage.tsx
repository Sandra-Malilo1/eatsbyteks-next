'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowRight, Clock3, Heart, Star } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { SiteLayout } from '@/components/SiteLayout'
import { RecipeDialog } from '@/components/RecipeDialog'
import { RecipeActions } from '@/components/RecipeActions'
import { recipeSlug, recipes } from '@/lib/recipes'
import type { Recipe } from '@/lib/recipes'
import { useRecipeShelf } from '@/lib/useRecipeShelf'

const SQUARE_IMG = 'aspect-[3/4] w-full object-cover'

const CARD_SIZES = '(max-width: 640px) 75vw, (max-width: 1024px) 33vw, 400px'

const CARD =
  'block border border-[#1f4d3a]/10 bg-white p-3 transition-shadow hover:shadow-[0_16px_36px_-24px_rgba(31,77,58,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f]'


const CAROUSEL =
  '-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0'
const CAROUSEL_ITEM = 'w-[75%] shrink-0 snap-center sm:w-auto'

const homeRecipes: Recipe[] = recipes.slice(0, 4)
const pick = (i: number): Recipe => homeRecipes[i] ?? homeRecipes[0]

const TRENDING_IDS = [27, 24, 18]
const trending: Recipe[] = (() => {
  const chosen = TRENDING_IDS.map((id) => recipes.find((r: Recipe) => r.id === id)).filter(
    (r): r is Recipe => Boolean(r),
  )
  return chosen.length === 3 ? chosen : recipes.slice(4, 7)
})()


const popular: Recipe[] = homeRecipes.slice(0, 3)

function groupRecipes(list: readonly Recipe[]) {
  const byCategory = new Map<string, Recipe[]>()
  for (const r of list) {
    byCategory.set(r.category, [...(byCategory.get(r.category) ?? []), r])
  }
  return Array.from(byCategory, ([category, items]) => ({
    category,
    total: items.length,
    subcategories: [{ name: 'Recipes', items }],
  }))
}

const PILLARS = [
  {
    label: 'Honest ingredients',
    note: 'Seasonal, simple and sourced with care. Nothing you cannot pronounce.',
  },
  {
    label: 'Simple technique',
    note: 'Methods anyone can master, explained one clear step at a time.',
  },
  {
    label: 'Good taste',
    note: 'Everyday dinners through to something sweet to finish.',
  },
]

const CATEGORIES = Array.from(
  new Set(homeRecipes.map((r: Recipe) => String(r.category)))
) as string[]

const COMMUNITY = [
  {
    name: 'Anastasia',
    rating: 5,
    text: 'This recipe is so easy to make. I tried it two weeks before Christmas and it was so good that I served it for the whole family.',
  },
  {
    name: 'Hannah Lewis',
    rating: 4,
    text: 'Great and delicious. The steps were clear and it came out just like the photo. It is now our weekday favourite.',
  },
  {
    name: 'Daniel Otieno',
    rating: 5,
    text: 'I am not a confident cook, but this was simple from start to finish. Everyone asked for seconds.',
  },
]

const KITCHEN_TIPS = [
  {
    title: 'Read the recipe first',
    note: 'Check every step and ingredient before you start so nothing surprises you halfway.',
  },
  {
    title: 'Prep before you heat',
    note: 'Chop, measure and set everything out first. Cooking goes faster and calmer.',
  },
  {
    title: 'Taste as you go',
    note: 'Season in small steps and taste often. It is the easiest way to fix a dish.',
  },
]

const FAQS = [
  {
    q: 'Are all the recipes tested?',
    a: 'Yes. Every recipe is cooked in our own kitchen until it is simple, reliable and worth repeating.',
  },
  {
    q: 'How long do the recipes take?',
    a: 'Most take around 30 minutes. The time and ingredient count are shown on every recipe.',
  },
  {
    q: 'Can I save recipes for later?',
    a: 'Yes. Tap Save on any recipe and it stays on your shelf.',
  },
  {
    q: 'How do I find a recipe quickly?',
    a: 'Open the recipe index to search by name, filter by category or find a dish by the ingredients you already have.',
  },
]

/* ------------------------------------------------------------------ */
/* Backgrounds: paper grain, soft colour washes, blended section edges */
/* (all inline, no CSS file needed)                                    */
/* ------------------------------------------------------------------ */

const GRAIN_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/>" +
  "<feColorMatrix values='0 0 0 0 0.35 0 0 0 0 0.3 0 0 0 0 0.2 0 0 0 0.09 0'/></filter>" +
  "<rect width='100%' height='100%' filter='url(#n)'/></svg>"

/* Fine paper grain, tinted warm brown at very low opacity */
const GRAIN = `url("data:image/svg+xml;utf8,${encodeURIComponent(GRAIN_SVG)}")`

/* Soft mint paper with gentle green washes (matches the hero green) */
const PAPER: CSSProperties = {
  backgroundColor: '#f3f8f4',
  backgroundImage: [
    'radial-gradient(60rem 40rem at 6% 0%, rgba(46,106,79,0.14), transparent 62%)',
    'radial-gradient(52rem 36rem at 100% 24%, rgba(22,160,93,0.10), transparent 62%)',
    'radial-gradient(48rem 32rem at 0% 100%, rgba(46,106,79,0.08), transparent 62%)',
    GRAIN,
  ].join(','),
}

const PAPER_GREEN: CSSProperties = {
  backgroundColor: '#eaf3ed',
  backgroundImage: [
    'radial-gradient(64rem 38rem at 0% 6%, rgba(46,106,79,0.20), transparent 65%)',
    'radial-gradient(58rem 36rem at 100% 38%, rgba(22,160,93,0.14), transparent 65%)',
    'radial-gradient(50rem 32rem at 0% 72%, rgba(46,106,79,0.12), transparent 65%)',
    'radial-gradient(56rem 34rem at 100% 100%, rgba(46,106,79,0.18), transparent 65%)',
    GRAIN,
  ].join(','),
}


const BLEND_BAND: CSSProperties = {
  backgroundColor: '#dcebe1',
  backgroundImage: [
    'linear-gradient(180deg, #f3f8f4 0%, #dcebe1 26%, #cfe3d6 50%, #dcebe1 74%, #f3f8f4 100%)',
    GRAIN,
  ].join(','),
  backgroundBlendMode: 'normal, multiply',
}



function DishRow({
  recipe,
  flip,
  saved,
  onSave,
  onOpen,
}: {
  recipe: Recipe
  flip: boolean
  saved: boolean
  onSave: () => void
  onOpen: () => void
}) {
  return (
    <article>
      <div className="grid items-center gap-8 rounded-[2rem] bg-gradient-to-br from-[#e3f0e8] to-[#d3e6da] px-6 py-10 shadow-[0_-14px_32px_-20px_rgba(31,77,58,0.5)] sm:px-10 lg:grid-cols-12 lg:gap-12 lg:px-14 lg:py-14">
        <div className={`relative lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <Link
            href={`/recipe/${recipeSlug(recipe)}`}
            className={`${CARD} mx-auto w-full max-w-[24rem]`}
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={600}
              height={600}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 400px"
              className={SQUARE_IMG}
            />
          </Link>
        </div>

        <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
          <p className="inline-flex items-center gap-2 text-sm text-[#2e6a4f]">
            <Clock3 size={16} />
            {recipe.time}
            <span className="text-[#2e6a4f]/70">
              · {recipe.ingredients.length} ingredients
            </span>
          </p>
          <h5 className="mt-3 font-display text-3xl leading-tight text-[#1f4d3a] sm:text-4xl">
            {recipe.title}
          </h5>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#1f4d3a]/75">
            {recipe.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#2e6a4f] text-white hover:bg-[#245c43]"
            >
              <Link href={`/recipe/${recipeSlug(recipe)}`}>Full recipe</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#2e6a4f] bg-transparent text-[#1f4d3a] hover:bg-white/60"
              onClick={onOpen}
            >
              Quick view
            </Button>
            <button
              type="button"
              onClick={onSave}
              aria-pressed={saved}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#1f4d3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f]"
            >
              <Heart
                size={18}
                className={saved ? 'fill-rose text-rose' : 'text-[#2e6a4f]'}
              />
              {saved ? 'Saved' : 'Save'}
            </button>
          </div>

          <RecipeActions recipe={recipe} className="mt-4" />
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/* Cookie consent: asked on every visit / page load                    */
/* ------------------------------------------------------------------ */

function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 mx-auto max-h-[70vh] max-w-3xl overflow-y-auto rounded-2xl bg-white p-4 shadow-[0_20px_50px_-15px_rgba(31,77,58,0.55)] ring-1 ring-[#2e6a4f]/15 sm:inset-x-6 sm:bottom-4 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <div>
          <p className="font-display text-lg text-[#1f4d3a]">
            Do you want to accept cookies?
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#1f4d3a]/70 sm:text-sm">
            We use cookies to keep the site working, remember your saved
            recipes and understand how people use EatsByTeks. You can accept or
            decline non-essential cookies.
          </p>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-3 sm:flex">
          <Button
            type="button"
            variant="outline"
            className="rounded-md border-[#2e6a4f] bg-transparent text-[#1f4d3a] hover:bg-[#e3f0e8]"
            onClick={() => setVisible(false)}
          >
            Decline
          </Button>
          <Button
            type="button"
            className="rounded-md bg-[#16a05d] px-6 text-white hover:bg-[#12894f]"
            onClick={() => setVisible(false)}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function HomePage() {
  const { saved, selected, setSelected, toggleSaved } = useRecipeShelf()
  const [filter, setFilter] = useState<string>('All')

  const featured = pick(0)
  const closing = pick(2)
  const visible =
    filter === 'All'
      ? homeRecipes
      : homeRecipes.filter((r: Recipe) => r.category === filter)
  const grouped: {
    category: string
    total: number
    subcategories: { name: string; items: Recipe[] }[]
  }[] = groupRecipes(visible)

  let rowIndex = 0

  return (
    <SiteLayout>
      <main className="overflow-x-hidden">
        {/* HERO: text only, one centred block on the original green */}
        <section
          className="relative isolate overflow-hidden bg-[#2e6a4f]"
          aria-labelledby="hero-heading"
        >
          {/* soft translucent panels, exactly as before */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 right-[8%] top-0 h-full w-[34%] bg-white/[0.045]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 bottom-0 left-[40%] h-[42%] w-[22%] bg-black/[0.06]"
          />

          <div className="relative mx-auto flex min-h-[calc(100vh-76px)] supports-[height:100svh]:min-h-[calc(100svh-76px)] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-12 text-center sm:min-h-[88vh] sm:supports-[height:100svh]:min-h-[88svh] sm:pb-24 sm:pt-28 lg:pt-32">
            {/* small ornament (line only) */}
            <div aria-hidden="true" className="flex items-center">
              <span className="h-px w-28 bg-white/35" />
            </div>

            <h1
              id="hero-heading"
              className="mt-6 text-balance font-display text-[2.4rem] leading-[1.1] text-white min-[380px]:text-[2.75rem] sm:mt-8 sm:text-6xl sm:leading-[1.15] xl:text-7xl"
            >
              A little inspiration for your{' '}
              <span className="text-[#bfe9d0]">everyday table.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[34ch] text-[0.95rem] leading-relaxed text-white/80 min-[480px]:max-w-md sm:mt-8 sm:max-w-2xl sm:text-lg">
              From comforting family dinners to bold, flavour packed dishes and something sweet. Discover recipes
              that make cooking at home feel exciting, simple and full of flavour, one recipe at a time.
            </p>

            <div className="mt-8 flex w-full max-w-xs justify-center sm:mt-10 sm:w-auto sm:max-w-none">
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-md bg-[#16a05d] px-8 text-base text-white hover:bg-[#12894f] sm:w-auto"
              >
                <Link href="/recipes">Explore Recipes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* POPULAR RECIPES OF THE WEEK */}
        <section className="px-5 lg:px-8" style={PAPER} aria-labelledby="popular-heading">
          <div className="mx-auto max-w-7xl pb-16 pt-16 sm:pt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2
                  id="popular-heading"
                  className="font-display text-3xl text-[#1f4d3a] sm:text-4xl"
                >
                  Popular Recipes Of The Week
                </h2>
                <p className="mt-2 text-sm text-[#1f4d3a]/65">
                  Our most popular recipes of this week
                </p>
              </div>
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-full bg-[#2e6a4f] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#245c43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f] focus-visible:ring-offset-2"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>

            <ul className={`mt-8 ${CAROUSEL}`}>
              {popular.map((recipe: Recipe) => (
                <li key={recipe.id} className={CAROUSEL_ITEM}>
                  <Link href={`/recipe/${recipeSlug(recipe)}`} className={`group ${CARD}`}>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={600}
                      height={600}
                      sizes={CARD_SIZES}
                      className={SQUARE_IMG}
                    />
                    <h3 className="px-2 pb-6 pt-5 text-center font-display text-lg text-[#1f4d3a] group-hover:underline group-focus-visible:underline">
                      {recipe.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THREE PRINCIPLES */}
        <section className="bg-[#e3f0e8] px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl text-[#1f4d3a] sm:text-4xl">
              Three things we never compromise on
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
              {PILLARS.map((p) => (
                <li key={p.label} className="text-center">
                  <h3 className="font-display text-xl text-[#1f4d3a]">
                    {p.label}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#1f4d3a]/70">
                    {p.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* QUOTE BAND */}
        <section className="px-5 py-16 text-center sm:py-20" style={BLEND_BAND}>
          <p className="mx-auto max-w-3xl font-display text-2xl leading-snug text-[#1f4d3a] sm:text-3xl">
            "Good food doesn't need to be complicated. It needs good
            ingredients, a little patience and someone to share it with."
          </p>
          <p className="mt-5 text-sm text-[#2e6a4f]">Chef Teks</p>
        </section>

        {/* FEATURED: one large rounded panel with a square photo */}
        <section
          className="relative overflow-x-hidden"
          style={PAPER}
          aria-labelledby="featured-heading"
        >
          <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-24 lg:px-8">
            <div className="grid items-center gap-10 rounded-[2rem] bg-gradient-to-br from-[#e3f0e8] to-[#cfe3d6] px-6 py-12 sm:px-12 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-20">
              <div className="lg:col-span-6">
                <p className="text-base text-[#2e6a4f]">
                  Featured · {featured.category}
                </p>
                <h2
                  id="featured-heading"
                  className="mt-3 font-display text-4xl leading-[1.02] text-[#1f4d3a] sm:text-5xl lg:text-6xl"
                >
                  {featured.title}
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-[#1f4d3a]/75">
                  {featured.description}
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm text-[#2e6a4f]">
                  <Clock3 size={16} />
                  {featured.time}
                  <span className="text-[#2e6a4f]/70">
                    · {featured.ingredients.length} ingredients
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-[#2e6a4f] text-white hover:bg-[#245c43]"
                  >
                    <Link href={`/recipe/${recipeSlug(featured)}`}>
                      Full recipe
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-[#2e6a4f] bg-transparent text-[#1f4d3a] hover:bg-white/60"
                    onClick={() => setSelected(featured)}
                  >
                    Quick view
                  </Button>
                </div>

                <RecipeActions recipe={featured} className="mt-4" />
              </div>

              <div className="lg:col-span-6">
                <Link
                  href={`/recipe/${recipeSlug(featured)}`}
                  className={`${CARD} mx-auto w-full max-w-md lg:ml-auto lg:mr-0`}
                >
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={800}
                    height={800}
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 448px"
                    className={SQUARE_IMG}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST: category → subcategory → dishes, as alternating panels */}
        <section
          className="scroll-mt-20 overflow-x-hidden"
          style={PAPER_GREEN}
          aria-labelledby="latest-heading"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
            <div className="mb-16 text-center">
              <h2
                id="latest-heading"
                className="font-display text-4xl text-[#1f4d3a] sm:text-5xl lg:text-6xl"
              >
                Latest recipes
              </h2>

              <div
                className="mt-8 flex flex-wrap justify-center gap-2"
                role="group"
                aria-label="Filter recipes by category"
              >
                {['All', ...CATEGORIES].map((c) => {
                  const active = c === filter
                  return (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(c)}
                      className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f] focus-visible:ring-offset-2 ${
                        active
                          ? 'border-[#2e6a4f] bg-[#2e6a4f] text-white'
                          : 'border-[#2e6a4f]/40 text-[#1f4d3a] hover:border-[#2e6a4f]'
                      }`}
                    >
                      {c}
                    </button>
                  )
                })}
              </div>
            </div>

            <div key={filter} className="space-y-20 sm:space-y-32">
              {grouped.map((group) => (
                <div key={group.category}>
                  {/* Category heading with a giant ghost word behind it */}
                  <div className="relative mb-10 py-8 text-center sm:mb-16 sm:py-16">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap font-display text-[16vw] leading-none text-[#d3e6da] sm:text-[9rem] lg:text-[13rem]"
                    >
                      {group.category}
                    </div>

                    <div className="relative">
                      <h3 className="font-display text-3xl text-[#1f4d3a] sm:text-4xl">
                        {group.category}
                      </h3>
                      <p className="mt-2 text-sm text-[#2e6a4f]">
                        {group.total} {group.total === 1 ? 'recipe' : 'recipes'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-24">
                    {group.subcategories.map((sub) => (
                      <div key={sub.name}>
                        <h4 className="mb-8 text-center font-display text-xl italic text-[#2e6a4f]">
                          {sub.name}
                        </h4>

                        <div className="space-y-12 pb-4">
                          {sub.items.map((recipe: Recipe) => {
                            const n = rowIndex++
                            return (
                              <DishRow
                                key={recipe.id}
                                recipe={recipe}
                                flip={n % 2 === 1}
                                saved={saved.includes(recipe.id)}
                                onSave={() => toggleSaved(recipe.id)}
                                onOpen={() => setSelected(recipe)}
                              />
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING: panel with a square photo */}
        <section
          className="relative overflow-x-hidden"
          style={PAPER}
          aria-labelledby="closing-heading"
        >
          <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:pb-20 lg:px-8">
            <div className="grid items-center gap-10 rounded-[2rem] bg-gradient-to-br from-[#e3f0e8] to-[#cfe3d6] px-6 py-12 sm:px-12 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-16">
              <div className="lg:col-span-6">
                <h2
                  id="closing-heading"
                  className="font-display text-4xl leading-tight text-[#1f4d3a] sm:text-5xl"
                >
                  Every dish we've shared, in one place
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[#1f4d3a]/75">
                  Search by name, filter by category or find a recipe by the
                  ingredients you already have.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 rounded-full bg-[#2e6a4f] text-white hover:bg-[#245c43]"
                >
                  <Link href="/recipes">
                    Browse the recipe index
                    <ArrowRight size={17} className="ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="lg:col-span-6">
                <div className="mx-auto w-full max-w-sm border border-[#1f4d3a]/10 bg-white p-3 lg:ml-auto lg:mr-0">
                  <Image
                    src={closing.image}
                    alt={closing.title}
                    width={700}
                    height={700}
                    sizes="(max-width: 640px) 80vw, 384px"
                    loading="lazy"
                    className={SQUARE_IMG}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR COMMUNITY */}
        <section
          className="px-5 py-20 sm:py-24 lg:px-8"
          style={PAPER_GREEN}
          aria-labelledby="community-heading"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="community-heading"
              className="font-display text-3xl text-[#1f4d3a] sm:text-4xl"
            >
              Our Community
            </h2>
            <p className="mt-2 text-sm text-[#1f4d3a]/65">
              What home cooks say about our recipes
            </p>

            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {COMMUNITY.map((c, i) => {
                const dish = pick(i + 1)
                return (
                  <li
                    key={c.name}
                    className="border border-[#1f4d3a]/10 bg-white p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-full bg-[#16a05d] text-sm font-semibold text-white">
                        {c.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#1f4d3a]">
                          {c.name}
                        </p>
                        <p className="text-xs text-[#2e6a4f]">{dish.title}</p>
                      </div>
                    </div>
                    <div
                      className="mt-3 flex gap-0.5 text-[#f7b32b]"
                      aria-label={`${c.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, n) => (
                        <Star
                          key={n}
                          size={14}
                          className={n < c.rating ? 'fill-current' : ''}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#1f4d3a]/75">
                      {c.text}
                    </p>
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      width={500}
                      height={300}
                      sizes="(max-width: 768px) 90vw, 33vw"
                      loading="lazy"
                      className="mt-4 aspect-[16/10] w-full object-cover md:aspect-[3/4]"
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* QUICK KITCHEN TIPS */}
        <section className="px-5 py-20 lg:px-8" style={PAPER} aria-labelledby="tips-heading">
          <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#2e6a4f] px-6 py-14 sm:px-12 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 right-[8%] top-0 h-full w-[30%] bg-white/[0.045]"
            />
            <h2
              id="tips-heading"
              className="text-center font-display text-3xl text-white sm:text-4xl"
            >
              Quick kitchen tips
            </h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {KITCHEN_TIPS.map((t) => (
                <li key={t.title} className="text-center">
                  <h3 className="font-display text-xl text-[#e8f7ee]">
                    {t.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/75">
                    {t.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pb-20 lg:px-8" style={PAPER} aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="text-center font-display text-3xl text-[#1f4d3a] sm:text-4xl"
            >
              Questions, answered
            </h2>
            <div className="mt-10 divide-y divide-[#2e6a4f]/20 border-y border-[#2e6a4f]/20">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden justify-between gap-4 font-display text-lg text-[#1f4d3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f]">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="text-2xl leading-none text-[#2e6a4f] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#1f4d3a]/75">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* THREE CLICKABLE IMAGES */}
        <section style={PAPER} aria-labelledby="making-heading">
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:pb-28 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                id="making-heading"
                className="font-display text-3xl text-[#1f4d3a] sm:text-4xl"
              >
                What everyone's making
              </h2>
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-full bg-[#2e6a4f] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#245c43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6a4f] focus-visible:ring-offset-2"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>

            <ul className={`mt-10 ${CAROUSEL}`}>
              {trending.map((recipe: Recipe) => (
                <li key={recipe.id} className={CAROUSEL_ITEM}>
                  <Link href={`/recipe/${recipeSlug(recipe)}`} className={`group ${CARD}`}>
                    <div className="relative">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        width={600}
                        height={600}
                        sizes={CARD_SIZES}
                        loading="lazy"
                        className={SQUARE_IMG}
                      />
                      <span className="absolute left-3 top-3 bg-white/90 px-3 py-1 text-xs font-semibold text-[#1f4d3a]">
                        {recipe.category}
                      </span>
                    </div>
                    <h3 className="px-2 pt-5 text-center font-display text-lg leading-tight text-[#1f4d3a] group-hover:underline group-focus-visible:underline">
                      {recipe.title}
                    </h3>
                    <p className="inline-flex w-full items-center justify-center gap-2 px-2 pb-6 pt-2 text-sm text-[#2e6a4f]">
                      <Clock3 size={14} />
                      {recipe.time}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <CookieBanner />

      <RecipeDialog
        recipe={selected}
        saved={selected ? saved.includes(selected.id) : false}
        onSave={() => {
          if (selected) {
            toggleSaved(selected.id)
          }
        }}
        onClose={() => setSelected(null)}
      />
    </SiteLayout>
  )
}