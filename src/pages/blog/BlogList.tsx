import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTARow from "../../components/CTARow";
import BlogCard from "../../components/blog/BlogCard";
import { getAllPosts, allTagsByFrequency } from "../../lib/blog/posts";
import { formatDateUTC } from "../../lib/blog/markdown";
import { findRoute } from "../../lib/seo/routes";
import { itemList, webPage, breadcrumbList } from "../../lib/seo/jsonld";

const ALL = getAllPosts();
const ALL_TAGS = allTagsByFrequency();

export default function BlogList() {
  const r = findRoute("/blog")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL.filter((p) => {
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const visibleTags = showAllTags ? ALL_TAGS : ALL_TAGS.slice(0, 8);

  return (
    <>
      <Seo
        title={r.title}
        description={r.description}
        path={r.path}
        image={r.ogImage}
        jsonLd={[
          itemList(ALL.map((p) => ({ name: p.title, url: `/blog/${p.slug}` }))),
          webPage({
            name: r.title,
            description: r.description,
            url: `https://benefitbuilderllc.com${r.path}`,
            breadcrumb: breadcrumbList(crumbs),
          }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">Blog</p>
        <h1 className="mt-2 font-heading text-4xl text-brand-navy md:text-5xl">Section 125 Guides and Insights</h1>
        <p className="mt-4 max-w-3xl text-lg text-brand-charcoal/90">
          Plain-language guides on pre-tax benefits for employers and the agents who serve them.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className="w-full max-w-md rounded-lg border border-brand-stone bg-white px-4 py-2.5"
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`rounded-full border px-3 py-1 text-sm ${!activeTag ? "border-brand-green bg-brand-green text-white" : "border-brand-stone text-brand-charcoal hover:bg-brand-stone/50"}`}
            >
              All
            </button>
            {visibleTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(activeTag === t ? null : t)}
                className={`rounded-full border px-3 py-1 text-sm ${activeTag === t ? "border-brand-green bg-brand-green text-white" : "border-brand-stone text-brand-charcoal hover:bg-brand-stone/50"}`}
              >
                {t}
              </button>
            ))}
            {ALL_TAGS.length > 8 && (
              <button type="button" onClick={() => setShowAllTags((v) => !v)} className="text-sm font-medium text-brand-green">
                {showAllTags ? "Show fewer" : "Show more"}
              </button>
            )}
          </div>
        </div>

        {featured && (
          <Link
            to={`/blog/${featured.slug}`}
            className="group mt-10 grid gap-6 overflow-hidden rounded-xl border border-brand-stone bg-white transition hover:border-brand-green hover:shadow-md md:grid-cols-2"
          >
            <img
              src={featured.image}
              alt={featured.title}
              width={1200}
              height={630}
              className="aspect-[1200/630] w-full object-cover"
            />
            <div className="flex flex-col justify-center p-6">
              <div className="flex flex-wrap gap-2">
                {featured.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mt-1 font-heading text-2xl text-brand-navy group-hover:underline">{featured.title}</h2>
              <p className="mt-2 text-brand-charcoal/90">{featured.excerpt}</p>
              <span className="mt-3 text-sm text-brand-charcoal/70">{formatDateUTC(featured.date)}</span>
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}

        {filtered.length === 0 && <p className="mt-10 text-brand-charcoal/80">No articles match your search.</p>}
      </section>

      <section className="bg-brand-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row lg:px-8">
          <div>
            <h2 className="font-heading text-2xl text-white">See what your company could save.</h2>
            <p className="mt-1 text-white/85">Run your roster through the calculator, or talk to our team.</p>
          </div>
          <div>
            <CTARow primaryLabel="Estimate your savings" primaryTo="/savings-calculator" secondaryTo="/contact" secondaryLabel="Contact us" />
          </div>
        </div>
      </section>
    </>
  );
}
