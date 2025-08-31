export default function Footer() {
  return (
    <footer className="mt-16 border-t border-stone bg-sand">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-charcoal/80">
        <p className="font-heading text-lg text-navy mb-2">Benefit Builder LLC</p>
        <p>14132 FM 1097 Rd West, Suite #300, PMB #164, Willis, TX 77318</p>
        <p><a className="underline" href="mailto:jamietrauth.bb@gmail.com">jamietrauth.bb@gmail.com</a> · 936-232-6881</p>
        <p className="mt-4">&copy; {new Date().getFullYear()} Benefit Builder. All rights reserved.</p>
      </div>
    </footer>
  );
}
