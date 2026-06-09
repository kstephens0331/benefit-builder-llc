// Pure helpers for the blog: heading ids, table of contents, read time, and a
// UTC-pinned date formatter (the UTC pin avoids a server vs client hydration
// mismatch on the rendered day).

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export type Heading = { depth: 2 | 3; text: string; id: string };

export function extractHeadings(markdown: string): Heading[] {
  const out: Heading[] = [];
  let inCode = false;
  for (const line of markdown.split("\n")) {
    if (line.trim().startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    const m = /^(#{2,3})\s+(.+)$/.exec(line);
    if (m) {
      const depth = m[1].length as 2 | 3;
      const text = m[2].trim();
      out.push({ depth, text, id: slugify(text) });
    }
  }
  return out;
}

export function readTimeMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDateUTC(date: string): string {
  const d = new Date(`${date}T00:00:00Z`);
  return d.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
