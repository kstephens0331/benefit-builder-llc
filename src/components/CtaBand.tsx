import { Link } from "react-router-dom";
export default function CtaBand() {
  return (
    <section className="bg-brand-navy" aria-label="Final call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-2xl text-white">Ready to align benefits with growth?</h3>
          <p className="text-white/85 mt-1">We’ll tailor everything to your goals and workforce.</p>
        </div>
        <Link to="/contact" className="rounded-md bg-white text-brand-navy font-semibold px-6 py-3 hover:opacity-90">Contact Us</Link>
      </div>
    </section>
  );
}
