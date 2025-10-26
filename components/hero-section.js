"use client";

/* ---------------------------------------------------------------
 * HeroSection – zero animations, zero blur, zero parallax
 * ------------------------------------------------------------- */
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import avatar from "../public/pic.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 pt-20 md:px-14 md:pt-0"
    >
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 md:flex-row md:gap-24 xl:gap-56">
        {/* text first on mobile */}
        <div className="w-full text-center md:max-w-xl md:text-left">
          <p className="mb-4 inline-block rounded-full bg-indigo-100 px-5 py-1.5 text-xs font-semibold tracking-widest text-indigo-700">
            YOU’RE IN ELITE TERRITORY
          </p>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Afaq&nbsp;Ahmad
            </span>
          </h1>

          {/* Static subtitle (replaces Typed.js) */}
          <h2 className="mb-8 text-2xl font-semibold text-slate-700 sm:text-3xl md:text-4xl">
            Full-Stack Developer • Next.js Engineer • Frontend Expert
          </h2>

          <p className="mx-auto mb-12 max-w-lg text-lg text-slate-700 md:mx-0">
            I engineer fast, accessible web experiences — turning bold ideas into polished digital
            products your users love.
          </p>

          {/* CTAs (no transitions/animations) */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-700 px-9 py-3 font-medium text-white"
            >
              <span>Hire&nbsp;me</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-700 px-9 py-3 font-medium text-indigo-700"
            >
              <span>View&nbsp;projects</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* avatar second on mobile (below text) */}
        <div className="relative w-56 shrink-0 sm:w-64 md:w-72 lg:w-80">
          <div className="rounded-full bg-white p-1 ring-1 ring-slate-200">
            <Image
              src={avatar}
              alt="Afaq Ahmad – Full-Stack Developer"
              priority
              width={640}
              height={640}
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Simple, non-animated “scroll” hint (optional; remove if you prefer) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-600">
        Scroll ↓
      </div>
    </section>
  );
}
