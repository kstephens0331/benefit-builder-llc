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

export const CITIES: CityLoc[] = [
  // ---- Missouri ----
  {
    slug: "cape-girardeau",
    stateSlug: "missouri",
    code: "MO",
    city: "Cape Girardeau",
    county: "Cape Girardeau County",
    region: "southeast Missouri, on the Mississippi River",
    neighbors: ["Jackson", "Scott City", "Sikeston"],
    lat: 37.3059,
    lon: -89.5181,
    verticals: "schools, healthcare and senior care, manufacturers, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Cape Girardeau, MO employers. Cut FICA and the 4.7% Missouri income tax, raise take-home pay.",
    intro:
      "Cape Girardeau is the heart of where Benefit Builder works in Missouri. We administer Section 125 pre-tax benefit plans for employers across the region, handling the plan setup, the compliance, and the employee education so a Cape Girardeau business can lower its payroll tax and raise take-home pay without adding office work.",
    localContext:
      "Cape Girardeau County sits on the Mississippi River in southeast Missouri and anchors a regional economy of schools, healthcare and senior care providers, manufacturers, and small businesses. These are exactly the employers a Section 125 plan helps most: steady payrolls where a pre-tax election turns into a visible take-home raise for staff and a real payroll tax reduction for the business. We already serve a number of employers in and around Cape Girardeau.",
    faq: [
      {
        question: "Do you work with Cape Girardeau employers?",
        answer:
          "Yes. Cape Girardeau is one of our core service areas. We administer Section 125 plans for employers in the city and the surrounding communities including Jackson, Scott City, and Sikeston.",
      },
      {
        question: "How much does a Cape Girardeau employee save?",
        answer:
          "A qualified pre-tax election avoids federal income tax, the 7.65% FICA, and Missouri's flat 4.7% state income tax. The exact figure depends on pay and participation. Run your roster on the savings calculator for an estimate.",
      },
    ],
  },
  {
    slug: "poplar-bluff",
    stateSlug: "missouri",
    code: "MO",
    city: "Poplar Bluff",
    county: "Butler County",
    region: "the Ozark foothills of southeast Missouri",
    neighbors: ["Dexter", "Doniphan", "Sikeston"],
    lat: 36.757,
    lon: -90.3929,
    verticals: "healthcare, schools, manufacturers, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Poplar Bluff, MO employers. Lower FICA and the 4.7% Missouri income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for employers in Poplar Bluff and across Butler County. We set up the plan, run the annual compliance, and educate employees, so a Poplar Bluff business can offer a pre-tax benefit and cut its payroll tax with no added administration.",
    localContext:
      "Poplar Bluff sits in the Ozark foothills of southeast Missouri and serves as a regional hub for healthcare, education, and manufacturing in Butler County. For employers with steady hourly and salaried payrolls, a Section 125 plan is a low-effort way to raise net pay and lower the employer's FICA bill at the same time.",
    faq: [
      {
        question: "Do you serve Poplar Bluff and Butler County?",
        answer:
          "Yes. We administer Section 125 plans for Poplar Bluff employers and the surrounding area, including Dexter, Doniphan, and Sikeston.",
      },
      {
        question: "What benefits can run pre-tax?",
        answer:
          "Insurance premiums, flexible spending accounts, HSA contributions, and dependent care can run pre-tax under a Section 125 plan. We map your benefits to the qualifying categories so the savings are maximized and the plan stays compliant.",
      },
    ],
  },
  {
    slug: "festus",
    stateSlug: "missouri",
    code: "MO",
    city: "Festus",
    county: "Jefferson County",
    region: "Jefferson County, about 30 miles south of St. Louis",
    neighbors: ["Crystal City", "Herculaneum", "Arnold"],
    lat: 38.2206,
    lon: -90.396,
    verticals: "small businesses, healthcare, and the trades",
    metaDescription:
      "Section 125 pre-tax benefit administration for Festus, MO employers. Cut FICA and the 4.7% Missouri income tax, raise employee take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for employers in Festus and the wider Jefferson County area south of St. Louis. We handle the plan document, the testing, and the enrollment so a Festus business can lower its payroll tax and give employees more take-home pay.",
    localContext:
      "Festus and the neighboring Twin City of Crystal City sit in Jefferson County, within the St. Louis metro's southern reach. The local mix of small businesses, healthcare providers, and trades employers is well suited to a pre-tax plan, where a modest election produces a real net-pay gain for workers and a payroll tax cut for the employer.",
    faq: [
      {
        question: "Do you cover the Festus and Jefferson County area?",
        answer:
          "Yes. We administer Section 125 plans for Festus employers and the surrounding communities, including Crystal City, Herculaneum, and Arnold.",
      },
      {
        question: "Is compliance included?",
        answer:
          "Yes. The plan document, adoption agreement, salary reduction agreements, and annual nondiscrimination testing are all included in the monthly fee.",
      },
    ],
  },
  // ---- Texas ----
  {
    slug: "conroe",
    stateSlug: "texas",
    code: "TX",
    city: "Conroe",
    county: "Montgomery County",
    region: "Montgomery County, just north of Houston near Lake Conroe",
    neighbors: ["The Woodlands", "Willis", "Montgomery", "Spring"],
    lat: 30.3119,
    lon: -95.4561,
    verticals: "construction, healthcare, professional services, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Conroe, TX employers. No state income tax, so savings come from federal tax and the 7.65% FICA.",
    intro:
      "Conroe is home turf. Benefit Builder is based in the Montgomery County area north of Houston, and we administer Section 125 pre-tax benefit plans for local employers from right here. We handle the setup, the compliance, and the employee education so a Conroe business can raise take-home pay and lower its payroll tax.",
    localContext:
      "Conroe and the Lake Conroe area sit at the center of fast-growing Montgomery County, alongside The Woodlands and Willis. The local economy of construction, healthcare, professional services, and small business is a strong fit for Section 125, and because Texas has no state income tax, the savings are driven by federal income tax and the 7.65% FICA on every pre-tax dollar.",
    faq: [
      {
        question: "Are you local to Conroe?",
        answer:
          "Yes. Benefit Builder is based in the Conroe and Willis area of Montgomery County. We serve Conroe, The Woodlands, Willis, Montgomery, Spring, and the greater Houston area.",
      },
      {
        question: "How do savings work in Texas with no state income tax?",
        answer:
          "Texas has no state income tax, so a pre-tax election saves on federal income tax plus the 7.65% FICA that both the employee and the employer stop paying. Those two pieces still add up to substantial savings.",
      },
    ],
  },
  {
    slug: "houston",
    stateSlug: "texas",
    code: "TX",
    city: "Houston",
    county: "Harris County",
    region: "Harris County, the largest city in Texas",
    neighbors: ["Pasadena", "Pearland", "Sugar Land", "Baytown"],
    lat: 29.7604,
    lon: -95.3698,
    verticals: "energy, healthcare, manufacturing, logistics, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Houston, TX employers. No state income tax, so savings come from federal tax and the 7.65% FICA.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Houston employers, and we are based just north of the metro in Montgomery County. We set up the plan, run the compliance, and educate employees so a Houston business can lower its payroll tax and raise take-home pay for staff.",
    localContext:
      "Houston is the largest city in Texas and the center of Harris County's energy, healthcare, manufacturing, and logistics economy. From large workforces to small offices, employers across the metro use Section 125 to give employees more net pay and cut the company's FICA bill. With no Texas state income tax, the savings come from federal income tax and the 7.65% FICA on every pre-tax dollar.",
    faq: [
      {
        question: "Do you serve the greater Houston area?",
        answer:
          "Yes. We work with employers across Houston and the surrounding communities, including Pasadena, Pearland, Sugar Land, and Baytown, and we are based just north of the metro.",
      },
      {
        question: "Can large Houston employers use this?",
        answer:
          "Yes. Section 125 scales with participation, so larger workforces often see the biggest total savings. We handle the payroll coordination and employee education that keep participation high.",
      },
    ],
  },
  {
    slug: "baytown",
    stateSlug: "texas",
    code: "TX",
    city: "Baytown",
    county: "Harris County",
    region: "eastern Harris County, on Galveston Bay",
    neighbors: ["La Porte", "Channelview", "Mont Belvieu"],
    lat: 29.7355,
    lon: -94.9774,
    verticals: "petrochemical and industrial employers, manufacturers, healthcare, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Baytown, TX employers. No state income tax, so savings come from federal tax and the 7.65% FICA.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Baytown employers. We handle the plan setup, the annual compliance, and the employee enrollment so a Baytown business can offer a pre-tax benefit and lower its payroll tax with no added administration.",
    localContext:
      "Baytown sits on Galveston Bay in eastern Harris County, at the heart of the Houston Ship Channel's petrochemical and industrial corridor. Employers there run substantial hourly payrolls, and a Section 125 plan turns a pre-tax election into a real take-home raise for workers while cutting the employer's 7.65% FICA on those dollars. With no Texas state income tax, federal tax and FICA do the work.",
    faq: [
      {
        question: "Do you work with Baytown employers?",
        answer:
          "Yes. We administer Section 125 plans for Baytown businesses and the surrounding communities including La Porte, Channelview, and Mont Belvieu.",
      },
      {
        question: "Is this a fit for industrial and hourly workforces?",
        answer:
          "Yes. Pre-tax benefits are especially valuable where take-home pay matters, and high headcount means the employer FICA savings scale. We run the employee education that keeps participation strong.",
      },
    ],
  },
  {
    slug: "laredo",
    stateSlug: "texas",
    code: "TX",
    city: "Laredo",
    county: "Webb County",
    region: "Webb County, on the Rio Grande at the US and Mexico border",
    neighbors: ["Rio Bravo", "El Cenizo"],
    lat: 27.5306,
    lon: -99.4803,
    verticals: "international trade and logistics, healthcare, retail, and education",
    metaDescription:
      "Section 125 pre-tax benefit administration for Laredo, TX employers. No state income tax, so savings come from federal tax and the 7.65% FICA.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Laredo employers. We set up the plan, handle the compliance, and educate employees so a Laredo business can raise take-home pay and lower its payroll tax without taking on the administration.",
    localContext:
      "Laredo sits on the Rio Grande in Webb County and is one of the busiest inland ports on the US and Mexico border, with an economy built on international trade, logistics, healthcare, retail, and education. For employers running large local payrolls, Section 125 raises employee net pay and cuts the company's FICA bill. With no Texas state income tax, the savings come from federal income tax and the 7.65% FICA.",
    faq: [
      {
        question: "Do you serve Laredo and Webb County?",
        answer:
          "Yes. We administer Section 125 plans for Laredo employers and the surrounding Webb County area.",
      },
      {
        question: "What does it cost the employer to set up?",
        answer:
          "There are no setup fees. Our monthly administration fee covers the plan document, the testing, the support, and the platform, and for most employers the payroll tax savings exceed the fee.",
      },
    ],
  },
  // ---- Oklahoma ----
  {
    slug: "durant",
    stateSlug: "oklahoma",
    code: "OK",
    city: "Durant",
    county: "Bryan County",
    region: "Bryan County in southeast Oklahoma, headquarters of the Choctaw Nation",
    neighbors: ["Calera", "Caddo", "Atoka"],
    lat: 33.9943,
    lon: -96.3711,
    verticals: "education, healthcare, tribal employers, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Durant, OK employers. Cut FICA and Oklahoma state income tax, raise employee take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Durant employers. We handle the plan setup, the annual compliance, and the employee education so a Durant business can lower its payroll tax and raise take-home pay for staff.",
    localContext:
      "Durant anchors Bryan County in southeast Oklahoma and is home to Southeastern Oklahoma State University and the headquarters of the Choctaw Nation, alongside a base of healthcare and small business employers. A Section 125 plan fits these steady payrolls well, raising net pay for employees and cutting the employer's FICA, with Oklahoma's bracketed state income tax adding to the savings.",
    faq: [
      {
        question: "Do you work with Durant area employers?",
        answer:
          "Yes. We administer Section 125 plans for Durant businesses and the surrounding Bryan County communities including Calera, Caddo, and Atoka.",
      },
      {
        question: "How does Oklahoma state tax factor in?",
        answer:
          "Oklahoma uses graduated brackets topping out at 4.75%. A pre-tax election avoids state income tax in that range on top of federal income tax and the 7.65% FICA that both sides stop paying.",
      },
    ],
  },
  // ---- Ohio ----
  {
    slug: "dayton",
    stateSlug: "ohio",
    code: "OH",
    city: "Dayton",
    county: "Montgomery County",
    region: "the Miami Valley of southwest Ohio",
    neighbors: ["Kettering", "Huber Heights", "Beavercreek"],
    lat: 39.7589,
    lon: -84.1916,
    verticals: "aerospace and manufacturing, healthcare, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Dayton, OH employers. Cut FICA and the 3.5% Ohio income tax, raise employee take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Dayton employers. We set up the plan, run the compliance, and educate employees so a Dayton business can offer a pre-tax benefit and lower its payroll tax with no added office work.",
    localContext:
      "Dayton sits in the Miami Valley of southwest Ohio, with an economy rooted in aerospace and advanced manufacturing alongside healthcare and small business. For employers with established payrolls, a Section 125 plan raises employee take-home pay and cuts the company's FICA bill, and Ohio's flat 3.5% state income tax adds to what each pre-tax dollar avoids.",
    faq: [
      {
        question: "Do you serve the Dayton area?",
        answer:
          "Yes. We administer Section 125 plans for Dayton employers and the surrounding Montgomery County communities including Kettering, Huber Heights, and Beavercreek.",
      },
      {
        question: "What is included in the fee?",
        answer:
          "Everything needed to run the plan: the plan document, adoption agreement, salary reduction agreements, annual nondiscrimination testing, payroll coordination, and recordkeeping.",
      },
    ],
  },
  // ---- Michigan ----
  {
    slug: "southfield",
    stateSlug: "michigan",
    code: "MI",
    city: "Southfield",
    county: "Oakland County",
    region: "Oakland County, in the Detroit metro just northwest of the city",
    neighbors: ["Farmington Hills", "Royal Oak", "Oak Park"],
    lat: 42.4734,
    lon: -83.2219,
    verticals: "professional services, corporate offices, healthcare, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Southfield, MI employers. Cut FICA and the 4.05% Michigan income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Southfield employers in the Detroit metro. We handle the plan setup, the annual compliance, and the employee enrollment so a Southfield business can lower its payroll tax and raise take-home pay for staff.",
    localContext:
      "Southfield sits in Oakland County just northwest of Detroit and is a major business center, dense with professional services firms, corporate offices, and healthcare employers. These office payrolls are a strong fit for Section 125, and Michigan's flat 4.05% state income tax, which reaches the first dollar of wages, adds to what every pre-tax election avoids.",
    faq: [
      {
        question: "Do you work with Southfield and the Detroit metro?",
        answer:
          "Yes. We administer Section 125 plans for Southfield employers and the surrounding Oakland County communities including Farmington Hills, Royal Oak, and Oak Park.",
      },
      {
        question: "How does Michigan state tax affect the savings?",
        answer:
          "Michigan's flat 4.05% income tax has no standard deduction, so it applies from the first dollar. A pre-tax election avoids that 4.05% along with federal income tax and the 7.65% FICA.",
      },
    ],
  },
  // ---- Colorado ----
  {
    slug: "centennial",
    stateSlug: "colorado",
    code: "CO",
    city: "Centennial",
    county: "Arapahoe County",
    region: "Arapahoe County, in the south Denver metro",
    neighbors: ["Aurora", "Littleton", "Greenwood Village"],
    lat: 39.5807,
    lon: -104.8772,
    verticals: "technology, professional services, healthcare, and small businesses",
    metaDescription:
      "Section 125 pre-tax benefit administration for Centennial, CO employers. Cut FICA and the 4.4% Colorado income tax, raise take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for Centennial employers in the south Denver metro. We set up the plan, run the compliance, and educate employees so a Centennial business can raise take-home pay and lower its payroll tax without the administrative load.",
    localContext:
      "Centennial sits in Arapahoe County in the south Denver metro, a base for technology, professional services, and healthcare employers. These office and professional payrolls suit Section 125 well, and Colorado's flat 4.4% state income tax adds to the federal income tax and 7.65% FICA that each pre-tax dollar avoids.",
    faq: [
      {
        question: "Do you serve Centennial and the Denver metro?",
        answer:
          "Yes. We administer Section 125 plans for Centennial employers and the surrounding south metro communities including Aurora, Littleton, and Greenwood Village.",
      },
      {
        question: "Is nondiscrimination testing included?",
        answer:
          "Yes. Annual nondiscrimination testing is part of the monthly fee, along with the plan document and all compliance recordkeeping.",
      },
    ],
  },
  // ---- New Mexico ----
  {
    slug: "farmington",
    stateSlug: "new-mexico",
    code: "NM",
    city: "Farmington",
    county: "San Juan County",
    region: "San Juan County, in the Four Corners region of northwest New Mexico",
    neighbors: ["Aztec", "Bloomfield", "Kirtland", "Shiprock"],
    lat: 36.7281,
    lon: -108.2187,
    verticals: "energy, healthcare, education, and tribal and community employers",
    metaDescription:
      "Section 125 pre-tax benefit administration for Farmington, NM employers. Cut FICA and New Mexico state income tax, raise employee take-home pay.",
    intro:
      "Benefit Builder administers Section 125 pre-tax benefit plans for employers in Farmington and across the Four Corners region of northwest New Mexico, including the nearby Navajo Nation communities. We handle the plan setup, the compliance, and the employee education so the savings are realized and the plan stays in good standing.",
    localContext:
      "Farmington is the commercial center of San Juan County in the Four Corners, where New Mexico, Arizona, Colorado, and Utah meet. The regional economy spans energy, healthcare, education, and tribal and community employers, including the nearby Navajo Nation communities of Shiprock and Navajo. Section 125 fits these payrolls by raising employee net pay and cutting the employer's FICA, with New Mexico's bracketed state income tax adding to the savings.",
    faq: [
      {
        question: "Do you serve Farmington and the Four Corners?",
        answer:
          "Yes. We administer Section 125 plans for Farmington employers and the surrounding San Juan County area, including Aztec, Bloomfield, Kirtland, and the Navajo Nation communities of Shiprock and Navajo.",
      },
      {
        question: "How does New Mexico state tax factor in?",
        answer:
          "New Mexico uses graduated brackets from 1.7% up to 5.9%. A typical pre-tax election avoids state income tax in roughly the 4.7% to 4.9% range, on top of federal income tax and the 7.65% FICA.",
      },
    ],
  },
];

