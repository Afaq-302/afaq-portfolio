"use client";

/* ------------------------------------------------------------------
 *  PortfolioNavbar – subtle hover effects, soft colors, smooth feel
 * ----------------------------------------------------------------*/
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function PortfolioNavbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 50;
        if (next !== scrolled) setScrolled(next);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-white/80 backdrop-blur-lg py-4"
      }`}
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
        {/* logo / brand */}
        <a
          href="#hero"
          className="text-2xl font-black tracking-tight text-indigo-700 transition-colors duration-300 hover:text-blue-600"
        >
          Afaq<span className="text-slate-800">.dev</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const active = activeSection === l.href.slice(1);
            return (
              <a
                key={l.name}
                href={l.href}
                className={`relative text-lg font-medium transition-all duration-300 ease-out ${
                  active
                    ? "text-blue-700 after:absolute after:left-0 after:-bottom-1 after:block after:h-0.5 after:w-full after:bg-blue-600"
                    : "text-slate-700 hover:text-blue-600 hover:scale-[1.05]"
                }`}
              >
                {l.name}
              </a>
            );
          })}
        </nav>

        {/* hamburger */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          className="rounded-full p-2 text-slate-700 transition-colors duration-300 hover:bg-fuchsia-50 hover:text-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav
          className="border-t border-slate-100 bg-white/95 backdrop-blur-sm transition-all duration-300 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {links.map((l) => {
              const active = activeSection === l.href.slice(1);
              return (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-6 py-5 text-base font-medium transition-colors duration-300 ${
                    active
                      ? "bg-fuchsia-50 text-fuchsia-700"
                      : "text-slate-700 hover:bg-fuchsia-50 hover:text-fuchsia-700"
                  }`}
                >
                  {l.name}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
