import React from "react";
import { projects } from "../assets/myinfo";
import { SiGithub } from "react-icons/si";
import { GrShare } from "react-icons/gr";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-10">
      <h1 className="p-5 text-6xl text-[var(--text-alt)] max-sm:p-2 max-sm:text-4xl">
        PROJECTS
      </h1>
      <hr className="text-[var(--text)] mb-10" />

      <div
        className="grid grid-cols-2 gap-10 max-md:grid-cols-1"
      >
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="p-5 bg-[var(--navbar)] shadow-[var(--shadow-alt)] rounded-xl
              transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-3xl font-bold text-center text-[var(--heading)] mb-5 max-sm:text-2xl">
                {project.name}
              </h3>

              <div className="flex gap-5 justify-center items-center max-lg:flex-col">
                <img
                  className="w-50 h-30 border border-slate-300 rounded-md p-2"
                  src={project.image}
                  alt={project.name}
                />
                <p className="text-[var(--text)] text-lg max-sm:text-md">
                  {project.description}
                </p>
              </div>

              <ul className="mt-5 p-2 flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="rounded-md px-2 py-2 text-[var(--text)] 
                      border border-blue-500"
                    >
                      {item}
                    </li>
                  );
                })}
                {project.environment &&
                  project.environment.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="rounded-md px-2 py-2 text-[var(--text)] 
                         border border-blue-500"
                      >
                        {item}
                      </li>
                    );
                  })}
              </ul>

              <div className=" mt-2 text-[var(--heading)] text-2xl p-2 flex justify-center gap-5">
                <a
                  className="hovering"
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <SiGithub />
                </a>
                <a
                  className="hovering"
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <GrShare />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
