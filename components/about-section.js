"use client";

import Image from "next/image";
import { Code, Database, Layout, Server } from "lucide-react";
import picture from "../public/new.JPG";

// Keep static, cheap UI; no framer-motion, no blur, no heavy shadows.
export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
            Get&nbsp;to&nbsp;Know&nbsp;<span className="text-indigo-600">Me</span>
          </h2>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="relative mx-auto w-64 md:w-72">
                <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                  {/* No priority here: about section is not first fold */}
                  <Image
                    src={picture}
                    alt="Afaq Ahmad"
                    className="h-full w-full object-cover"
                    // Provide concrete dimensions to avoid layout shift
                    width={576}
                    height={720}
                    loading="lazy"
                    sizes="(min-width: 768px) 18rem, 16rem"
                  />
                </div>

                {/* Static badge; no animation */}
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white py-3 px-4 ring-1 ring-slate-200">
                  <div className="text-xl font-extrabold text-indigo-600">4+ Years</div>
                  <div className="text-xs font-medium text-slate-600 -mt-0.5">Experience</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-indigo-600">
                Hey, I’m{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Afaq&nbsp;Ahmad
                </span>{" "}
                — Full-Stack Web Developer
              </h3>

              <p className="mb-5 leading-relaxed text-slate-700">
                For the past <strong>4&nbsp;years</strong> I’ve been designing &amp; building
                production-ready apps for fast-moving teams like <strong>Connextar</strong> and{" "}
                <strong>Animmza</strong>. My sweet spot is taking a green-field idea and shipping a
                performant, pixel-perfect web product — from database schema all the way to subtle
                details.
              </p>

              <p className="mb-8 leading-relaxed text-slate-700">
                Clean architecture, accessible UI and measurable performance are my north stars.
                When a tough bug stands in the way of a shipping deadline, that’s when I’m having
                the most fun.
              </p>

              {/* Simple, static feature grid */}
              <div className="grid max-w-md grid-cols-2 gap-3">
                {[
                  { Icon: Code, label: "Frontend Dev" },
                  { Icon: Server, label: "Backend APIs" },
                  { Icon: Layout, label: "Responsive UX" },
                  { Icon: Database, label: "Data Modeling" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium"
                  >
                    <Icon size={18} aria-hidden className="text-indigo-600" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
