import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";
import { about } from "../assets/myinfo";
const Footer = () => {
  return (
    <footer className="w-full p-5 text-2xl bg-[var(--navbar)] shadow-[var(--shadow-alt)] max-md:text-lg">
      <div className="text-[var(--navbar-link)]  flex justify-center items-center gap-5">
        <a
          href={about.social.github}
          className="hovering"
          target="_blank"
          rel="noopener norefferer"
        >
          GitHub
        </a>
        <a
          href={about.social.linkedin}
          className="hovering"
          target="_blank"
          rel="noopener norefferer"
        >
          Linkedin
        </a>
        <a
          href={about.resume}
          className="hovering"
          target="_blank"
          rel="noopener norefferer"
        >
          Resume
        </a>
      </div>
      <div className="text-[var(--text)] flex justify-center items-center gap-1">
        <RiRadioButtonLine className="text-green-400" />
        <span> Open to new oppurtunities.</span>
      </div>
      <div className="text-[var(--text)] flex justify-center items-center gap-4 max-md:items-start">
        <FaRegCopyright />
        <span> 2026 | {about.name} | All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
