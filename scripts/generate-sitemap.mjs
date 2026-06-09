// Postbuild script: generates dist/sitemap.xml, dist/sitemap-images.xml, and dist/robots.txt
// from the single source of truth at src/lib/seo/routes.ts.
// Run with: `node scripts/generate-sitemap.mjs` after `vite build`.

import { writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");

if (!existsSync(DIST)) {
  console.error(`[sitemap] dist/ not found at ${DIST}. Run 'vite build' first.`);
  process.exit(1);
}

const SITE_URL = "https://benefitbuilderllc.com";

const { ROUTES } = await import(pathToFileURL(join(ROOT, "src/lib/seo/routes.ts")).href);

function isoDate() {
  return new Date().toISOString().slice(0, 10);
}

function lastmodForRoute(route) {
  // Try to read the prerendered HTML mtime as a proxy for lastmod.
  const fpath = route.path === "/" ? join(DIST, "index.html") : join(DIST, route.path.replace(/^\//, ""), "index.html");
  try {
    const stat = statSync(fpath);
    return stat.mtime.toISOString().slice(0, 10);
  } catch {
    return isoDate();
  }
}

const includedRoutes = ROUTES.filter((r) => r.includeInSitemap !== false && !r.noindex);

// sitemap.xml
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
for (const r of includedRoutes) {
  const loc = `${SITE_URL}${r.path}`;
  xml += `  <url>\n`;
  xml += `    <loc>${loc}</loc>\n`;
  xml += `    <lastmod>${lastmodForRoute(r)}</lastmod>\n`;
  xml += `    <changefreq>${r.changefreq}</changefreq>\n`;
  xml += `    <priority>${r.priority.toFixed(1)}</priority>\n`;
  if (r.ogImage) {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${SITE_URL}${r.ogImage}</image:loc>\n`;
    xml += `    </image:image>\n`;
  }
  xml += `  </url>\n`;
}
xml += `</urlset>\n`;

writeFileSync(join(DIST, "sitemap.xml"), xml, "utf8");
console.log(`[sitemap] wrote dist/sitemap.xml with ${includedRoutes.length} URLs`);

// sitemap-images.xml (separate, for Google image search)
let img = `<?xml version="1.0" encoding="UTF-8"?>\n`;
img += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
for (const r of includedRoutes) {
  if (!r.ogImage) continue;
  img += `  <url>\n`;
  img += `    <loc>${SITE_URL}${r.path}</loc>\n`;
  img += `    <image:image>\n`;
  img += `      <image:loc>${SITE_URL}${r.ogImage}</image:loc>\n`;
  img += `      <image:title>${escapeXml(r.title)}</image:title>\n`;
  img += `      <image:caption>${escapeXml(r.description)}</image:caption>\n`;
  img += `    </image:image>\n`;
  img += `  </url>\n`;
}
img += `</urlset>\n`;
writeFileSync(join(DIST, "sitemap-images.xml"), img, "utf8");
console.log(`[sitemap] wrote dist/sitemap-images.xml`);

// robots.txt
const robots = `# robots.txt for ${SITE_URL}
# All crawlers allowed. AI crawlers explicitly permitted to maximize discoverability.

User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: CCBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-images.xml
`;
writeFileSync(join(DIST, "robots.txt"), robots, "utf8");
console.log(`[sitemap] wrote dist/robots.txt`);

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
