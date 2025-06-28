"use client"

/* ------------------------------------------------------------------
 *  PortfolioNavbar – glassy bar, bigger links, résumé CTA
 * ----------------------------------------------------------------*/
import { useState, useEffect } from "react"
import { Menu, X, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { name: "Home",         href: "#hero" },
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Projects",     href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact",      href: "#contact" }
]

export default function PortfolioNavbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* slide-down animation for mobile menu */
  const slide = {
    hidden:  { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.35 } },
    exit:    { opacity: 0, height: 0, transition: { duration: 0.25 } }
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur
                  ${scrolled ? "bg-white/80 shadow-sm py-2" : "bg-transparent py-4"}`}
    >
      {/* --- container --- */}
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">

        {/* logo / brand */}
        <a
          href="#hero"
          className="text-2xl font-black tracking-tight text-indigo-600"
        >
          Afaq<span className="text-slate-800">.dev</span>
        </a>

        {/* desktop nav links */}
        <nav className="hidden lg:flex items-center gap-12">
          {links.map(l => (
            <a
              key={l.name}
              href={l.href}
              className={`group relative text-lg font-medium transition
                          ${activeSection === l.href.slice(1)
                            ? "text-indigo-600"
                            : "text-slate-700 hover:text-indigo-600"}`}
            >
              {l.name}
              {/* hover / active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r
                            from-indigo-600 to-blue-600 transition-transform duration-300
                            group-hover:scale-x-100
                            ${activeSection === l.href.slice(1) && "scale-x-100"}`}
              />
            </a>
          ))}
        </nav>

        {/* hamburger */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(prev => !prev)}
          className="lg:hidden rounded-full p-2 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile menu ------------------------------------------------ */}
      <AnimatePresence>
        {open && (
          <motion.nav
            variants={slide}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-white/90 backdrop-blur shadow-inner"
          >
            <div className="flex flex-col divide-y divide-slate-100">
              {links.map(l => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-6 py-5 text-base font-medium transition
                              ${activeSection === l.href.slice(1)
                                ? "bg-indigo-50 text-indigo-700"
                                : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"}`}
                >
                  {l.name}
                </a>
              ))}
              {/* resume link mobile */}
             
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
