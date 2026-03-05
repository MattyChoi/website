import type { Experience } from "../types/experience";

const experiences: Experience[] = [
  {
    company: "Meta",
    role: "Software Engineer",
    date: "Aug 2024 - Present",
    description:
      "Facebook Integrity Entity and Actor Understanding team - Building production ML models and using LLMs to reduce harm in the Facebook ecosystem.",
  },
  {
    company: "iCapital",
    role: "Quant Intern",
    date: "June - Aug 2023",
    description:
      "",
  },
  {
    company: "Hosta a.i.",
    role: "Computer Vision Intern",
    date: "Oct 2022 - Jan 2023",
    description: "",
  },
  {
    company: "Meta",
    role: "SWE Intern",
    date: "May - Aug 2022",
    description: "FAST AI Team - Researching and developing SOTA facial recognition models for reality labs",
  },
  {
    company: "Intuit",
    role: "SWE Intern",
    date: "May - Aug 2021",
    description: "",
  },
];

export default function Experience() {
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
            {experiences.length} positions
          </span>
          <h2 className="text-5xl font-bold tracking-tight
            text-slate-800 dark:text-slate-100
            transition-colors duration-300">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-0">

          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px
            bg-slate-200 dark:bg-slate-700 transition-colors duration-300" />

          {experiences.map((exp) => (
            <div key={exp.company} className="relative flex gap-8 pb-12 last:pb-0">

              {/* Dot */}
              <div className="relative mt-1.5 shrink-0">
                <div className="w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300
                  bg-white border-slate-300
                  dark:bg-slate-900 dark:border-slate-600" />
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                <p className="text-xs font-medium uppercase tracking-wide
                  text-slate-400 dark:text-slate-500 transition-colors duration-300">
                  {exp.date}
                </p>
                <h3 className="text-lg font-semibold
                  text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  {exp.company}
                  <span className="ml-2 text-base font-normal
                    text-slate-400 dark:text-slate-500">
                    — {exp.role}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed
                  text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}