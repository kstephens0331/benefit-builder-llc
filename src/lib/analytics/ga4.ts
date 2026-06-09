declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA4_ID: string | undefined = import.meta.env.VITE_GA4_ID;
const PROD_HOSTNAME = "benefitbuilderllc.com";

function shouldEnable(): boolean {
  if (typeof window === "undefined") return false;
  if (!GA4_ID) return false;
  if (window.location.hostname !== PROD_HOSTNAME) return false;
  return true;
}

let initialized = false;

export function initGA4(): void {
  if (initialized) return;
  if (!shouldEnable()) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID, { send_page_view: false, anonymize_ip: true });
}

export function trackPageview(path: string, title: string): void {
  if (!shouldEnable()) return;
  if (!window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}
