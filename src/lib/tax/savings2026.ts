// Section 125 savings tax data and math for 2026.
//
// Ported from the Benefit Builder platform seed data so the public calculator
// matches what real proposals show. Sources:
//   - State table: supabase/seed/seed_state_taxes_2026.sql (method/flat/brackets)
//   - FICA: supabase/seed/002_federal_tax_2026.sql (SS 6.2% to $184,500, Medicare 1.45%)
//   - Federal income tax: 2026 single-filer ordinary brackets + $16,100 standard deduction
//
// This is a standalone copy of the data (no cross-project import). It is an
// estimate: federal is modeled single-filer, marginal rates are applied to the
// pre-tax election, and the Social Security wage base is approximated.

export const FICA_TOTAL = 0.0765; // SS 6.2% + Medicare 1.45%
export const MEDICARE_ONLY = 0.0145;
export const SS_WAGE_BASE = 184500;

// Admin fee split (5% employee / 3% employer = 8% combined).
export const EMPLOYEE_FEE_RATE = 0.05;
export const EMPLOYER_FEE_RATE = 0.03;
export const ADMIN_FEE_RATE = EMPLOYEE_FEE_RATE + EMPLOYER_FEE_RATE;

export const FEDERAL_STD_DEDUCTION_SINGLE = 16100;

type Bracket = { over: number; rate: number };

// 2026 federal single-filer ordinary income brackets (taxable income).
const FEDERAL_BRACKETS_SINGLE: Bracket[] = [
  { over: 0, rate: 0.10 },
  { over: 12400, rate: 0.12 },
  { over: 50400, rate: 0.22 },
  { over: 105700, rate: 0.24 },
  { over: 201775, rate: 0.32 },
  { over: 256225, rate: 0.35 },
  { over: 640600, rate: 0.37 },
];

type StateRule =
  | { name: string; method: "none" }
  | { name: string; method: "flat"; flat: number; std: number }
  | { name: string; method: "brackets"; std: number; brackets: Bracket[] };

