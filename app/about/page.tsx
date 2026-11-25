import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, Cake, ChefHat, ChevronRight, Coffee, Heart, Plus, Soup, Users, Utensils, Wheat } from 'lucide-react'
import { SiteLayout } from '@/components/SiteLayout'
import { AboutMotion } from '@/components/AboutMotion'

export const metadata: Metadata = {
  title: 'About Us | EatsByTeks',
  description:
    'Meet Chef Olive Tekeiwa and the kitchen behind EatsByTeks: simple, generous cooking and the joy of eating together.',
  openGraph: {
    title: 'Our Story | EatsByTeks',
    description: 'Simple, generous cooking and the joy of eating together.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

/* Images live in public/assets, so they are plain paths (no imports).
   Swap CHEF_PHOTO for a portrait of Olive, e.g. '/assets/chef-olive.jpg'. */
const CHEF_PHOTO = '/assets/chef.jpeg'
/* Optional photo for the "Why we gather" section. Leave as null for a type-only
   layout, or set a path (e.g. '/assets/gather.jpg') and describe it in GATHER_ALT. */
const GATHER_PHOTO: string | null = null
const GATHER_ALT = 'Friends and family sharing a meal'
const BOWL = '/assets/recipe-bowl.jpg'

/*
  Palette
  forest #123222 · moss #2f6a45 · sage #8fb88a · mint #eaf3df · butter #f6f1c4 · cream #faf6e8
  page #cfe3c0 · leaf-light #bfe0b4
*/

const MENU = [
  { label: 'Breakfast', icon: Coffee },
  { label: 'Lunch', icon: Soup },
  { label: 'Dinner', icon: Utensils },
  { label: 'Dessert', icon: Cake },
  { label: 'Baked Goods', icon: Wheat },
]

const WAYS = [
  { icon: ChefHat, title: 'Tested in a real kitchen', text: 'Every recipe is cooked at home before it is written down.' },
  { icon: Utensils, title: 'Everyday ingredients', text: 'Things you can find at the shop down the road.' },
  { icon: Heart, title: 'Clear, step-by-step method', text: 'Short steps in the order you actually cook them.' },
  { icon: Users, title: 'Made to share', text: 'Dishes sized and seasoned for the whole table.' },
]

const EQUIPMENT = [
  { name: 'Cast iron skillet', text: 'Holds steady heat for searing, frying and one-pan dinners.' },
  { name: "Chef's knife", text: 'One sharp knife for chopping, slicing and dicing almost everything.' },
  { name: 'Stand mixer', text: 'Takes the work out of batters, doughs and whipped cream.' },
  { name: 'Dutch oven', text: 'Where the slow-cooked stews, soups and loaves come together.' },
  { name: 'Wooden spoons', text: 'Gentle on pans, comfortable in the hand and used every day.' },
  { name: 'Cake tins', text: 'For evenly baked sponges that lift out cleanly.' },
]

/* Social icons are inline SVGs so they never depend on a lucide version */
const svgProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eatsbyteks_/',
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tr.ee/dVG7zg4CMu',
    icon: (
      <svg {...svgProps}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://tr.ee/6U-ToT3P2Z',
    icon: (
      <svg {...svgProps}>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" />
      </svg>
    ),
  },
]

const DAY = [
  { when: 'Morning', label: 'Breakfast', icon: Coffee, text: 'Easy starts for slow mornings and rushed ones, made with what is already in the kitchen.' },
  { when: 'Midday', label: 'Lunch', icon: Soup, text: 'Bright bowls and warm soups that keep you going without a lot of washing up.' },
  { when: 'Evening', label: 'Dinner', icon: Utensils, text: 'The dishes you make again and again, written down so they turn out the same every time.' },
  { when: 'Sweet finish', label: 'Dessert', icon: Cake, text: 'Cakes and bakes for celebrations, and for no reason at all.' },
]

const NOTES = [
  { q: 'How are the recipes tested?', a: 'Every recipe is cooked in a real kitchen before it is written down, then checked again for timings and quantities.' },
  { q: 'Can I cook for more or fewer people?', a: 'Yes. Open any recipe and change the servings: the quantities and the cooking time update for you.' },
  { q: 'What if I only have a few ingredients?', a: 'Use the “In your kitchen” ingredient chips on the recipes page. Pick what you have and the list narrows to meals you can make.' },
  { q: 'How do I plan a week of meals?', a: 'Save the recipes you love and they stay on your shelf, ready to cook whenever you are.' },
]

const body = 'leading-relaxed text-[#123222]/75'

function Rule({ light = false, center = false }: { light?: boolean; center?: boolean }) {
  return (
    <span aria-hidden="true" className={`mt-5 flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <span className={`h-px w-14 ${light ? 'bg-[#8fb88a]' : 'bg-[#2f6a45]/60'}`} />
      <span className={`size-1.5 rotate-45 ${light ? 'bg-[#f6f1c4]' : 'bg-[#2f6a45]'}`} />
      <span className={`h-px w-14 ${light ? 'bg-[#8fb88a]' : 'bg-[#2f6a45]/60'}`} />
    </span>
  )
}

const Words = ({ text, kind = 'sword' }: { text: string; kind?: 'sword' | 'hword' }) => (
  <>
    {text.split(' ').map((w, i) => (
      <span key={i} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
        <span data-g={kind} className="inline-block">
          {w}
          {'\u00A0'}
        </span>
      </span>
    ))}
  </>
)

export default function AboutPage() {
  return (
    <SiteLayout>
      <AboutMotion />
      <main className="relative overflow-hidden" style={{ backgroundColor: '#cfe3c0' }}>
        <div data-g="bar" aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[#8fb88a]" style={{ transform: 'scaleX(0)' }} />

        {/* ───────────── HERO: forest, oversized name, photo bleeding off the right edge ───────────── */}
        <section className="bg-[#123222] text-[#eaf3df]" aria-labelledby="hero-heading">
          <div className="grid lg:min-h-[44rem] lg:grid-cols-12">
            <div className="flex flex-col px-5 pb-14 pt-8 lg:col-span-7 lg:pb-20 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-14">
              <nav data-g="crumb" aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#eaf3df]/65">
                <Link href="/" className="hover:text-[#f6f1c4] hover:underline">Home</Link>
                <ChevronRight size={14} aria-hidden="true" />
                <span className="font-semibold text-[#f6f1c4]">Chef Olive Tekeiwa</span>
              </nav>

              <div className="my-auto pt-14 lg:pt-10">
                <p data-g="hero-in" className="font-display text-xl italic text-[#8fb88a]">Chef and founder</p>
                <h1 id="hero-heading" className="mt-3 font-display text-6xl leading-[0.92] text-[#f6f1c4] sm:text-8xl xl:text-[8.5rem]">
                  <Words text="Chef Olive Tekeiwa" kind="hword" />
                </h1>
                <div data-g="hero-in"><Rule light /></div>
                <p data-g="hero-in" className="mt-7 max-w-lg text-lg leading-relaxed text-[#eaf3df]/85">
                  Olive cooks the way she wants you to cook: simply, generously and with people around the table.
                  EatsByTeks is where those meals are written down.
                </p>

                <dl data-g="hero-in" className="mt-10 grid max-w-xl gap-6 border-t border-white/20 pt-6 sm:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-[#f6f1c4]"><Utensils size={20} /></span>
                    <div>
                      <dt className="font-semibold text-[#f6f1c4]">Speciality</dt>
                      <dd className="mt-1 text-sm leading-snug text-[#eaf3df]/70">Everyday dinners and something sweet to finish</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-[#f6f1c4]"><ChefHat size={20} /></span>
                    <div>
                      <dt className="font-semibold text-[#f6f1c4]">Kitchen</dt>
                      <dd className="mt-1 text-sm leading-snug text-[#eaf3df]/70">Every recipe tested at home before it is shared</dd>
                    </div>
                  </div>
                </dl>

                <ul data-g="hero-in" className="mt-8 flex items-center gap-3">
                  {SOCIALS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="grid size-11 place-items-center rounded-full border border-white/35 text-[#eaf3df] transition-colors hover:border-[#f6f1c4] hover:bg-[#f6f1c4] hover:text-[#123222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6f1c4]"
                      >
                        {s.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <figure data-g="photo" className="relative min-h-[26rem] overflow-hidden lg:col-span-5 lg:min-h-0">
              <img data-g="hero-img" src={CHEF_PHOTO} alt="Chef Olive Tekeiwa" className="absolute inset-0 size-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-[#f6f1c4] px-6 py-3 font-display text-lg text-[#123222]">
                Chef Olive Tekeiwa
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ───────────── WHY WE GATHER: type-led, optional photo ───────────── */}
        <section className="relative overflow-hidden bg-[#faf6e8]">

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p data-g="fade" className="font-display text-xl italic text-[#2f6a45]">Why we gather</p>
                <h2 data-g="split" className="mt-4 font-display text-5xl leading-[0.98] text-[#123222] sm:text-7xl xl:text-[6.5rem]">
                  <Words text="The best memories begin around a table." />
                </h2>
              </div>

              <div data-g="fade" className="border-l-4 border-[#2f6a45] pl-6 sm:pl-8 lg:col-span-5 lg:self-end">
                <p className="font-display text-2xl leading-snug text-[#123222] sm:text-3xl">
                  EatsByTeks is a place for delicious everyday cooking: the dinners you make again and again, the cake
                  you bring to a celebration, and all the little meals in between.
                </p>
                <p className={`mt-6 text-lg ${body}`}>
                  Good food doesn’t need to be complicated. It just needs to be shared.
                </p>
                <Link
                  href="/recipes"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2f6a45] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#123222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123222] focus-visible:ring-offset-2"
                >
                  Browse recipes <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {GATHER_PHOTO && (
            <div data-g="fade" className="relative h-[50vh] min-h-[20rem] overflow-hidden">
              <img data-g="par" src={GATHER_PHOTO} alt={GATHER_ALT} className="absolute inset-x-0 top-0 h-[120%] w-full object-cover" />
            </div>
          )}
        </section>

        {/* ───────────── ABOUT + MENU: text, then a table-of-contents strip ───────────── */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
          <div data-g="fade" className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-5xl leading-[1] text-[#123222] sm:text-6xl">About Chef Olive</h2>
              <Rule />
            </div>
            <div className="space-y-4 lg:col-span-7">
              <p className={`text-lg ${body}`}>
                Olive’s kitchen is built on one idea: a recipe is only good if someone else can cook it and get the
                same result. So every dish is made, tasted and adjusted before it ever reaches the page.
              </p>
              <p className={`text-lg ${body}`}>
                You’ll find breakfasts, lunches, dinners, desserts and baked goods here, all written in plain steps
                with ingredients you can find close to home.
              </p>
            </div>
          </div>

          <ul data-g="stagger" className="mt-14 grid grid-cols-2 gap-px border border-[#123222]/30 bg-[#123222]/30 sm:grid-cols-5">
            {MENU.map(({ label, icon: Icon }) => (
              <li key={label} className="col-span-1 bg-[#cfe3c0] last:col-span-2 sm:last:col-span-1">
                <Link
                  href={`/recipes?category=${encodeURIComponent(label)}`}
                  className="group flex h-full min-h-[11rem] flex-col justify-between p-5 text-[#123222] transition-colors hover:bg-[#123222] hover:text-[#f6f1c4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2f6a45]"
                >
                  <Icon size={28} />
                  <span className="flex items-end justify-between gap-2 font-display text-2xl">
                    {label}
                    <ArrowUpRight size={18} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ───────────── A DAY AT THE TABLE: four columns, hairline dividers ───────────── */}
        <section className="bg-[#eaf3df]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
            <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
              <div>
                <p data-g="fade" className="font-display text-xl italic text-[#2f6a45]">From first light to the last slice</p>
                <h2 data-g="split" className="mt-3 font-display text-5xl leading-[1] text-[#123222] sm:text-6xl lg:text-7xl">
                  <Words text="A day at the table" />
                </h2>
              </div>
              <p data-g="fade" className={`max-w-md text-lg ${body}`}>
                Four moments, four ways to eat well. Keep scrolling to walk through the day.
              </p>
            </div>

            <ul data-g="stagger" className="mt-14 grid gap-px border-y border-[#123222]/25 bg-[#123222]/25 sm:grid-cols-2 lg:grid-cols-4">
              {DAY.map(({ when, label, icon: Icon, text }) => (
                <li key={label} className="bg-[#eaf3df]">
                  <Link
                    href={`/recipes?category=${encodeURIComponent(label)}`}
                    className="group flex h-full min-h-[24rem] flex-col justify-between p-7 text-[#123222] transition-colors hover:bg-[#123222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2f6a45]"
                  >
                    <span className="grid size-12 place-items-center rounded-full border border-[#123222]/35 transition-colors group-hover:border-[#f6f1c4] group-hover:text-[#f6f1c4]">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="font-display text-lg italic text-[#2f6a45] transition-colors group-hover:text-[#8fb88a]">{when}</p>
                      <p className="mt-1 font-display text-5xl leading-none transition-colors group-hover:text-[#f6f1c4]">{label}</p>
                      <p className="mt-4 text-sm leading-relaxed text-[#123222]/75 transition-colors group-hover:text-[#eaf3df]/80">{text}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-[#f6f1c4]">
                        See {label.toLowerCase()} recipes <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── PHILOSOPHY: moss band, centred quote ───────────── */}
        <section className="relative overflow-hidden bg-[#2f6a45] text-white">
          <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:py-32 lg:px-8">
            <h2 data-g="fade" className="font-display text-2xl text-[#bfe0b4]">Chef’s philosophy</h2>
            <div data-g="fade"><Rule light center /></div>
            <p data-g="fade" aria-hidden="true" className="mt-8 font-display text-8xl leading-none text-[#f6f1c4]">“</p>
            <blockquote data-g="split" className="-mt-6 font-display text-4xl italic leading-[1.1] text-[#f6f1c4] sm:text-6xl lg:text-7xl">
              <Words text="Good food doesn’t need to be complicated. It just needs to be shared." />
            </blockquote>
            <p data-g="fade" className="mt-8 text-base font-semibold text-[#bfe0b4]">Chef Olive Tekeiwa</p>
            <p data-g="fade" className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
              Olive keeps every recipe honest: simple ingredients, clear steps and the patience to taste as you go.
              If a dish can’t be cooked the same way twice, it doesn’t make it onto the page.
            </p>
          </div>
        </section>

        {/* ───────────── MY KITCHEN EQUIPMENT: a ledger on cream ───────────── */}
        <section className="bg-[#faf6e8]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div data-g="fade" className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
              <p className="font-display text-xl italic text-[#2f6a45]">In Olive’s kitchen</p>
              <h2 className="mt-3 font-display text-5xl leading-[1] text-[#123222] sm:text-6xl lg:text-7xl">
                My kitchen equipment
              </h2>
              <p className={`mt-6 max-w-sm ${body}`}>
                Six tools Olive reaches for every day, and the reason each one earns its place on the counter.
              </p>
            </div>

            <ol data-g="stagger" className="border-t-2 border-[#123222] lg:col-span-7">
              {EQUIPMENT.map(({ name, text }, i) => (
                <li key={name} className="grid grid-cols-[3rem_1fr] gap-y-1 border-b border-[#123222]/25 py-6 sm:grid-cols-[3.5rem_1fr_1.2fr] sm:items-baseline">
                  <span className="font-display text-base text-[#2f6a45]">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-display text-3xl leading-tight text-[#123222]">{name}</p>
                  <p className="col-start-2 text-sm leading-relaxed text-[#123222]/75 sm:col-start-3">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── HOW WE COOK ───────────── */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
          <h2 data-g="fade" className="font-display text-5xl leading-[1] text-[#123222] sm:text-6xl lg:text-7xl">How we cook</h2>
          <div className="relative mt-14">
            <span aria-hidden="true" data-g="line" className="absolute inset-x-0 top-0 h-[3px] bg-[#2f6a45]" />
            <ol data-g="stagger" className="grid gap-10 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {WAYS.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="grid size-12 place-items-center rounded-full bg-[#123222] text-[#f6f1c4]"><Icon size={22} /></span>
                  <p className="mt-5 font-display text-3xl leading-tight text-[#123222]">{title}</p>
                  <p className={`mt-3 text-sm ${body}`}>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── EVERY DAY IS WORTH MAKING: butter split, photo to the edge ───────────── */}
        <section className="bg-[#f6f1c4]">
          <div className="grid md:grid-cols-2">
            <figure data-g="fade" className="relative min-h-[22rem] overflow-hidden md:min-h-[34rem]">
              <img data-g="par" src={BOWL} alt="Colorful chicken bowl" loading="lazy" className="absolute inset-x-0 top-0 h-[118%] w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-[#123222] px-5 py-2.5 text-sm text-[#f6f1c4]">
                Colorful chicken bowl
              </figcaption>
            </figure>
            <div className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:px-20">
              <p data-g="fade" className="font-display text-xl italic text-[#2f6a45]">Every day is worth making</p>
              <h2 data-g="split" className="mt-3 font-display text-5xl leading-[1] text-[#123222] sm:text-6xl lg:text-7xl">
                <Words text="Something good is cooking." />
              </h2>
              <p data-g="fade" className={`mt-6 max-w-md text-lg ${body}`}>
                Explore recipes made for real life, from bright bowls to slow Sunday comforts.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────── KITCHEN NOTES ───────────── */}
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <h2 data-g="split" className="font-display text-5xl leading-[1] text-[#123222] sm:text-6xl lg:text-7xl">
              <Words text="Kitchen notes" />
            </h2>
            <p data-g="fade" className={`mt-6 max-w-sm text-lg ${body}`}>
              Quick answers about how EatsByTeks works, from the person who cooks the food.
            </p>
          </div>
          <div data-g="stagger" className="border-t-2 border-[#123222] lg:col-span-7">
            {NOTES.map(({ q, a }) => (
              <details key={q} className="group border-b border-[#123222]/25 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-2xl text-[#123222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6a45] [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#123222]/40 text-[#123222] transition-all group-open:rotate-45 group-open:border-[#123222] group-open:bg-[#123222] group-open:text-[#f6f1c4]">
                    <Plus size={16} />
                  </span>
                </summary>
                <p className={`mt-4 max-w-xl text-base ${body}`}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────────── CTA: forest band ───────────── */}
        <section data-g="fade" className="relative overflow-hidden bg-[#123222]">
          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
            <span className="grid size-16 place-items-center rounded-full bg-[#f6f1c4] text-[#123222]">
              <ChefHat size={30} />
            </span>
            <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[1] text-[#f6f1c4] sm:text-7xl lg:text-8xl">
              Cook with Chef Olive
            </h2>
            <div className="mt-8 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <p className="max-w-md text-lg text-[#eaf3df]/80">Pick a recipe, scale the servings and cook it step by step.</p>
              <Link
                href="/recipes"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f6f1c4] px-8 py-4 text-sm font-semibold text-[#123222] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6f1c4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#123222]"
              >
                Browse recipes <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}