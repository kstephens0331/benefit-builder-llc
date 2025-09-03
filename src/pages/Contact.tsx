import { Helmet } from "react-helmet-async";
import CTARow from "../components/CTARow";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Benefit Builder LLC</title>
        <meta
          name="description"
          content="Start a conversation about aligning benefits with growth. Quick form, fast follow-up."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[320px]" aria-label="Contact hero">
        <img
          src="/images/benefit-builder-contact.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
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
          <aside className="md:col-span-2 space-y-5">
            <div>
              <h2 className="font-heading text-2xl text-brand-navy">Benefit Builder LLC</h2>
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

            <div className="pt-2">
              <CTARow primaryLabel="Call now" primaryTo="tel:+19362326881" secondaryTo="mailto:jamietrauth.bb@gmail.com" secondaryLabel="Email us" />
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
          </aside>

          {/* Right: form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-navy" aria-label="Final call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl text-white">Ready to align benefits with growth?</h2>
            <p className="text-white/85 mt-1">Send the form and we’ll follow up shortly.</p>
          </div>
          <div>
            <CTARow primaryLabel="Contact Us" primaryTo="#top" />
          </div>
        </div>
      </section>
    </>
  );
}
