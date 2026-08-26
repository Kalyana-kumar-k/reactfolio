import React from "react";
import { header, about } from "../assets/myinfo.js";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  const { homepage } = header;
  const { name, role, picture, description, resume, social } = about;
  return (
    <header id="home" className="w-full p-2 bg-[var(--background)]">
      <div className=" mt-40 flex flex-col justify-center items-center gap-5">
        <p className="text-8xl font-bold text-[var(--text)] max-sm:text-4xl">
          I'm <span className="font-bold text-[var(--heading)]">{name}</span>
        </p>
        <p className="font-semibold text-7xl text-[var(--text-alt)] max-sm:text-3xl">
          {role}{" "}
        </p>

        <div className="w-full p-2 flex justify-center items-center gap-5 max-lg:flex-col">
          <img
            className="p-1 w-40 h-40 rounded-full"
            src={picture}
            alt="userimage"
          />
          <p
            className="w-250 inline-flex flex-wrap text-[var(--text)] text-lg 
          max-sm:text-md max-lg:w-auto"
          >
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-7 justify-center items-center">
        <a
          className="font-semibold px-4 py-4 water-btn"
          href={resume}
          target="_blank"
          rel="noopener norefferer"
        >
          <span>Resume</span>
        </a>
        <a
          href={social.github}
          target="_blank"
          rel="noopener norefferer"
          className="hovering "
        >
          <FaGithub className="text-4xl font-semibold text-[var(--btn-bg)]" />
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener norefferer"
          className="hovering"
        >
          <BsLinkedin className="text-3xl font-semibold text-[var(--btn-bg)]" />
        </a>
      </div>
    </header>
  );
};

export default Header;
