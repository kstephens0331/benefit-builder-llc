export default function FAQ() {
  const faqs = [
    { q: "Will this be complicated for HR?", a: "No — we set up enrollment, communications, and documentation. Your team gets a simple checklist and we handle the heavy lift." },
    { q: "Can this work with our current benefits?", a: "Yes. We complement what you already offer and make changes only where they help." },
    { q: "How do we measure success?", a: "We define success up front (participation, employee satisfaction, total cost) and review after enrollment and at renewal." }
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl mb-6">FAQs, answered simply</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {faqs.map(f=>(
            <div key={f.q} className="card">
              <h3 className="font-heading text-navy text-lg">{f.q}</h3>
              <p className="mt-2 text-charcoal/80">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
