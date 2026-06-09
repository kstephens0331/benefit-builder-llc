import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTARow from "../../components/CTARow";
import { findRoute } from "../../lib/seo/routes";
import { service, webPage, breadcrumbList } from "../../lib/seo/jsonld";

export default function Brokers() {
  const r = findRoute("/services/brokers")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "For Brokers", href: "/services/brokers" },
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
            name: "Broker Partner Program",
            description: r.description,
            url: `https://benefitbuilderllc.com${r.path}`,
            serviceType: "Insurance broker partnership",
          }),
          webPage({ name: r.title, description: r.description, url: `https://benefitbuilderllc.com${r.path}`, breadcrumb }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm uppercase tracking-wide text-brand-green font-semibold">For Brokers</p>
        <h1 className="font-heading text-4xl md:text-5xl text-brand-navy mt-2">
          A Section 125 Partner Brokers Actually Want to Use
        </h1>
        <p className="mt-4 max-w-3xl text-brand-charcoal/90 text-lg">
          Bring us your employer clients and we will administer their pre-tax benefits without competing
          for the rest of their book. Compliance is bundled, the platform is ours, and the economics are
          easy to explain to a CFO. You keep the relationship and the carrier commissions.
        </p>
        <div className="mt-6">
          <CTARow primaryLabel="Become a partner" primaryTo="/contact" secondaryTo="/services/employers" secondaryLabel="What employers see" />
        </div>
      </section>

      <section className="bg-white border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">Why partner with us</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="We do not sell insurance" body="We administer Section 125. You stay the broker of record on every line you write. We do not approach your clients about non-125 coverage." />
            <Card title="Compliance handled" body="Plan document, adoption agreement, NDT, salary reduction forms. We deliver them, you do not have to scope them out of every renewal." />
            <Card title="You keep your commissions" body="You stay broker of record and keep every carrier commission you write. Section 125 makes your voluntary products pre-tax, so employees enroll at higher rates and you place more coverage in every group. Benefit Builder is paid an administration fee by the employer, not a cut of your book." />
            <Card title="Co-branded materials" body="Enrollment guides, comparison sheets, and ROI calculators with your logo and contact info. We can white-label the calculator output for you." />
            <Card title="Texas roots, national reach" body="We are based in Texas and most of our clients are too, but we administer plans in any state. Bring the deal, we will close the back office." />
            <Card title="One support number" body="Your client gets one phone number. We answer it. You stay informed without becoming the help desk." />
          </div>
        </div>
      </section>

      <section className="bg-brand-sand/40 border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-3xl text-brand-navy">How a partnership starts</h2>
          <ol className="mt-6 space-y-4 text-brand-charcoal/90">
            <li><strong className="text-brand-navy">Intro call.</strong> Twenty minutes to align on your book, target client size, and how we co-sell.</li>
            <li><strong className="text-brand-navy">First referral.</strong> You hand off a warm prospect. We quote within one business day.</li>
            <li><strong className="text-brand-navy">Co-branded close.</strong> Enrollment materials carry your name. Employer signs a single services agreement.</li>
            <li><strong className="text-brand-navy">Ongoing review.</strong> Monthly recap of active groups, NDT status, and any renewal moves we recommend.</li>
          </ol>
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
