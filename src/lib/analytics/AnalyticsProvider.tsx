import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA4, trackPageview } from "./ga4";
import { initClarity } from "./clarity";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initGA4();
    initClarity();
  }, []);

  const location = useLocation();
  useEffect(() => {
    const title = typeof document !== "undefined" ? document.title : "";
    trackPageview(location.pathname + location.search, title);
  }, [location.pathname, location.search]);

  return <>{children}</>;
}
