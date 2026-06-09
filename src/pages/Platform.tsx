import Seo from "../lib/seo/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import CTARow from "../components/CTARow";
import { findRoute } from "../lib/seo/routes";
import { softwareApplication, webPage, breadcrumbList } from "../lib/seo/jsonld";

export default function Platform() {
  const r = findRoute("/platform")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/platform" },
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
          softwareApplication({
            name: "Benefit Builder Platform",
            description: r.description,
            url: `https://benefitbuilderllc.com${r.path}`,
            applicationCategory: "BusinessApplication",
          }),
          webPage({ name: r.title, description: r.description, url: `https://benefitbuilderllc.com${r.path}`, breadcrumb }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[380px]" aria-label="Platform hero">
        <img
          src="/images/home-lower-1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-heading text-white drop-shadow text-4xl md:text-5xl">
            The Benefits Administration Platform We Built
          </h1>
          <p className="mt-4 max-w-3xl text-white/90 text-lg">
            We do not resell another vendor. We built and run our own platform end to end.
            Roster sync, automated invoicing, QuickBooks bookkeeping, nondiscrimination testing,
            e-signature, and audit trail are all included with your monthly fee.
          </p>
          <div className="mt-6">
            <CTARow primaryLabel="Talk to an expert" primaryTo="/contact" secondaryTo="/services" secondaryLabel="See services" />
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-brand-stone" aria-label="Platform features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Roster sync"
            body="Upload census files in any format. Our AI parser maps columns automatically and validates filing status, dependents, gross pay, and pay frequency before changes land."
          />
          <Feature
            title="Automated invoicing"
            body="Monthly invoices generate from active roster and elections. Branded PDFs, customer-portal access, and one-click email delivery to AP contacts."
          />
          <Feature
            title="QuickBooks Online"
            body="Bidirectional sync of customers, invoices, and payments every 30 minutes. AR/AP stay reconciled across both systems automatically."
          />
          <Feature
            title="Nondiscrimination testing"
            body="Eligibility, contributions and benefits, and key employee concentration tests run on demand. Results delivered as audit-ready PDFs."
          />
          <Feature
            title="E-signature workflow"
            body="Adoption agreement, salary reduction, and life event change forms signed electronically with full audit trail and ESIGN/UETA compliance."
          />
          <Feature
            title="Document vault"
            body="Per-company storage of plan documents, signed agreements, and prior-period reports. Role-gated access for admin, rep, and client users."
          />
          <Feature
            title="Compliance dashboard"
            body="One screen shows missing plan documents, NDT status, late invoices, and roster verification timestamps for every client."
          />
          <Feature
            title="Audit log"
            body="Every action is recorded: logins, SSN reveals, data changes, financial entries. Full forensic timeline available to administrators."
          />
          <Feature
            title="Reports and exports"
            body="AR aging, billing summary, employee roster, expenses, payments, and month-end closings exportable to Excel, PDF, and CSV."
          />
        </div>
      </section>

      <section className="bg-brand-sand/40 border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">Why building it ourselves matters</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3 text-brand-charcoal/90">
            <li>
              <strong className="text-brand-navy">No third-party fees.</strong> We do not pay another administrator, so you do not either. The 7% combined fee covers everything.
            </li>
            <li>
              <strong className="text-brand-navy">Faster fixes.</strong> When something breaks or a regulation changes, we ship the patch ourselves. No support ticket lottery.
            </li>
            <li>
              <strong className="text-brand-navy">Tighter security.</strong> No outside vendor has access to your roster, SSNs, or payroll data. Period.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-brand-navy" aria-label="Final call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-2xl text-white">Ready to see the platform in action?</h4>
            <p className="text-white/85 mt-1">We will walk you through it and tailor everything to your roster.</p>
          </div>
          <div><CTARow primaryLabel="Talk to an expert" primaryTo="/contact" /></div>
        </div>
      </section>
    </>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-brand-stone bg-white p-6">
      <h3 className="font-heading text-xl text-brand-navy">{title}</h3>
      <p className="mt-3 text-brand-charcoal/90">{body}</p>
    </div>
  );
}
