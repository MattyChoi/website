import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the specific icon

export default function Footer() {
  return (
    <footer className="border-t transition-colors duration-300
      bg-sky-200 border-sky-300">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">

        <p className="text-sm font-medium text-sky-900/60">
          © {new Date().getFullYear()} Matthew. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/MattyChoi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors duration-300
              text-sky-900/60 hover:text-sky-900"
          >
            <FaGithub size={24} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mattychoi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors duration-300
              text-sky-900/60 hover:text-sky-900"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}