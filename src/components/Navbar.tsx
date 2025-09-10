﻿import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base = "px-3 py-2 rounded-md text-sm font-medium";
  const active = "!text-white bg-brand-green";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-brand-stone">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo + Company */}
        <div className="flex items-center gap-3">
          <a href="/" className="shrink-0" aria-label="Benefit Builder — Home">
            <img
              src="/images/benefit-builder-logo.png"
              alt="Benefit Builder LLC"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </a>
          <div className="font-heading text-lg tracking-wide text-brand-navy">
            Benefit Builder LLC
          </div>
        </div>

        {/* Right: Links */}
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
