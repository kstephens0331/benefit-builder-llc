export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const data = req.body as Record<string, any>;
    const { name, email, phone, company, message } = data || {};

    // Basic validation
    if (!name || !email || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Send via Resend (or swap for your provider)
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM || "contact@benefitbuilder.com",
        to: process.env.MAIL_TO || "jamietrauth.bb@gmail.com",
        subject: `Website contact from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "").toString().replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      throw new Error(errorText || "Failed to send email");
    }

    res.status(200).json({ ok: true, msg: "Thanks — we received your message." });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || "Something went wrong." });
  }
}
