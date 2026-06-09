// Generate per-route 1200x630 OG images into public/og/
// Run with: `node scripts/generate-og-images.mjs`
//
// Uses satori + @resvg/resvg-js + variable Inter/Lora fonts shipped via @fontsource-variable.

import { writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public/og");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const { ROUTES } = await import(pathToFileURL(join(ROOT, "src/lib/seo/routes.ts")).href);

// Satori needs TTF/OTF (not WOFF/WOFF2). TTFs live in scripts/fonts/.
const inter = readFileSync(join(__dirname, "fonts/Inter-Regular.ttf"));
const lora = readFileSync(join(__dirname, "fonts/Lora-Bold.ttf"));

const NAVY = "#0e2a4a";
const GREEN = "#1E8053";
const SAND = "#f5efe3";
const STONE = "#dad4c5";

function template({ title, subtitle, accent }) {
  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: `linear-gradient(135deg, ${SAND} 0%, #ffffff 60%)`,
        fontFamily: "Inter",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: "16px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: GREEN,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "Lora",
                    fontWeight: 700,
                    fontSize: "30px",
                  },
                  children: "B",
                },
              },
              {
                type: "div",
                props: {
                  style: { fontSize: "26px", color: NAVY, fontWeight: 700 },
                  children: "Benefit Builder LLC",
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "20px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "14px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: accent || GREEN,
                    fontWeight: 600,
                  },
                  children: "Section 125 · Pre-Tax Benefits",
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontFamily: "Lora",
                    fontWeight: 700,
                    fontSize: "60px",
                    lineHeight: 1.1,
                    color: NAVY,
                    maxWidth: "1056px",
                  },
                  children: title,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "26px",
                    lineHeight: 1.4,
                    color: "#3a3a3a",
                    maxWidth: "1056px",
                  },
                  children: subtitle,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: `2px solid ${STONE}`,
              paddingTop: "24px",
            },
            children: [
              {
                type: "div",
                props: { style: { color: "#6a6a6a", fontSize: "20px" }, children: "benefitbuilderllc.com" },
              },
              {
                type: "div",
                props: { style: { color: GREEN, fontSize: "20px", fontWeight: 600 }, children: "Texas-based · Built in-house" },
              },
            ],
          },
        },
      ],
    },
  };
}

function ogTitleFor(route) {
  // Strip the brand suffix to keep it visually short.
  const t = route.title.split("|")[0].trim();
  return t.length > 80 ? t.slice(0, 78) + "…" : t;
}

function ogSubtitleFor(route) {
  const d = route.description;
  return d.length > 200 ? d.slice(0, 198) + "…" : d;
}

const fonts = [
  { name: "Inter", data: inter, weight: 400, style: "normal" },
  { name: "Lora", data: lora, weight: 700, style: "normal" },
];

let count = 0;
for (const r of ROUTES) {
  if (!r.ogImage) continue;
  const filename = r.ogImage.split("/").pop();
  const outPath = join(OUT_DIR, filename);

  const svg = await satori(template({ title: ogTitleFor(r), subtitle: ogSubtitleFor(r) }), {
    width: 1200,
    height: 630,
    fonts,
  });

  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    background: "white",
  })
    .render()
    .asPng();

  writeFileSync(outPath, png);
  console.log(`[og] wrote ${filename}`);
  count++;
}

// Blog OG cards from public/data/blog/index.json (one listing card + one per post).
// These double as the in-page hero image for each post.
const blogIndexPath = join(ROOT, "public/data/blog/index.json");
if (existsSync(blogIndexPath)) {
  const posts = JSON.parse(readFileSync(blogIndexPath, "utf8"));
  const cards = [
    {
      file: "og-blog.png",
      title: "Section 125 Insights",
      subtitle: "Plain-language guides on pre-tax benefits for employers and agents.",
    },
    ...posts.map((p) => ({
      file: `og-blog-${p.slug}.png`,
      title: p.title.length > 80 ? p.title.slice(0, 78) + "…" : p.title,
      subtitle: p.excerpt.length > 200 ? p.excerpt.slice(0, 198) + "…" : p.excerpt,
    })),
  ];
  for (const c of cards) {
    const svg = await satori(template({ title: c.title, subtitle: c.subtitle }), { width: 1200, height: 630, fonts });
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 }, background: "white" }).render().asPng();
    writeFileSync(join(OUT_DIR, c.file), png);
    console.log(`[og] wrote ${c.file}`);
    count++;
  }
}

console.log(`[og] generated ${count} images`);
