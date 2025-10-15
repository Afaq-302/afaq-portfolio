"use client"

/* ------------------------------------------------------------------
 *  ProjectsSection – refreshed visuals & subtle motion
 * ----------------------------------------------------------------*/
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

import Job from "@/public/job.jpg"
import FileQuill from "@/public/filequill.jpg"

/* project data (unchanged) */
const projects = [
  {
    title: "JobMarkaz",
    description: "Verified job listings across Pakistan with direct HR contact for faster applications.",
    image: Job,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
    demoLink: "https://job-markaz.vercel.app/",
    githubLink: "#",
  },
  {
    title: "File Quill",
    description: "Privacy-first PDF platform to convert, merge, split, compress, and protect files efficiently.",
    image: FileQuill,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Redis/BullMQ", "S3 Storage", "Docker"],
    demoLink: "https://www.filequill.com/",
    githubLink: "#",
  },
  {
  title: "DevTray",
  description: "A developer utility hub featuring essential tools like QR generator, text editor, markdown previewer, IP insights, and image compressor — all in one place.",
  image: "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
  technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Frontend"],
  demoLink: "https://devtray.vercel.app/",
  githubLink: "#",
},

{
  title: "Connextar (UK) Official Website",
  description: "Corporate showcase site highlighting Connextar’s services, expertise, and client projects.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
  technologies: ["Next.js", "Tailwind CSS", "Email Forms", "Adobe XD"],
  demoLink: "https://www.connextar.com",
  githubLink: "#",
},
{
    title: "Masjid App Suite",
    description: "Comprehensive mosque management platform for prayer schedules, donations, and community updates.",
    image: "https://images.unsplash.com/photo-1652112066944-305eaff0d0ef?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "Stripe", "MongoDB"],
    demoLink: "https://mas.umairshah.dev",
    githubLink: "#",
  },
  {
    title: "Convertify Tool",
    description: "Fast and intuitive utility suite for file conversions, calculations, and daily productivity tasks.",
    image: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1170&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Frontend"],
    demoLink: "https://convertify-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Solutions App",
    description: "Real-time job tracking and task management dashboard with Kanban, analytics, and team collaboration.",
    image: "https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?q=80&w=1025&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
    demoLink: "https://solutions-nextjs-app.vercel.app/",
    githubLink: "#",
  },
  
  {
    title: "POKERPLY",
    description: "Telegram-based multiplayer poker platform with real-time rooms, betting, and leaderboard ranking.",
    image: "https://plus.unsplash.com/premium_photo-1720551256983-445d23d516b2?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "WebSockets", "APIs"],
    demoLink: "https://pokerply.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Pak Draw",
    description: "Quick raffle and lucky draw generator that picks random winners from uploaded lists.",
    image: "https://plus.unsplash.com/premium_photo-1677265809262-7039e3151514?q=80&w=735&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "APIs"],
    demoLink: "https://pak-draw-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "React Invoice Generator",
    description: "Simple and elegant invoice creator with live preview and PDF export functionality.",
    image: "https://plus.unsplash.com/premium_photo-1679784204551-013181bb687f?q=80&w=1260&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "HTML2PDF", "UI/UX"],
    demoLink: "https://invoice-generator-reactjs.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Multi Toolbox",
    description: "All-in-one utility suite including unit converters, QR tools, and color pickers in a clean UI.",
    image: "https://plus.unsplash.com/premium_photo-1722156533656-b22cbcf1c82e?q=80&w=1170&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Frontend"],
    demoLink: "https://toolbox-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Expense Tracker",
    description: "Intuitive dashboard for managing income and expenses with charts and category insights.",
    image: "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1074&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Chart.js", "Local Storage"],
    demoLink: "https://expense-tracker-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Ayub Sons Travel",
    description: "Travel agency landing page with curated tour packages and booking inquiry integration.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    demoLink: "https://ayub-sons.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Twitter Clone",
    description: "Fully functional Twitter UI clone with tweets, replies, likes, and dark mode interface.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1074&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demoLink: "https://twitter-clone-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Facebook Clone",
    description: "Interactive Facebook-style social feed with posts, comments, and friend suggestions.",
    image: "https://images.unsplash.com/photo-1655199798186-23a85b12c4e4?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demoLink: "https://facebook-clone-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "YouTube Clone",
    description: "Responsive YouTube homepage replica with video player, search, and sidebar navigation.",
    image: "https://images.unsplash.com/photo-1733681198831-eb4b838c6f77?q=80&w=1332&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demoLink: "https://youtube-clone-by-afaq.vercel.app/",
    githubLink: "#",
  },
];


export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  /* stagger container */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  /* each card */
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="relative py-24">
      {/* background accent blob */}
      <span className="pointer-events-none absolute -top-32 right-1/2 h-[28rem] w-[28rem] translate-x-1/2 rounded-full
                       bg-indigo-400/20 blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* heading */}
          <motion.h2
            variants={item}
            className="mb-4 text-center text-3xl font-extrabold md:text-4xl"
          >
            Recent&nbsp;
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600
                             bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* intro */}
          <motion.p
            variants={item}
            className="mx-auto mb-14 max-w-2xl text-center text-lg text-slate-600"
          >
            A snapshot of the products I’ve shipped — each crafted with performance, accessibility,
            and pixel-perfect UI in mind.
          </motion.p>

          {/* grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => (
              <motion.article
                key={p.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-slate-200 bg-white/60 shadow-sm backdrop-blur
                           transition-shadow hover:shadow-lg"
              >
                {/* cover */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0
                                   transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-indigo-600">{p.title}</h3>
                  <p className="mb-5 text-slate-700">{p.description}</p>

                  {/* tech pills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {p.technologies.map(t => (
                      <span
                        key={t}
                        className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    {/* main button */}
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-1 rounded-full bg-gradient-to-r
                                 from-indigo-600 to-blue-600 px-5 py-2 text-sm font-medium text-white
                                 shadow transition-all active:scale-95 focus-visible:outline-none
                                 focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <ExternalLink size={16} />
                      Live&nbsp;Demo
                      {/* shine */}
                      <span className="absolute inset-0 -translate-x-full bg-white/20 blur-sm
                                       transition-all duration-700 group-hover:translate-x-full" />
                    </a>

                    {/* secondary button */}
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-300
                                 px-5 py-2 text-sm font-medium text-slate-700 transition-all
                                 hover:border-indigo-400 hover:text-indigo-600 active:scale-95
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
