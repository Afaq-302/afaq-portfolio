"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Layout, Server } from "lucide-react"
import Image from "next/image"
import picture from "../public/new.JPG"

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="container mx-auto px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto max-w-5xl"
        >
          <motion.h2
            variants={item}
            className="mb-12 text-center text-3xl font-extrabold md:text-4xl"
          >
            Get&nbsp;to&nbsp;Know&nbsp;<span className="text-indigo-600">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
            <motion.div variants={item} className="md:col-span-1">
              <motion.div
                whileHover={{ rotateX: -6, rotateY: 6 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="relative mx-auto w-64 md:w-72"
                style={{ perspective: 1000 }}
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr
                             from-indigo-600 via-blue-600 to-fuchsia-600 opacity-30 blur-2xl"
                />
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={picture}
                    alt="Afaq Ahmad"
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: inView ? 1 : 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 rounded-xl bg-white py-3 px-4 shadow-lg"
                >
                  <div className="text-xl font-extrabold text-indigo-600">
                    4+ Years
                  </div>
                  <div className="text-xs font-medium text-slate-600 -mt-0.5">
                    Experience
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-indigo-600">
                Hey, I’m&nbsp;
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600
                                 bg-clip-text text-transparent">
                  Afaq&nbsp;Ahmad
                </span>
                &nbsp;— Full-Stack Web Developer
              </h3>

              <p className="mb-5 text-slate-700 leading-relaxed">
                For the past <strong>4&nbsp;years</strong> I’ve been designing &amp;
                building production-ready apps for fast-moving teams like{" "}
                <strong>Connextar</strong> and{" "}
                <strong>Animmza</strong>. My sweet-spot is taking a
                green-field idea and shipping a performant, pixel-perfect web
                product — from database schema all the way to subtle micro-
                animations.
              </p>

              <p className="mb-8 text-slate-700 leading-relaxed">
                Clean architecture, accessible UI and measurable performance are
                my north stars. When a tough bug stands in the way of a shipping
                deadline, that’s when I’m having the most fun.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md">
                {[ 
                  { Icon: Code, label: "Frontend Dev" },
                  { Icon: Server, label: "Backend APIs" },
                  { Icon: Layout, label: "Responsive UX" },
                  { Icon: Database, label: "Data Modeling" }
                ].map(({ Icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -4, boxShadow: "0 8px 22px rgba(0,0,0,0.08)" }}
                    className="flex items-center gap-2 rounded-lg border border-slate-200
                               bg-white/60 px-4 py-3 text-sm font-medium backdrop-blur"
                  >
                    <Icon size={18} className="text-indigo-600" />
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
