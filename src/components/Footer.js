import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  return (
    <div className="mb-0 min-h-full border-t-3/2">
      <div  className="flex align-center justify-end mx-0 md-0">
        <a 
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-700 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/suhaassmh"
        >
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>
        <a 
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.linkedin.com/in/suhaassmh/"
        >
          <FaLinkedin />
          <span class="sr-only">LinkedIn</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-500 hover:bg-pink-400 rounded-full hover:text-white transition-colors duration-300"
          href="https://dribbble.com/suhaassmh"
        >
          <FaDribbble />
          <span class="sr-only">Dribble</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-400 rounded-full hover:text-white transition-colors duration-300"
          href="https://mailto:suhaas.smh@gmail.com"
        >
          <FaRegEnvelope />
          <span class="sr-only">Email</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
