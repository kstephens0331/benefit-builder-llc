import { useRef, useState } from "react";

export default function LeadCapture() {
  const [status, setStatus] = useState(null);
  const tsStart = useRef(Date.now());

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending…");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.ts = tsStart.current;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(()=>({}));
      if (!res.ok || data.error) throw new Error(data.error || "Failed");
      setStatus("Check your download below.");
      if (data.download) {
        const a = document.createElement("a");
        a.href = data.download;
        a.download = "Employer-Benefits-Checklist.pdf";
        document.body.appendChild(a); a.click(); a.remove();
      }
      e.currentTarget.reset();
    } catch (err) {
      setStatus("Please try again.");
    }
  }

  return (
    <section className="section">
      <div className="container card">
        <h2 className="font-heading text-2xl text-navy">Free: Employer Benefits Readiness Checklist</h2>
        <p className="text-charcoal/80 mt-1">A one-page PDF to prepare for a smooth, low-stress rollout.</p>
        <form onSubmit={submit} className="mt-4 grid md:grid-cols-[1fr_auto] gap-3">
          {/* Honeypot */}
          <input type="text" name="honeypot" autoComplete="off" tabIndex="-1" className="hidden" aria-hidden="true" />
          <input className="rounded-2xl border border-stone bg-white px-4 py-3" name="name" placeholder="Your name (optional)" />
          <div className="grid md:grid-cols-[1fr_auto] gap-3 md:col-span-2">
            <input className="rounded-2xl border border-stone bg-white px-4 py-3" name="email" type="email" required placeholder="Work email" />
            <button className="btn-primary" type="submit">Get the PDF</button>
          </div>
          {status && <p className="text-sm text-charcoal/70 md:col-span-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
