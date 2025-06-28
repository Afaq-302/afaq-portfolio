"use client"

/* ------------------------------------------------------------------
 *  ProjectsSection – refreshed visuals & subtle motion
 * ----------------------------------------------------------------*/
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

/* project data (unchanged) */
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
