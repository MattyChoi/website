export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="space-y-8 max-w-xl">
          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            Building intelligent systems <br />
            <span className="bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
              powered by AI.
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Software Engineer working on AI/LLM systems.
            Passionate about scalable LLM systems, agentic designs, and machine learning.
          </p>

          <div className="flex gap-4">
            <a
              href="/images/project/CSResume.pdf"
              className="px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition"
            >
              View Resume
            </a>

            <a
              href="https://www.linkedin.com"
              className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Connect
            </a>
          </div>
        </div>

        <div>
          <img
            src="/images/undraw/software_engineer.svg"
            className="w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}