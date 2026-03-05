export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} MyAI. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}