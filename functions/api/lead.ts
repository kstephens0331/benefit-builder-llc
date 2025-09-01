export const onRequestPost = async (context) => {
  try {
    const { request, env } = context;
    const data = await request.json();

    // Honeypot + velocity
    if (typeof data.honeypot === "string" && data.honeypot.trim().length > 0) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    const now = Date.now();
    const started = Number(data.ts || 0);
    if (!started || now - started < 900) {
      return new Response(JSON.stringify({ error: "Too fast" }), { status: 400 });
    }

    const email = String(data.email || "").trim();
    const name = String(data.name || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    }

    if (!env.RESEND_API_KEY || !env.MAIL_FROM || !env.MAIL_TO) {
      return new Response(JSON.stringify({ error: "Email not configured" }), { status: 500 });
    }

    const esc = (s) => String(s).replace(/[<>&]/g, c => ({ "<":"&lt;", ">":"&gt;", "&":"&amp;" }[c]));
    const subject = `New Lead Magnet Signup`;
    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;line-height:1.5;">
        <h2 style="margin:0 0 8px;color:#143C63;">Lead Magnet: Employer Checklist</h2>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
      </div>
    `;

    const sendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": \`Bearer \${env.RESEND_API_KEY}\`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: env.MAIL_FROM, to: env.MAIL_TO, subject, html })
    });

    if (!sendRes.ok) {
      const txt = await sendRes.text().catch(()=>"");
      return new Response(JSON.stringify({ error: "Email failed", details: txt }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true, download: "/lead/benefit-checklist.pdf" }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Bad Request" }), { status: 400 });
  }
};
