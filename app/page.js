"use client"

import { useEffect, useState } from "react"
import { useScroll } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar activeSection={activeSection} />

      <section id="hero" className="min-h-screen">
        <HeroSection />
      </section>

      <section id="about" className="py-20">
        <AboutSection />
      </section>

      <section id="skills" className="py-20 bg-white">
        <SkillsSection />
      </section>

      <section id="projects" className="py-20">
        <ProjectsSection />
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <TestimonialsSection />
      </section>

      <section id="contact" className="py-20">
        <ContactSection />
      </section>

      <Footer />
    </main>
  )
}
