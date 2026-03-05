export default function Home() {
  return (
    <section 
      className="min-h-[calc(100vh-73px)] bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-6">

          {/* Badge */}{/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full
            bg-slate-200 text-slate-600
            dark:bg-slate-800 dark:text-slate-400
            transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight leading-tight
            text-slate-800 dark:text-slate-100
            transition-colors duration-300">
            Hey, I'm<br />
            <span className="text-slate-400 dark:text-slate-500">Matthew</span>
          </h1>

          {/* Description */}
          <p className="text-base leading-relaxed
            text-slate-500 dark:text-slate-400
            transition-colors duration-300 max-w-md">
            Software Engineer working on AI/LLM systems currently based in Seattle. Passionate about
            scalable LLM systems, agentic designs, and machine learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium
                transition-colors duration-300
                bg-slate-800 text-white hover:bg-slate-700
                dark:bg-slate-400 dark:text-slate-1000 dark:hover:bg-white"
            >
              View Resume
            </a>
            
            <a
              href="https://www.linkedin.com/in/mattychoi/"
              className="px-5 py-2.5 rounded-full text-sm font-medium
                transition-colors duration-300
                bg-slate-100 text-slate-700 hover:bg-slate-200
                dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Connect →
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20
              bg-slate-400 dark:bg-slate-600
              transition-colors duration-300" />
            <img
              src="/profile.jpg"
              alt="Matthew"
              className="relative w-[380px] opacity-90 dark:opacity-70 transition-opacity duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}