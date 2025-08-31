export default function ProcessTimeline() {
  const steps = [
    { n:"01", t:"Discovery", d:"Understand your workforce, goals, and current pressures." },
    { n:"02", t:"Design", d:"Model options balancing coverage, cost, and participation." },
    { n:"03", t:"Enrollment", d:"Human-first communications and guided onboarding." },
    { n:"04", t:"Support", d:"Renewals, vendor reviews, and compliance check-ins." }
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="font-heading text-3xl text-brand-navy">How It Works</h2>
      <ol className="mt-8 grid gap-6 md:grid-cols-4">
        {steps.map(s=>(
          <li key={s.n} className="rounded-xl border border-brand-stone bg-white p-6">
            <div className="text-brand-green font-semibold">{s.n}</div>
            <div className="font-heading text-brand-navy mt-2">{s.t}</div>
            <p className="text-sm text-brand-charcoal/80 mt-2">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
