import type { ReactNode } from "react";
import type { Components } from "react-markdown";
import { Link } from "react-router-dom";
import { slugify } from "../../lib/blog/markdown";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in (node as { props?: { children?: ReactNode } })) {
    return textOf((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

const headingId = (children: ReactNode) => slugify(textOf(children));

export const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 id={headingId(children)} className="scroll-mt-24 font-heading text-2xl md:text-3xl text-brand-navy mt-10 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 id={headingId(children)} className="scroll-mt-24 font-heading text-xl text-brand-navy mt-6 mb-2">
      {children}
    </h3>
  ),
  h4: ({ children }) => <h4 className="font-semibold text-brand-navy mt-4 mb-2">{children}</h4>,
  p: ({ children }) => <p className="text-brand-charcoal/90 leading-relaxed mt-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6 mt-4 space-y-2 text-brand-charcoal/90">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mt-4 space-y-2 text-brand-charcoal/90">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-brand-navy">{children}</strong>,
  a: ({ href, children }) => {
    const url = href ?? "#";
    return url.startsWith("/") ? (
      <Link to={url} className="text-brand-green font-medium hover:underline">
        {children}
      </Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-brand-green font-medium hover:underline">
        {children}
      </a>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-4 border-brand-green bg-brand-sand/40 px-5 py-3 text-brand-charcoal/90 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-brand-stone" />,
};
