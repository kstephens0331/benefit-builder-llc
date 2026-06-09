import { Link } from "react-router-dom";
import Seo from "../lib/seo/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Benefit Builder LLC"
        description="The page you requested does not exist or may have moved."
        path="/404"
        noindex
      />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <h1 className="text-6xl font-bold text-brand-green mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-charcoal mb-2">Page Not Found</h2>
        <p className="text-brand-charcoal/70 mb-8 max-w-md">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          to="/"
          className="bg-brand-green hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
