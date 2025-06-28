"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Layout, Server } from "lucide-react"
import Image from "next/image"
import picture from "../public/new.JPG"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container mx-auto px-4 md:px-6" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="relative">
              <div className="w-full h-full rounded-lg overflow-hidden scale-105">
                <div className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center scale-125">
                  <Image src={picture} alt="my-image" />
                  {/* <span className="text-white text-8xl font-bold">A</span> */}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-blue-700 font-bold">4+ Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Full Stack Web Developer</h3>

            <p className="text-gray-700 mb-6">
              Hello! I'm Afaq Ahmad, a passionate Full Stack Web Developer with 4 years of experience in creating
              beautiful, functional, and user-friendly websites and web applications. I specialize in building modern
              web experiences using the latest technologies and best practices.
            </p>

            <p className="text-gray-700 mb-6">
              My journey in web development started with a curiosity about how websites work, which quickly turned into
              a passion for creating them. I enjoy solving complex problems and turning ideas into reality through
              clean, efficient code.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Code size={20} className="text-blue-700" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server size={20} className="text-blue-700" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Layout size={20} className="text-blue-700" />
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database size={20} className="text-blue-700" />
                <span>Database Management</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
