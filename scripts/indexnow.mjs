// IndexNow ping. Notifies Bing, Yandex, and other IndexNow engines of the site's
// URLs so new and changed pages are picked up in hours instead of waiting for a
// natural crawl. Run AFTER deploy (the key file must be live first):
//
//   node scripts/indexnow.mjs
//
// The IndexNow key is hosted at public/<key>.txt (public by design, per the
// IndexNow spec). This script finds that file, reads the built sitemap, and POSTs
// the URL list. No secrets involved.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const HOST = "benefitbuilderllc.com";
const SITE = `https://${HOST}`;

const pub = join(ROOT, "public");
const keyFile = readdirSync(pub).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("[indexnow] no key file public/<32-hex>.txt found");
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");

const sitemapPath = join(ROOT, "dist", "sitemap.xml");
if (!existsSync(sitemapPath)) {
  console.error("[indexnow] dist/sitemap.xml not found; run the build first");
  process.exit(1);
}
const xml = readFileSync(sitemapPath, "utf8");
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.error("[indexnow] no URLs found in sitemap");
  process.exit(1);
}

const body = { host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList };
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
console.log(`[indexnow] submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
// 200 = accepted, 202 = accepted (key validation pending). Both are success.
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
