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
      className="w-full fixed top-0 left-0 z-100 p-2 h-16 flex justify-between items-center gap-x-10 
      shadow-[var(--shadow-navbar)] bg-[var(--navbar)] text-[var(--text-alt)] max-sm:flex-col"
    >
      <a
        href={homepage}
        className="font-bold text-2xl text-[var(--navbar-link)] max-sm:text-sm hovering"
      >
        {title}
      </a>

      <div
        className="flex gap-4 text-2xl text-[var(--navbar-link)] 
      max-sm:text-sm max-sm:justify-evenly"
      >
        <a href="#home" className="hovering">
          Home
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
        <button
          onClick={toggleTheme}
          className="me-5 outline-none text-2xl cursor-pointer"
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
