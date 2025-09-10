import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Small inline icon for the success notice
function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} />
      <path d="M8.5 12.5 11 15l4.5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email."),
  phone: z.string().optional(),
  message: z.string().min(10, "A few more details will help."),
  company_website: z.string().max(0, "Leave this field blank."), // honeypot
  cf_turnstile_response: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ ok: boolean; msg: string } | null>(null);
  const startRef = useRef<number>(Date.now());

  // For smooth UX on success
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const noticeRef = useRef<HTMLDivElement | null>(null);

  // Optional Turnstile (renders if window.TURNSTILE_SITE_KEY is defined)
  const [turnstileReady, setTurnstileReady] = useState(false);
  useEffect(() => {
    const id = "cf-turnstile";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    s.defer = true;
    s.onload = () => setTurnstileReady(true);
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    if (done?.ok) {
      // Scroll the thank-you into view and focus it for screen readers
      setTimeout(() => {
        noticeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        noticeRef.current?.focus();
      }, 50);
      // Lightweight analytics hook (optional)
      try {
        window.dispatchEvent(new CustomEvent("contact:submitted", { detail: { ts: Date.now() } }));
      } catch {}
    }
  }, [done?.ok]);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setDone(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company ?? "",
          email: data.email,
          phone: data.phone ?? "",
          message: data.message,
          honeypot: data.company_website ?? "",
          elapsedMs: Date.now() - startRef.current,
          cf_turnstile_response:
            (document.getElementById("cf-turnstile-token") as HTMLInputElement | null)?.value ||
            data.cf_turnstile_response ||
            "",
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (res.ok && (json as any)?.ok) {
        setDone({ ok: true, msg: "Thank you — we received your message. We’ll be in touch within one business day." });
        reset();
      } else {
        const msg = (json as any)?.error || "Something went wrong sending your message. Please try again.";
        setDone({ ok: false, msg });
      }
    } catch {
      setDone({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={wrapperRef}>
      {/* Professional success notice */}
      {done?.ok && (
        <div
          ref={noticeRef}
          role="status"
          aria-live="polite"
          tabIndex={-1}
          className="mb-4 rounded-xl border border-brand-green bg-brand-green/10 p-4 focus:outline-none"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center text-brand-green">
              <CheckCircleIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold text-brand-navy">Thank you — message received.</p>
              <p className="mt-1 text-sm text-brand-charcoal/90">
                We’ll be in contact within one business day. If it’s urgent, call
                {" "}
                <a className="underline decoration-brand-stone hover:text-brand-navy" href="tel:+19362326881">(936) 232-6881</a>.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {/* Honeypot */}
        <div className="hidden">
          <label htmlFor="company_website">Company website</label>
          <input id="company_website" autoComplete="off" {...register("company_website")} />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-brand-navy" htmlFor="name">Full name</label>
            <input id="name" {...register("name")} className="mt-1 w-full rounded-lg border border-brand-stone bg-white px-3 py-2" />
            {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-brand-navy" htmlFor="company">Company (optional)</label>
            <input id="company" {...register("company")} className="mt-1 w-full rounded-lg border border-brand-stone bg-white px-3 py-2" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-brand-navy" htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email")} className="mt-1 w-full rounded-lg border border-brand-stone bg-white px-3 py-2" />
            {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-brand-navy" htmlFor="phone">Phone (optional)</label>
            <input id="phone" type="tel" {...register("phone")} className="mt-1 w-full rounded-lg border border-brand-stone bg-white px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-brand-navy" htmlFor="message">How can we help?</label>
          <textarea id="message" rows={5} {...register("message")} className="mt-1 w-full rounded-lg border border-brand-stone bg-white px-3 py-2" />
          {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message.message}</p>}
        </div>

        {/* Optional: Turnstile token host element */}
        <div className="mt-1">
          <div
            className="cf-turnstile"
            data-sitekey={(window as any).TURNSTILE_SITE_KEY || ""}
            data-callback="turnstileCallback"
          ></div>
          <input type="hidden" id="cf-turnstile-token" name="cf_turnstile_response" />
        </div>

        <div className="mt-2 flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-md bg-brand-green text-white font-semibold px-6 py-3 hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
          {done && !done.ok && (
            <p className="text-sm text-red-700">{done.msg}</p>
          )}
        </div>

        <p className="text-xs text-brand-charcoal/80 mt-2">
          By submitting, you agree to be contacted about your request. We respect your privacy and will not share your details.
        </p>
      </form>
    </div>
  );
}

// Turnstile global callback (optional)
declare global {
  interface Window { turnstile?: any; TURNSTILE_SITE_KEY?: string; }
}
(window as any).turnstileCallback = function (token: string) {
  const inp = document.getElementById("cf-turnstile-token") as HTMLInputElement | null;
  if (inp) inp.value = token;
};
