export default function SavingsSnapshot() {
  const rows = [
    { label: "Employees", value: "42" },
    { label: "Annual employer savings (example)", value: "$18,900" },
    { label: "Participation range (typical)", value: "High when communicated well" }
  ];
  return (
    <section className="section bg-stone/40">
      <div className="container">
        <h2 className="text-3xl mb-2">A quick snapshot</h2>
        <p className="text-charcoal/80 mb-6 max-w-3xl">Every team is different — we model savings and participation with your real headcount, plan design, and goals.</p>
        <div className="card grid md:grid-cols-3 gap-6">
          {rows.map(r=>(
            <div key={r.label}>
              <div className="text-sm text-charcoal/70">{r.label}</div>
              <div className="text-xl font-heading text-navy">{r.value}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-charcoal/60 mt-3">We’ll share the assumptions behind any estimate so it’s easy to trust — and adjust.</p>
      </div>
    </section>
  );
}
