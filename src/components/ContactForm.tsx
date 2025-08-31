import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema
const FormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email."),
  phone: z.string().optional(),
  message: z.string().min(10, "A few more details will help."),
  // honeypot (should be empty)
  company_website: z.string().max(0, "Leave this field blank."),
  // turnstile token (optional)
  cf_turnstile_response: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const startRef = useRef<number>(Date.now());
  const [done, setDone] = useState<null | { ok: boolean; msg: string }>(null);
  const [loading, setLoading] = useState(false);
  const [turnstileReady, setTurnstileReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      company_website: "", // honeypot
    },
  });

  // (Optional) Cloudflare Turnstile
  // Add VITE_TURNSTILE_SITE_KEY in your env to enable this.
  useEffect(() => {
    const key = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
    if (!key) return;
    // inject script once
    const id = "cf-turnstile";
    if (document.getElementById(id)) {
      setTurnstileReady(true);
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    s.defer = true;
    s.onload = () => setTurnstileReady(true);
    document.head.appendChild(s);
  }, []);

const onSubmit = async (data: FormValues) => {
  setLoading(true);
  setDone(null);
  try {
    const elapsedMs = Date.now() - startRef.current;
    const DEMO = (import.meta.env.VITE_CONTACT_DEMO || "0") === "1";

    if (DEMO) {
      // Local/demo mode: no server, just pretend success
      await new Promise((r) => setTimeout(r, 600));
      setDone({ ok: true, msg: "Thanks — we received your message (demo mode)." });
      reset();
      startRef.current = Date.now();
      return;
    }

    // Live mode: call Pages Function
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        submittedMs: elapsedMs,
      }),
    });

    const j = await res.json().catch(() => ({}));
    if (!res.ok) {
      setDone({ ok: false, msg: j?.error || "Something went wrong." });
      return;
    }
    setDone({ ok: true, msg: "Thanks — we received your message." });
    reset();
    startRef.current = Date.now();
    // @ts-ignore
    if (window.turnstile?.reset) window.turnstile.reset();
  } catch {
    setDone({ ok: false, msg: "Network error. Please try again." });
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-brand-stone bg-white p-6 md:p-8">
      <h2 className="font-heading text-2xl text-brand-navy">Send us a message</h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-brand-charcoal" htmlFor="name">Name</label>
          <input id="name" {...register("name")} className="mt-1 w-full rounded-md border border-brand-stone px-3 py-2" />
          {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-charcoal" htmlFor="company">Company (optional)</label>
          <input id="company" {...register("company")} className="mt-1 w-full rounded-md border border-brand-stone px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-charcoal" htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} className="mt-1 w-full rounded-md border border-brand-stone px-3 py-2" />
          {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-charcoal" htmlFor="phone">Phone (optional)</label>
          <input id="phone" type="tel" {...register("phone")} className="mt-1 w-full rounded-md border border-brand-stone px-3 py-2" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-brand-charcoal" htmlFor="message">Message</label>
          <textarea id="message" rows={6} {...register("message")} className="mt-1 w-full rounded-md border border-brand-stone px-3 py-2" />
          {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message.message}</p>}
        </div>
      </div>

      {/* Honeypot (hidden) */}
      <div className="hidden">
        <label htmlFor="company_website">Company Website</label>
        <input id="company_website" {...register("company_website")} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Turnstile widget (optional) */}
      {!!import.meta.env.VITE_TURNSTILE_SITE_KEY && turnstileReady && (
        <div className="mt-5">
          <div
            className="cf-turnstile"
            data-sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            data-callback="__bb_turnstile"
          />
          {/* bind to window so the token lands in our form field */}
          <input type="hidden" {...register("cf_turnstile_response")} id="cf_turnstile_response" />
          <script
            // inject a tiny handler to set the hidden input value
            dangerouslySetInnerHTML={{
              __html: `
              window.__bb_turnstile = function(token){
                var el = document.getElementById('cf_turnstile_response');
                if (el) el.value = token || '';
              };
            `,
            }}
          />
        </div>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center rounded-md bg-brand-green text-white font-semibold px-6 py-3 hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
        {done && (
          <p className={`mt-3 text-sm ${done.ok ? "text-brand-green" : "text-red-700"}`}>
            {done.msg}
          </p>
        )}
      </div>
    </form>
  );
}
