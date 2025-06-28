"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Code, Database, Layout, Server } from "lucide-react";
import Image from "next/image";
import picture from "../public/new.JPG";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const years = useMotionValue(0);
  if (inView) animate(years, 100, { duration: 2, ease: "easeOut" });

  return (
    <section
      id="about"
      ref={ref}
      className="container mx-auto px-4 md:px-6 py-20 scroll-mt-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mx-auto max-w-5xl"
      >
        <motion.h2
          variants={fadeUp}
          className="mb-14 text-center text-4xl font-extrabold tracking-tight"
        >
          <span className="border-b-4 border-blue-600 pb-1">About</span> Me
        </motion.h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          {/* --- Photo card --- */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <motion.div
              whileHover={{ rotate: 2 }}
              transition={{ type: "spring", stiffness: 60, damping: 10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={picture}
                alt="Afaq Ahmad portrait"
                placeholder="blur"
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="h-[420px] w-full object-cover"
              />

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-6 right-4 rounded-lg bg-white px-4 py-2 shadow-lg"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="block text-lg font-bold text-blue-700">
                  {years.get().toFixed(0).replace(/\d/g, "•")}
                </span>
                <span className="text-sm text-gray-600">Experience</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* --- Text & skills --- */}
          <motion.div variants={fadeUp} className="space-y-6 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-700">
              Full-Stack Web&nbsp;Developer
            </h3>

            <p className="text-gray-700">
              I craft modern, accessible web experiences from database to
              pixel. My sweet spot is taking rough ideas and launching them as
              reliable products that feel effortless to use.
            </p>

            <p className="text-gray-700">
              Whether it’s an e-commerce storefront or a data-heavy dashboard, I
              love finding the cleanest solution and shipping code that’s easy
              to maintain.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
              <div className="flex items-center gap-2">
                <Code size={20} className="text-blue-700" />
                Front-end Development
              </div>
              <div className="flex items-center gap-2">
                <Server size={20} className="text-blue-700" />
                Back-end APIs
              </div>
              <div className="flex items-center gap-2">
                <Layout size={20} className="text-blue-700" />
                Responsive Design
              </div>
              <div className="flex items-center gap-2">
                <Database size={20} className="text-blue-700" />
                Data Modelling
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
