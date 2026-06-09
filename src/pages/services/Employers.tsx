import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTARow from "../../components/CTARow";
import { findRoute } from "../../lib/seo/routes";
import { service, webPage, breadcrumbList } from "../../lib/seo/jsonld";

export default function Employers() {
  const r = findRoute("/services/employers")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "For Employers", href: "/services/employers" },
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
            name: "Pre-Tax Benefits Administration for Employers",
            description: r.description,
            url: `https://benefitbuilderllc.com${r.path}`,
            serviceType: "Section 125 cafeteria plan administration",
          }),
          webPage({ name: r.title, description: r.description, url: `https://benefitbuilderllc.com${r.path}`, breadcrumb }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm uppercase tracking-wide text-brand-green font-semibold">For Employers</p>
        <h1 className="font-heading text-4xl md:text-5xl text-brand-navy mt-2">
          Pre-Tax Benefits That Pay for Themselves
        </h1>
        <p className="mt-4 max-w-3xl text-brand-charcoal/90 text-lg">
          A Section 125 cafeteria plan lets your employees pay for qualified benefits with pre-tax dollars.
          That single change cuts the employer's FICA payroll tax by 7.65% on every dollar enrolled, raises
          employee take-home pay, and strengthens your benefits story for recruiting and retention.
        </p>
        <div className="mt-6">
          <CTARow primaryLabel="Get a quote" primaryTo="/contact" secondaryTo="/savings-calculator" secondaryLabel="Estimate your savings" />
        </div>
      </section>

      <section className="bg-white border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">What you get</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="FICA payroll savings" body="Employer FICA tax drops 7.65% on every dollar of pre-tax election. For most clients that pays our administration fee several times over." />
            <Card title="Higher employee take-home" body="Employees keep more of every paycheck because federal income tax and FICA do not apply to qualified pre-tax deductions." />
            <Card title="Bundled compliance" body="Plan document, adoption agreement, salary reduction forms, and annual nondiscrimination testing are included. Nothing extra to buy." />
            <Card title="Plain-language enrollment" body="Employees see clear comparisons of net pay before and after pre-tax elections. Higher participation, fewer questions, less HR friction." />
            <Card title="Payroll integration" body="We work with your existing payroll vendor. Roster sync, deduction files, and reconciliation happen on a schedule we manage." />
            <Card title="Real human support" body="Texas-based team. Quotes within one business day. Owners answer the phone, not a call center." />
          </div>
        </div>
      </section>

      <section className="bg-brand-sand/40 border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">How it works</h2>
          <ol className="mt-6 space-y-5 text-brand-charcoal/90">
            <Step n={1} title="Discovery call">
              We review your headcount, current benefits, and pay frequency. Thirty minutes is usually enough to scope a quote.
            </Step>
            <Step n={2} title="Plan design and quote">
              We draft a Section 125 plan structure tuned to your workforce and present a clear monthly fee. You see the savings before you commit.
            </Step>
            <Step n={3} title="Adoption and rollout">
              Adoption agreement signed, plan document delivered, and enrollment scheduled. We handle the employee education sessions.
            </Step>
            <Step n={4} title="Ongoing administration">
              Monthly invoicing, payroll deduction files, year-end nondiscrimination testing, and renewal reviews. You focus on running the business.
            </Step>
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">Pricing in plain English</h2>
          <p className="mt-4 max-w-3xl text-brand-charcoal/90">
            We charge a combined 7% of pre-tax payroll deductions (3% employee, 4% employer in our most
            common arrangement). That fee covers everything: plan document, NDT, e-signature, support,
            and the platform. There are no setup fees, no NDT fees, and no annual filing fees.
          </p>
          <div className="mt-6">
            <CTARow primaryLabel="Get a tailored quote" primaryTo="/contact" secondaryTo="/compliance" secondaryLabel="See what is bundled" />
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-brand-stone bg-white p-6">
      <h3 className="font-heading text-xl text-brand-navy">{title}</h3>
      <p className="mt-3 text-brand-charcoal/90">{body}</p>
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-white font-bold">
        {n}
      </span>
      <div>
        <h3 className="font-heading text-lg text-brand-navy">{title}</h3>
        <p className="mt-1">{children}</p>
      </div>
    </li>
  );
}
