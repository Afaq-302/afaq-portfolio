"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Job from "@/public/job.jpg";
import FileQuill from "@/public/filequill.jpg";
import Agent from "@/public/p1.png";

const projects = [
  {
    title: "Group Ticketing Portal",
    description:
      "Streamlined group ticket management system for agents to track, assign, and resolve support requests efficiently. (Demo Login: a@gmail.com 1..9) ",
    image: Agent,
    technologies: ["Next.js", "Tailwind CSS", "UI", "Prisma", "MongoDB", "REST API"],
    demoLink: "https://agent-portal-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "JobMarkaz",
    description:
      "Verified job listings across Pakistan with direct HR contact for faster applications.",
    image: Job,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
    demoLink: "https://job-markaz.vercel.app/",
    githubLink: "#",
  },
  {
    title: "File Quill",
    description:
      "Privacy-first PDF platform to convert, merge, split, compress, and protect files efficiently.",
    image: FileQuill,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Redis/BullMQ",
      "S3 Storage",
      "Docker",
    ],
    demoLink: "https://www.filequill.com/",
    githubLink: "#",
  },
  {
    title: "DevTray",
    description:
      "A developer utility hub featuring essential tools like QR generator, text editor, markdown previewer, IP insights, and image compressor — all in one place.",
    image:
      "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Frontend"],
    demoLink: "https://devtray.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Connextar (UK) Official Website",
    description:
      "Corporate showcase site highlighting Connextar’s services, expertise, and client projects.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Email Forms", "Adobe XD"],
    demoLink: "https://www.connextar.com",
    githubLink: "#",
  },
  {
    title: "Masjid App Suite",
    description:
      "Comprehensive mosque management platform for prayer schedules, donations, and community updates.",
    image:
      "https://images.unsplash.com/photo-1652112066944-305eaff0d0ef?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "Stripe", "MongoDB"],
    demoLink: "https://mas.umairshah.dev",
    githubLink: "#",
  },
  {
    title: "Convertify Tool",
    description:
      "Fast and intuitive utility suite for file conversions, calculations, and daily productivity tasks.",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1170&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Frontend"],
    demoLink: "https://convertify-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Solutions App",
    description:
      "Real-time job tracking and task management dashboard with Kanban, analytics, and team collaboration.",
    image:
      "https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?q=80&w=1025&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
    demoLink: "https://solutions-nextjs-app.vercel.app/",
    githubLink: "#",
  },
  {
    title: "POKERPLY",
    description:
      "Telegram-based multiplayer poker platform with real-time rooms, betting, and leaderboard ranking.",
    image:
      "https://plus.unsplash.com/premium_photo-1720551256983-445d23d516b2?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "WebSockets", "APIs"],
    demoLink: "https://pokerply.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Pak Draw",
    description:
      "Quick raffle and lucky draw generator that picks random winners from uploaded lists.",
    image:
      "https://plus.unsplash.com/premium_photo-1677265809262-7039e3151514?q=80&w=735&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js", "APIs"],
    demoLink: "https://pak-draw-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "React Invoice Generator",
    description:
      "Simple and elegant invoice creator with live preview and PDF export functionality.",
    image:
      "https://plus.unsplash.com/premium_photo-1679784204551-013181bb687f?q=80&w=1260&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "HTML2PDF", "UI/UX"],
    demoLink: "https://invoice-generator-reactjs.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Multi Toolbox",
    description:
      "All-in-one utility suite including unit converters, QR tools, and color pickers in a clean UI.",
    image:
      "https://plus.unsplash.com/premium_photo-1722156533656-b22cbcf1c82e?q=80&w=1170&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Frontend"],
    demoLink: "https://toolbox-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "Intuitive dashboard for managing income and expenses with charts and category insights.",
    image:
      "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1074&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Chart.js", "Local Storage"],
    demoLink: "https://expense-tracker-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Ayub Sons Travel",
    description:
      "Travel agency landing page with curated tour packages and booking inquiry integration.",
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    demoLink: "https://ayub-sons.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Twitter Clone",
    description:
      "Fully functional Twitter UI clone with tweets, replies, likes, and dark mode interface.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1074&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demoLink: "https://twitter-clone-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "Facebook Clone",
    description:
      "Interactive Facebook-style social feed with posts, comments, and friend suggestions.",
    image:
      "https://images.unsplash.com/photo-1655199798186-23a85b12c4e4?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demoLink: "https://facebook-clone-by-afaq.vercel.app/",
    githubLink: "#",
  },
  {
    title: "YouTube Clone",
    description:
      "Responsive YouTube homepage replica with video player, search, and sidebar navigation.",
    image:
      "https://images.unsplash.com/photo-1733681198831-eb4b838c6f77?q=80&w=1332&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demoLink: "https://youtube-clone-by-afaq.vercel.app/",
    githubLink: "#",
  },
];

function Cover({ src, alt }) {
  const isExternal = typeof src === "string";
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl transition-transform duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-105 group-hover:shadow-xl">
      {isExternal ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-purple-900/20 dark:via-zinc-900 dark:to-purple-900/20"
    >
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Recent {" "}
          <span className="bg-gradient-to-r from-indigo-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-slate-700">
          A snapshot of the products I’ve shipped — crafted for performance, accessibility, and clean UI.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900/40 dark:border-zinc-700"
            >
              <Cover src={p.image} alt={p.title} />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-indigo-700 group-hover:text-fuchsia-700 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mb-5 text-slate-800 dark:text-slate-200">{p.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-indigo-700 px-5 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-fuchsia-700"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>

                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 transition-transform duration-300 hover:scale-105 hover:border-fuchsia-700 hover:text-fuchsia-700 dark:text-slate-200 dark:border-zinc-600"
                  >
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}