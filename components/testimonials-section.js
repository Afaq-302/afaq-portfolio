"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Mohammad Amir",
    role: "CEO, Connextar Technologies",
    content:
      "Working with Afaq was a game-changer. His speed, clean code, and ability to take ownership of complex tasks gave our team a serious edge.",
    rating: 5,
  },
  {
    name: "Hamza Kalim",
    role: "CEO, Animmza",
    content:
      "From frontend polish to backend stability, Afaq handled everything like a pro. His UI sensibility and dev skills made our product shine.",
    rating: 5,
  },
  {
    name: "Umair Shah",
    role: "Senior Developer, Connextar",
    content:
      "As someone who works alongside him, I’ve seen Afaq deliver high-quality results again and again. Reliable, sharp, and forward-thinking.",
    rating: 5,
  },
  
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [index, setIndex] = useState(0)

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-4">
          🌟 What Clients Say
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Trusted by professionals around the world. Rated <strong>5 stars</strong> for reliability, quality, and results.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl px-8 py-10 text-center border-2 border-dashed border-blue-200"
            >
              <div className="flex justify-center mb-3">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">“{testimonials[index].content}”</p>
              <div className="flex justify-center items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-inner">
                  {testimonials[index].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-blue-700">{testimonials[index].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Polished Arrow Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              aria-label="Previous"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full shadow transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next"
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full shadow transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
