import { useParams, Link } from "react-router-dom";
import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTARow from "../../components/CTARow";
import { service, webPage, breadcrumbList, faqPage } from "../../lib/seo/jsonld";
import { getState, citiesInState, stateTitle, heroImageFor, heroAltFor, type StateLoc } from "../../lib/locations/locations";
import { federalMarginalRate, stateMarginalRate, FICA_TOTAL } from "../../lib/tax/savings2026";

// Representative single-filer wage used only to pick illustrative marginal rates.
// All rates shown are public tax facts; the plan's own model is not exposed.
const REP_GROSS = 48000;

function pct(n: number): string {
  return `${(n * 100).toFixed(n * 100 >= 10 ? 1 : 2)}%`;
}

function stateFaq(s: StateLoc, employeeAvoided: number) {
  return [
    {
      question: `How does a Section 125 plan save money for ${s.name} employers?`,
      answer: `When an employee in ${s.name} pays for a qualified benefit pre-tax, that amount is removed from the wages used to calculate tax. ${s.taxNote} The employer saves its 7.65% FICA share on those same dollars.`,
    },
    {
      question: `Who handles the compliance for a ${s.name} Section 125 plan?`,
      answer: `Benefit Builder does. The plan document, adoption agreement, salary reduction agreements, annual nondiscrimination testing, and recordkeeping are all included in one monthly fee. A ${s.name} business does not take on the administration.`,
    },
    {
      question: `What kinds of ${s.name} employers use Benefit Builder?`,
      answer: `We work with ${s.verticals} across ${s.name}. Any employer that offers benefits and runs payroll can usually benefit from a pre-tax plan.`,
    },
  ];
}

export default function StatePage() {
  const { state } = useParams();
  const s = getState(state || "");
  if (!s) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl text-brand-navy">Location not found</h1>
        <p className="mt-4"><Link className="text-brand-green" to="/locations">See all service areas</Link></p>
      </section>
    );
  }

  const path = `/locations/${s.slug}`;
  const url = `https://benefitbuilderllc.com${path}`;
  const fed = federalMarginalRate(REP_GROSS);
  const st = stateMarginalRate(s.code, REP_GROSS);
  const employeeAvoided = FICA_TOTAL + fed + st;
  const faq = stateFaq(s, employeeAvoided);
  const cities = citiesInState(s.slug);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
    { name: s.name, href: path },
  ];
  const breadcrumb = breadcrumbList(crumbs);

  return (
    <>
      <Seo
        title={stateTitle(s)}
        description={s.metaDescription}
        path={path}
        image={`/og/og-loc-${s.slug}.png`}
        jsonLd={[
          service({
            name: `Section 125 Administration in ${s.name}`,
            description: s.metaDescription,
            url,
            serviceType: "Section 125 cafeteria plan administration",
          }),
          webPage({ name: stateTitle(s), description: s.metaDescription, url, breadcrumb }),
          faqPage(faq),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[420px] flex items-center">
        <img
          src={heroImageFor(s.slug)}
          alt={heroAltFor(s.slug)}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/35" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <p className="text-sm uppercase tracking-wide text-white/80 font-semibold">Service Area</p>
          <h1 className="font-heading text-4xl md:text-5xl text-white drop-shadow mt-2">
            Section 125 Pre-Tax Benefits in {s.name}
          </h1>
          <p className="mt-4 max-w-3xl text-white/90 text-lg">{s.intro}</p>
          <div className="mt-6">
            <CTARow primaryLabel="Get a quote" primaryTo="/contact" secondaryTo="/savings-calculator" secondaryLabel="Estimate your savings" />
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">What the savings look like in {s.name}</h2>
          <p className="mt-4 max-w-3xl text-brand-charcoal/90">{s.taxNote}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-stone bg-brand-sand/40 p-6">
              <div className="font-heading text-3xl text-brand-green">7.65%</div>
              <p className="mt-2 text-brand-charcoal/90">
                Employer FICA payroll tax avoided on every qualified pre-tax dollar, in {s.name} and everywhere.
              </p>
            </div>
            <div className="rounded-lg border border-brand-stone bg-brand-sand/40 p-6">
              <div className="font-heading text-3xl text-brand-green">about {pct(employeeAvoided)}</div>
              <p className="mt-2 text-brand-charcoal/90">
                Combined tax a {s.name} employee avoids on a pre-tax dollar, illustrative for a single filer earning
                roughly ${REP_GROSS.toLocaleString()} ({pct(FICA_TOTAL)} FICA{fed > 0 ? ` + ${pct(fed)} federal` : ""}{st > 0 ? ` + ${pct(st)} ${s.name} state` : ""}).
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-brand-charcoal/70">
            Estimates assume single filing status with zero dependents. Run your real roster with the{" "}
            <Link className="text-brand-green hover:underline" to="/savings-calculator">savings calculator</Link>.
          </p>
        </div>
      </section>

      <section className="bg-brand-sand/40 border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">Communities we serve in {s.name}</h2>
          <p className="mt-3 max-w-3xl text-brand-charcoal/90">
            Benefit Builder administers plans for {s.verticals} across {s.name}, including:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {s.communities.map((town) => {
              const city = cities.find((c) => c.city === town);
              return (
                <li key={town}>
                  {city ? (
                    <Link
                      to={`/locations/${s.slug}/${city.slug}`}
                      className="inline-block rounded-full border border-brand-green/40 bg-white px-3 py-1 text-sm text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                    >
                      {town}
                    </Link>
                  ) : (
                    <span className="inline-block rounded-full border border-brand-stone bg-white px-3 py-1 text-sm text-brand-charcoal/80">
                      {town}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">Common questions</h2>
          <div className="mt-6 space-y-6 max-w-3xl">
            {faq.map((qa) => (
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
