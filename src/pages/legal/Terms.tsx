import Seo from "../../lib/seo/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import { findRoute } from "../../lib/seo/routes";
import { webPage, breadcrumbList } from "../../lib/seo/jsonld";
import { EMAIL, BUSINESS_NAME, ADDRESS } from "../../lib/seo/site";

const EFFECTIVE_DATE = "April 27, 2026";

export default function Terms() {
  const r = findRoute("/legal/terms")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Legal", href: "/legal/terms" },
    { name: "Terms of Service", href: "/legal/terms" },
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
        <h1 className="font-heading text-4xl text-brand-navy">Terms of Service</h1>
        <p className="text-sm text-brand-charcoal/70">Effective {EFFECTIVE_DATE}</p>

        <p>
          These Terms of Service ("Terms") govern your access to and use of the website and services
          provided by {BUSINESS_NAME} ("we," "us," or "our"). By using the site or services, you agree
          to these Terms.
        </p>

        <h2>Use of the site</h2>
        <p>
          You may use this site for lawful purposes only. You may not attempt to interfere with the
          site's operation, security, or other users. We reserve the right to suspend access to anyone
          who violates these Terms.
        </p>

        <h2>Services</h2>
        <p>
          The administration services we provide to employer clients are governed by a separate written
          services agreement. These Terms apply to website use; the services agreement controls in any
          conflict between the two.
        </p>

        <h2>Information accuracy</h2>
        <p>
          We aim to keep website content accurate and current, but we do not guarantee that every
          calculator, comparison, or savings example reflects your specific situation. For binding
          guidance, contact us for a tailored quote and review with your tax or legal advisor.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The site, including text, graphics, logos, and software, is owned by {BUSINESS_NAME} or its
          licensors and is protected by copyright and trademark laws. You may not copy, modify, or
          redistribute site content without our written permission.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The site is provided "as is" without warranties of any kind, express or implied. We are not
          your tax, legal, or insurance advisor; nothing on this site constitutes professional advice.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {BUSINESS_NAME} is not liable for indirect,
          incidental, special, consequential, or punitive damages arising from site use, or for any
          decision made in reliance on site content. Our aggregate liability for site-related claims is
          limited to the amount you paid (if any) for site access.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of Texas. Disputes arising out of or
          relating to these Terms or the site will be resolved in the state or federal courts located
          in Montgomery County, Texas.
        </p>

        <h2>Changes</h2>
        <p>We may update these Terms from time to time. Continued use of the site after a change constitutes acceptance of the updated Terms.</p>

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
