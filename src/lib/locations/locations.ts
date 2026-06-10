// Location landing page data. Canonical source for the /locations silo.
//
// Each state and city carries UNIQUE, hand-written, fact-based content so the
// pages are not thin copy-paste. The state tax facts are derived from the real
// 2026 data in lib/tax/savings2026.ts. Geography is verifiable public fact only.
//
// Phase 1 ships the 9 state pages (CITIES is populated in Phase 2).

import type { RouteDescriptor } from "../seo/routes";

export type StateLoc = {
  slug: string; // url segment, e.g. "missouri"
  code: string; // 2-letter, e.g. "MO"
  name: string; // "Missouri"
  metaDescription: string; // <=160 chars, unique
  intro: string; // unique opening paragraph
  taxNote: string; // unique, derived from real tax data
  verticals: string; // real employer types served in the state
  communities: string[]; // real towns served (some become city pages)
};

export type CityLoc = {
  slug: string; // "cape-girardeau"
  stateSlug: string; // "missouri"
  code: string; // state code "MO"
  city: string; // "Cape Girardeau"
  county: string; // "Cape Girardeau County"
  region: string; // verifiable geographic framing
  neighbors: string[]; // nearby towns (verifiable)
  lat: number;
  lon: number;
  verticals: string;
  metaDescription: string;
  intro: string;
  localContext: string;
  faq: { question: string; answer: string }[];
};

// ---- States (Phase 1) ------------------------------------------------------

export const STATES: StateLoc[] = [
  {
    slug: "missouri",
    code: "MO",
    name: "Missouri",
    metaDescription:
      "Section 125 cafeteria plan administration for Missouri employers. Lower FICA payroll tax and the 4.7% state income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for employers across Missouri, with our deepest roots in the southeast corner of the state. We set up the plan, run the compliance, and educate employees, so a Missouri business can raise take-home pay and cut payroll tax without adding work for its office.",
    taxNote:
      "Missouri levies a flat 4.7% state income tax. That state tax applies on top of federal income tax and the 7.65% FICA, so a Missouri employee's qualified pre-tax election avoids all three. The state tax piece is savings an employer in a no-income-tax state like Texas would not see.",
    verticals:
      "schools and charter schools, nursing and assisted living facilities, trucking and logistics companies, manufacturers, and small businesses",
    communities: [
      "Cape Girardeau",
      "Poplar Bluff",
      "Festus",
      "Malden",
      "Bloomfield",
      "Bertrand",
      "Oran",
      "Puxico",
      "Advance",
      "Marble Hill",
      "Doniphan",
    ],
  },
  {
    slug: "texas",
    code: "TX",
    name: "Texas",
    metaDescription:
      "Section 125 cafeteria plan administration for Texas employers. No state income tax, so savings come from federal tax and the 7.65% FICA.",
    intro:
      "Benefit Builder is a Texas firm, based north of Houston, and Section 125 administration is what we do. We help Texas employers set up pre-tax benefit plans that raise employee take-home pay and lower the company's payroll tax, with the plan documents, testing, and employee education handled for one monthly fee.",
    taxNote:
      "Texas has no state income tax. Section 125 savings in Texas come from two sources: the federal income tax an employee avoids on their election, and the 7.65% FICA that both the employee and the employer stop paying on those dollars. Because there is no state tax to add, the FICA and federal pieces do all the work, and they are substantial.",
    verticals:
      "schools, healthcare and senior care, manufacturing and the trades, trucking, and professional services",
    communities: ["Conroe", "Houston", "Baytown", "Laredo", "Palestine", "Malakoff", "Cameron"],
  },
  {
    slug: "oklahoma",
    code: "OK",
    name: "Oklahoma",
    metaDescription:
      "Section 125 cafeteria plan administration for Oklahoma employers. Cut FICA payroll tax and bracketed state income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Oklahoma employers. We handle the plan setup, the annual compliance, and the employee enrollment, so an Oklahoma business can offer a real pre-tax benefit and lower its payroll tax without taking on the administration.",
    taxNote:
      "Oklahoma uses graduated state income tax brackets that top out at 4.75%. For most employees a qualified pre-tax election lands in the 3.75% to 4.75% marginal range, and that state savings stacks on top of federal income tax and the 7.65% FICA that both sides avoid.",
    verticals: "schools, healthcare, churches and nonprofits, and small businesses",
    communities: ["Durant", "Atoka", "Mangum", "Boswell"],
  },
  {
    slug: "new-mexico",
    code: "NM",
    name: "New Mexico",
    metaDescription:
      "Section 125 cafeteria plan administration for New Mexico employers. Lower FICA payroll tax and state income tax, raise employee take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for employers in New Mexico, including the Four Corners and Navajo Nation communities in the northwest of the state. We set up the plan, run the compliance, and educate employees so the savings are realized and the plan stays in good standing.",
    taxNote:
      "New Mexico uses graduated state income tax brackets ranging from 1.7% up to 5.9%. A typical worker's pre-tax election avoids state tax in roughly the 4.7% to 4.9% range, and that stacks on top of federal income tax and the 7.65% FICA that both the employee and the employer stop paying.",
    verticals: "schools, healthcare, and tribal and community employers",
    communities: ["Farmington", "Shiprock", "Navajo"],
  },
  {
    slug: "ohio",
    code: "OH",
    name: "Ohio",
    metaDescription:
      "Section 125 cafeteria plan administration for Ohio employers. Cut FICA payroll tax and the 3.5% state income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Ohio employers. We handle the plan document, the nondiscrimination testing, and the employee education, so an Ohio business can lower its payroll tax and give employees more take-home pay for the same coverage.",
    taxNote:
      "Ohio applies a flat 3.5% state income tax. That rate stacks on top of federal income tax and the 7.65% FICA, so every qualified pre-tax dollar an Ohio employee elects avoids tax on all three fronts.",
    verticals: "manufacturers, healthcare, professional services, and small businesses",
    communities: ["Dayton"],
  },
  {
    slug: "michigan",
    code: "MI",
    name: "Michigan",
    metaDescription:
      "Section 125 cafeteria plan administration for Michigan employers. Lower FICA payroll tax and the 4.05% state income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Michigan employers, including the Detroit metro area. We set up the plan and run the compliance and enrollment, so a Michigan business can add a pre-tax benefit and cut its payroll tax without the administrative load.",
    taxNote:
      "Michigan applies a flat 4.05% state income tax with no standard deduction, so it reaches the first dollar of wages. A qualified pre-tax election avoids that 4.05% along with federal income tax and the 7.65% FICA that both the employee and the employer stop paying.",
    verticals: "manufacturers, professional services, healthcare, and small businesses",
    communities: ["Southfield"],
  },
  {
    slug: "colorado",
    code: "CO",
    name: "Colorado",
    metaDescription:
      "Section 125 cafeteria plan administration for Colorado employers. Cut FICA payroll tax and the 4.4% flat state income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Colorado employers, including the Denver metro area. We handle the plan setup, the annual testing, and the employee education, so a Colorado business can lower its payroll tax and raise employee take-home pay.",
    taxNote:
      "Colorado applies a flat 4.4% state income tax. Combined with federal income tax and the 7.65% FICA, a Colorado employee's qualified pre-tax election avoids tax on all three fronts, and the employer avoids its 7.65% on the same dollars.",
    verticals: "professional services, healthcare, technology, and small businesses",
    communities: ["Centennial"],
  },
  {
    slug: "illinois",
    code: "IL",
    name: "Illinois",
    metaDescription:
      "Section 125 cafeteria plan administration for Illinois employers. Lower FICA payroll tax and the 4.95% state income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Illinois employers. We set up the plan, run the compliance, and educate employees so the savings show up in real paychecks and the plan stays compliant year over year.",
    taxNote:
      "Illinois applies a flat 4.95% state income tax with no standard deduction, so it hits from the first dollar of wages. A qualified pre-tax election avoids 4.95% in state tax on top of federal income tax and the 7.65% FICA that both sides stop paying.",
    verticals: "small businesses, healthcare, and the trades",
    communities: ["Anna"],
  },
  {
    slug: "georgia",
    code: "GA",
    name: "Georgia",
    metaDescription:
      "Section 125 cafeteria plan administration for Georgia employers. Cut FICA payroll tax and the 5.39% state income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Georgia employers. We handle the plan document, the nondiscrimination testing, and the employee enrollment, so a Georgia business can offer a pre-tax benefit and lower its payroll tax without the administrative burden.",
    taxNote:
      "Georgia applies a flat 5.39% state income tax, the highest among the states we serve. A qualified pre-tax election avoids that 5.39% along with federal income tax and the 7.65% FICA, which makes the employee take-home gain in Georgia especially strong.",
    verticals: "small businesses, healthcare, manufacturing, and the trades",
    communities: ["Ringgold"],
  },
];

