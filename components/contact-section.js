"use client";

import { useState } from "react";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";

const MIN_WORDS = 3;
const MIN_CHARS = 20;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "", hp: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const isValidMessage = (msg) => {
    const words = msg.trim().split(/\s+/).filter(Boolean).length;
    return words >= MIN_WORDS || msg.trim().length >= MIN_CHARS;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!isValidMessage(form.message)) {
      setError("Please write a longer message (at least 3 words / 20+ chars).");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setDone(true);
        setForm({ name: "", email: "", message: "", hp: "" });
        setTimeout(() => setDone(false), 5000);
      } else {
        const txt = await res.text().catch(() => "");
        setError(txt || "Submission failed.");
      }
    } catch {
      setError("Network error – please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-6 md:px-10">
        {/* heading */}
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          <span className="text-indigo-700">Get&nbsp;in&nbsp;Touch</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-700">
          Have a project or idea? Drop a message or reach me through the channels below.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* info card (no blur, no heavy shadows) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="mb-6 text-2xl font-bold text-indigo-700">Contact&nbsp;Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <Mail className="text-indigo-700" size={20} />
                </span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:ufaq3022@gmail.com"
                    className="text-slate-800 underline-offset-2 hover:underline"
                  >
                    ufaq3022@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <Phone className="text-indigo-700" size={20} />
                </span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+923129113445"
                    className="text-slate-800 underline-offset-2 hover:underline"
                  >
                    +92&nbsp;312&nbsp;911&nbsp;3445
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="mb-3 font-semibold">Follow&nbsp;Me</h4>
              <div className="flex gap-3">
                {[
                  { href: "https://linkedin.com/in/afaqy", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com/Afaq-302", Icon: Github, label: "GitHub" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700 text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* form card (no blur, no shadows, no animated spinner) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="mb-6 text-2xl font-bold text-indigo-700">Send&nbsp;a&nbsp;Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-busy={sending}>
              {/* honeypot (hidden) */}
              <input
                type="text"
                name="hp"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
                value={form.hp}
                onChange={handleChange}
              />

              {["name", "email"].map((f) => (
                <div key={f}>
                  <label
                    htmlFor={f}
                    className="mb-2 block text-sm font-medium text-slate-700 capitalize"
                  >
                    {f}
                  </label>
                  <input
                    id={f}
                    name={f}
                    type={f === "email" ? "email" : "text"}
                    value={(form)[f]}
                    onChange={handleChange}
                    required
                    autoComplete={f === "email" ? "email" : "name"}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none"
                    placeholder={`Your ${f}`}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-700 px-6 py-3 text-sm font-medium text-white disabled:opacity-70"
              >
                <Send size={18} />
                {sending ? "Sending..." : "Send Message"}
              </button>

              {error && (
                <div className="rounded-lg bg-red-100 px-4 py-3 text-center text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              {done && (
                <div className="rounded-lg bg-green-100 px-4 py-3 text-center text-sm font-medium text-green-700">
                  ✅ Your message was sent. We’ll contact you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