// ---- Hero images -----------------------------------------------------------
// One unique image per page (no image reused anywhere). Metro pages use genuine
// city/landscape photos; the rest use professional business scenes. Alt text is
// honest and never claims a photo is a place it is not. Files live in
// public/images/locations/hero-<slug>.jpg (slug = state slug, city slug, or "hub").
// Sources + license: public/images/locations/CREDITS.md (Pexels License).

const HERO_ALT: Record<string, string> = {
  hub: "A business team meeting in an office",
  // states
  missouri: "A business team reviewing documents in a meeting",
  texas: "The Houston skyline",
  oklahoma: "A diverse team meeting around a conference table",
  "new-mexico": "A modern glass office building",
  ohio: "Two professionals meeting at a desk",
  michigan: "Downtown Detroit, Michigan",
  colorado: "The Colorado Rocky Mountains",
  illinois: "Colleagues working together at an office desk",
  georgia: "A professional team meeting in an office",
  // cities
  "cape-girardeau": "A benefits consultation at an office desk",
  "poplar-bluff": "Reviewing plan documents at a desk",
  festus: "A small-business team meeting",
  conroe: "Reviewing benefit plan paperwork at a desk",
  houston: "The Houston skyline",
  baytown: "Reviewing documents in a business meeting",
  laredo: "A benefits advisor meeting with a client",
  durant: "A professional meeting at a desk",
  dayton: "A business meeting in an office",
  southfield: "Downtown Detroit, near Southfield",
  centennial: "The Denver skyline, near Centennial",
  farmington: "A team reviewing documents in an office",
};

