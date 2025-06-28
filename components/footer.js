"use client"

/* ------------------------------------------------------------------
 *  Footer – glassy wave, interactive social icons, hire-me CTA
 * ----------------------------------------------------------------*/
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 py-16 text-white">
      {/* blurred background flare */}
      <span className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* name + tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Afaq&nbsp;Ahmad
              </span>
            </h2>
            <p className="mt-2 text-indigo-200">Full-Stack Web&nbsp;Developer</p>
          </div>

          {/* quick contact CTA */}
          <motion.a
            href="mailto:ufaq3022@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r
                       from-indigo-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
          >
            <Mail size={18} className="text-white/90 transition-transform group-hover:-rotate-12" />
            Let’s&nbsp;Work&nbsp;Together
          </motion.a>

          {/* socials */}
          <div className="flex items-center gap-6">
            {[
              { href: "https://github.com/Afaq-302",    Icon: Github,   label: "GitHub"   },
              { href: "https://linkedin.com/in/afaqy",  Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:ufaq3022@gmail.com",      Icon: Mail,     label: "Email"    }
            ].map(({ href, Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -4, rotate: [0, -5, 0] }}
                transition={{ duration: 0.3 }}
                className="text-indigo-200 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                <Icon size={30} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* copyright */}
        <div className="mt-12 border-t border-indigo-700/50 pt-8 text-center text-sm text-indigo-300">
          © {new Date().getFullYear()} Afaq&nbsp;Ahmad. All rights&nbsp;reserved.
        </div>
      </div>
    </footer>
  )
}
