export const SITE_URL = "https://benefitbuilderllc.com";
export const BUSINESS_NAME = "Benefit Builder LLC";
export const SHORT_NAME = "Benefit Builder";

export const PHONE = "+1-972-741-5663";
export const PHONE_DISPLAY = "(972) 741-5663";
export const EMAIL = "admin@benefitbuilderllc.com";

export const ADDRESS = {
  street: "14132 FM 1097 Rd West, Suite #300, PMB #164",
  city: "Willis",
  region: "TX",
  postal: "77318",
  country: "US",
} as const;

export const GEO = {
  latitude: 30.4313,
  longitude: -95.4824,
} as const;

export const HOURS = "Mo-Fr 09:00-17:00";

export const LOGO_URL = `${SITE_URL}/images/benefit-builder-logo.png`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-home.png`;

export const SOCIAL = {
  linkedin: "",
  facebook: "",
  twitter: "",
} as const;

export const FOUNDING_YEAR = 2019;
export const SERVICE_AREA = "United States";

// Founder identity. Bill Dawson is the founder of Benefit Builder LLC.
export const FOUNDER = {
  name: "Bill Dawson",
  jobTitle: "Founder",
  email: EMAIL,
  telephone: PHONE,
} as const;

// Topics the organization is an authority on. Used in Organization.knowsAbout
// and in FinancialService.serviceType for AI / search engine grounding.
export const KNOWS_ABOUT: readonly string[] = [
  "Section 125 cafeteria plan",
  "Premium Only Plan",
  "POP plan",
  "Pre-tax benefits administration",
  "FICA savings analysis",
  "Payroll deduction setup",
  "Cafeteria Plan compliance",
  "Non-discrimination testing",
  "NDT for Section 125",
  "Health Savings Account",
  "HSA administration",
  "Flexible Spending Account",
  "FSA administration",
  "Dependent Care FSA",
  "ERISA compliance",
  "Form 5500 filing",
  "Summary Plan Description",
  "Plan adoption agreement",
  "Salary reduction agreement",
  "Employer payroll tax savings",
  "Employee take-home pay optimization",
  "Group benefits broker support",
] as const;

