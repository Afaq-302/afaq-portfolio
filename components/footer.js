"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Afaq Ahmad</h2>
            <p className="text-blue-200 mt-2">Full Stack Web Developer</p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              href="http://github.com/Afaq-302"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-300 transition-colors"
            >
              <GitHub size={24} />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/afaqy"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-300 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="mailto:ufaq3022@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-300 transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Afaq Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
