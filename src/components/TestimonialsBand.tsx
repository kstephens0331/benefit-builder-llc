export default function TestimonialsBand() {
  const quotes = [
    { q:"Clear guidance and real savings—our team finally understands their benefits.", a:"HR Director, Healthcare" },
    { q:"Better coverage and lower costs made recruiting noticeably easier.", a:"COO, Manufacturing" }
  ];
  return (
    <section className="bg-white border-y border-brand-stone" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
        {quotes.map((x,i)=>(
          <figure key={i} className="rounded-xl p-6 bg-brand-sand/50">
            <blockquote className="text-brand-charcoal/90">“{x.q}”</blockquote>
            <figcaption className="mt-3 text-sm text-brand-navy font-semibold">— {x.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
