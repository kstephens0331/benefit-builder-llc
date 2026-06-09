import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE,
  EMAIL,
  ADDRESS,
  GEO,
  HOURS,
  LOGO_URL,
  FOUNDING_YEAR,
  SERVICE_AREA,
  SOCIAL,
  FOUNDER,
  KNOWS_ABOUT,
} from "./site";

type JsonLd = Record<string, unknown>;

export function person(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: FOUNDER.name,
    jobTitle: FOUNDER.jobTitle,
    email: FOUNDER.email,
    telephone: FOUNDER.telephone,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export function organization(): JsonLd {
  const sameAs = [SOCIAL.linkedin, SOCIAL.facebook, SOCIAL.twitter].filter(
    (s) => typeof s === "string" && s.length > 0
  );
  const base: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 512,
      height: 512,
    },
    foundingDate: `${FOUNDING_YEAR}-01-01`,
    founder: { "@id": `${SITE_URL}/#founder` },
    areaServed: SERVICE_AREA,
    knowsAbout: [...KNOWS_ABOUT],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postal,
      addressCountry: ADDRESS.country,
    },
    contactPoint: [
      contactPoint("sales"),
      contactPoint("customer support"),
    ],
  };
  if (sameAs.length > 0) base.sameAs = sameAs;
  return base;
}

// FinancialService with hasOfferCatalog. The catalog lists the actual products
// Benefit Builder administers so search and AI surfaces can ground answers.
export function financialService(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#financialservice`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: LOGO_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postal,
      addressCountry: ADDRESS.country,
    },
    areaServed: SERVICE_AREA,
    provider: { "@id": `${SITE_URL}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Benefit Builder Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Section 125 Cafeteria Plan Administration",
            description:
              "End-to-end Section 125 administration including plan documents, payroll deduction setup, and annual maintenance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "FICA Savings Analysis",
            description:
              "Pre-implementation modeling of employer payroll tax savings and employee take-home pay impact.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Non-Discrimination Testing",
            description:
              "Annual NDT for Section 125 plans, including key employee and highly compensated participation tests.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Document and Adoption Agreement",
            description:
              "IRS-compliant Section 125 plan document, adoption agreement, and salary reduction agreement preparation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payroll Integration",
            description:
              "Roster sync and payroll deduction code setup with common payroll providers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Supplemental Benefits Enrollment",
            description:
              "Life, accident, critical illness, disability, and gap protection enrollment and communications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Broker Partnership Program",
            description:
              "Co-broker partner program for benefits brokers with bundled Section 125 compliance support.",
          },
        },
      ],
    },
  };
}

export function localBusiness(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: LOGO_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postal,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHours: HOURS,
    areaServed: SERVICE_AREA,
  };
}

export function website(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function contactPoint(contactType: string): JsonLd {
  return {
    "@type": "ContactPoint",
    contactType,
    telephone: PHONE,
    email: EMAIL,
    areaServed: "US",
    availableLanguage: ["English"],
  };
}

export type ServiceInput = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
};

export function service(input: ServiceInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.serviceType ?? input.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: SERVICE_AREA,
  };
}

export type SoftwareInput = {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
};

export function softwareApplication(input: SoftwareInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: input.url,
    applicationCategory: input.applicationCategory ?? "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Included with monthly administration fee",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webApplication(input: SoftwareInput): JsonLd {
  return {
    ...softwareApplication(input),
    "@type": "WebApplication",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
  };
}

export type FaqQa = { question: string; answer: string };

export function faqPage(qas: FaqQa[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbList(crumbs: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href.startsWith("http") ? c.href : `${SITE_URL}${c.href}`,
    })),
  };
}

export type WebPageInput = {
  name: string;
  description: string;
  url: string;
  breadcrumb?: JsonLd;
};

export function webPage(input: WebPageInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    ...(input.breadcrumb ? { breadcrumb: input.breadcrumb } : {}),
  };
}

export function itemList(items: { name: string; url: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}
