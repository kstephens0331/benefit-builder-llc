import Seo from "../lib/seo/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import CTARow from "../components/CTARow";
import { findRoute } from "../lib/seo/routes";
import { service, webPage, breadcrumbList } from "../lib/seo/jsonld";

export default function Compliance() {
  const r = findRoute("/compliance")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Compliance", href: "/compliance" },
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
          service({
            name: "Section 125 Compliance Bundle",
            description: r.description,
            url: `https://benefitbuilderllc.com${r.path}`,
            serviceType: "Section 125 plan compliance services",
          }),
          webPage({ name: r.title, description: r.description, url: `https://benefitbuilderllc.com${r.path}`, breadcrumb }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[380px]" aria-label="Compliance hero">
        <img
          src="/images/home-lower-2.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-heading text-white drop-shadow text-4xl md:text-5xl">
            Section 125 Compliance, Bundled Free
          </h1>
          <p className="mt-4 max-w-3xl text-white/90 text-lg">
            Most administrators charge separately for plan documents, annual testing, and audit support.
            We do not. Every component the IRS expects you to have is included in your monthly fee.
          </p>
          <div className="mt-6">
            <CTARow primaryLabel="Get a quote" primaryTo="/contact" secondaryTo="/services/employers" secondaryLabel="Why bundling matters" />
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">What is included</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Item
              title="Section 125 Plan Document"
              body="The legally required written plan document, drafted to match your benefits and pay frequency. Updated whenever rules or your plan change."
            />
            <Item
              title="Adoption Agreement"
              body="Board-ready adoption agreement formalizing the cafeteria plan and naming the plan administrator."
            />
            <Item
              title="Salary Reduction Agreements"
              body="Per-employee salary reduction forms collected at enrollment and stored in the document vault. Signed electronically, archived for audit."
            />
            <Item
              title="Annual Nondiscrimination Testing"
              body="Eligibility, contributions and benefits, and key employee concentration tests run automatically. Audit-ready PDFs delivered every plan year."
            />
            <Item
              title="Summary Plan Description"
              body="Plain-language SPD distributed to employees so they know what they are signing up for and how to use the plan."
            />
            <Item
              title="Audit Trail"
              body="Every enrollment, change, and election captured with timestamp, IP, and user agent. Available on demand for IRS or DOL inquiries."
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-sand/40 border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">How we run NDT</h2>
          <p className="mt-4 max-w-3xl text-brand-charcoal/90">
            We run nondiscrimination testing stricter than the IRS minimum so your plan stays defensible
            in any year-end review. Eligibility uses the broadest reasonable definition. Contributions and
            benefits testing applies to the whole plan, not just the deductions side. Key employee
            concentration is checked against the 25% threshold with a real-world margin of safety.
          </p>
          <p className="mt-3 max-w-3xl text-brand-charcoal/90">
            If a test trends toward failure, we flag it during the year, not at the audit. You get time
            to add eligibility, expand participation, or restructure before the plan year closes.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">What you still own</h2>
          <p className="mt-4 max-w-3xl text-brand-charcoal/90">
            Form 5500 and salary reduction acknowledgements that originate inside the insurance
            carrier or payroll vendor remain the employer's responsibility. We tell you exactly what
            stays on your side and provide the data you need to file it.
          </p>
        </div>
      </section>

      <section className="bg-brand-navy" aria-label="Final call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-2xl text-white">Want every compliance piece handled?</h4>
            <p className="text-white/85 mt-1">It is all bundled into your monthly fee. We will show you exactly what is included.</p>
          </div>
          <div><CTARow primaryLabel="Get a quote" primaryTo="/contact" /></div>
        </div>
      </section>
    </>
  );
}

function Item({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-brand-stone bg-white p-6">
      <h3 className="font-heading text-xl text-brand-navy">{title}</h3>
      <p className="mt-3 text-brand-charcoal/90">{body}</p>
    </div>
  );
}
