"use client"

/* ------------------------------------------------------------------
 *  SkillsSection – upgraded visuals & micro-interactions
 * ----------------------------------------------------------------*/
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  FileText,
  Paintbrush,
  Zap,
  Atom,
  FastForward,
  Server,
  Rocket,
  Leaf,
  Table,
  GitBranch,
  Wind,
  Brain
} from "lucide-react"

/* tech-stack + icon + mastery % */
const skills = [
  { name: "HTML 5", icon: FileText, level: 95 },
  { name: "CSS 3 / Sass", icon: Paintbrush, level: 90 },
  { name: "JavaScript", icon: Zap, level: 92 },
  { name: "React", icon: Atom, level: 91 },
  { name: "Next.js", icon: FastForward, level: 86 },
  { name: "Node.js", icon: Server, level: 82 },
  { name: "Express", icon: Rocket, level: 84 },
  { name: "MongoDB", icon: Leaf, level: 80 },
  { name: "SQL", icon: Table, level: 77 },
  { name: "Git / GitHub", icon: GitBranch, level: 88 },
  { name: "Tailwind CSS", icon: Wind, level: 92 },
  { name: "UI / UX", icon: Brain, level: 80 }
]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  /* stagger container */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  /* each item */
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24"
    >
      {/* blurred accent blob */}
      <span className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full
                       bg-indigo-400 opacity-20 blur-3xl" />

      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* heading */}
          <motion.h2
            variants={item}
            className="mb-4 text-center text-3xl font-extrabold tracking-tight md:text-4xl"
          >
            Core&nbsp;
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          {/* intro */}
          <motion.p
            variants={item}
            className="mx-auto mb-14 max-w-2xl text-center text-lg text-slate-600"
          >
            Tools &amp; technologies I wield daily to design, build&nbsp;&amp;&nbsp;ship delightful web products.
          </motion.p>

          {/* skill grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
            {skills.map(({ name, icon: Icon, level }) => (
              <motion.div
                key={name}
                variants={item}
                whileHover={{ y: -4, boxShadow: "0 8px 22px rgba(0,0,0,0.08)" }}
                className="group rounded-xl border border-slate-200 bg-white/60 p-5
                           text-center backdrop-blur transition-colors hover:border-indigo-200"
              >
                {/* icon */}
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center
                                rounded-lg bg-indigo-50 text-indigo-600 transition-colors
                                group-hover:bg-indigo-100">
                  <Icon size={24} strokeWidth={2} />
                </div>

                {/* name */}
                <h3 className="mb-2 text-sm font-semibold">{name}</h3>

                {/* progress bar animates from 0 → level */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${level}%` : 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r
                               from-indigo-600 to-blue-600"
                  />
                </div>

                <span className="mt-1 block text-right text-xs font-medium text-slate-500">
                  {level}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
