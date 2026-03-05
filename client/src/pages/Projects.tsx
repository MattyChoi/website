import type { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Let's Talk",
    tech: "React, Node, Express",
    description:
      "A chatroom that matches users who have opposing views.",
    video: "i261IdoxoQg",
    link: "https://devpost.com/software/let-s-talk-7si84k",
  },
  {
    title: "Pickup",
    tech: "React, JavaScript, HTML, CSS",
    description:
      "Links people who need food with restaurants that have excess.",
    video: "YBgEh0EVaKc",
    link: "https://devpost.com/software/pickup-7b8yhx",
  },
  {
    title: "Pathfinding Visualizer",
    tech: "C++",
    description:
      "Visualizes DFS, BFS, Bidirectional BFS, and A* algorithms.",
    video: "tj44CikxLNg",
    link: "https://github.com/CharlesShi12/pathfinding-visualizer",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-16">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-lg shadow-sm p-4">
            <iframe
              height="200"
              className="w-full rounded"
              src={`https://www.youtube.com/embed/${project.video}`}
              allowFullScreen
            />
            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {project.description}
            </p>

            <a
              href={project.link}
              className="text-sm font-medium text-black hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}