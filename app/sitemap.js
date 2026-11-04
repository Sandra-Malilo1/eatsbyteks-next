import { recipes } from "@/lib/recipes";

const base = "https://eatsbyteksrecipes.com";

// MUST match how /recipe/[slug] builds its slugs
const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function sitemap() {
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/recipes`, changeFrequency: "weekly", priority: 0.8 },
    ...recipes.map((r) => ({
      url: `${base}/recipe/${r.slug ?? slugify(r.title)}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}