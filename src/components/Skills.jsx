import React from "react";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiPhp,
  SiMysql,
  SiVite,
  SiRedux,
  SiXampp,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skill = [
    { name: "React", icon: SiReact, color: { color: "#61DBFB" } },
    { name: "Redux", icon: SiRedux, color: { color: "#61DBFB" } },
    { name: "Tailwind Css", icon: SiTailwindcss, color: { color: "#18dcff" } },
    { name: "JavaScript", icon: SiJavascript, color: { color: "#ffd32a" } },
    { name: "Css3", icon: SiCss, color: { color: "#FF0000" } },
    { name: "Html5", icon: SiHtml5, color: { color: "#218c74" } },
    { name: "Php", icon: SiPhp, color: { color: "#be2edd" } },
    { name: "MySql", icon: SiMysql, color: { color: "#e58e26" } },
  ];

  const tools = [
    { name: "Vite", icon: SiVite, color: { color: "#be2edd" } },
    { name: "GitHub", icon: SiGithub, color: { color: "#38ada9" } },
    { name: "Git", icon: SiGit, color: { color: "#FF0000" } },
    { name: "Vs Code", icon: VscVscodeInsiders, color: { color: "#3742fa" } },
    { name: "Xampp", icon: SiXampp, color: { color: "#e58e26" } },
  ];
  return (
    <div id="skills" className="w-full mt-16 p-10 max-sm:mt-2">
      <h1 className="p-5 text-6xl text-[var(--text-alt)] max-sm:p-2 max-sm:text-4xl">
        SKILLS
      </h1>
      <hr className="text-[var(--text)] mb-5" />
      <div className="flex justify-evenly gap-5 max-sm:flex-col">
        <div className="w-full p-10 max-sm:p-5">
          <p className="text-3xl text-[var(--text)] mb-5 max-sm:text-2xl ">
            Frontend & Backend Stack
          </p>
          <div className="flex flex-wrap justify-around items-center gap-10 max-sm:gap-5">
            {skill.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="w-40 h-40 p-2 bg-[var(--navbar)] rounded shadow-[var(--shadow)] 
                flex flex-col justify-center items-center cursor-pointer  
                transition-transform duration-300 hover:scale-105 hover:-translate-y-1
                max-sm:w-20 max-sm:h-20"
                >
                  <Icon
                    className="w-20 h-20 mb-2 text-gray-800"
                    style={item.color}
                  />
                  <p className="text-lg text-[var(--text)] font-semibold max-sm:text-sm">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full p-10 max-sm:p-5">
          <p className="text-3xl text-[var(--text)] mb-5 max-sm:text-2xl">
            Workflow & Environment
          </p>
          <div className="flex flex-wrap justify-around items-center gap-10 max-sm:gap-5">
            {tools.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="w-40 h-40 p-2 bg-[var(--navbar)] rounded shadow-[var(--shadow)] 
                flex flex-col justify-center items-center cursor-pointer
                transition-transform duration-300 hover:scale-105 hover:-translate-y-1
                max-sm:w-20 max-sm:h-20
                "
                >
                  <Icon
                    className="w-20 h-20 mb-2 text-gray-800"
                    style={item.color}
                  />
                  <p className="text-lg text-[var(--text)] font-semibold max-sm:texi-sm">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
