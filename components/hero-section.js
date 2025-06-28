"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Globe, ChevronDown } from "lucide-react"
import Typed from "typed.js"
import Image from "next/image"
import Picture from "../public/pic.jpg"

export default function HeroSection() {
  const typedRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [viewport, setViewport] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Frontend Magician",
        "Shopify Expert",
        "Next.js Enthusiast"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY })
      }
      setViewport({ width: window.innerWidth, height: window.innerHeight })
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const logoWiggle = {
    rotate: [0, -10, 10, -10, 10, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  }

  const sparkleText = "relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-indigo-600 animate-text-glow"

  const tiltX = ((mousePos.y - viewport.height / 2) / 60).toFixed(2)
  const tiltY = ((mousePos.x - viewport.width / 2) / 60).toFixed(2)

  return (
    <div className="container mx-auto px-4 md:px-6 h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              <p className="text-blue-600 font-semibold tracking-wide uppercase">You're in elite territory</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className={sparkleText}>
                Afaq Ahmad
              </span>{" "}

            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              A <span ref={typedRef} className="text-blue-600 underline underline-offset-4"></span>
            </h2>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              I transform bold ideas into digital masterpieces. From pixel to performance, I craft interactive elegance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contact"
                className="btn-primary group flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#projects"
                className="btn-outline group flex items-center px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 hover:scale-105 transition-transform hover:text-blue-600"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Interactive Avatar + Floating Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div
            className="relative w-full h-[500px]"
            style={{
              transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transition: "transform 0.2s ease",
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-25 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl opacity-25 animate-pulse-slow"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  className="absolute top-0 left-0 p-4 bg-white rounded-full shadow-lg"
                  animate={logoWiggle}
                >
                  <Code size={30} className="text-blue-700" />
                </motion.div>

                <motion.div
                  className="absolute bottom-0 right-0 p-4 bg-white rounded-full shadow-lg"
                  animate={{ rotate: [0, 5, -5, 5, -5, 0], transition: { duration: 4, repeat: Infinity } }}
                >
                  <Database size={30} className="text-blue-700" />
                </motion.div>

                <motion.div
                  className="absolute top-10 left-80 transform -translate-y-1/2 p-4 bg-white rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1], transition: { repeat: Infinity, duration: 5 } }}
                >
                  <Globe size={30} className="text-blue-700" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 shadow-[0_0_50px_15px_rgba(59,130,246,0.5)] border-[6px] border-white overflow-hidden ">
                    <Image
                      src={Picture}
                      alt="Profile"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <p className="text-gray-500 font-light mb-2">Scroll to discover the magic</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  )
}
