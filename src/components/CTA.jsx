export default function CTA() {
  return (
    <section className="section">
      <div className="container card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl text-navy">Ready to make benefits a growth lever?</h2>
          <p className="text-charcoal/80">Quick discovery call. No pressure — just clarity.</p>
        </div>
        <a href="/contact" className="btn-primary">Book a consult</a>
      </div>
    </section>
  );
}
