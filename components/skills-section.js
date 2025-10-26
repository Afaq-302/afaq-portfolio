"use client";

import {
  FileText,
  Paintbrush,
  Zap,
  Atom,
  FastForward,
  Server,
  Rocket,
  Leaf,
  Table,
  GitBranch,
  Wind,
  Brain,
} from "lucide-react";

const skills = [
  { name: "HTML 5", icon: FileText, level: 95 },
  { name: "CSS 3 / Sass", icon: Paintbrush, level: 90 },
  { name: "JavaScript", icon: Zap, level: 92 },
  { name: "React", icon: Atom, level: 91 },
  { name: "Next.js", icon: FastForward, level: 86 },
  { name: "Node.js", icon: Server, level: 82 },
  { name: "Express", icon: Rocket, level: 84 },
  { name: "MongoDB", icon: Leaf, level: 80 },
  { name: "SQL", icon: Table, level: 77 },
  { name: "Git / GitHub", icon: GitBranch, level: 88 },
  { name: "Tailwind CSS", icon: Wind, level: 92 },
  { name: "UI / UX", icon: Brain, level: 80 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-purple-900/20 dark:via-zinc-900 dark:to-purple-900/20">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          Core {" "}
          <span className="bg-gradient-to-r from-indigo-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-slate-700">
          Tools &amp; technologies I use daily to design, build &amp; ship reliable web products.
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
          {skills.map(({ name, icon: Icon, level }) => (
            <div
              key={name}
              className="group rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl dark:bg-zinc-900/40 dark:border-zinc-700"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-fuchsia-100 dark:group-hover:bg-fuchsia-900/30 dark:text-fuchsia-300">
                <Icon size={24} strokeWidth={2} />
              </div>

              <h3 className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                {name}
              </h3>

              <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <span
                  className="absolute left-0 top-0 h-full rounded-full bg-indigo-700 transition-all duration-300 group-hover:bg-fuchsia-700"
                  style={{ width: `${level}%` }}
                  aria-hidden
                />
              </div>
              <span className="mt-1 block text-right text-xs font-medium text-slate-600 dark:text-slate-400">
                {level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
