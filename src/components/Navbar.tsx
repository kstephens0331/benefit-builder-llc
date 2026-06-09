import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/platform", label: "Platform" },
  { to: "/compliance", label: "Compliance" },
  { to: "/savings-calculator", label: "Calculator" },
  { to: "/about", label: "About" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const base = "px-3 py-2 rounded-md text-sm font-medium";
  const active = "!text-white bg-brand-green";

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-brand-stone">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[80px] py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="shrink-0" aria-label="Benefit Builder, Home">
            <img
              src="/images/benefit-builder-logo.png"
              alt="Benefit Builder LLC"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
          </Link>
          <div className="font-heading text-lg md:text-xl tracking-wide text-brand-navy">
            Benefit Builder LLC
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((x) => (
            <NavLink
              key={x.to}
              to={x.to}
              end={x.to === "/"}
              className={({ isActive }) =>
                `${base} text-brand-charcoal hover:bg-brand-stone/60 ${isActive ? active : ""}`
              }
            >
              {x.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-charcoal hover:bg-brand-stone/60"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-brand-stone bg-white">
          <ul className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-1">
            {LINKS.map((x) => (
              <li key={x.to}>
                <NavLink
                  to={x.to}
                  end={x.to === "/"}
                  className={({ isActive }) =>
                    `block ${base} text-brand-charcoal hover:bg-brand-stone/60 ${isActive ? active : ""}`
                  }
                >
                  {x.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
