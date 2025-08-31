export default function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "We learn your goals, population, and budget."},
    { n: "02", t: "Design", d: "Benchmark options and model total cost & impact."},
    { n: "03", t: "Launch", d: "Clear rollout, enrollment, and ongoing support."},
  ];
  return (
    <section className="section bg-stone/40">
      <div className="container">
        <h2 className="text-3xl mb-6">How we work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(s=>(
            <div className="card" key={s.n}>
              <div className="text-logoGreen font-heading text-sm">{s.n}</div>
              <h3 className="font-heading text-xl text-navy">{s.t}</h3>
              <p className="text-charcoal/80 mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
