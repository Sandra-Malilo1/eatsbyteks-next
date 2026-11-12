/*
  Cleans recipe text that was pasted into the database as-is.
  Put this file at: src/lib/cleanRecipe.ts  (so '@/lib/cleanRecipe' resolves)
*/

export type IngredientGroup = { title: string; items: string[] }

const STARTS_WITH_QTY = /^\s*(\d|[½¼¾⅓⅔])/
const ONLY_A_LABEL = /^(ingredients?|method|directions?|instructions?|steps?)\s*[:;.\-–]*$/i

const normalise = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

const tidy = (s: unknown) =>
  String(s ?? '')
    .replace(/^[\s\-•*–]+/, '')
    .replace(/\s+/g, ' ')
    .trim()

/*
  Ingredient lines in, clean groups out.
  - drops "Ingredients;" style labels and "<Title> Recipe" lines
  - turns "Cake:" / "Orange Syrup:" lines into group titles instead of list items
*/
export function parseIngredients(
  raw: unknown[],
  recipeTitle = '',
): { items: string[]; groups: IngredientGroup[] } {
  const title = normalise(recipeTitle)
  const all: IngredientGroup[] = []
  let current: IngredientGroup = { title: '', items: [] }
  all.push(current)

  for (const entry of raw ?? []) {
    const line = tidy(entry)
    if (!line) continue

    const n = normalise(line)
    const hasQty = STARTS_WITH_QTY.test(line)

    if (ONLY_A_LABEL.test(line)) continue
    if (title && (n === title || n === `${title} recipe`)) continue
    if (!hasQty && /\brecipe$/i.test(line)) continue

    if (!hasQty && /[:;]$/.test(line)) {
      current = { title: line.replace(/[:;\s]+$/, ''), items: [] }
      all.push(current)
      continue
    }

    current.items.push(line)
  }

  const groups = all.filter((g) => g.items.length > 0)
  return { items: groups.flatMap((g) => g.items), groups }
}

/*
  Flat list for places that only show a plain list (quick view, cards).
  When a recipe has several sections, the section name is added in brackets
  so "1/4 cup sugar" in the cake and in the syrup stay distinguishable.
*/
export function flatIngredients(groups: IngredientGroup[]): string[] {
  const titled = groups.filter((g) => g.title).length

  return groups.flatMap((g) =>
    g.items.map((item) => (g.title && titled > 1 ? `${item} (${g.title})` : item)),
  )
}

/*
  Method in, separate steps out.
  - removes a leading "Method" / "Instructions" word and "1." numbering
  - splits one long pasted paragraph into steps at sentence ends
  - glues very short sentences ("Mix well.") onto the step before them
*/
export function parseSteps(raw: unknown): string[] {
  const chunks: string[] = Array.isArray(raw)
    ? raw.map(String)
    : typeof raw === 'string'
      ? [raw]
      : []

  const out: string[] = []

  for (const chunk of chunks) {
    for (const piece of chunk.split(/\r?\n+/)) {
      /* a line that is only the word "Method" / "Instructions" is a label, not a step */
      if (ONLY_A_LABEL.test(tidy(piece))) continue

      const line = tidy(piece)
        .replace(/^(method|instructions?|directions?|steps?)\s*[:;\-–]?\s+/i, '')
        .replace(/^\(?\d{1,2}[.)]\s+/, '')
        .trim()

      if (!line) continue

      if (line.length <= 200) {
        out.push(line)
        continue
      }

      const sentences = line.split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
      const merged: string[] = []

      for (const sentence of sentences) {
        if (merged.length && sentence.length < 40) {
          merged[merged.length - 1] += ` ${sentence}`
        } else {
          merged.push(sentence)
        }
      }

      out.push(...merged)
    }
  }

  return out
}