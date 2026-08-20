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
      className="w-full p-2 h-16 flex items-center gap-x-10 shadow-xl 
    bg-[var(--navbar)] text-[var(--text-alt)] fixed max-sm:flex-col max-sm:-p-4" 
    >
      <div className="flex">
        <button onClick={toggleTheme} className="me-5 outline-none text-xl">
          {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <a href={homepage} className="font-semibold text-[var(--heading)]">
          {title}
        </a>
      </div>

      <div className="flex gap-3">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="projects">Projects</a>
        <a href="contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
