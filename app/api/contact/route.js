// Force Node runtime (Brevo SDK needs Node)
export const runtime = "nodejs";

import * as Brevo from "@getbrevo/brevo";

const api = new Brevo.TransactionalEmailsApi();
api.setApiKey(
    Brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
);

function must(name) {
    const v = process.env[name];
    if (!v) throw new Error(`${name} is missing`);
    return v;
}

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name?.trim() || !email?.trim() || !message?.trim())
            return new Response("Missing fields", { status: 400 });

        await api.sendTransacEmail({
            sender: {
                email: must("BREVO_FROM_EMAIL"),
                name: must("BREVO_FROM_NAME"),
            },
            to: [{ email: must("CONTACT_TO") }],
            replyTo: { email, name },
            subject: `New site message from ${name}`,
            htmlContent: `
        <h3>New message from your website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
        });

        return Response.json({ ok: true });
    } catch (err) {
        console.error("Contact send error:", err);
        return new Response("Send failed", { status: 500 });
    }
}
