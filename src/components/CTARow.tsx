import { Link } from "react-router-dom";
type CTAProps = { primaryTo?: string; primaryLabel: string; secondaryTo?: string; secondaryLabel?: string; align?: "left"|"center"; };
export default function CTARow({ primaryTo="/contact", primaryLabel, secondaryTo, secondaryLabel, align="left" }: CTAProps) {
  return (
    <div className={`w-full mt-8 ${align==="center"?"text-center":""}`}>
      <div className={`flex flex-wrap gap-3 ${align==="center"?"justify-center":""}`}>
        <Link to={primaryTo} className="inline-flex items-center rounded-md bg-brand-green px-6 py-3 text-white font-semibold hover:opacity-90">
          {primaryLabel}
        </Link>
        {secondaryTo && secondaryLabel && (
          <Link to={secondaryTo} className="inline-flex items-center rounded-md bg-white px-6 py-3 text-brand-navy font-semibold border border-brand-stone hover:bg-white/70">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
