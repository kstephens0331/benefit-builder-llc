export type RouteDescriptor = {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  includeInSitemap: boolean;
  noindex?: boolean;
};

export const ROUTES: RouteDescriptor[] = [
  {
    path: "/",
    title: "Pre-Tax Benefits Administration | Benefit Builder LLC",
    description:
      "Section 125 cafeteria plan administration that boosts take-home pay, lowers payroll tax, and keeps employers fully compliant. Texas-based, all-inclusive monthly fee.",
    ogImage: "/og/og-home.png",
    priority: 1.0,
    changefreq: "weekly",
    includeInSitemap: true,
  },
  {
    path: "/services",
    title: "Benefits Services for Employers and Brokers | Benefit Builder LLC",
    description:
      "Section 125, supplemental benefits, payroll integration, NDT, and compliance services for employers and brokers nationwide.",
    ogImage: "/og/og-services.png",
    priority: 0.9,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/services/employers",
    title: "Pre-Tax Benefits for Employers | Benefit Builder LLC",
    description:
      "Cut FICA payroll tax up to 7.65%, raise employee take-home pay, and keep your Section 125 plan IRS-compliant with bundled NDT and plan documents.",
    ogImage: "/og/og-employers.png",
    priority: 0.9,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/services/brokers",
    title: "Benefits Partner Program for Brokers | Benefit Builder LLC",
    description:
      "Refer or co-broker pre-tax benefits with us. Compliance handled, you keep your commissions, employers happier. Texas brokers welcome.",
    ogImage: "/og/og-brokers.png",
    priority: 0.9,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/platform",
    title: "Benefits Administration Platform | Benefit Builder LLC",
    description:
      "Roster sync, automated invoicing, QuickBooks integration, NDT engine, e-signature, audit trail. Built and run in-house.",
    ogImage: "/og/og-platform.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/savings-calculator",
    title: "Section 125 Savings Calculator | Benefit Builder LLC",
    description:
      "Estimate FICA savings and net pay impact for your team in seconds. No signup required.",
    ogImage: "/og/og-calculator.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/compliance",
    title: "Section 125 Compliance Bundled Free | Benefit Builder LLC",
    description:
      "Plan document, adoption agreement, salary reduction, annual NDT, and audit-ready records included in your monthly fee.",
    ogImage: "/og/og-compliance.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/about",
    title: "About Benefit Builder LLC | Texas Benefits Administration",
    description:
      "Family-run, Texas-based benefits administration. Built around plain-language education for employees and predictable cost for leaders.",
    ogImage: "/og/og-about.png",
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/partners",
    title: "Become a Broker Partner | Benefit Builder LLC",
    description:
      "Join our broker partner network. Co-branded materials, NDT support, and you keep your commissions.",
    ogImage: "/og/og-partners.png",
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/contact",
    title: "Contact Benefit Builder LLC | Quotes Within 1 Business Day",
    description:
      "Talk to a Texas benefits advisor. Quotes within one business day. (972) 741-5663 or admin@benefitbuilderllc.com.",
    ogImage: "/og/og-contact.png",
    priority: 0.8,
    changefreq: "monthly",
    includeInSitemap: true,
  },
  {
    path: "/legal/privacy",
    title: "Privacy Policy | Benefit Builder LLC",
    description:
      "How Benefit Builder LLC collects, uses, and protects personal data. CCPA + GDPR aligned.",
    ogImage: "/og/og-privacy.png",
    priority: 0.3,
    changefreq: "yearly",
    includeInSitemap: true,
  },
  {
    path: "/legal/terms",
    title: "Terms of Service | Benefit Builder LLC",
    description:
      "Service terms governing use of Benefit Builder LLC's website and services.",
    ogImage: "/og/og-terms.png",
    priority: 0.3,
    changefreq: "yearly",
    includeInSitemap: true,
  },
  {
    path: "/blog",
    title: "Section 125 Blog and Guides | Benefit Builder LLC",
    description:
      "Plain-language guides on Section 125 pre-tax benefits, FICA savings, and compliance, for employers and the agents who serve them.",
    ogImage: "/og/og-blog.png",
    priority: 0.7,
    changefreq: "weekly",
    includeInSitemap: true,
  },
];

export function findRoute(path: string): RouteDescriptor | undefined {
  return ROUTES.find((r) => r.path === path);
}
