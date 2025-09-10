import { Helmet } from "react-helmet-async";
import CTARow from "../components/CTARow";
import ContactForm from "../components/ContactForm";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Benefit Builder, LLC</title>
        <meta
          name="description"
          content="Start a conversation about aligning benefits with growth. Quick form, fast follow-up."
        />
      </Helmet>

      {/* HERO (full-bleed; decorative) — taller vh and adjusted object position to feel 'zoomed out' */}
      <section
        className="relative overflow-hidden border-b border-brand-stone/60 min-h-[60vh] md:min-h-[68vh]"
        aria-label="Contact hero"
      >
        <img
          src="/images/benefit-builder-contact.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          style={{ objectPosition: "center 35%" }} /* shows more of the image vs. 'object-top' */
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h1 className="font-heading text-white drop-shadow text-4xl md:text-5xl">Get in touch</h1>
          <p className="mt-3 max-w-3xl text-white/90 text-lg">
            Tell us a bit about your goals. We’ll follow up quickly.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-white" aria-label="Contact details and form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-5">
          {/* Left: company details */}
          <aside className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-heading text-2xl text-brand-navy">Benefit Builder, LLC</h2>
              <p className="text-brand-charcoal/85 mt-2">
                14132 FM 1097 Rd West, Suite #300, PMB #164<br />
                Willis, TX 77318
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-brand-navy">Primary Contact</h3>
              <p className="text-brand-charcoal/85 mt-2">
                Jamie Trauth<br />
                <a className="underline decoration-brand-stone hover:text-brand-navy" href="mailto:jamietrauth.bb@gmail.com">
                  jamietrauth.bb@gmail.com
                </a><br />
                <a className="underline decoration-brand-stone hover:text-brand-navy" href="tel:+19362326881">
                  (936) 232-6881
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-brand-stone bg-brand-sand/40 p-4">
              <p className="text-sm text-brand-charcoal/90">
                Prefer a quick overview first?{" "}
                <a href="/services#video" className="font-semibold text-brand-navy underline decoration-brand-stone">
                  Watch our 90–120s explainer
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-brand-navy">Why reach out?</h3>
              <ul className="mt-2 space-y-2 text-brand-charcoal/90 list-disc pl-5">
                <li>Get a quick read on your current benefits story.</li>
                <li>Explore options that fill real coverage gaps.</li>
                <li>Plan a smooth, guided enrollment.</li>
              </ul>
            </div>
          </aside>

          {/* Right: form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-brand-sand/30 border-y border-brand-stone" aria-label="What happens next">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-2xl text-brand-navy">What happens after you send the form</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Step icon={CheckIcon} title="Quick reply">
              We confirm we received your note and propose a time to talk.
            </Step>
            <Step icon={CalendarIcon} title="Short discovery call">
              A 20–30 minute call to understand goals, workforce, and current plan.
            </Step>
            <Step icon={CompassIcon} title="Next steps">
              We outline options, timeline, and a clear path to enrollment.
            </Step>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-b border-brand-stone" aria-label="Common questions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-2xl text-brand-navy">Common questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <AccordionItem title="Will this be complicated for HR?">
              No — we set up communications and enrollment so your team has a simple checklist. We handle the heavy lift.
            </AccordionItem>
            <AccordionItem title="Can this work with our current benefits?">
              Yes. We complement what you already offer and recommend changes only where they help.
            </AccordionItem>
            <AccordionItem title="How do we measure success?">
              We define success up front (clarity, participation, total cost) and review after enrollment and at renewal.
            </AccordionItem>
            <AccordionItem title="How fast can we get started?">
              Quickly. After a brief discovery call we can map next steps and timing aligned to your calendar.
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* PHOTO + TRUST NOTE */}
      <section className="bg-white" aria-label="Team photo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <h3 className="font-heading text-2xl text-brand-navy">We keep it practical</h3>
            <p className="mt-4 text-brand-charcoal/90">
              Clear guidance for employees. Predictable outcomes for leadership. And a rollout HR can rely on.
            </p>
            <div className="mt-6">
              <CTARow
                primaryLabel="Schedule a quick call"
                primaryTo="tel:+19362326881"
                secondaryTo="/services"
                secondaryLabel="See services"
                align="left"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <ResponsiveImage src="/images/home-lower-1.jpg" alt="Team collaboration" />
          </div>
        </div>
      </section>

      {/* FINAL CTA — centered with two actions */}
      <section className="bg-brand-navy" aria-label="Final call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center gap-6">
          <div>
            <h2 className="font-heading text-2xl text-white">Ready to align benefits with growth?</h2>
            <p className="text-white/85 mt-1">Send the form and we’ll follow up shortly.</p>
          </div>
          <CTARow
            align="center"
            primaryLabel="Contact Us"
            primaryTo="#top"
            secondaryLabel="Call (936) 232-6881"
            secondaryTo="tel:+19362326881"
          />
        </div>
      </section>
    </>
  );
}

/** Local components */
function Step({
  icon: Icon,
  title,
  children,
}: {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-stone bg-white p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-brand-green" aria-hidden="true" />
        <div className="font-semibold text-brand-charcoal">{title}</div>
      </div>
      <p className="mt-2 text-brand-charcoal/90">{children}</p>
    </div>
  );
}

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

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.3 7.71l-1.41-1.41z"/></svg>
  );
}
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 2h2v2h6V2h2v2h3a1 1 0 011 1v15a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 01-1-1h3V2zm13 8H4v10h16V10zM4 8h16V6H4v2z"/></svg>
  );
}
function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.536 6.464l-1.768 4.419-4.419 1.768 1.768-4.419 4.419-1.768z"/></svg>
  );
}