// ---- Cities (Phase 2) ------------------------------------------------------

export const CITIES: CityLoc[] = [];

// ---- Helpers ---------------------------------------------------------------

const SITE = "https://benefitbuilderllc.com";

export function getState(slug: string): StateLoc | undefined {
  return STATES.find((s) => s.slug === slug);
}

export function getCity(stateSlug: string, citySlug: string): CityLoc | undefined {
  return CITIES.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
}

export function citiesInState(stateSlug: string): CityLoc[] {
  return CITIES.filter((c) => c.stateSlug === stateSlug);
}

export function getAllStatePaths(): string[] {
  return STATES.map((s) => `/locations/${s.slug}`);
}

export function getAllCityPaths(): string[] {
  return CITIES.map((c) => `/locations/${c.stateSlug}/${c.slug}`);
}

export function stateTitle(s: StateLoc): string {
  return `Section 125 Pre-Tax Benefits in ${s.name} | Benefit Builder LLC`;
}

export function cityTitle(c: CityLoc): string {
  return `Section 125 Pre-Tax Benefits for ${c.city}, ${c.code} Employers | Benefit Builder LLC`;
}

// RouteDescriptors for the hub + every state + every city. Appended to ROUTES so
// the sitemap and OG generators (which both loop ROUTES) pick them up for free.
export function locationRouteDescriptors(): RouteDescriptor[] {
  const hub: RouteDescriptor = {
    path: "/locations",
    title: "Section 125 Service Areas | Benefit Builder LLC",
    description:
      "Section 125 pre-tax benefit plan administration across the states we serve, with the savings detail that matters in each one.",
    ogImage: "/og/og-loc-hub.png",
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  };
  const states: RouteDescriptor[] = STATES.map((s) => ({
    path: `/locations/${s.slug}`,
    title: stateTitle(s),
    description: s.metaDescription,
    ogImage: `/og/og-loc-${s.slug}.png`,
    priority: 0.7,
    changefreq: "monthly",
    includeInSitemap: true,
  }));
  const cities: RouteDescriptor[] = CITIES.map((c) => ({
    path: `/locations/${c.stateSlug}/${c.slug}`,
    title: cityTitle(c),
    description: c.metaDescription,
    ogImage: `/og/og-loc-${c.stateSlug}-${c.slug}.png`,
    priority: 0.6,
    changefreq: "monthly",
    includeInSitemap: true,
  }));
  return [hub, ...states, ...cities];
}

export { SITE as LOCATIONS_SITE };
