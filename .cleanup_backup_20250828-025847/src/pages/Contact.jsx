import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "../components/Layout.jsx";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const tsStart = useRef(Date.now());
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY; // optional

  useEffect(() => {
    if (!siteKey) return;
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, [siteKey]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending…");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.ts = tsStart.current;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) throw new Error(data.error || "Failed");
      setStatus("Thanks — we’ll reply shortly.");
      e.currentTarget.reset();
      const w = document.querySelector(".cf-turnstile");
      if (w && window.turnstile) window.turnstile.reset(w);
    } catch (err) {
      setStatus("There was a problem. Please try again.");
    }
  }

  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>Contact — Benefit Builder</title>
          <meta name="description" content="Get in touch with Benefit Builder LLC." />
        </Helmet>
        <h1 className="font-heading text-3xl text-navy mb-6">Contact</h1>

        <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
          {/* Honeypot */}
          <input type="text" name="honeypot" autoComplete="off" tabIndex="-1" className="hidden" aria-hidden="true" />

          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input name="name" required className="rounded-2xl border border-stone bg-white px-4 py-3" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input type="email" name="email" required className="rounded-2xl border border-stone bg-white px-4 py-3" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Phone (optional)</span>
            <input name="phone" className="rounded-2xl border border-stone bg-white px-4 py-3" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea name="message" rows="5" required className="rounded-2xl border border-stone bg-white px-4 py-3" />
          </label>

          {siteKey && (
            <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
          )}

          <button className="bg-logoGreen text-white rounded-2xl px-5 py-3 shadow-soft" type="submit">
            Send
          </button>

          {status && <p className="text-sm text-charcoal/70">{status}</p>}
        </form>

        <div className="mt-8 text-sm text-charcoal/80">
          <p><strong>Email:</strong> <a className="underline" href="mailto:jamietrauth.bb@gmail.com">jamietrauth.bb@gmail.com</a></p>
          <p><strong>Phone:</strong> 936-232-6881</p>
          <p><strong>Address:</strong> 14132 FM 1097 Rd West, Suite #300, PMB #164, Willis, TX 77318</p>
        </div>
      </Layout>
    </HelmetProvider>
  );
}

