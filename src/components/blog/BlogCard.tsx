import { Link } from "react-router-dom";
import type { BlogMeta } from "../../lib/blog/posts";
import { formatDateUTC } from "../../lib/blog/markdown";

export default function BlogCard({ post }: { post: BlogMeta }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-brand-stone bg-white transition hover:border-brand-green hover:shadow-md"
    >
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        width={1200}
        height={630}
        className="aspect-[1200/630] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs font-semibold uppercase tracking-wide text-brand-green">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-1 font-heading text-lg text-brand-navy group-hover:underline">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm text-brand-charcoal/90">{post.excerpt}</p>
        <span className="mt-3 text-xs text-brand-charcoal/70">{formatDateUTC(post.date)}</span>
      </div>
    </Link>
  );
}