// All 50 states + DC, 2026.
export const STATES: Record<string, StateRule> = {
  AL: { name: "Alabama", method: "brackets", std: 3080, brackets: [{ over: 0, rate: 0.02 }, { over: 515, rate: 0.04 }, { over: 3080, rate: 0.05 }] },
  AK: { name: "Alaska", method: "none" },
  AZ: { name: "Arizona", method: "flat", flat: 0.025, std: 16100 },
  AR: { name: "Arkansas", method: "brackets", std: 2400, brackets: [{ over: 0, rate: 0.02 }, { over: 5240, rate: 0.04 }, { over: 10580, rate: 0.044 }] },
  CA: { name: "California", method: "brackets", std: 5690, brackets: [{ over: 0, rate: 0.01 }, { over: 10700, rate: 0.02 }, { over: 25350, rate: 0.04 }, { over: 40020, rate: 0.06 }, { over: 55540, rate: 0.08 }, { over: 70200, rate: 0.093 }, { over: 358570, rate: 0.103 }, { over: 430270, rate: 0.113 }, { over: 717120, rate: 0.123 }] },
  CO: { name: "Colorado", method: "flat", flat: 0.044, std: 0 },
  CT: { name: "Connecticut", method: "brackets", std: 0, brackets: [{ over: 0, rate: 0.02 }, { over: 10270, rate: 0.045 }, { over: 51350, rate: 0.055 }, { over: 102700, rate: 0.06 }, { over: 205400, rate: 0.065 }, { over: 256750, rate: 0.069 }, { over: 513500, rate: 0.0699 }] },
  DE: { name: "Delaware", method: "brackets", std: 3340, brackets: [{ over: 2055, rate: 0.022 }, { over: 5135, rate: 0.039 }, { over: 10270, rate: 0.048 }, { over: 20540, rate: 0.052 }, { over: 25675, rate: 0.0555 }, { over: 61620, rate: 0.066 }] },
  FL: { name: "Florida", method: "none" },
  GA: { name: "Georgia", method: "flat", flat: 0.0539, std: 16100 },
  HI: { name: "Hawaii", method: "brackets", std: 4520, brackets: [{ over: 0, rate: 0.014 }, { over: 2465, rate: 0.032 }, { over: 4930, rate: 0.055 }, { over: 9860, rate: 0.064 }, { over: 14790, rate: 0.068 }, { over: 19720, rate: 0.072 }, { over: 24650, rate: 0.076 }, { over: 36975, rate: 0.079 }, { over: 49300, rate: 0.0825 }, { over: 154050, rate: 0.09 }, { over: 179725, rate: 0.10 }, { over: 205400, rate: 0.11 }] },
  ID: { name: "Idaho", method: "flat", flat: 0.058, std: 16100 },
  IL: { name: "Illinois", method: "flat", flat: 0.0495, std: 0 },
  IN: { name: "Indiana", method: "flat", flat: 0.0305, std: 0 },
  IA: { name: "Iowa", method: "flat", flat: 0.038, std: 0 },
  KS: { name: "Kansas", method: "brackets", std: 3595, brackets: [{ over: 0, rate: 0.031 }, { over: 15400, rate: 0.0525 }, { over: 30810, rate: 0.057 }] },
  KY: { name: "Kentucky", method: "flat", flat: 0.04, std: 3250 },
  LA: { name: "Louisiana", method: "brackets", std: 0, brackets: [{ over: 0, rate: 0.0185 }, { over: 12840, rate: 0.035 }, { over: 51350, rate: 0.0425 }] },
  ME: { name: "Maine", method: "brackets", std: 16100, brackets: [{ over: 0, rate: 0.058 }, { over: 26750, rate: 0.0675 }, { over: 63265, rate: 0.0715 }] },
  MD: { name: "Maryland", method: "brackets", std: 2620, brackets: [{ over: 0, rate: 0.02 }, { over: 1030, rate: 0.03 }, { over: 2055, rate: 0.04 }, { over: 3080, rate: 0.0475 }, { over: 102700, rate: 0.05 }, { over: 128375, rate: 0.0525 }, { over: 154050, rate: 0.055 }, { over: 256750, rate: 0.0575 }] },
  MA: { name: "Massachusetts", method: "flat", flat: 0.05, std: 0 },
  MI: { name: "Michigan", method: "flat", flat: 0.0405, std: 0 },
  MN: { name: "Minnesota", method: "brackets", std: 14970, brackets: [{ over: 0, rate: 0.0535 }, { over: 32545, rate: 0.068 }, { over: 106900, rate: 0.0785 }, { over: 188290, rate: 0.0985 }] },
  MS: { name: "Mississippi", method: "flat", flat: 0.047, std: 2360 },
  MO: { name: "Missouri", method: "flat", flat: 0.047, std: 16100 },
  MT: { name: "Montana", method: "brackets", std: 5885, brackets: [{ over: 0, rate: 0.01 }, { over: 3700, rate: 0.02 }, { over: 6680, rate: 0.03 }, { over: 10375, rate: 0.04 }, { over: 14070, rate: 0.05 }, { over: 18075, rate: 0.06 }, { over: 23315, rate: 0.065 }] },
  NE: { name: "Nebraska", method: "brackets", std: 0, brackets: [{ over: 0, rate: 0.0246 }, { over: 3800, rate: 0.0351 }, { over: 22770, rate: 0.0501 }, { over: 36700, rate: 0.0584 }] },
  NV: { name: "Nevada", method: "none" },
  NH: { name: "New Hampshire", method: "none" },
  NJ: { name: "New Jersey", method: "brackets", std: 0, brackets: [{ over: 0, rate: 0.014 }, { over: 20540, rate: 0.0175 }, { over: 35945, rate: 0.035 }, { over: 41080, rate: 0.05525 }, { over: 77025, rate: 0.0637 }, { over: 513500, rate: 0.0897 }, { over: 1027000, rate: 0.1075 }] },
  NM: { name: "New Mexico", method: "brackets", std: 16100, brackets: [{ over: 0, rate: 0.017 }, { over: 5650, rate: 0.032 }, { over: 11300, rate: 0.047 }, { over: 16430, rate: 0.049 }, { over: 215700, rate: 0.059 }] },
  NY: { name: "New York", method: "brackets", std: 8730, brackets: [{ over: 0, rate: 0.04 }, { over: 8730, rate: 0.045 }, { over: 12015, rate: 0.0525 }, { over: 14275, rate: 0.055 }, { over: 82830, rate: 0.06 }, { over: 221215, rate: 0.0685 }, { over: 1106665, rate: 0.0965 }, { over: 5135000, rate: 0.103 }, { over: 25675000, rate: 0.109 }] },
  NC: { name: "North Carolina", method: "flat", flat: 0.0475, std: 16100 },
  ND: { name: "North Dakota", method: "flat", flat: 0.019, std: 0 },
  OH: { name: "Ohio", method: "flat", flat: 0.035, std: 0 },
  OK: { name: "Oklahoma", method: "brackets", std: 6520, brackets: [{ over: 0, rate: 0.0025 }, { over: 1030, rate: 0.0075 }, { over: 2570, rate: 0.0175 }, { over: 3850, rate: 0.0275 }, { over: 5035, rate: 0.0375 }, { over: 7395, rate: 0.0475 }] },
  OR: { name: "Oregon", method: "brackets", std: 2820, brackets: [{ over: 0, rate: 0.0475 }, { over: 4415, rate: 0.0675 }, { over: 11040, rate: 0.0875 }, { over: 128375, rate: 0.099 }] },
  PA: { name: "Pennsylvania", method: "flat", flat: 0.0307, std: 0 },
  RI: { name: "Rhode Island", method: "brackets", std: 10835, brackets: [{ over: 0, rate: 0.0375 }, { over: 79540, rate: 0.0475 }, { over: 180820, rate: 0.0599 }] },
  SC: { name: "South Carolina", method: "brackets", std: 16100, brackets: [{ over: 0, rate: 0.0 }, { over: 3555, rate: 0.03 }, { over: 17800, rate: 0.064 }] },
  SD: { name: "South Dakota", method: "none" },
  TN: { name: "Tennessee", method: "none" },
  TX: { name: "Texas", method: "none" },
  UT: { name: "Utah", method: "flat", flat: 0.0465, std: 0 },
  VT: { name: "Vermont", method: "brackets", std: 7395, brackets: [{ over: 0, rate: 0.0335 }, { over: 46625, rate: 0.066 }, { over: 113025, rate: 0.076 }, { over: 235755, rate: 0.0875 }] },
  VA: { name: "Virginia", method: "brackets", std: 4620, brackets: [{ over: 0, rate: 0.02 }, { over: 3080, rate: 0.03 }, { over: 5135, rate: 0.05 }, { over: 17460, rate: 0.0575 }] },
  WA: { name: "Washington", method: "none" },
  WV: { name: "West Virginia", method: "brackets", std: 0, brackets: [{ over: 0, rate: 0.0236 }, { over: 10270, rate: 0.0315 }, { over: 25675, rate: 0.0354 }, { over: 41080, rate: 0.0472 }, { over: 61620, rate: 0.0512 }] },
  WI: { name: "Wisconsin", method: "brackets", std: 13590, brackets: [{ over: 0, rate: 0.0354 }, { over: 14705, rate: 0.0465 }, { over: 29410, rate: 0.0530 }, { over: 323820, rate: 0.0765 }] },
  WY: { name: "Wyoming", method: "none" },
  DC: { name: "District of Columbia", method: "brackets", std: 16100, brackets: [{ over: 0, rate: 0.04 }, { over: 10270, rate: 0.06 }, { over: 41080, rate: 0.065 }, { over: 61620, rate: 0.085 }, { over: 256750, rate: 0.0925 }, { over: 513500, rate: 0.0975 }, { over: 1027000, rate: 0.1075 }] },
};

