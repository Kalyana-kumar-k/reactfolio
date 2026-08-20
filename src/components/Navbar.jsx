import React from "react";
import { header } from "../assets/myinfo.js";
import { useTheme } from "./Context/ThemeContext.jsx";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { title, homepage } = header;
  const { theme, toggleTheme } = useTheme();
  return (
    <nav
      className="w-full fixed top-0 left-0 z-100 p-2 h-16 flex justify-between items-center gap-x-10 shadow-xl 
    bg-[var(--navbar)] text-[var(--text-alt)] max-sm:flex-col max-sm:items-start max-sm:w-vw"
    >
      <div className="flex">
        <button
          onClick={toggleTheme}
          className="me-5 outline-none text-xl cursor-pointer"
        >
          {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <a
          href={homepage}
          className="font-semibold text-[var(--navbar-link)] hovering"
        >
          {title}
        </a>
      </div>

      <div className="flex gap-3 text-[var(--navbar-link)]">
        <a href="#home" className="hovering">
          Home
        </a>
        <a href="#about" className="hovering">
          About
        </a>
        <a href="#skills" className="hovering">
          Skills
        </a>
        <a href="#projects" className="hovering">
          Projects
        </a>
        <a href="#contact" className="hovering">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
