import { useMemo, useState } from "react";
import Seo from "../lib/seo/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { findRoute } from "../lib/seo/routes";
import { webApplication, webPage, breadcrumbList } from "../lib/seo/jsonld";
import {
  STATE_OPTIONS,
  computeSavings,
  EMPLOYEE_FEE_RATE,
  EMPLOYER_FEE_RATE,
} from "../lib/tax/savings2026";

type Frequency = "weekly" | "biweekly" | "semimonthly" | "monthly";

const FREQUENCY_PERIODS: Record<Frequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
};

// Internal Section 125 monthly benefit basis. Intentionally NOT a visible input
// and not shown anywhere on the page, so the underlying model cannot be read off
// the calculator and reverse-engineered.
const SEC125_MONTHLY = 800;

function formatUSD(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    Math.round(n),
  );
}

function formatPct(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

export default function SavingsCalculator() {
  const r = findRoute("/savings-calculator")!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Savings Calculator", href: "/savings-calculator" },
  ];
  const breadcrumb = breadcrumbList(crumbs);

  const [employees, setEmployees] = useState(50);
  const [avgGross, setAvgGross] = useState(2500);
  const [frequency, setFrequency] = useState<Frequency>("biweekly");
  const [stateCode, setStateCode] = useState("TX");

  const result = useMemo(() => {
    const periods = FREQUENCY_PERIODS[frequency];
    const annualGrossPerEmployee = avgGross * periods;
    const monthlyGross = annualGrossPerEmployee / 12;
    // The Section 125 benefit is a flat monthly amount. An employee whose monthly
    // pay is below that amount cannot fund it, so savings are zero below the
    // threshold; at or above it, the flat benefit applies. The tax bracket itself
    // is driven by the annualized period pay inside computeSavings.
    const monthlyPretax = monthlyGross >= SEC125_MONTHLY ? SEC125_MONTHLY : 0;
    return computeSavings({
      employees,
      annualGrossPerEmployee,
      annualPretaxPerEmployee: monthlyPretax * 12,
      stateCode,
    });
  }, [employees, avgGross, frequency, stateCode]);

  return (
    <>
      <Seo
        title={r.title}
        description={r.description}
        path={r.path}
        image={r.ogImage}
        jsonLd={[
          webApplication({
            name: "Section 125 Savings Calculator",
            description: r.description,
            url: `https://benefitbuilderllc.com${r.path}`,
            applicationCategory: "FinanceApplication",
          }),
          webPage({ name: r.title, description: r.description, url: `https://benefitbuilderllc.com${r.path}`, breadcrumb }),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm uppercase tracking-wide text-brand-green font-semibold">Savings calculator</p>
        <h1 className="font-heading text-4xl md:text-5xl text-brand-navy mt-2">
          Estimate Your Section 125 Savings
        </h1>
        <p className="mt-4 max-w-3xl text-brand-charcoal/90 text-lg">
          Enter your headcount, average gross pay, pay frequency, and state. We show the estimated
          annual savings for both the employer and employees, net of our 8% administration fee. No
          signup required.
        </p>
      </section>

      <section className="bg-white border-y border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 lg:grid-cols-2">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()} aria-label="Savings calculator inputs">
            <Field
              id="employees"
              label="Number of enrolled employees"
              type="number"
              min={1}
              value={employees}
              onChange={(v) => setEmployees(Math.max(1, Number(v) || 0))}
            />
            <Field
              id="avgGross"
              label="Average gross pay per period"
              type="number"
              min={0}
              step="50"
              value={avgGross}
              onChange={(v) => setAvgGross(Math.max(0, Number(v) || 0))}
            />
            <div>
              <label htmlFor="frequency" className="block text-sm font-semibold text-brand-charcoal">
                Pay frequency
              </label>
              <select
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as Frequency)}
                className="mt-2 w-full rounded border border-brand-stone bg-white px-3 py-2"
              >
                <option value="weekly">Weekly (52 periods)</option>
                <option value="biweekly">Bi-weekly (26 periods)</option>
                <option value="semimonthly">Semi-monthly (24 periods)</option>
                <option value="monthly">Monthly (12 periods)</option>
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-brand-charcoal">
                State
              </label>
              <select
                id="state"
                value={stateCode}
                onChange={(e) => setStateCode(e.target.value)}
                className="mt-2 w-full rounded border border-brand-stone bg-white px-3 py-2"
              >
                {STATE_OPTIONS.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <div className="rounded-lg border border-brand-stone bg-brand-sand/30 p-6">
            <h2 className="font-heading text-2xl text-brand-navy">Estimated annual savings</h2>
            <p className="mt-1 text-sm text-brand-charcoal/70">
              Net of the 8% administration fee ({formatPct(EMPLOYEE_FEE_RATE)} employee,{" "}
              {formatPct(EMPLOYER_FEE_RATE)} employer). Estimates assume single filing status with 0 dependents.
            </p>
            <dl className="mt-6 space-y-4">
              <Row
                label="Employee tax savings rate (FICA + federal + state)"
                value={formatPct(result.employeeTaxRate)}
              />
              <Row label="Employer net savings (total team)" value={formatUSD(result.employerNetTeam)} highlight />
              <Row label="Employee net savings (total team)" value={formatUSD(result.employeeNetTeam)} highlight />
              <Row label="Net combined savings (total team)" value={formatUSD(result.netCombinedTeam)} highlight />
            </dl>
            <p className="mt-6 text-xs text-brand-charcoal/70">
              Estimate. The employee figure uses the 7.65% FICA rate plus a single-filer federal marginal
              rate and your state income tax rate for 2026; the employer figure uses the 7.65% FICA rate.
              Both are shown net of our 8% administration fee. Actual results vary with filing status,
              dependents, the Social Security wage base ($184,500 for 2026), and local taxes. Contact us
              for a precise quote tailored to your roster.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type,
  min,
  step,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  min?: number;
  step?: string;
  value: number;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-brand-charcoal">
        {label}
      </label>
      <input
        id={id}
        type={type}
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded border border-brand-stone bg-white px-3 py-2"
      />
    </div>
  );
}

function Row({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-sm text-brand-charcoal/80">{label}</dt>
      <dd className={highlight ? "text-2xl font-bold text-brand-green" : "text-base text-brand-charcoal"}>{value}</dd>
    </div>
  );
}
