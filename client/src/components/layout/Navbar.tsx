import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link =
    "text-base font-medium text-sky-900/60 hover:text-sky-900 transition-colors duration-300";
  const active =
    "text-base font-semibold text-sky-900";

  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md
      bg-sky-200/80 border-sky-300
      transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <nav className="flex gap-10">
          <NavLink to="/" className={({ isActive }) => (isActive ? active : link)}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? active : link)}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? active : link)}>
            Experience
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? active : link)}>
            Education
          </NavLink>
        </nav>

        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
            transition-colors duration-300 cursor-pointer
            bg-sky-300/60 text-sky-900 hover:bg-sky-300"
          onClick={() => setDark(!dark)}
        >
          <span>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
        </div>

      </div>
    </header>
  );
}