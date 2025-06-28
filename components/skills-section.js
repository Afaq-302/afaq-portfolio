"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "HTML5", icon: "📄", level: 95 },         // Document-based symbol
  { name: "CSS3", icon: "🎨", level: 90 },           // Styling/visual symbol
  { name: "JavaScript", icon: "🟨", level: 92 },     // Yellow square for JS feel
  { name: "React", icon: "⚛️", level: 90 },          // Atom (React's actual logo)
  { name: "Next.js", icon: "⏩", level: 85 },         // Fast-forward, modern feel
  { name: "Node.js", icon: "🟢", level: 80 },         // Green circle = Node
  { name: "Express", icon: "🚂", level: 85 },         // Express train = fast backend
  { name: "MongoDB", icon: "🍃", level: 80 },         // Leaf for Mongo
  { name: "SQL", icon: "🧮", level: 75 },             // Calculator = structured data
  { name: "Git", icon: "🔧", level: 85 },             // Wrench/tooling
  { name: "Tailwind CSS", icon: "🌬️", level: 90 },    // Wind = Tailwind
  { name: "UI/UX Design", icon: "🧠", level: 80 },     // Brain = user thinking/design
]


export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.h2 variants={itemVariants} className="section-title">
          My Skills
        </motion.h2>

        <motion.p variants={itemVariants} className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          I've worked with a variety of technologies in the web development world. Here are the main skills I've
          acquired and honed over the years.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="skill-card"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-700 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="text-sm text-gray-600 mt-1">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
