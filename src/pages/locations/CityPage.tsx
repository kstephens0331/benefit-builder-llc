import { useParams, Link } from "react-router-dom";
import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTARow from "../../components/CTARow";
import { service, webPage, breadcrumbList, faqPage, localBusinessInCity } from "../../lib/seo/jsonld";
import { getCity, getState, cityTitle } from "../../lib/locations/locations";
import { federalMarginalRate, stateMarginalRate, FICA_TOTAL } from "../../lib/tax/savings2026";

const REP_GROSS = 48000;

function pct(n: number): string {
  return `${(n * 100).toFixed(n * 100 >= 10 ? 1 : 2)}%`;
}

export default function CityPage() {
  const { state, city } = useParams();
  const c = getCity(state || "", city || "");
  const s = getState(state || "");
  if (!c || !s) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl text-brand-navy">Location not found</h1>
        <p className="mt-4"><Link className="text-brand-green" to="/locations">See all service areas</Link></p>
      </section>
    );
  }

  const path = `/locations/${c.stateSlug}/${c.slug}`;
  const url = `https://benefitbuilderllc.com${path}`;
  const fed = federalMarginalRate(REP_GROSS);
  const st = stateMarginalRate(c.code, REP_GROSS);
  const employeeAvoided = FICA_TOTAL + fed + st;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
    { name: s.name, href: `/locations/${s.slug}` },
    { name: c.city, href: path },
  ];
  const breadcrumb = breadcrumbList(crumbs);

  return (
    <>
      <Seo
        title={cityTitle(c)}
        description={c.metaDescription}
        path={path}
        image={`/og/og-loc-${c.stateSlug}-${c.slug}.png`}
        jsonLd={[
          localBusinessInCity({ city: c.city, region: c.code, latitude: c.lat, longitude: c.lon, url }),
          service({
            name: `Section 125 Administration in ${c.city}, ${c.code}`,
            description: c.metaDescription,
            url,
            serviceType: "Section 125 cafeteria plan administration",
          }),
          webPage({ name: cityTitle(c), description: c.metaDescription, url, breadcrumb }),
          faqPage(c.faq),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm uppercase tracking-wide text-brand-green font-semibold">
          {c.city}, {c.code}
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-brand-navy mt-2">
          Section 125 Pre-Tax Benefits for {c.city} Employers
        </h1>
        <p className="mt-4 max-w-3xl text-brand-charcoal/90 text-lg">{c.intro}</p>
        <div className="mt-6">
          <CTARow primaryLabel="Get a quote" primaryTo="/contact" secondaryTo="/savings-calculator" secondaryLabel="Estimate your savings" />
        </div>
      </section>

      <section className="bg-white border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">Serving {c.city} and {c.county}</h2>
          <p className="mt-4 max-w-3xl text-brand-charcoal/90">{c.localContext}</p>
          {c.neighbors.length > 0 && (
            <p className="mt-4 max-w-3xl text-brand-charcoal/90">
              We also work with employers in nearby {c.neighbors.join(", ")}.
            </p>
          )}
        </div>
      </section>

      <section className="bg-brand-sand/40 border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">What a {c.city} employer saves</h2>
          <p className="mt-4 max-w-3xl text-brand-charcoal/90">{s.taxNote}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-stone bg-white p-6">
              <div className="font-heading text-3xl text-brand-green">7.65%</div>
              <p className="mt-2 text-brand-charcoal/90">Employer FICA payroll tax avoided on every qualified pre-tax dollar.</p>
            </div>
            <div className="rounded-lg border border-brand-stone bg-white p-6">
              <div className="font-heading text-3xl text-brand-green">about {pct(employeeAvoided)}</div>
              <p className="mt-2 text-brand-charcoal/90">
                Combined tax a {c.city} employee avoids on a pre-tax dollar, illustrative for a single filer earning
                roughly ${REP_GROSS.toLocaleString()}.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-brand-charcoal/70">
            Estimates assume single filing status with zero dependents. Run your real roster with the{" "}
            <Link className="text-brand-green hover:underline" to="/savings-calculator">savings calculator</Link>, or see the full{" "}
            <Link className="text-brand-green hover:underline" to={`/locations/${s.slug}`}>{s.name} overview</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">Common questions</h2>
          <div className="mt-6 space-y-6 max-w-3xl">
            {c.faq.map((qa) => (
              <div key={qa.question}>
                <h3 className="font-heading text-lg text-brand-navy">{qa.question}</h3>
                <p className="mt-2 text-brand-charcoal/90">{qa.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTARow primaryLabel="Get a tailored quote" primaryTo="/contact" secondaryTo="/services/employers" secondaryLabel="See how it works" />
          </div>
        </div>
      </section>
    </>
  );
}
