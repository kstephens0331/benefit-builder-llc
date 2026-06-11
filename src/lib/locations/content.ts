// Long-form location body markdown loader. Kept SEPARATE from locations.ts
// because locations.ts is imported by src/lib/seo/routes.ts, which the Node
// sitemap script (scripts/generate-sitemap.mjs) imports. import.meta.glob is a
// Vite-only macro and throws under plain Node, so it must not be in any module
// the sitemap script pulls in. Only the page components import this file.

import { markdownToHtml } from "../markdownToHtml";

const bodies = import.meta.glob("/public/data/locations/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Precompute HTML once at module load (build + client share the same output).
const HTML: Record<string, string> = {};
for (const [path, raw] of Object.entries(bodies)) {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  HTML[slug] = markdownToHtml(raw);
}

// Returns rendered HTML for the location body (injected via dangerouslySetInnerHTML).
export function getLocationBody(slug: string): string {
  return HTML[slug] ?? "";
}
