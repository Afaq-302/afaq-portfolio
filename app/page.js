"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () => ["hero", "about", "skills", "projects", "testimonials", "contact"],
    []
  );

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    let current = activeSection;

    const observer = new IntersectionObserver(
      (entries) => {
        let top = null;
        for (const e of entries) {
          const id = (e.target).id;
          if (!top || e.intersectionRatio > top.ratio) {
            top = { id, ratio: e.intersectionRatio };
          }
        }
        if (top && top.id !== current) {
          current = top.id;
          setActiveSection(top.id);
        }
      },
      {
        threshold: [0.55],
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main
      className={[
        "min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50",
        "dark:from-purple-900/20 dark:via-zinc-900 dark:to-purple-900/20",
        // Subtle image hover effects
        "[&_img]:transition-transform [&_img]:duration-300 [&_img]:ease-out",
        "[&_img]:hover:scale-[1.03] [&_img]:hover:brightness-105 [&_img]:hover:shadow-xl",
        // Smooth button hover/press transitions inspired by ProjectsSection
        "[&_a]:transition-transform [&_a]:duration-300 [&_a]:ease-out [&_a]:hover:scale-105",
        "[&_button]:transition-transform [&_button]:duration-300 [&_button]:ease-out [&_button]:hover:scale-105",
        // Purple theme accent on hover for links/buttons
        "[&_a:hover]:bg-fuchsia-700 [&_a:hover]:text-white",
        // Respect reduced motion
        "motion-reduce:[&_img]:transform-none motion-reduce:[&_img]:transition-none motion-reduce:[&_a]:transition-none motion-reduce:[&_button]:transition-none",
      ].join(" ")}
    >
      <Navbar activeSection={activeSection} />

      <section id="hero" className="min-h-screen">
        <HeroSection />
      </section>

      <section id="about" className="py-20">
        <AboutSection />
      </section>

      <section id="skills" className="bg-white py-20 dark:bg-zinc-900/40">
        <SkillsSection />
      </section>

      <section id="projects" className="py-20">
        <ProjectsSection />
      </section>

      <section id="testimonials" className="bg-white py-20 dark:bg-zinc-900/40">
        <TestimonialsSection />
      </section>

      <section id="contact" className="py-20">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}