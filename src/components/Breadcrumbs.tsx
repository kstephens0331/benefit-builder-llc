import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { breadcrumbList, type Crumb } from "../lib/seo/jsonld";

export type BreadcrumbsProps = {
  crumbs: Crumb[];
};

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  if (!crumbs || crumbs.length === 0) return null;

  const ld = breadcrumbList(crumbs);

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Head>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 text-sm text-brand-charcoal/70"
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className="text-brand-charcoal">
                    {c.name}
                  </span>
                ) : (
                  <Link to={c.href} className="hover:text-brand-green">
                    {c.name}
                  </Link>
                )}
                {!isLast && <span className="text-brand-stone">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
