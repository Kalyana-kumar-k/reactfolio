import React from "react";
import { about } from "../assets/myinfo";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const About = () => {
  const { description, resume, social } = about;
  return (
    <div
      id="about"
      className="w-full mt-16  flex flex-col justify-around p-10 bg-[var(--background)] max-sm:mt-5"
    >
      <h1 className="p-5 text-6xl text-[var(--text-alt)] max-sm:p-2 max-sm:text-4xl">
        ABOUT
      </h1>
      <hr className="text-[var(--text)]" />

      <div className="flex max-sm:flex-col-reverse">
        <img
          className="w-100 h-100 max-sm:hidden"
          src="public/user-setting.webp"
          alt="aboutSec"
        />

        <div>
          <p className="p-10 text-[var(--text)] text-lg max-sm:text-md max-sm:p-1">
            {description}
          </p>

          <div className=" mt-10 flex gap-7 justify-center items-center">
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
        </div>
      </div>
    </div>
  );
};

export default About;
