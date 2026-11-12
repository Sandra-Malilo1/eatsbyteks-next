'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Clock3, Heart, X } from 'lucide-react'
import { recipeSlug } from '@/lib/recipes'
import type { Recipe } from '@/lib/recipes'
import { parseIngredients, parseSteps } from '@/lib/cleanRecipe'
import type { IngredientGroup } from '@/lib/cleanRecipe'

type Props = {
  recipe: Recipe | null
  saved: boolean
  onSave: () => void
  onClose: () => void
}

const FIRST_STEPS = 3

function QuickViewBody({
  recipe,
  saved,
  onSave,
  onClose,
}: {
  recipe: Recipe
  saved: boolean
  onSave: () => void
  onClose: () => void
}) {
  const [showAll, setShowAll] = useState(false)

  /* Works with the cleaned data from the recipes page, and also cleans
     plain recipes (the ones coming from lib/recipes) on the spot. */
  const extra = recipe as unknown as {
    ingredientGroups?: IngredientGroup[]
    steps?: unknown
    method?: unknown
  }

  const groups: IngredientGroup[] =
    extra.ingredientGroups && extra.ingredientGroups.length
      ? extra.ingredientGroups
      : parseIngredients(recipe.ingredients, recipe.title).groups

  const steps = parseSteps(extra.steps ?? extra.method)
  const total = groups.reduce((n, g) => n + g.items.length, 0)
  const visibleSteps = showAll ? steps : steps.slice(0, FIRST_STEPS)

  return (
    <>
      <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6 pt-8 sm:px-8">
        <p className="pr-10 text-xs font-semibold tracking-wide text-[#2f6a45]">
          {recipe.category} · {recipe.time}
        </p>

        <h2
          id="quick-view-title"
          className="mt-2 font-display text-3xl leading-tight text-[#123222] sm:text-4xl"
        >
          {recipe.title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-[#123222]/70">
          {recipe.description}
        </p>

        <p className="mt-4 inline-flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-[#123222]/70">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={14} className="text-[#2f6a45]" />
            {recipe.time}
          </span>
          <span>{total} ingredients</span>
          {steps.length > 0 && <span>{steps.length} steps</span>}
        </p>

        {/* ingredients, grouped by section */}
        <h3 className="mt-8 font-display text-xl text-[#123222]">
          What you&rsquo;ll need
        </h3>

        <div className="mt-3 rounded-2xl bg-white/70 p-4 ring-1 ring-[#cfe3c0]">
          {groups.map((group, gi) => (
            <div
              key={`${group.title}-${gi}`}
              className={gi === 0 ? '' : 'mt-5 border-t border-[#e1eed5] pt-4'}
            >
              {group.title && (
                <h4 className="mb-2 text-sm font-semibold text-[#2f6a45]">
                  {group.title}
                </h4>
              )}

              <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {group.items.map((item, i) => (
                  <li
                    key={`${item}-${i}`}
                    className="flex items-start gap-2 text-sm leading-snug text-[#123222]"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-[#2f6a45]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* method, as numbered steps */}
        {steps.length > 0 && (
          <>
            <h3 className="mt-8 font-display text-xl text-[#123222]">
              Make it
            </h3>

            <ol className="mt-3 space-y-3">
              {visibleSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#123222] text-xs font-bold text-[#f6f1c4]">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-[#123222]/85">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            {steps.length > FIRST_STEPS && (
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="mt-4 text-sm font-semibold text-[#2f6a45] underline-offset-4 hover:underline"
              >
                {showAll
                  ? 'Show fewer steps'
                  : `Show all ${steps.length} steps`}
              </button>
            )}
          </>
        )}
      </div>

      {/* actions, always visible */}
      <div className="flex flex-wrap items-center gap-3 border-t border-[#cfe3c0] bg-[#eaf3df] px-6 py-4 sm:px-8">
        <button
          type="button"
          onClick={onSave}
          aria-pressed={saved}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
            saved
              ? 'border-[#123222] bg-[#123222] text-[#f6f1c4]'
              : 'border-[#2f6a45] text-[#123222] hover:bg-white'
          }`}
        >
          <Heart
            size={16}
            className={saved ? 'fill-[#f6f1c4] text-[#f6f1c4]' : 'text-[#2f6a45]'}
          />
          {saved ? 'Saved' : 'Save recipe'}
        </button>

        <Link
          href={`/recipe/${recipeSlug(recipe)}`}
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full bg-[#2f6a45] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#123222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123222] focus-visible:ring-offset-2"
        >
          View full recipe <ArrowRight size={15} />
        </Link>
      </div>
    </>
  )
}

export function RecipeDialog({ recipe, saved, onSave, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const open = Boolean(recipe)

  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!recipe) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-[#123222]/60 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        tabIndex={-1}
        className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-t-[2rem] bg-[#eaf3df] shadow-2xl outline-none sm:rounded-[2rem] md:grid-cols-[0.9fr_1.1fr]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-[#123222] shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6a45]"
        >
          <X size={18} />
        </button>

        {/* photo: banner on mobile, framed 4:5 card on desktop so the dish is not cropped to a thin strip */}
        <div className="relative h-52 md:flex md:h-auto md:items-center md:justify-center md:bg-[#d7e9c8] md:p-6">
          <div className="absolute inset-0 md:relative md:inset-auto md:aspect-[4/5] md:w-full md:overflow-hidden md:rounded-[1.5rem] md:shadow-[0_30px_60px_-30px_rgba(18,50,34,0.7)] md:ring-4 md:ring-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="size-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex max-h-[calc(92vh-13rem)] min-h-0 flex-col md:max-h-[92vh]">
          <QuickViewBody
            key={recipe.id}
            recipe={recipe}
            saved={saved}
            onSave={onSave}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  )
}