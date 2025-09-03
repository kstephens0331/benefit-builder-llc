import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import CTARow from "../components/CTARow";
import ResponsiveImage from "../components/ResponsiveImage";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Benefit Builder LLC</title>
        <meta
          name="description"
          content="We design benefits around people and measurable outcomes—clear choices, guided education, and dependable support for employers and employees."
        />
        {/* Organization JSON-LD for richer search results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Benefit Builder LLC",
            "url": "https://benefitbuilder.com",
            "logo": "https://benefitbuilder.com/images/benefit-builder-logo.jpg",
            "contactPoint": [{
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "jamietrauth.bb@gmail.com",
              "telephone": "+1-936-232-6881"
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "14132 FM 1097 Rd West, Suite #300, PMB #164",
              "addressLocality": "Willis",
              "addressRegion": "TX",
              "postalCode": "77318",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[360px]" aria-label="About hero">
        <img
          src="/images/benefit-builder-about.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-heading text-white drop-shadow text-4xl">About Benefit Builder</h1>
          <p className="mt-3 max-w-3xl text-white/90 text-lg">
            We design benefits around people and measurable outcomes.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white border-b border-brand-stone" aria-label="Who we are">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">Who We Are</p>
            <h2 className="font-heading text-3xl text-brand-navy mt-2">Benefit strategy built around people and outcomes</h2>
            <div className="prose prose-neutral max-w-none mt-5 text-brand-charcoal/90">
              <p>
                Benefit Builder helps employers strengthen benefits without unnecessary complexity.
                We combine clear strategy, simple communication, and dependable support so teams
                feel cared for and leaders see measurable impact.
              </p>
              <p>
                Our focus: help employees understand their choices and help organizations achieve
                predictable, sustainable results—year after year.
              </p>
            </div>
            <div className="mt-6">
              <CTARow primaryLabel="Explore services" primaryTo="/services" secondaryTo="/contact" secondaryLabel="Talk to us" />
            </div>
          </div>
          <div>
            {/* Drop your AVIF/WEBP/JPG trio at /public/images/about-who-we-are-1.* */}
            <ResponsiveImage
  base="/images/benefit-builder-about-1.png"
  alt="Team collaborating in a bright office"
/>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="bg-brand-sand/40 border-b border-brand-stone" aria-label="What sets us apart">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">What Sets Us Apart</p>
          <h3 className="font-heading text-3xl text-brand-navy mt-2">Clarity, participation, and sustained value</h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-heading text-xl text-brand-navy">People-first communication</div>
              <p className="mt-2 text-brand-charcoal/90">
                We translate plans into everyday language and deliver guidance when employees need it most.
              </p>
            </div>
            <div>
              <div className="font-heading text-xl text-brand-navy">Adoption-focused design</div>
              <p className="mt-2 text-brand-charcoal/90">
                We tailor options employees will actually use—supporting confidence and participation.
              </p>
            </div>
            <div>
              <div className="font-heading text-xl text-brand-navy">Operational follow-through</div>
              <p className="mt-2 text-brand-charcoal/90">
                Enrollment, renewals, vendor reviews, and compliance check-ins—handled with care.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <CTARow primaryLabel="See our approach" primaryTo="/services#video" secondaryTo="/contact" secondaryLabel="Request a quick call" />
          </div>
        </div>
      </section>

      {/* HOW WE WORK WITH YOU */}
      <section className="bg-white border-b border-brand-stone" aria-label="How we work with you">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 items-start">
          <div className="order-2 md:order-1">
            <h3 className="font-heading text-3xl text-brand-navy">How we work with you</h3>
            <div className="mt-6 grid gap-4">
              <AccordionItem title="Discovery — align on goals and workforce">
                We start by understanding your organization: the plan you offer today, your goals, and the
                pressures your teams feel. This ensures every next step is grounded in your reality.
              </AccordionItem>
              <AccordionItem title="Design — coverage that fits how people enroll">
                We model options that balance coverage, participation, and cost, focusing on the benefits
                employees are most likely to use.
              </AccordionItem>
              <AccordionItem title="Enrollment — plain language and guided choice">
                Clear messaging and approachable education so employees can decide with confidence.
              </AccordionItem>
              <AccordionItem title="Support — renewals, vendor reviews, compliance">
                We stay engaged throughout the year to keep the experience simple and effective.
              </AccordionItem>
            </div>
            <div className="mt-8">
              <CTARow primaryLabel="Start the conversation" primaryTo="/contact" secondaryTo="/services" secondaryLabel="See services" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            {/* Drop your AVIF/WEBP/JPG trio at /public/images/about-process-1.* */}
            <ResponsiveImage
  base="/images/benefit-builder-about-2.png"
  alt="Guided enrollment and benefits review"
/>
          </div>
        </div>
      </section>

      {/* BLUE BAND — credibility / impact */}
      <section className="relative bg-brand-navy border-y border-brand-stone" aria-label="Impact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 sm:grid-cols-3 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-sand">Clearer Choices</div>
              <p className="mt-2 text-white/85">Employees understand coverage and enroll with confidence.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-sand">Predictable Outcomes</div>
              <p className="mt-2 text-white/85">Leaders gain visibility and control over results and costs.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-sand">Lighter Lift</div>
              <p className="mt-2 text-white/85">HR gets streamlined rollout and steady support, not extra work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / ETHOS */}
      <section className="bg-brand-sand/30 border-y border-brand-stone" aria-label="Team and ethos">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">Our Ethos</p>
            <h4 className="font-heading text-3xl text-brand-navy mt-2">Practical, transparent, accountable</h4>
            <p className="mt-4 text-brand-charcoal/90">
              We believe benefits should reduce friction—not add to it. That means practical guidance,
              transparent options, and accountability you can feel at each step.
            </p>
            <div className="mt-6">
              <CTARow primaryLabel="Meet us" primaryTo="/contact" secondaryTo="/services#video" secondaryLabel="Watch the overview" />
            </div>
          </div>
          <div className="md:col-span-2">
            {/* Drop your AVIF/WEBP/JPG trio at /public/images/about-ethos-1.* */}
            <ResponsiveImage base="/images/about-ethos-1" alt="Leaders collaborating in a modern space" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-navy" aria-label="Final call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h5 className="font-heading text-2xl text-white">Ready to align benefits with growth?</h5>
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

/** Local accessible accordion */
function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-brand-stone bg-white open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
        <span className="font-semibold text-brand-charcoal">{title}</span>
        <svg className="h-5 w-5 text-brand-green transition-transform group-open:rotate-45" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9 3h2v14H9z" />
          <path d="M3 9h14v2H3z" />
        </svg>
      </summary>
      <div className="px-5 pb-5 text-brand-charcoal/90">{children}</div>
    </details>
  );
}