// Dropdown list, sorted by state name.
export const STATE_OPTIONS: Array<{ code: string; name: string }> = Object.entries(STATES)
  .map(([code, rule]) => ({ code, name: rule.name }))
  .sort((a, b) => a.name.localeCompare(b.name));

function marginalFromBrackets(taxable: number, brackets: Bracket[]): number {
  let rate = 0;
  for (const b of brackets) {
    if (taxable >= b.over) rate = b.rate;
    else break;
  }
  return rate;
}

export function federalMarginalRate(annualGross: number): number {
  const taxable = Math.max(0, annualGross - FEDERAL_STD_DEDUCTION_SINGLE);
  if (taxable <= 0) return 0;
  return marginalFromBrackets(taxable, FEDERAL_BRACKETS_SINGLE);
}

export function stateMarginalRate(code: string, annualGross: number): number {
  const s = STATES[code];
  if (!s || s.method === "none") return 0;
  const taxable = Math.max(0, annualGross - (s.method === "flat" ? s.std : s.std));
  if (taxable <= 0) return 0;
  if (s.method === "flat") return s.flat;
  return marginalFromBrackets(taxable, s.brackets);
}

export function ficaRate(annualGross: number): number {
  return annualGross <= SS_WAGE_BASE ? FICA_TOTAL : MEDICARE_ONLY;
}

