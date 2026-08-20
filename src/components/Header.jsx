import React from "react";
import { header, about } from "../assets/myinfo.js";
import { MdWavingHand } from "react-icons/md";

const Header = () => {
  const { homepage } = header;
  const { name, role, picture } = about;
  return (
    <header id="home" className="w-full p-2 bg-[var(--background)]">
      <div className=" mt-40 flex flex-col justify-center items-center gap-y-10">
        <img className="w-50 h-50 rounded-full" src={picture} alt="userimage" />
        <p className="text-8xl font-bold text-[var(--text)] max-sm:text-4xl">
          I'm <span className="font-bold text-[var(--heading)]">{name}</span>
        </p>
        <p className="font-semibold text-7xl text-[var(--text-alt)] max-sm:text-3xl">
          {role}{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
