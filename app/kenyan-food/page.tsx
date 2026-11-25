import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ChevronRight, Clock3 } from 'lucide-react'
import { SiteLayout } from '@/components/SiteLayout'
import { recipeSlug, recipes } from '@/lib/recipes'
import type { Recipe } from '@/lib/recipes'

export const metadata: Metadata = {
  title: 'Kenyan Recipes | EatsByTeks',
  description: 'Home-style Kenyan dishes from the EatsByTeks kitchen, written step by step.',
  openGraph: {
    title: 'Kenyan Recipes | EatsByTeks',
    description: 'Home-style Kenyan dishes from the EatsByTeks kitchen.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

/* The Kenyan dishes, by recipe id in lib/recipes, in the order they appear:
   27 Kenyan pilau · 31 Ugali with goat fry · 28 Githeri with avocado and feta
   34 Coconut fish curry · 41 Mandazi · 32 Kenyan kaimati
   49 Kenyan chapati · 50 Cardamom-coconut mahamri · 51 Coconut beans · 52 Goat biryani
   Add a new Kenyan recipe? Put its id in this list. */
const KENYAN_IDS = [27, 31, 28, 34, 41, 32, 49, 50, 51, 52]

const STAPLES = [
  { name: 'Ugali', text: 'Firm maize-meal staple, eaten with stews and greens.' },
  { name: 'Sukuma wiki', text: 'Collard greens braised with onion and tomato.' },
  { name: 'Chapati', text: 'Soft, layered flatbread, rolled and pan-fried.' },
  { name: 'Nyama choma', text: 'Meat grilled over coals and served with kachumbari.' },
  { name: 'Pilau', text: 'Fragrant spiced rice cooked in a rich broth.' },
  { name: 'Mandazi', text: 'Lightly sweet fried dough, good with tea.' },
]

const EQUIPMENT = [
  {
    name: 'Heavy-bottomed sufuria',
    text: 'Holds steady heat for stews, pilau and githeri, so nothing catches at the bottom.',
  },
  {
    name: 'Wooden mwiko',
    text: 'Sturdy enough to stir ugali until it pulls cleanly away from the pot.',
  },
  {
    name: 'Flat chapati pan',
    text: 'A wide, flat pan for cooking chapati and mandazi until golden on both sides.',
  },
]

/*
  Palette
  forest #123222 · moss #2f6a45 · sage #8fb88a · mint #cfe3c0 · butter #f6f1c4
*/

/* Headings are plain text; no scroll animation on this page */
const Words = ({ text }: { text: string; kind?: 'sword' | 'hword' }) => <>{text}</>

/* One radius, one panel colour, one card style, used everywhere */
const panel = 'rounded-[2rem] bg-[#dcebc9] ring-1 ring-[#b9d6a6]'
const card = 'border border-[#123222]/10 bg-white p-3 pb-5'
const caption = 'mt-4 text-center font-display text-lg leading-snug text-[#123222]'
const meta = 'mt-2 flex items-center justify-center gap-3 text-xs text-[#123222]/60'
const tag = 'rounded-full bg-[#eaf3df] px-2.5 py-0.5 font-semibold text-[#2f6a45]'
const section = 'mt-20 sm:mt-24'
const h2 = 'font-display text-3xl text-[#123222] sm:text-4xl'

const darkBtn =
  'inline-flex items-center gap-2 rounded-full bg-[#123222] px-7 py-3 text-sm font-semibold text-[#f6f1c4] transition-colors hover:bg-[#2f6a45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123222] focus-visible:ring-offset-2'
const ghostBtn =
  'inline-flex items-center gap-2 rounded-full border border-[#123222]/50 px-7 py-3 text-sm font-semibold text-[#123222] transition-colors hover:bg-[#123222]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123222]'
const mossBtn =
  'inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2f6a45] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#123222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123222] focus-visible:ring-offset-2'

export default function KenyanPage() {
  const list = KENYAN_IDS.map((id) => recipes.find((r) => r.id === id)).filter((r): r is Recipe => Boolean(r))
  const [hero, second, third] = list
  const featured = second ?? hero

  return (
    <SiteLayout>
      <main className="relative overflow-hidden" style={{ backgroundColor: '#cfe3c0' }}>
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#123222]/70">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="font-semibold text-[#123222]">Kenyan</span>
          </nav>

          {/* HERO */}
          <section className={`mt-6 overflow-hidden ${panel}`} aria-labelledby="hero-heading">
            <div className="grid items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-2 lg:py-16">
              <div>
                <p className="font-display text-xl italic text-[#2f6a45]">A taste of Kenya</p>
                <h1 id="hero-heading" className="mt-3 font-display text-5xl leading-[1.02] text-[#123222] sm:text-6xl xl:text-7xl">
                  <Words text="Kenyan kitchen" kind="hword" />
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-[#123222]/75">
                  Pilau, githeri, chapati, goat biryani, mahamri and more: home-style Kenyan dishes, cooked in a real
                  kitchen and written down step by step.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#dishes" className={darkBtn}>See the dishes <ArrowRight size={16} /></a>
                  <Link href="/recipes" className={ghostBtn}>All recipes</Link>
                </div>
                <dl className="mt-9 border-t border-[#123222]/15 pt-5 text-[#123222]">
                  <dt className="text-xs text-[#123222]/60">Kenyan recipes</dt>
                  <dd className="font-display text-3xl">{list.length}</dd>
                </dl>
              </div>

              {hero && (
                <Link
                  href={`/recipe/${recipeSlug(hero)}`}
                  className={`group mx-auto block w-full max-w-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6a45] ${card}`}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={hero.image} alt={hero.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className={caption}>{hero.title}</p>
                  <p className={meta}>
                    <span className={tag}>{hero.category}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={13} className="text-[#2f6a45]" /> {hero.time}</span>
                  </p>
                </Link>
              )}
            </div>
          </section>

          {/* FEATURED */}
          {featured && (
            <section className={section}>
              <h2 className={`text-center sm:text-5xl ${h2}`}>
                <Words text="Cook this first" />
              </h2>
              <div className={`mt-10 grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] ${panel}`}>
                <Link
                  href={`/recipe/${recipeSlug(featured)}`}
                  className={`group mx-auto block w-full max-w-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6a45] ${card}`}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={featured.image} alt={featured.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className={caption}>{featured.title}</p>
                </Link>
                <div>
                  <span className="inline-flex rounded-full bg-[#123222] px-3 py-1 text-xs font-semibold text-[#f6f1c4]">{featured.category}</span>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-[#123222] sm:text-4xl">{featured.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#123222]/75">{featured.description}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#123222]">
                    <Clock3 size={16} className="text-[#2f6a45]" /> {featured.time} · {featured.ingredients.length} ingredients
                  </p>
                  <div className="mt-6">
                    <Link href={`/recipe/${recipeSlug(featured)}`} className={darkBtn}>View recipe <ArrowRight size={16} /></Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ALL DISHES */}
          <section id="dishes" className={`${section} scroll-mt-24`}>
            <div className="flex items-center justify-between gap-4">
              <h2 id="latest-heading" className={`sm:text-5xl ${h2}`}>
                <Words text="Every Kenyan dish" />
              </h2>
              <Link href="/recipes" className={mossBtn}>
                View all <ArrowRight size={16} />
              </Link>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/recipe/${recipeSlug(r)}`}
                    className={`group block h-full transition-colors hover:border-[#2f6a45]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6a45] ${card}`}
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img src={r.image} alt={r.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <h3 className={caption}>{r.title}</h3>
                    <p className={meta}>
                      <span className={tag}>{r.category}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock3 size={13} className="text-[#2f6a45]" /> {r.time}</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* STAPLES */}
          <section className={`${section} border-t border-[#123222]/25 pt-14`}>
            <h2 className={h2}>
              <Words text="On a Kenyan table" />
            </h2>
            <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {STAPLES.map((s) => (
                <li key={s.name} className="border-b border-[#123222]/20 pb-5">
                  <p className="font-display text-2xl text-[#123222]">{s.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#123222]/75">{s.text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* KITCHEN EQUIPMENT */}
          <section
            aria-labelledby="equipment-heading"
            className={`${section} overflow-hidden rounded-[2rem] bg-[#2f6a45] px-6 py-12 text-white sm:px-12`}
          >
            <h2 id="equipment-heading" className="text-center font-display text-3xl sm:text-4xl">
              <Words text="My kitchen equipment" />
            </h2>

            <ul className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {EQUIPMENT.map((item, i) => (
                <li key={item.name} className="flex flex-col items-center text-center">
                  <span className="grid size-10 place-items-center rounded-full border border-white/40 font-display text-sm text-[#f6f1c4]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-4 font-display text-xl">{item.name}</p>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* CLOSING BANNER */}
          <section className={`${section} overflow-hidden ${panel}`}>
            <div className="grid items-center gap-8 px-6 py-12 sm:px-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="font-display text-3xl leading-tight text-[#123222] sm:text-5xl">Cook Kenyan this weekend</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#123222]/75">
                  Pick a dish, set your servings and cook it step by step. Add the ingredients to your shopping list and
                  take it to the market.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/recipes" className={ghostBtn}>Browse recipes</Link>
                </div>
              </div>
              {third && (
                <Link
                  href={`/recipe/${recipeSlug(third)}`}
                  className={`group mx-auto block w-full max-w-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6a45] ${card}`}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={third.image} alt={third.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className={caption}>{third.title}</p>
                </Link>
              )}
            </div>
          </section>
        </div>
      </main>
    </SiteLayout>
  )
}