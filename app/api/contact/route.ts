// POST /api/contact — receives the contact form and notifies you.
//
// Email: set RESEND_API_KEY (free at resend.com) and CONTACT_TO_EMAIL.
// SMS (optional): set AT_USERNAME, AT_API_KEY and NOTIFY_PHONE for
// Africa's Talking. Without these keys, enquiries are logged to the
// terminal so you can still test the form locally.

type Enquiry = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  website?: string; // honeypot
};

const clean = (value: unknown, max = 2000) => (typeof value === "string" ? value.trim().slice(0, max) : "");

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: Partial<Enquiry>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field — pretend it worked and ignore them
  if (clean(body.website)) return Response.json({ ok: true });

  const enquiry: Enquiry = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 120),
    phone: clean(body.phone, 40),
    service: clean(body.service, 80),
    budget: clean(body.budget, 80),
    message: clean(body.message, 5000),
  };

  // Server-side validation (never trust the browser alone)
  if (enquiry.name.length < 2) return Response.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email))
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (enquiry.message.length < 10)
    return Response.json({ error: "Please tell us a little more about your project." }, { status: 400 });

  const results = await Promise.allSettled([sendEmail(enquiry), sendSms(enquiry)]);
  const emailResult = results[0];

  if (emailResult.status === "rejected") {
    console.error("Contact email failed:", emailResult.reason);
    return Response.json(
      { error: "We couldn't send your message right now. Please email or WhatsApp us instead." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}

async function sendEmail(e: Enquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.log("\n📩 New enquiry (email not configured — add RESEND_API_KEY to .env.local):\n", e, "\n");
    return;
  }

  const rows = [
    ["Name", e.name],
    ["Email", e.email],
    ["Company", e.company],
    ["Phone", e.phone],
    ["Service", e.service],
    ["Budget", e.budget],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#625F86">${k}</td><td><b>${escapeHtml(v!)}</b></td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Elimatex Website <onboarding@resend.dev>",
      to: [to],
      reply_to: e.email,
      subject: `New enquiry: ${e.service || "General"} — ${e.name}`,
      html: `<h2 style="color:#1E1B4B">New website enquiry</h2><table>${rows}</table><p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(e.message)}</p>`,
    }),
  });

  if (!res.ok) throw new Error(`Resend error ${res.status}: ${await res.text()}`);
}

async function sendSms(e: Enquiry) {
  const { AT_USERNAME, AT_API_KEY, NOTIFY_PHONE } = process.env;
  if (!AT_USERNAME || !AT_API_KEY || !NOTIFY_PHONE) return; // SMS is optional

  const host = AT_USERNAME === "sandbox" ? "api.sandbox.africastalking.com" : "api.africastalking.com";
  const res = await fetch(`https://${host}/version1/messaging`, {
    method: "POST",
    headers: {
      apiKey: AT_API_KEY,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: AT_USERNAME,
      to: NOTIFY_PHONE,
      message: `New Elimatex enquiry from ${e.name} (${e.phone || e.email}) — ${e.service || "General"}. Check your email.`,
    }),
  });

  if (!res.ok) console.error("SMS notification failed:", res.status, await res.text());
}
