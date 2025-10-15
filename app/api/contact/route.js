export const runtime = "nodejs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function must(k) {
  const v = process.env[k];
  if (!v) throw new Error(`${k} is missing`);
  return v;
}

export async function POST(req) {
  try {
    const { name, email, message, hp } = await req.json();

    if (hp) return new Response("OK", { status: 200 });
    if (!name?.trim() || !email?.trim() || !message?.trim())
      return new Response("Missing fields", { status: 400 });

    const { data, error } = await resend.emails.send({
      from: must("RESEND_FROM"),
      to: must("RESEND_TO"),
      reply_to: email,
      subject: `New site message from ${name}`,
      html: `
        <h3>New message from your website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(error.message || "Send failed", { status: 500 });
    }

    return Response.json({ ok: true, id: data?.id || null });
  } catch (err) {
    console.error("Contact send error:", err);
    return new Response("Send failed", { status: 500 });
  }
}
