declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

const CLARITY_ID: string | undefined = import.meta.env.VITE_CLARITY_ID;
const PROD_HOSTNAME = "benefitbuilderllc.com";

function shouldEnable(): boolean {
  if (typeof window === "undefined") return false;
  if (!CLARITY_ID) return false;
  if (window.location.hostname !== PROD_HOSTNAME) return false;
  return true;
}

let initialized = false;

export function initClarity(): void {
  if (initialized) return;
  if (!shouldEnable()) return;
  initialized = true;

  (function (c: Window, l: Document, a: string, r: string, i: string) {
    const w = c as unknown as Record<string, unknown>;
    w[a] = w[a] || function (...args: unknown[]) {
      ((w[a] as { q?: unknown[] }).q = ((w[a] as { q?: unknown[] }).q || [])).push(args);
    };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    if (y && y.parentNode) y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID as string);
}
