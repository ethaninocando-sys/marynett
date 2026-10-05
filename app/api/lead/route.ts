// Receives a form submission and emails it to Marynett.
// Needs two settings on the server: RESEND_API_KEY and LEAD_TO_EMAIL.
// Without them (for example on a local prototype) the lead is accepted
// but no email is sent.

const labels: Record<string, string> = {
  firstName: "First name",
  phone: "Phone",
  email: "Email",
  lookingFor: "Looking for",
  lookingForOther: "Looking for (details)",
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Spam bots fill in the hidden "company" field. Pretend it worked.
  if (body.company) return Response.json({ ok: true });

  const firstName = String(body.firstName ?? "").trim();
  const phoneDigits = String(body.phone ?? "").replace(/\D/g, "");
  const email = String(body.email ?? "").trim();
  if (!firstName || phoneDigits.length < 10 || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const kind = body.variant === "recruit" ? "Recruit" : "Client";
  const lines = Object.entries(labels)
    .filter(([key]) => body[key])
    .map(([key, label]) => `${label}: ${String(body[key]).slice(0, 200)}`);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.warn("Lead received but email is not set up yet.");
    return Response.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New ${kind.toLowerCase()} lead: ${firstName}`,
      reply_to: email,
      text: [`Type: ${kind}`, ...lines].join("\n"),
    }),
  });

  if (!res.ok) return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true });
}
