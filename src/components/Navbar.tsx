import { NavLink } from "react-router-dom";
import logo from "../../public/images/benefit-builder-logo.png"; // <-- add your logo file to /src/assets

export default function Navbar() {
  const base = "px-3 py-2 rounded-md text-sm font-medium";
  const active = "!text-white bg-brand-green";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-brand-stone">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left side (Logo + Company name) */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Benefit Builder LLC Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="font-heading text-lg tracking-wide text-brand-navy">
            Benefit Builder LLC
          </div>
        </div>

        {/* Right side (Navigation links) */}
        <div className="flex items-center gap-1">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((x) => (
            <NavLink
              key={x.to}
              to={x.to}
              className={({ isActive }) =>
                `${base} text-brand-charcoal hover:bg-brand-stone/60 ${
                  isActive ? active : ""
                }`
              }
            >
              {x.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
