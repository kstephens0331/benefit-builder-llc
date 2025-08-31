import { Helmet } from "react-helmet-async";

export default function SEOOrg() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://benefitbuilder.com";
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Benefit Builder LLC",
    "url": siteUrl,
    "logo": siteUrl + "/favicons/icon-512.svg",
    "image": siteUrl + "/og/og.svg",
    "telephone": "+1-936-232-6881",
    "email": "jamietrauth.bb@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14132 FM 1097 Rd West, Suite #300, PMB #164",
      "addressLocality": "Willis",
      "addressRegion": "TX",
      "postalCode": "77318",
      "addressCountry": "US"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+1-936-232-6881",
      "email": "jamietrauth.bb@gmail.com",
      "areaServed": "US"
    }]
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

