"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Convertify Tool",
    description: "Versatile utility suite for quick conversions, calculations, and everyday tasks.",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next JS", "Tailwind CSS", "Frontend", "UI/UX"],
    demoLink: "https://convertify-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Connextar Official Website",
    description: "Corporate site showcasing Connextar’s services, portfolio highlights, and contact channels.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "Forms", "Tailwind CSS", "Adobe XD"],
    demoLink: "https://www.connextar.com",
    githubLink: "#",
  },
  {
    title: "Solutions App (Development)",
    description: "Real-time job-tracking dashboard with Kanban boards, analytics, and team notifications.",
    image: "https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UX/UI", "Node JS", "APIs", "Full Stack"],
    demoLink: "https://solutions-nextjs-app.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Masjid App Suite",
    description: "All-in-one mosque portal for prayer times, donations, events, and community updates.",
    image: "https://images.unsplash.com/photo-1652112066944-305eaff0d0ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UX/UI", "Stripe", "APIs", "Full Stack"],
    demoLink: "https://mas.umairshah.dev",
    githubLink: "#",
  },
  {
    title: "POKERPLY (Telegram Gaming App)",
    description: "Multiplayer Texas Hold’em poker bot for Telegram with live rooms and leaderboards.",
    image: "https://plus.unsplash.com/premium_photo-1720551256983-445d23d516b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UX/UI", "APIs", "Full Stack"],
    demoLink: "https://pokerply.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Pak Draw (Web App)",
    description: "Simple raffle generator that randomly selects winners from uploaded participant lists.",
    image: "https://plus.unsplash.com/premium_photo-1677265809262-7039e3151514?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UX/UI", "APIs", "Full Stack"],
    demoLink: "https://pak-draw-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "React Invoice Generator",
    description: "Lightweight tool to create, preview, and export professional invoices as PDFs.",
    image: "https://plus.unsplash.com/premium_photo-1679784204551-013181bb687f?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    demoLink: "https://invoice-generator-reactjs.vercel.app/",
    githubLink: "#",
  },
  {
  title: "Multi Toolbox",
  description: "Swiss-army-knife web app packed with everyday utilities—from unit converters and QR generators to color pickers—all in one polished interface.",
  image: "https://plus.unsplash.com/premium_photo-1722156533656-b22cbcf1c82e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  technologies: ["Next JS", "Tailwind CSS", "UI/UX", "Responsive", "Frontend"],
  demoLink: "https://multi-toolbox.vercel.app/",
  githubLink: "#",
},
{
  title: "Expense Tracker",
  description: "Clean, real-time dashboard to record spending, visualize budgets, and spot trends so you can take control of your finances with ease.",
  image: "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  technologies: ["Next JS", "Tailwind CSS", "UI/UX", "Responsive", "Frontend"],
  demoLink: "https://expense-tracker.vercel.app/",
  githubLink: "#",
}
,
  {
    title: "Ayub Sons Travel (React App)",
    description: "Landing site for a travel agency with tour listings and booking enquiry forms.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    demoLink: "https://ayub-sons.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Twitter UI Clone",
    description: "Pixel-perfect Twitter timeline replica featuring tweets, likes, replies, and dark mode.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    demoLink: "https://ayub-sons-travel.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Facebook Clone",
    description: "Interactive Facebook feed clone with posts, comments, and friend-suggestion sidebar.",
    image: "https://images.unsplash.com/photo-1655199798186-23a85b12c4e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    demoLink: "https://ayub-sons-travel.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Youtube Clone",
    description: "YouTube front-page clone featuring search, video player, and responsive sidebar navigation.",
    image: "https://images.unsplash.com/photo-1733681198831-eb4b838c6f77?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    demoLink: "https://ayub-sons-travel.vercel.app/",
    githubLink: "#",
  },
];


export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="container mx-auto px-6 md:px-10" ref={ref}>
      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.h2 variants={itemVariants} className="section-title">
          My Projects
        </motion.h2>

        <motion.p variants={itemVariants} className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each project is built with a focus on performance, user experience, and
          clean code.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative h-60 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-blue-700 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub size={18} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
