import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import { findRoute } from "../../lib/seo/routes";
import { webPage, breadcrumbList } from "../../lib/seo/jsonld";
import { EMAIL, BUSINESS_NAME, ADDRESS } from "../../lib/seo/site";

const EFFECTIVE_DATE = "April 27, 2026";

export default function Privacy() {
  const r = findRoute("/legal/privacy")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Legal", href: "/legal/privacy" },
    { name: "Privacy Policy", href: "/legal/privacy" },
  ];
  const breadcrumb = breadcrumbList(crumbs);

  return (
    <>
      <Seo
        title={r.title}
        description={r.description}
        path={r.path}
        image={r.ogImage}
        type="article"
        jsonLd={[webPage({ name: r.title, description: r.description, url: `https://benefitbuilderllc.com${r.path}`, breadcrumb })]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral">
        <h1 className="font-heading text-4xl text-brand-navy">Privacy Policy</h1>
        <p className="text-sm text-brand-charcoal/70">Effective {EFFECTIVE_DATE}</p>

        <p>
          {BUSINESS_NAME} ("we," "us," or "our") respects your privacy. This Privacy Policy explains
          what personal information we collect through our website and services, how we use it, and the
          rights you have over that information.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li><strong>Contact information</strong> you submit through our contact form (name, email, phone, company).</li>
          <li><strong>Account information</strong> for clients of our administration platform (work email, role, assigned company).</li>
          <li><strong>Employee census data</strong> uploaded by employer clients for the purpose of administering Section 125 cafeteria plans.</li>
          <li><strong>Usage data</strong> via Google Analytics 4 and Microsoft Clarity, including page paths, referrers, device type, and approximate location. IP addresses are anonymized.</li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>To respond to inquiries and deliver requested services.</li>
          <li>To administer Section 125 plans for employer clients (calculations, plan documents, payroll integration, nondiscrimination testing, audit records).</li>
          <li>To improve site content and user experience using aggregated analytics.</li>
          <li>To comply with applicable tax, labor, and benefits regulations.</li>
        </ul>

        <h2>Sharing of information</h2>
        <p>
          We do not sell personal information. We share information only with service providers who help
          us run the business (payroll vendors, QuickBooks Online, email delivery providers) under
          confidentiality and data-protection terms. We may disclose information when required by law.
        </p>

        <h2>Cookies</h2>
        <p>
          Our site uses first-party cookies for session management and third-party cookies from Google
          Analytics and Microsoft Clarity for usage measurement. You can disable cookies in your browser
          settings; some site features may not work as expected with cookies disabled.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have rights under the California Consumer Privacy Act
          (CCPA), the General Data Protection Regulation (GDPR), or similar laws, including the right to
          access, correct, or delete personal data we hold about you, and the right to opt out of the
          sale or sharing of personal information. We do not sell personal information.
        </p>
        <p>
          To exercise these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>

        <h2>Data retention</h2>
        <p>
          We retain personal information for as long as needed to provide services, comply with legal
          obligations, resolve disputes, and enforce agreements. Employer client data is retained for
          the duration of the services agreement and the IRS-recommended retention period (typically
          seven years) thereafter.
        </p>

        <h2>Children</h2>
        <p>Our services are intended for businesses and adults; we do not knowingly collect data from children under 16.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The effective date above will reflect the most recent revision.</p>

        <h2>Contact</h2>
        <address className="not-italic">
          {BUSINESS_NAME}<br />
          {ADDRESS.street}<br />
          {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postal}<br />
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </address>
      </article>
    </>
  );
}
