"use client"

/* ------------------------------------------------------------------
 *  TestimonialsSection – refreshed visuals & motion
 * ----------------------------------------------------------------*/
import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Mohammad Amir",
    role: "CEO, Connextar Technologies",
    content:
      "Working with Afaq was a game-changer. His speed, clean code, and ability to take ownership of complex tasks gave our team a serious edge.",
    rating: 5
  },
  {
    name: "Hamza Kalim",
    role: "CEO, Animmza",
    content:
      "From frontend polish to backend stability, Afaq handled everything like a pro. His UI sensibility and dev skills made our product shine.",
    rating: 5
  },
  {
    name: "Umair Shah",
    role: "Senior Developer, Connextar",
    content:
      "As someone who works alongside him, I’ve seen Afaq deliver high-quality results again and again. Reliable, sharp, and forward-thinking.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  /* simple carousel index + auto-rotate */
  const [i, setI] = useState(0)
  const next = () => setI(p => (p + 1) % testimonials.length)
  const prev = () => setI(p => (p - 1 + testimonials.length) % testimonials.length)

  /* autoplay every 8 s */
  useEffect(() => {
    const id = setInterval(next, 8000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="relative py-24">
      {/* blurred background flair */}
      <span className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full
                       bg-fuchsia-500/20 blur-3xl" />

      <div
        ref={ref}
        className="container mx-auto px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* heading */}
          <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600
                             bg-clip-text text-transparent">
              What&nbsp;Clients&nbsp;Say
            </span>
          </h2>

          {/* tagline */}
          <p className="mx-auto mb-14 max-w-xl text-center text-lg text-slate-600">
            Trusted worldwide&nbsp;— consistently&nbsp;
            <strong className="text-indigo-600">5-star</strong> results.
          </p>

          {/* testimonial card */}
          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={i}
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -120, opacity: 0 }}
                transition={{ duration: 0.55 }}
                className="rounded-3xl border border-slate-200 bg-white/60 px-10 py-12 text-center
                           shadow-lg backdrop-blur"
              >
                {/* stars */}
                <div className="mb-4 flex justify-center gap-0.5">
                  {[...Array(testimonials[i].rating)].map((_, s) => (
                    <motion.span
                      key={s}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * s }}
                    >
                      <Star size={22} className="fill-yellow-400 text-yellow-400" />
                    </motion.span>
                  ))}
                </div>

                {/* quote */}
                <p className="mx-auto mb-8 max-w-xl text-lg italic text-slate-700">
                  “{testimonials[i].content}”
                </p>

                {/* author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full
                                  bg-gradient-to-br from-indigo-600 to-blue-600 text-lg font-black text-white">
                    {testimonials[i].name[0]}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-indigo-600">{testimonials[i].name}</h4>
                    <p className="text-xs text-slate-500">{testimonials[i].role}</p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* nav buttons */}
            <div className="mt-10 flex justify-center gap-6">
              <button
                aria-label="Previous testimonial"
                onClick={prev}
                className="relative inline-flex items-center justify-center rounded-full p-3
                           transition active:scale-95 focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-indigo-500
                           before:absolute before:inset-0 before:-z-10 before:rounded-full
                           before:bg-indigo-50 before:transition-colors
                           hover:before:bg-indigo-100"
              >
                <ChevronLeft size={20} className="text-indigo-600" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={next}
                className="relative inline-flex items-center justify-center rounded-full p-3
                           transition active:scale-95 focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-indigo-500
                           before:absolute before:inset-0 before:-z-10 before:rounded-full
                           before:bg-indigo-50 before:transition-colors
                           hover:before:bg-indigo-100"
              >
                <ChevronRight size={20} className="text-indigo-600" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
