import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import CTARow from "../components/CTARow";
import VideoBlock from "../components/VideoBlock";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Benefit Builder LLC</title>
        <meta
          name="description"
          content="Simple, people-first benefits that complement your current plan. Clear choices, guided enrollment, and year-round support."
        />
      </Helmet>

      {/* HERO — dedicated image */}
      <section
        className="relative overflow-hidden border-b border-brand-stone/60 min-h-[380px]"
        aria-label="Services hero"
      >
        <img
          src="/images/benefit-builder-services.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-heading text-white drop-shadow text-4xl">Services</h1>
          <p className="mt-3 max-w-3xl text-white/90 text-lg">
            Benefit programs employees understand—and businesses can sustain.
          </p>
          <div className="mt-6">
            <CTARow
              primaryLabel="Contact Us"
              primaryTo="/contact"
              secondaryTo="#video"
              secondaryLabel="Watch Overview"
            />
          </div>
        </div>
      </section>

      {/* VALUE PROP — image + copy (alt shade) */}
      <section
        className="bg-brand-sand/40 border-b border-brand-stone"
        aria-label="Why this approach works"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-brand-stone bg-white">
              <img
                src="/images/benefit-builder-services-2.png"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">
              Why this works
            </p>
            <h2 className="font-heading text-3xl text-brand-navy mt-2">
              Clarity for people, confidence for leaders
            </h2>
            <div className="prose prose-neutral max-w-none mt-5">
              <p className="text-brand-charcoal/90">
                We complement your existing plan with options that cover real-world gaps—paired
                with clear communication and guided enrollment. Employees gain confidence; HR and
                leadership gain predictability.
              </p>
              <ul>
                <li>Plain-language guidance and simple choices.</li>
                <li>Participation focused—design for how people actually enroll.</li>
                <li>Ongoing support for renewals, vendors, and compliance.</li>
              </ul>
            </div>
            <div className="mt-6">
              <CTARow
                primaryLabel="Discuss your goals"
                primaryTo="/contact"
                secondaryTo="/about"
                secondaryLabel="About our approach"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPLAINER VIDEO — 1/4 width + supporting copy */}
      <Section id="video" kicker="Explainer" title="Benefits, explained in 90–120 seconds" bg="white">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          <VideoBlock
            size="quarter"
            caption="A concise overview of who we are, how we work, and what to expect."
          />
          <div className="mt-6 md:mt-1 md:flex-1">
            <p className="text-brand-charcoal/90">
              Watch this quick overview, then explore the specifics below. Our process stays simple:
              discovery, tailored design, guided enrollment, and support all year.
            </p>
            <div className="mt-6">
              <CTARow
                align="left"
                primaryLabel="Schedule a conversation"
                primaryTo="/contact"
                secondaryTo="/contact"
                secondaryLabel="Request a callback"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* BLUE STATISTICS BAND — with subtle overlay */}
      <section className="relative bg-brand-navy border-y border-brand-stone overflow-hidden" aria-label="Key stats">
        <img
          src="/images/benefit-builder-services-3.png"
          alt=""
          className="absolute inset-0 w-full h-full object-top opacity-15 pointer-events-none"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-sand">85%</div>
              <p className="mt-2 text-white/85">of employees prefer simpler benefit choices.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-sand">3–5 hrs</div>
              <p className="mt-2 text-white/85">saved by HR per enrollment cycle with guided rollout.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-sand">70–80%</div>
              <p className="mt-2 text-white/85">participation is common when communications are clear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — text + photo */}
      <section className="bg-white border-b border-brand-stone" aria-label="How it works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">Process</p>
            <h3 className="font-heading text-3xl text-brand-navy mt-2">
              A straightforward path from discovery to support
            </h3>
            <ol className="mt-5 space-y-4 text-brand-charcoal/90">
              <li><strong>Discovery:</strong> align on goals, workforce profile, and plan pressures.</li>
              <li><strong>Design:</strong> model options balancing coverage, cost, and participation.</li>
              <li><strong>Enrollment:</strong> plain-language communications and guided sign-up.</li>
              <li><strong>Support:</strong> renewals, vendor reviews, and compliance check-ins.</li>
            </ol>
            <div className="mt-6">
              <CTARow
                primaryLabel="Start discovery"
                primaryTo="/contact"
                secondaryTo="#coverage"
                secondaryLabel="See coverage options"
              />
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden border border-brand-stone bg-white">
              {/* FIXED: services (not servces) */}
              <img
                src="/images/benefit-builder-services-3.png"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE OPTIONS */}
      <Section id="coverage" kicker="Coverage Options" title="Fill the gaps that matter most" bg="sand">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <p>
              We tailor a mix that complements your medical plan and reflects how your team actually uses benefits.
            </p>
            <ul className="mt-4">
              <li>Life insurance (term &amp; permanent)</li>
              <li>Accident coverage</li>
              <li>Critical illness</li>
              <li>Short-term disability</li>
              <li>Gap protection (high-deductible relief)</li>
              <li>Cancer support</li>
            </ul>
            <div className="mt-6">
              <CTARow
                primaryLabel="Discuss coverage mix"
                primaryTo="/contact"
                secondaryTo="/about"
                secondaryLabel="How we think about design"
              />
            </div>
          </div>

          {/* image block */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-stone bg-white">
            <img
              src="/images/benefit-builder-services-4.png"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* EMPLOYER BENEFITS */}
      <section className="bg-brand-sand/30 border-y border-brand-stone" aria-label="For employers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <h3 className="font-heading text-3xl text-brand-navy">For Employers</h3>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <ul className="text-brand-charcoal/90 space-y-2">
                <li>Clear message for recruiting and retention.</li>
                <li>Participation that reflects real employee needs.</li>
                <li>Predictable outcomes and visibility for leadership.</li>
              </ul>
              <ul className="text-brand-charcoal/90 space-y-2">
                <li>Streamlined rollout and scheduling for HR.</li>
                <li>Year-round support for renewals and vendor reviews.</li>
                <li>Compliance check-ins built into the process.</li>
              </ul>
            </div>
            <div className="mt-6">
              <CTARow
                primaryLabel="Get a quick analysis"
                primaryTo="/contact"
                secondaryTo="/contact"
                secondaryLabel="Request a callback"
              />
            </div>
          </div>

          {/* image block */}
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-brand-stone bg-white">
              {/* FIXED: benefit-builder (no extra s) */}
              <img
                src="/images/benefit-builder-services-5.png"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-navy" aria-label="Final call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-2xl text-white">Ready to align benefits with growth?</h4>
            <p className="text-white/85 mt-1">We’ll tailor everything to your goals and workforce.</p>
          </div>
          <div>
            <CTARow primaryLabel="Contact Us" primaryTo="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}
