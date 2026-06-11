import { useParams, Link } from "react-router-dom";
import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTARow from "../../components/CTARow";
import BlogCard from "../../components/blog/BlogCard";
import TableOfContents from "../../components/blog/TableOfContents";
import { getPost, getRelatedPosts } from "../../lib/blog/posts";
import { extractHeadings, readTimeMinutes, formatDateUTC } from "../../lib/blog/markdown";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { article, webPage, breadcrumbList } from "../../lib/seo/jsonld";
import { BUSINESS_NAME } from "../../lib/seo/site";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl text-brand-navy">Article not found</h1>
        <p className="mt-4 text-brand-charcoal/90">
          <Link to="/blog" className="font-medium text-brand-green hover:underline">
            Back to all articles
          </Link>
        </p>
      </section>
    );
  }

  const path = `/blog/${post.slug}`;
  const url = `https://benefitbuilderllc.com${path}`;
  const headings = extractHeadings(post.body);
  const readTime = readTimeMinutes(post.body);
  const bodyHtml = markdownToHtml(post.body);
  const related = getRelatedPosts(post.slug, 3);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: path },
  ];

  return (
    <>
      <Seo
        title={`${post.title} | ${BUSINESS_NAME}`}
        description={post.excerpt}
        path={path}
        image={post.image}
        imageAlt={post.title}
        type="article"
        jsonLd={[
          article({ headline: post.title, description: post.excerpt, url, datePublished: post.date, image: post.image }),
          webPage({ name: post.title, description: post.excerpt, url, breadcrumb: breadcrumbList(crumbs) }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-sm font-medium text-brand-green hover:underline">
          Back to all articles
        </Link>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs font-semibold uppercase tracking-wide text-brand-green">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-2 max-w-3xl font-heading text-3xl text-brand-navy md:text-4xl">{post.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-brand-charcoal/70">
          <span>{formatDateUTC(post.date)}</span>
          <span>{readTime} min read</span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="mt-6 aspect-[1200/630] w-full rounded-xl border border-brand-stone object-cover"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
          <div className="min-w-0">
            <div className="bb-prose" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

            <div className="mt-12 border-t border-brand-stone pt-8">
              <CTARow primaryLabel="Estimate your savings" primaryTo="/savings-calculator" secondaryTo="/contact" secondaryLabel="Contact us" />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents headings={headings} />
              <div className="rounded-lg border border-brand-stone bg-brand-sand/40 p-5">
                <div className="font-heading text-brand-navy">Run your numbers</div>
                <p className="mt-1 text-sm text-brand-charcoal/90">See the savings for your team in seconds.</p>
                <Link
                  to="/savings-calculator"
                  className="mt-3 inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  Open the calculator
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-brand-stone pt-10">
            <h2 className="font-heading text-2xl text-brand-navy">Related articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
