import type { Education } from "../types/education";

const education = [
  {
    institution: "University of Minnesota, Twin Cities",
    detail: "Computer Science, Mathematics",
    meta: "Dean's list, Minnehack 2021 & 2022 Winner, LionHack 2022 & 2023 Winner",
  },
  {
    institution: "Eden Prairie High School",
    detail: "",
    meta: "ACT: 36, SAT: 1580, Presidential Scholar Candidate",
  },
];

export default function Education() {
  return (
    <section className="bg-white dark:bg-slate-900 transition-colors duration-300 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="space-y-3 mb-16">
          {/* <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full
            bg-slate-200 text-slate-600
            dark:bg-slate-800 dark:text-slate-400
            transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {education.length} institutions
          </span> */}
          <h2 className="text-5xl font-bold tracking-tight
            text-slate-800 dark:text-slate-100
            transition-colors duration-300">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-0">

          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px
            bg-slate-200 dark:bg-slate-700 transition-colors duration-300" />

          {education.map((edu) => (
            <div key={edu.institution} className="relative flex gap-8 pb-12 last:pb-0">

              {/* Dot */}
              <div className="relative mt-1.5 shrink-0">
                <div className="w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300
                  bg-white border-slate-300
                  dark:bg-slate-900 dark:border-slate-600" />
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold
                  text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  {edu.institution}
                </h3>
                <p className="text-sm leading-relaxed
                  text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  {edu.detail}
                </p>
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full
                  bg-slate-100 text-slate-500
                  dark:bg-slate-800 dark:text-slate-400
                  transition-colors duration-300">
                  {edu.meta}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}