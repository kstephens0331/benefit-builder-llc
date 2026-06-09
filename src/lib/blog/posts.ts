// Build-time blog data. The metadata index and the markdown bodies are imported
// (not fetched), so both the prerendered HTML and the client bundle contain the
// data. This is what keeps the listing crawlable (no orphan pages).

import indexRaw from "../../../public/data/blog/index.json";

export type BlogMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  image: string;
  tags: string[];
};

export type FullPost = BlogMeta & { body: string };

const bodies = import.meta.glob("/public/data/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const BODY_BY_SLUG: Record<string, string> = {};
for (const [path, body] of Object.entries(bodies)) {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  BODY_BY_SLUG[slug] = body;
}

export const POSTS: BlogMeta[] = (indexRaw as BlogMeta[])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts(): BlogMeta[] {
  return POSTS;
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getPost(slug: string): FullPost | undefined {
  const meta = POSTS.find((p) => p.slug === slug);
  if (!meta) return undefined;
  return { ...meta, body: BODY_BY_SLUG[slug] ?? "" };
}

export function getRelatedPosts(slug: string, n = 3): BlogMeta[] {
  const current = POSTS.find((p) => p.slug === slug);
  if (!current) return POSTS.filter((p) => p.slug !== slug).slice(0, n);
  return POSTS.filter((p) => p.slug !== slug)
    .map((p) => ({ p, score: p.tags.filter((t) => current.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((s) => s.p);
}

export function allTagsByFrequency(): string[] {
  const counts = new Map<string, number>();
  for (const p of POSTS) for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
}
