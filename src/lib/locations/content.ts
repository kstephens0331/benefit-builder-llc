// Long-form location body markdown loader. Kept SEPARATE from locations.ts
// because locations.ts is imported by src/lib/seo/routes.ts, which the Node
// sitemap script (scripts/generate-sitemap.mjs) imports. import.meta.glob is a
// Vite-only macro and throws under plain Node, so it must not be in any module
// the sitemap script pulls in. Only the page components import this file.

const bodies = import.meta.glob("/public/data/locations/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function getLocationBody(slug: string): string {
  return bodies[`/public/data/locations/${slug}.md`] ?? "";
}