export interface SavingsInputs {
  employees: number;
  annualGrossPerEmployee: number;
  annualPretaxPerEmployee: number;
  stateCode: string;
}

export interface SavingsResult {
  employeeTaxRate: number;       // FICA + federal + state marginal, as a decimal
  ficaRateUsed: number;
  federalRate: number;
  stateRate: number;
  annualPretaxPerEmployee: number;
  // Per employee, net of the admin fee each side pays
  employerNetPerEmployee: number;
  employeeNetPerEmployee: number;
  // Team totals
  employerNetTeam: number;
  employeeNetTeam: number;
  adminFeeTeam: number;
  netCombinedTeam: number;
}

export function computeSavings(input: SavingsInputs): SavingsResult {
  const { employees, annualGrossPerEmployee, annualPretaxPerEmployee, stateCode } = input;
  const federalRate = federalMarginalRate(annualGrossPerEmployee);
  const stateRate = stateMarginalRate(stateCode, annualGrossPerEmployee);
  const ficaRateUsed = ficaRate(annualGrossPerEmployee);
  const employeeTaxRate = ficaRateUsed + federalRate + stateRate;

  const employerGrossPerEmployee = annualPretaxPerEmployee * ficaRateUsed;
  const employerFeePerEmployee = annualPretaxPerEmployee * EMPLOYER_FEE_RATE;
  const employerNetPerEmployee = employerGrossPerEmployee - employerFeePerEmployee;

  const employeeGrossPerEmployee = annualPretaxPerEmployee * employeeTaxRate;
  const employeeFeePerEmployee = annualPretaxPerEmployee * EMPLOYEE_FEE_RATE;
  const employeeNetPerEmployee = employeeGrossPerEmployee - employeeFeePerEmployee;

  const employerNetTeam = employerNetPerEmployee * employees;
  const employeeNetTeam = employeeNetPerEmployee * employees;
  const adminFeeTeam = annualPretaxPerEmployee * ADMIN_FEE_RATE * employees;
  const netCombinedTeam = employerNetTeam + employeeNetTeam;

  return {
    employeeTaxRate,
    ficaRateUsed,
    federalRate,
    stateRate,
    annualPretaxPerEmployee,
    employerNetPerEmployee,
    employeeNetPerEmployee,
    employerNetTeam,
    employeeNetTeam,
    adminFeeTeam,
    netCombinedTeam,
  };
}
