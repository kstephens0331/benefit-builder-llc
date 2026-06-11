// Markdown to HTML at module-load time, used by the blog and location loaders so
// we render body content via a styled `.bb-prose` wrapper instead of shipping
// react-markdown (about 155KB) to the client. marked is deterministic, so the
// SSR-prerendered HTML and the client hydration match.

import { marked } from "marked";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

marked.setOptions({ gfm: true });

export function markdownToHtml(md: string): string {
  if (!md) return "";
  let html = marked.parse(md) as string;
  // Add slugified ids to h2/h3 so in-page anchors (blog table of contents) work.
  html = html.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (_m, tag, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    return `<${tag} id="${slugify(text)}">${inner}</${tag}>`;
  });
  return html;
}
