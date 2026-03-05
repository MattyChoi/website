import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link =
    "text-sm font-medium text-gray-500 hover:text-black transition";

  const active =
    "text-sm font-semibold text-black";

  return (
    <header className="sticky top-0 backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          Matthew
        </NavLink>

        <nav className="flex gap-8">
          <NavLink to="/projects" className={({isActive}) => isActive ? active : link}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={({isActive}) => isActive ? active : link}>
            Experience
          </NavLink>
          <NavLink to="/education" className={({isActive}) => isActive ? active : link}>
            Education
          </NavLink>
        </nav>
      </div>
    </header>
  );
}