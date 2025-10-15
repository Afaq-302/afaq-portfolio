"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react"

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY // required
const SUBJECT = "New Site Message"
const TO_EMAIL = "ufaq3022@gmail.com" // final recipient (included inside message body)
const MIN_WORDS = 3
const MIN_CHARS = 20

export default function ContactSection() {
  const ref = useRef(null)
  const appears = useInView(ref, { once: true, amount: 0.25 })

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (error) setError(null)
  }

  const isValidMessage = (msg) => {
    const words = msg.trim().split(/\s+/).filter(Boolean).length
    return words >= MIN_WORDS || msg.trim().length >= MIN_CHARS
  }

  const handleSubmit = async (e64f6810b32d) => {
    e.preventDefault()
    setError(null)

    if (!WEB3FORMS_KEY) {
      setError("Email service not configured. Please set NEXT_PUBLIC_WEB3FORMS_KEY.")
      return
    }
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter your name and email.")
      return
    }
    if (!isValidMessage(form.message)) {
      setError("Please write a longer message (at least 3 words / 20+ chars).")
      return
    }

    setSending(true)
    const start = Date.now()

    // pad to avoid spam filters trimming trailing spaces
    const pad = "\u00A0".repeat(10)
    const modified = [
      `From: ${form.name} <${form.email}>`,
      `To: ${TO_EMAIL}`,
      "",
      `Message: ${form.message.trim()}${pad}`,
    ].join("\n")

    const fd = new FormData()
    fd.append("access_key", WEB3FORMS_KEY)
    fd.append("subject", SUBJECT)
    fd.append("from_name", form.name || "Portfolio Contact")
    fd.append("from_email", form.email || "no-reply@example.com")
    fd.append("message", modified)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      })
      const data = await res.json()

      // ensure at least 3s total UX
      const elapsed = Date.now() - start
      const delay = Math.max(3000 - elapsed, 0)

      setTimeout(() => {
        if (data && data.success) {
          setDone(true)
          setForm({ name: "", email: "", message: "" })
          setTimeout(() => setDone(false), 5000)
        } else {
          setError((data && (data.message || data.error)) || "Submission failed.")
        }
        setSending(false)
      }, delay)
    } catch (err) {
      console.error("Form submit failed", err)
      const elapsed = Date.now() - start
      const delay = Math.max(3000 - elapsed, 0)
      setTimeout(() => {
        setError("Network error – please try again.")
        setSending(false)
      }, delay)
    }
  }

  /* animations */
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .5 } } }

  return (
    <section id="contact" className="relative py-28">
      <span className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
      <div ref={ref} className="container mx-auto px-6 md:px-10">
        <motion.div variants={container} initial="hidden" animate={appears ? "visible" : "hidden"}>
          {/* heading */}
          <motion.h2 variants={item} className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Get&nbsp;in&nbsp;Touch
            </span>
          </motion.h2>

          <motion.p variants={item} className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-600">
            Have a project or idea? Drop a message or reach me through the channels below — let’s build something amazing.
          </motion.p>

          <div className="grid gap-14 md:grid-cols-2">
            {/* info card (unchanged) */}
            <motion.div variants={item} className="rounded-3xl border border-slate-200 bg-white/60 p-10 backdrop-blur">
              <h3 className="mb-8 text-2xl font-bold text-indigo-600">Contact&nbsp;Info</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50">
                    <Mail className="text-indigo-600" size={22} />
                  </span>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:ufaq3022@gmail.com" className="text-slate-700 hover:text-indigo-600">
                      ufaq3022@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50">
                    <Phone className="text-indigo-600" size={22} />
                  </span>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+923129113445" className="text-slate-700 hover:text-indigo-600">
                      +92&nbsp;312&nbsp;911&nbsp;3445
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <h4 className="mb-4 font-semibold">Follow&nbsp;Me</h4>
                <div className="flex gap-4">
                  {[
                    { href: "https://linkedin.com/in/afaqy", Icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/Afaq-302", Icon: Github, label: "GitHub" },
                  ].map(({ href, Icon, label }) => (
                    <motion.a
                      whileHover={{ y: -4 }}
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white transition hover:bg-indigo-700"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* form card */}
            <motion.div variants={item} className="rounded-3xl border border-slate-200 bg-white/60 p-10 backdrop-blur">
              <h3 className="mb-8 text-2xl font-bold text-indigo-600">Send&nbsp;a&nbsp;Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email"].map((f) => (
                  <div key={f}>
                    <label htmlFor={f} className="mb-2 block text-sm font-medium text-slate-700 capitalize">
                      {f}
                    </label>
                    <input
                      id={f}
                      name={f}
                      type={f === "email" ? "email" : "text"}
                      value={form[f]}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
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
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="Your message"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r
                             from-indigo-600 to-blue-600 px-6 py-3 text-sm font-medium text-white
                             shadow disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send&nbsp;Message
                    </>
                  )}
                </motion.button>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-red-100 px-4 py-3 text-center text-sm font-medium text-red-700"
                  >
                    {error}
                  </motion.div>
                )}

                {done && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg bg-green-100 px-4 py-3 text-center text-sm font-medium text-green-700"
                  >
                    Thanks! I’ll reply soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
