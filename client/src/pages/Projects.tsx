import type { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Pickup",
    tech: "React, JavaScript, HTML, CSS",
    description:
      "Links people who need food with restaurants that have excess.",
    video: "YBgEh0EVaKc",
    link: "https://devpost.com/software/pickup-7b8yhx",
  },
];

export default function Projects() {
  return (
    <section className="bg-white dark:bg-slate-900 transition-colors duration-300 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="space-y-3 mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full
            bg-slate-200 text-slate-600
            dark:bg-slate-800 dark:text-slate-400
            transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </span>
          <h2 className="text-5xl font-bold tracking-tight
            text-slate-800 dark:text-slate-100
            transition-colors duration-300">
            Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl overflow-hidden
                border transition-colors duration-300
                bg-white border-slate-200 hover:border-slate-300
                dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-slate-600"
            >
              {/* Video */}
              <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.video}`}
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 space-y-3">

                {/* Tech badge */}
                <p className="text-xs font-medium tracking-wide uppercase
                  text-slate-400 dark:text-slate-500 transition-colors duration-300">
                  {project.tech}
                </p>

                <h3 className="text-lg font-semibold
                  text-slate-800 dark:text-slate-100
                  transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed flex-1
                  text-slate-500 dark:text-slate-400
                  transition-colors duration-300">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium
                    transition-colors duration-300
                    text-slate-500 hover:text-slate-800
                    dark:text-slate-400 dark:hover:text-slate-100"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}