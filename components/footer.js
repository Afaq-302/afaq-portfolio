"use client";

/* ------------------------------------------------------------------
 *  Footer – zero animations, zero blur; smooth + accessible
 * ----------------------------------------------------------------*/
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 py-16 text-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* name + tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                Afaq&nbsp;Ahmad
              </span>
            </h2>
            <p className="mt-2 text-indigo-200">Full-Stack Web&nbsp;Developer</p>
          </div>

          {/* quick contact CTA (no animation) */}
          <a
            href="mailto:ufaq3022@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-800"
          >
            <Mail size={18} aria-hidden />
            <span>Let’s&nbsp;Work&nbsp;Together</span>
          </a>

          {/* socials (no transforms) */}
          <div className="flex items-center gap-6">
            {[
              { href: "https://github.com/Afaq-302", Icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/afaqy", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:ufaq3022@gmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 rounded-full p-1"
              >
                <Icon size={28} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        {/* copyright */}
        <div className="mt-12 border-t border-indigo-700/50 pt-8 text-center text-sm text-indigo-300">
          © {year} Afaq&nbsp;Ahmad. All rights&nbsp;reserved.
        </div>
      </div>
    </footer>
  );
}
