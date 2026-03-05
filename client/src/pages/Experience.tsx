export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">
            Microsoft — Software Engineer (2023)
          </h3>
          <p className="text-gray-600">
            AI/LLM incubation research for Copilot. Worked with React,
            C#, GraphQL, GPT-4o, o1, o3.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Google — SWE Intern (2022)
          </h3>
          <p className="text-gray-600">
            Wrote C++ and Golang software to fuzz test Google Cloud systems.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            AT&T — SWE Intern (2021)
          </h3>
          <p className="text-gray-600">
            Migrated software to cloud, automated APIs.
          </p>
        </div>
      </div>
    </section>
  );
}