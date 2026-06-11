import { Link } from "react-router-dom";
import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTARow from "../../components/CTARow";
import { webPage, breadcrumbList, itemList } from "../../lib/seo/jsonld";
import { STATES, stateTitle, heroImageFor, heroAltFor } from "../../lib/locations/locations";

const TITLE = "Section 125 Service Areas | Benefit Builder LLC";
const DESCRIPTION =
  "Section 125 pre-tax benefit plan administration across the states we serve, with the savings detail that matters in each one.";

export default function LocationsHub() {
  const path = "/locations";
  const url = `https://benefitbuilderllc.com${path}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: path },
  ];
  const breadcrumb = breadcrumbList(crumbs);

  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path={path}
        image="/og/og-loc-hub.png"
        jsonLd={[
          webPage({ name: TITLE, description: DESCRIPTION, url, breadcrumb }),
          itemList(STATES.map((s) => ({ name: stateTitle(s).split("|")[0].trim(), url: `/locations/${s.slug}` }))),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[420px] flex items-center">
        <img
          src={heroImageFor("hub")}
          alt={heroAltFor("hub")}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/35" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <p className="text-sm uppercase tracking-wide text-white/80 font-semibold">Where we work</p>
          <h1 className="font-heading text-4xl md:text-5xl text-white drop-shadow mt-2">Section 125 Service Areas</h1>
          <p className="mt-4 max-w-3xl text-white/90 text-lg">
            Benefit Builder administers Section 125 pre-tax benefit plans for employers across nine states. The savings
            math is not identical everywhere, because state income tax differs, so each state page shows what actually
            applies there. Pick your state to see the detail.
          </p>
          <div className="mt-6">
            <CTARow primaryLabel="Get a quote" primaryTo="/contact" secondaryTo="/savings-calculator" secondaryLabel="Estimate your savings" />
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STATES.map((s) => (
              <Link
                key={s.slug}
                to={`/locations/${s.slug}`}
                className="rounded-lg border border-brand-stone bg-white p-6 hover:border-brand-green hover:shadow-sm transition-all"
              >
                <h2 className="font-heading text-2xl text-brand-navy">{s.name}</h2>
                <p className="mt-2 text-sm text-brand-charcoal/80">{s.metaDescription}</p>
                <p className="mt-3 text-sm font-semibold text-brand-green">View {s.name} details &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="font-heading text-3xl text-brand-navy">Not sure where to start?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-brand-charcoal/90">
            Tell us your headcount and pay frequency and we will prepare a quote within one business day, wherever you operate.
          </p>
          <div className="mt-6 flex justify-center">
            <CTARow primaryLabel="Get a quote" primaryTo="/contact" align="center" />
          </div>
        </div>
      </section>
    </>
  );
}
