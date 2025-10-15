"use client"

/* ---------------------------------------------------------------
 *  HeroSection – mobile-first order, extra polish
 * ------------------------------------------------------------- */
import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, Code, Database, Globe } from "lucide-react"
import Typed from "typed.js"
import Image from "next/image"
import avatar from "../public/pic.jpg"

export default function HeroSection() {
  /* typewriter -------------------------------------------------- */
  const typedRef = useRef(null)
  useEffect(() => {
    const t = new Typed(typedRef.current, {
      strings: [
        "Full-Stack&nbsp;Developer",
        "Next.js&nbsp;Engineer",
        "Frontend&nbsp;Expert",
        "HTML&nbsp;&amp;&nbsp;CSS&nbsp;Old-School&nbsp;Survivor",
        "Pixel-Perfect&nbsp;UI&nbsp;Tinkerer",
        "Design&nbsp;Wizard",
        "SaaS&nbsp;Builder&nbsp;&amp;&nbsp;Automation&nbsp;Geek",
        "API&nbsp;Whisperer",
      ],

      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1800,
      loop: true
    })
    return () => t.destroy()
  }, [])

  /* parallax tilt ---------------------------------------------- */
  const mX = useMotionValue(0)
  const mY = useMotionValue(0)
  const rX = useTransform(mY, [-50, 50], [-6, 6])
  const rY = useTransform(mX, [-50, 50], [6, -6])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden
+                 bg-gradient-to-br from-slate-50 via-white to-indigo-50
+                 pt-20 md:pt-0 px-6 md:px-14"
      onMouseMove={e => {
        mX.set(e.clientX - window.innerWidth / 2)
        mY.set(e.clientY - window.innerHeight / 2)
      }}
    >
      {/* blobs */}
      <span className="pointer-events-none absolute -top-48 -left-48 h-[32rem] w-[32rem] rounded-full
                       bg-indigo-400/20 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-48 -right-48 h-[32rem] w-[32rem] rounded-full
                       bg-fuchsia-400/20 blur-3xl" />

      {/* layout -------------------------------------------------- */}
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-16
                      md:flex-row md:gap-32 xl:gap-60">
        {/* text first on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full text-center md:max-w-xl md:text-left"
        >
          <p className="mb-4 inline-block rounded-full bg-indigo-100 px-5 py-1.5 text-xs font-semibold tracking-widest text-indigo-600">
            YOU’RE IN ELITE TERRITORY
          </p>

          <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Afaq&nbsp;Ahmad
            </span>
          </h1>

          <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700">
            <span ref={typedRef} className="underline decoration-indigo-500 underline-offset-4" />
          </h2>

          <p className="mx-auto mb-12 max-w-lg text-lg text-slate-600 md:mx-0">
            I engineer lightning-fast, accessible & immersive web experiences —
            turning bold ideas into polished digital products your users love.
          </p>

          {/* CTAs ------------------------------------------------ */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full
                         bg-gradient-to-r from-indigo-600 to-blue-600 px-9 py-3 font-medium text-white
                         shadow-lg transition active:scale-95 focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="relative z-10">Hire&nbsp;me</span>
              <ArrowRight size={18} className="relative z-10" />
              <span className="absolute inset-0 -translate-x-full bg-white/25 blur-sm
                               transition-transform duration-700 hover:translate-x-full" />
            </a>

            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full border border-indigo-600
                         px-9 py-3 font-medium text-indigo-600 transition
                         hover:bg-indigo-600 hover:text-white active:scale-95
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="relative z-10">View&nbsp;projects</span>
              <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* avatar second on mobile (below text) ------------------ */}
        <motion.div
          style={{ rotateX: rX, rotateY: rY }}
          className="relative w-56 shrink-0 sm:w-64 md:w-72 lg:w-80"
        >
          {/* halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute inset-0 -z-10 rounded-full
                       bg-gradient-to-br from-indigo-600 via-blue-600 to-fuchsia-600 opacity-25 blur-2xl"
          />

          {/* orbiting icons – hidden on very small screens */}
          <div className="hidden sm:block">
            <Float Icon={Code} delay={0} top="-12%" left="55%" />
            <Float Icon={Database} delay={2} bottom="-10%" right="2%" />
            <Float Icon={Globe} delay={4} top="18%" right="-14%" />
          </div>

          {/* avatar */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="relative rounded-full bg-gradient-to-br from-white to-slate-100 p-1 shadow-xl"
          >
            <Image
              src={avatar}
              alt="Afaq Ahmad – Full-Stack Developer"
              priority
              sizes="(max-width:768px) 220px, 320px"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue ------------------------------------------- */}
      <motion.button
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="Scroll"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-indigo-600 hover:text-indigo-700"
      >
        <ChevronDown className="animate-bounce" />
      </motion.button>
    </section>
  )
}

/* helper for floating icons */
function Float({ Icon, delay = 0, ...pos }) {
  return (
    <motion.span
      style={pos}
      className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
      animate={{
        y: [0, -8, 0],
        boxShadow: [
          "0 5px 15px rgba(0,0,0,0.04)",
          "0 8px 20px rgba(0,0,0,0.08)",
          "0 5px 15px rgba(0,0,0,0.04)"
        ]
      }}
      transition={{ repeat: Infinity, duration: 5, delay }}
    >
      <Icon size={20} className="text-indigo-600" />
    </motion.span>
  )
}
