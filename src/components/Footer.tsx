export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-stone bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-heading text-lg text-brand-navy">Benefit Builder LLC</div>
          <p className="mt-2 text-brand-charcoal/80">Where Benefits Meet Growth.</p>
        </div>
        <div>
          <div className="font-semibold text-brand-charcoal">Contact</div>
          <p className="mt-2">Jamie Trauth</p>
          <p><a className="underline text-brand-green" href="mailto:jamietrauth.bb@gmail.com">jamietrauth.bb@gmail.com</a> · 936-232-6881</p>
        </div>
        <div>
          <div className="font-semibold text-brand-charcoal">Address</div>
          <p className="mt-2">14132 FM 1097 Rd West, Suite #300, PMB #164<br/>Willis, TX 77318</p>
        </div>
      </div>
    </footer>
  );
}
