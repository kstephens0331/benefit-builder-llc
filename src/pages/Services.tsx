import { Link } from "react-router-dom";
import Section from "../components/Section";
import CTARow from "../components/CTARow";
import VideoBlock from "../components/VideoBlock";
import ResponsiveImage from "../components/ResponsiveImage";
import Seo from "../lib/seo/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { findRoute } from "../lib/seo/routes";
import { service, itemList, webPage, breadcrumbList, financialService } from "../lib/seo/jsonld";

export default function Services() {
  const r = findRoute("/services")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  const breadcrumb = breadcrumbList(crumbs);

  return (
    <>
      <Seo
        title={r.title}
        description={r.description}
        path={r.path}
        image={r.ogImage}
        jsonLd={[
          itemList([
            { name: "For Employers", url: "/services/employers" },
            { name: "For Brokers", url: "/services/brokers" },
            { name: "Compliance", url: "/compliance" },
            { name: "Platform", url: "/platform" },
          ]),
          service({
            name: "Section 125 Cafeteria Plan Administration",
            description:
              "Pre-tax benefits administration for employers and brokers. Plan documents, NDT, payroll integration, and compliance bundled.",
            url: "https://benefitbuilderllc.com/services",
            serviceType: "Section 125 cafeteria plan administration",
          }),
          financialService(),
          webPage({ name: r.title, description: r.description, url: `https://benefitbuilderllc.com${r.path}`, breadcrumb }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[380px]" aria-label="Services hero">
        <img
          src="/images/benefit-builder-services.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-heading text-white drop-shadow text-4xl">Services</h1>
          <p className="mt-3 max-w-3xl text-white/90 text-lg">
            Section 125 cafeteria plan administration, broker partnership, and compliance, built for employers across Texas and the United States.
          </p>
          <div className="mt-6">
            <CTARow primaryLabel="Contact Us" primaryTo="/contact" secondaryTo="#video" secondaryLabel="Watch Overview" />
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-brand-stone" aria-label="Choose your path">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-sm uppercase tracking-wide text-brand-green font-semibold">Where to start</p>
          <h2 className="font-heading text-3xl text-brand-navy mt-2">Two ways to work with us</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Link
              to="/services/employers"
              className="group rounded-lg border border-brand-stone bg-brand-sand/30 p-8 transition hover:border-brand-green hover:bg-brand-sand/60"
            >
              <h3 className="font-heading text-2xl text-brand-navy">For Employers</h3>
              <p className="mt-3 text-brand-charcoal/90">
                Cut FICA payroll tax up to 7.65%, raise employee take-home pay, and keep your plan IRS-compliant. Bundled NDT, plan documents, and platform included.
              </p>
              <span className="mt-4 inline-block font-semibold text-brand-green group-hover:underline">Learn more →</span>
            </Link>
            <Link
              to="/services/brokers"
              className="group rounded-lg border border-brand-stone bg-brand-sand/30 p-8 transition hover:border-brand-green hover:bg-brand-sand/60"
            >
              <h3 className="font-heading text-2xl text-brand-navy">For Brokers</h3>
              <p className="mt-3 text-brand-charcoal/90">
                Refer or co-broker pre-tax benefits with us. Compliance handled, you keep your commissions, employers happier. Texas brokers welcome.
              </p>
              <span className="mt-4 inline-block font-semibold text-brand-green group-hover:underline">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-sand/40 border-b border-brand-stone" aria-label="Why this approach works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-2">
            <ResponsiveImage src="/images/benefit-builder-services-2.png" alt="Advisors reviewing benefits options" />
          </div>
          <div className="md:col-span-3">
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">Why this works</p>
            <h2 className="font-heading text-3xl text-brand-navy mt-2">Clarity for people, confidence for leaders</h2>
            <div className="prose prose-neutral max-w-none mt-5">
              <p className="text-brand-charcoal/90">
                We complement your existing plan with options that cover real-world gaps, paired with clear communication and guided enrollment.
              </p>
              <ul>
                <li>Plain-language guidance and simple choices.</li>
                <li>Participation focused: design for how people actually enroll.</li>
                <li>Ongoing support for renewals, vendors, and compliance.</li>
              </ul>
            </div>
            <div className="mt-6">
              <CTARow primaryLabel="Discuss your goals" primaryTo="/contact" secondaryTo="/about" secondaryLabel="About our approach" />
            </div>
          </div>
        </div>
      </section>

      <Section id="video" kicker="Explainer" title="Benefits, explained in 90 to 120 seconds" bg="white">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          <VideoBlock size="quarter" caption="A concise overview of who we are, how we work, and what to expect." />
          <div className="mt-6 md:mt-1 md:flex-1">
            <p className="text-brand-charcoal/90">
              Watch this quick overview, then explore the specifics below. Our process stays simple: discovery, tailored design, guided enrollment, and support all year.
            </p>
            <div className="mt-6">
              <CTARow align="left" primaryLabel="Schedule a conversation" primaryTo="/contact" secondaryTo="/contact" secondaryLabel="Request a callback" />
            </div>
          </div>
        </div>
      </Section>

      <section className="relative bg-brand-navy border-y border-brand-stone overflow-hidden" aria-label="Key stats">
        <img
          src="/images/benefit-builder-services-3.png"
          alt=""
          className="absolute inset-0 w-full h-full object-top opacity-15 pointer-events-none"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <div><div className="text-4xl font-bold text-brand-sand">85%</div><p className="mt-2 text-white/85">of employees prefer simpler benefit choices.</p></div>
            <div><div className="text-4xl font-bold text-brand-sand">3-5 hrs</div><p className="mt-2 text-white/85">saved by HR per enrollment cycle with guided rollout.</p></div>
            <div><div className="text-4xl font-bold text-brand-sand">70-80%</div><p className="mt-2 text-white/85">participation is common when communications are clear.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-brand-stone" aria-label="How it works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">Process</p>
            <h3 className="font-heading text-3xl text-brand-navy mt-2">A straightforward path from discovery to support</h3>
            <ol className="mt-5 space-y-4 text-brand-charcoal/90">
              <li><strong>Discovery:</strong> align on goals, workforce profile, and plan pressures.</li>
              <li><strong>Design:</strong> model options balancing coverage, cost, and participation.</li>
              <li><strong>Enrollment:</strong> plain-language communications and guided sign-up.</li>
              <li><strong>Support:</strong> renewals, vendor reviews, and compliance check-ins.</li>
            </ol>
            <div className="mt-6">
              <CTARow primaryLabel="Start discovery" primaryTo="/contact" secondaryTo="#coverage" secondaryLabel="See coverage options" />
            </div>
          </div>
          <div>
            <ResponsiveImage src="/images/benefit-builder-services-3.png" alt="Team reviewing a benefits rollout plan" />
          </div>
        </div>
      </section>

      <Section id="coverage" kicker="Coverage Options" title="Fill the gaps that matter most" bg="sand">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <p>We tailor a mix that complements your medical plan and reflects how your team actually uses benefits.</p>
            <ul className="mt-4">
              <li>Life insurance (term &amp; permanent)</li>
              <li>Accident coverage</li>
              <li>Critical illness</li>
              <li>Short-term disability</li>
              <li>Gap protection (high-deductible relief)</li>
              <li>Cancer support</li>
            </ul>
            <div className="mt-6">
              <CTARow primaryLabel="Discuss coverage mix" primaryTo="/contact" secondaryTo="/about" secondaryLabel="How we think about design" />
            </div>
          </div>
          <ResponsiveImage src="/images/benefit-builder-services-4.png" alt="Coverage options illustration" />
        </div>
      </Section>

      <section className="bg-brand-navy" aria-label="Final call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-2xl text-white">Ready to align benefits with growth?</h4>
            <p className="text-white/85 mt-1">We will tailor everything to your goals and workforce.</p>
          </div>
          <div><CTARow primaryLabel="Contact Us" primaryTo="/contact" /></div>
        </div>
      </section>
    </>
  );
}
