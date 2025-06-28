"use client"

/* ------------------------------------------------------------------
 *  ContactSection – glass card, gradient CTA, playful icons
 * ----------------------------------------------------------------*/
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  const ref           = useRef(null)
  const appears       = useInView(ref, { once: true, amount: 0.25 })

  const [form, setForm]         = useState({ name: "", email: "", message: "" })
  const [sending, setSending]   = useState(false)
  const [done, setDone]         = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setDone(true)
      setForm({ name: "", email: "", message: "" })
      setTimeout(() => setDone(false), 5000)
    }, 1500)
  }

  /* variants */
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const item      = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .5 } } }

  return (
    <section id="contact" className="relative py-28">
      {/* blurred blobs */}
      <span className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 md:px-10">
        <motion.div variants={container} initial="hidden" animate={appears ? "visible" : "hidden"}>
          {/* heading + intro */}
          <motion.h2 variants={item} className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Get&nbsp;in&nbsp;Touch
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-600"
          >
            Have a project or idea? Drop a message or reach me through the channels below — let’s build something amazing.
          </motion.p>

          {/* grid ------------------------------------------------ */}
          <div className="grid gap-14 md:grid-cols-2">
            {/* contact info card */}
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

              {/* social row */}
              <div className="mt-10">
                <h4 className="mb-4 font-semibold">Follow&nbsp;Me</h4>
                <div className="flex gap-4">
                  {[
                    { href: "https://linkedin.com/in/afaqy", Icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/Afaq-302",   Icon: Github,   label: "GitHub"  }
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
                {["name", "email"].map(f => (
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

                {/* submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r
                             from-indigo-600 to-blue-600 px-6 py-3 text-sm font-medium text-white
                             shadow disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending
                    ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending…
                      </>
                    )
                    : (
                      <>
                        <Send size={18} />
                        Send&nbsp;Message
                      </>
                    )}
                </motion.button>

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
