// functions/api/contact.ts
// Validates input, anti-spam (honeypot + timing + content filter),
// optional Turnstile verification, and email via Resend.

// NOTE: We avoid annotating with PagesFunction to prevent DOM vs Workers type clashes.

export interface Env {
  RESEND_API_KEY: string;
  MAIL_FROM: string;   // e.g., "noreply@yourdomain"
  MAIL_TO: string;     // e.g., "jamietrauth.bb@gmail.com"
  TURNSTILE_SECRET_KEY?: string; // optional
}

type Body = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  company_website?: string;          // honeypot
  cf_turnstile_response?: string;    // optional token
  submittedMs?: number;              // client elapsed time
};

export const onRequestPost = async (
  { request, env }: { request: Request; env: Env }
): Promise<Response> => {
  try {
    const body = (await request.json()) as Body;

    // Basic validation
    const required = ["name", "email", "message"] as const;
    for (const k of required) {
      if (!(body as any)[k]) return json({ error: `Missing ${k}.` }, 400);
    }

    // Honeypot
    if (body.company_website && body.company_website.trim().length > 0) {
      return json({ error: "Spam detected." }, 400);
    }

    // Velocity check (too fast == bot). Require at least 3 seconds.
    const elapsed = typeof body.submittedMs === "number" ? body.submittedMs : 0;
    if (elapsed > 0 && elapsed < 3000) {
      return json({ error: "Submission too fast." }, 400);
    }

    // Simple content filters
    const msg = `${body.message}`.toLowerCase();
    const banned = ["http://", "https://", "viagra", "crypto wallet", "porn", "seo backlinks"];
    if (banned.some((t) => msg.includes(t))) {
      return json({ error: "Blocked content." }, 400);
    }

    // Optional Turnstile verification
    if (env.TURNSTILE_SECRET_KEY) {
      const token = body.cf_turnstile_response || "";
      const ip = request.headers.get("cf-connecting-ip") || "";
      const verifyResp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: ip,
        }),
        headers: { "content-type": "application/x-www-form-urlencoded" },
      });
      const verify = (await verifyResp.json()) as any;
      if (!verify?.success) {
        return json({ error: "Turnstile verification failed." }, 400);
      }
    }

    // Compose email
    const subject = `New inquiry — ${body.name} (${body.company || "no company"})`;
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${escapeHtml(body.name)}</p>
      <p><b>Company:</b> ${escapeHtml(body.company || "")}</p>
      <p><b>Email:</b> ${escapeHtml(body.email)}</p>
      <p><b>Phone:</b> ${escapeHtml(body.phone || "")}</p>
      <p><b>Message:</b><br/>${escapeHtml(body.message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color:#888">Anti-spam: elapsed=${elapsed}ms</p>
    `;

    // Send via Resend
    const sendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.MAIL_FROM,
        to: env.MAIL_TO,
        subject,
        html,
      }),
    });

    if (!sendRes.ok) {
      const text = await sendRes.text();
      return json({ error: `Email send failed: ${text}` }, 500);
    }

    return json({ ok: true });
  } catch (e: any) {
    return json({ error: e?.message || "Server error." }, 500);
  }
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Regex replacements (no String.prototype.replaceAll requirement)
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
