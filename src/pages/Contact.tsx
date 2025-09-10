import { Helmet } from "react-helmet-async";
import CTARow from "../components/CTARow";
import ContactForm from "../components/ContactForm";

// Local inline icons
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 3v4M17 3v4M3 9h18M5 12h14M5 16h8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}
function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.5 6.5-2.2 5.3a2 2 0 0 1-1 1l-5.3 2.2 2.2-5.3a2 2 0 0 1 1-1l5.3-2.2Z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
}

function Step({ icon: Icon, title, children }: { icon: (p: React.SVGProps<SVGSVGElement>) => JSX.Element; title: string; children: React.ReactNode; }) {
  return (
    <div className="rounded-2xl border border-brand-stone bg-white p-5">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-heading text-lg text-brand-navy">{title}</h3>
          <p className="mt-1 text-brand-charcoal/90">{children}</p>
        </div>
      </div>
    </div>
  );
}

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

      {/* HERO (full-bleed; decorative) */}
      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[320px]" aria-label="Contact hero">
        <img
          src="/images/benefit-builder-contact.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-heading text-white drop-shadow text-4xl">Get in touch</h1>
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
      <section className="bg-white border-b border-brand-stone" aria-label="Contact FAQ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-2xl text-brand-navy">Frequently asked</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-stone p-5">
              <h3 className="font-heading text-lg text-brand-navy">How fast will you respond?</h3>
              <p className="mt-2 text-brand-charcoal/90">We typically reply the same business day, often within a few hours.</p>
            </div>
            <div className="rounded-2xl border border-brand-stone p-5">
              <h3 className="font-heading text-lg text-brand-navy">Do you work with very small teams?</h3>
              <p className="mt-2 text-brand-charcoal/90">Yes. Whether you have 5 employees or 500, we tailor recommendations to the reality of your team and budget.</p>
            </div>
            <div className="rounded-2xl border border-brand-stone p-5">
              <h3 className="font-heading text-lg text-brand-navy">What if I don’t know where to start?</h3>
              <p className="mt-2 text-brand-charcoal/90">Start with the form — share a sentence or two about your goals. We’ll guide you from there.</p>
            </div>
            <div className="rounded-2xl border border-brand-stone p-5">
              <h3 className="font-heading text-lg text-brand-navy">Is there any obligation?</h3>
              <p className="mt-2 text-brand-charcoal/90">No. Our first conversation is simply to understand your situation and explore fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ROW */}
      <CTARow primaryLabel="Start the conversation" />
    </>
  );
}