export function heroImageFor(slug: string): string {
  return `/images/locations/hero-${slug}.jpg`;
}

export function heroAltFor(slug: string): string {
  return HERO_ALT[slug] ?? "Benefit Builder, professional benefits administration";
}

// ---- Mid-page images -------------------------------------------------------
// Long-form body markdown lives in ./content.ts (separate, so the Node sitemap
// script never imports import.meta.glob). One unique mid-page image per content
// page (body-<slug>.jpg), never reused.
const BODY_ALT: Record<string, string> = {
  missouri: "A benefits planning meeting in an office",
  texas: "Business professionals in an office",
  oklahoma: "A Section 125 planning meeting",
  "new-mexico": "Colleagues reviewing pre-tax benefits on a laptop",
  ohio: "A handshake closing a benefits agreement",
  michigan: "A modern office building",
  colorado: "A team meeting about employee benefits",
  illinois: "Two professionals working in an office",
  georgia: "A benefits presentation in a meeting",
  "cape-girardeau": "Signing Section 125 plan documents at a desk",
  "poplar-bluff": "Reviewing plan paperwork at a desk",
  festus: "A professional working at an office desk",
  conroe: "A benefits advisor working at a laptop",
  houston: "A handshake in an office",
  baytown: "Reviewing pre-tax benefits at a laptop",
  laredo: "Reviewing plan details on a laptop",
  durant: "A professional working in an office",
  dayton: "A businesswoman working in an office",
  southfield: "A professional working at a computer",
  centennial: "A modern glass office building",
  farmington: "Modern office buildings",
};

export function bodyImageFor(slug: string): string {
  return `/images/locations/body-${slug}.jpg`;
}

export function bodyAltFor(slug: string): string {
  return BODY_ALT[slug] ?? "Benefit Builder, professional benefits administration";
}

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
