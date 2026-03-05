import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggle() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 text-gray-700 hover:text-black transition"
    >
      🌙 <span className="font-medium">Color Mode</span>
    </button>
  );
}