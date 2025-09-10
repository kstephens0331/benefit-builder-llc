// api/contact.ts — Vercel Serverless Function (no @vercel/node types required)
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  try {
    // Parse JSON body (Vercel usually parses for us; this covers both cases)
    const raw = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const {
      name = '',
      company = '',
      email = '',
      phone = '',
      message = '',
      honeypot = '',
      elapsedMs = 0,
      cf_turnstile_response = '',
    } = raw as Record<string, string | number>;

    // Simple validation
    const errors: string[] = [];
    if (typeof name !== 'string' || name.trim().length < 2) errors.push('name');
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('email');
    if (typeof message !== 'string' || message.trim().length < 10) errors.push('message');

    // Anti-spam (honeypot + timing)
    const ms = Number(elapsedMs) || 0;
    if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
      // Pretend success but drop the message
      res.status(200).json({ ok: true });
      return;
    }
    if (ms > 0 && ms < 1500) {
      // Too fast; likely bot
      res.status(429).json({ ok: false, error: 'Please try again.' });
      return;
    }

    if (errors.length) {
      res.status(400).json({ ok: false, error: 'Missing required fields.' });
      return;
    }

    // OPTIONAL: Cloudflare Turnstile verification (if TURNSTILE_SECRET_KEY is set)
    if (process.env.TURNSTILE_SECRET_KEY && typeof cf_turnstile_response === 'string' && cf_turnstile_response) {
      const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: cf_turnstile_response,
        }),
      }).then(r => r.json()).catch(() => ({ success: false }));
      if (!verify?.success) {
        res.status(400).json({ ok: false, error: 'Verification failed. Please try again.' });
        return;
      }
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const MAIL_FROM = process.env.MAIL_FROM; // e.g. "Website <noreply@yourdomain>"
    const MAIL_TO = process.env.MAIL_TO;     // e.g. "jamietrauth.bb@gmail.com"

    if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
      res.status(500).json({ ok: false, error: 'Server not configured.' });
      return;
    }

    // Compose email
    const subject = `New website inquiry from ${String(name).trim()}`;
    const clean = (s: any) => String(s || '').replace(/[<>&"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c] as string));
    const html =
      `<div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
        <h2 style="margin:0 0 12px">New Website Inquiry</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px;color:#555">Name:</td><td style="padding:4px 8px"><strong>${clean(name)}</strong></td></tr>
          <tr><td style="padding:4px 8px;color:#555">Company:</td><td style="padding:4px 8px">${clean(company)}</td></tr>
          <tr><td style="padding:4px 8px;color:#555">Email:</td><td style="padding:4px 8px">${clean(email)}</td></tr>
          <tr><td style="padding:4px 8px;color:#555">Phone:</td><td style="padding:4px 8px">${clean(phone)}</td></tr>
        </table>
        <p style="margin:16px 0 6px;color:#555">Message:</p>
        <pre style="white-space:pre-wrap;background:#f7f7f7;border:1px solid #e5e5e5;border-radius:8px;padding:12px">${clean(message)}</pre>
      </div>`;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: MAIL_FROM,
        to: [MAIL_TO],
        subject,
        html,
        reply_to: email,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => '');
      res.status(502).json({ ok: false, error: errText || 'Email send failed.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ ok: false, error: 'Unexpected server error.' });
  }
}
