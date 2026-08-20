import React from "react";
import { contact, about } from "../assets/myinfo";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Contact = () => {
  const { email, phone } = contact;
  const { social } = about;
  return (
    <div id="contact" className="w-full p-10 mt-16 text-center">
      <h1 className="p-5 mb-5 text-6xl text-[var(--text-alt)] max-sm:p-2 max-sm:text-4xl">
        CONTACT
      </h1>
      <div className="flex justify-center items-center gap-4 max-sm:flex-col">
        <a
          className="font-semibold rounded-lg font-semibold water-btn"
          href={`mailto: ${email}`}
          target="_blank"
          rel="noopener norefferer"
        >
          <span className="px-3 inline-flex gap-4 items-center">
            {" "}
            <SiGmail />
            Email
          </span>
        </a>
        <a
          className="font-semibold rounded-lg water-btn"
          href={`tel: ${phone}`}
          target="_blank"
          rel="noopener norefferer"
        >
          <span className="px-5 inline-flex gap-4 items-center">
            <FaPhoneAlt />
            Call{" "}
          </span>
        </a>

        <a
          className="font-semibold px-4 py-4 rounded-lg water-btn"
          href={social.linkedin}
          target="_blank"
          rel="noopener norefferer"
        >
          <span className="inline-flex gap-4 items-center">
            <TbBrandLinkedinFilled />
            Linkedin{" "}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
