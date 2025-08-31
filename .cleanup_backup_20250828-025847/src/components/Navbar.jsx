import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const base = "px-4 py-2 rounded-2xl hover:opacity-90 transition-colors";
  const active = ({ isActive }) =>
    (isActive ? "bg-logoGreen text-white " : "text-charcoal hover:bg-stone ") + base;

  return (
    <header className="sticky top-0 z-50 bg-sand/80 backdrop-blur border-b border-stone">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl text-navy">
          <span className="inline-block w-3 h-6 bg-logoGreen rounded-sm" aria-hidden />
          Benefit Builder
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/services" className={active}>Services</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

