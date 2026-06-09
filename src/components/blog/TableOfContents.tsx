import type { Heading } from "../../lib/blog/markdown";
import { useScrollSpy } from "../../lib/blog/useScrollSpy";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const ids = headings.map((h) => h.id);
  const active = useScrollSpy(ids);
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="mb-2 font-semibold text-brand-navy">On this page</div>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} className={h.depth === 3 ? "ml-3" : ""}>
            <a
              href={`#${h.id}`}
              className={`block border-l-2 pl-3 transition ${
                active === h.id
                  ? "border-brand-green font-medium text-brand-green"
                  : "border-brand-stone text-brand-charcoal/70 hover:text-brand-navy"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
