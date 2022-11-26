import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div
      className="min-w-xl w-full text-center m-auto pt-20 pb-10 "
      id="contactme"
    >
      <h1 className="text-4xl font-bold text-slate-800">Contact Me</h1>
      <a href="https://docs.google.com/document/d/14YkFcOVjkYWfRGk31EflMW_J9Dn9x8li/edit?usp=sharing&ouid=111011600800606515254&rtpof=true&sd=true">
        <span className="mt-10 mx-10 inline-block w-auto bg-slate-800 font-display text-white text-base font-bold md:text-xl py-4 px-7 cursor-pointer drop-shadow-2xl hover:drop-shadow-md rounded">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">View CV</span>
            <FaArrowRight color="white" />
          </div>
        </span>
      </a>
      <a href="mailto:suhaas.smh@gmail.com">
        <span className="mt-10 mx-10 inline-block w-auto bg-white font-display text-slate-800 text-base font-bold md:text-xl py-4 px-7 cursor-pointer drop-shadow-xl hover:drop-shadow-md rounded">
          <div className="flex flex-row items-center">
            <span className="mr-3  ">Email Me</span>
            <FaArrowRight color="black" />
          </div>
        </span>
      </a>
    </div>
  );
}
