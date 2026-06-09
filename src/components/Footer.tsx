import { Link } from "react-router-dom";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE, EMAIL, ADDRESS } from "../lib/seo/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-brand-stone bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-heading text-lg text-brand-navy">{BUSINESS_NAME}</div>
          <p className="mt-2 text-brand-charcoal/80">Section 125 cafeteria plan administration. Texas-based, all-inclusive.</p>
          <p className="mt-3 text-brand-charcoal/80">
            {ADDRESS.street}<br />
            {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postal}
          </p>
        </div>

        <div>
          <div className="font-semibold text-brand-charcoal">Services</div>
          <ul className="mt-3 space-y-2">
            <li><Link className="hover:text-brand-green" to="/services">Services overview</Link></li>
            <li><Link className="hover:text-brand-green" to="/services/employers">For employers</Link></li>
            <li><Link className="hover:text-brand-green" to="/services/brokers">For brokers</Link></li>
            <li><Link className="hover:text-brand-green" to="/savings-calculator">Savings calculator</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-brand-charcoal">Company</div>
          <ul className="mt-3 space-y-2">
            <li><Link className="hover:text-brand-green" to="/platform">Platform</Link></li>
            <li><Link className="hover:text-brand-green" to="/compliance">Compliance</Link></li>
            <li><Link className="hover:text-brand-green" to="/about">About</Link></li>
            <li><Link className="hover:text-brand-green" to="/partners">Partners</Link></li>
            <li><Link className="hover:text-brand-green" to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-brand-charcoal">Contact</div>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="text-brand-green hover:underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a className="hover:text-brand-green" href={`tel:${PHONE}`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li><Link className="hover:text-brand-green" to="/contact">Contact form</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-stone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-charcoal/70">
          <div>&copy; {year} {BUSINESS_NAME}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-brand-green" to="/legal/privacy">Privacy Policy</Link>
            <Link className="hover:text-brand-green" to="/legal/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
