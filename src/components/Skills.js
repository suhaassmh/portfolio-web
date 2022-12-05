import React from "react";

import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiFirebase } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiPython } from "react-icons/si";

function Skills() {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="max-w-4xl mx-auto justify-center py-12 " id="tech">
        <p className="text-2xl text-white  md:text-4xl font-bold text-center pt-4">
          Tech I Use
        </p>

        <div className="flex flex-wrap justify-center pt-2">
          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg ">
            <SiFlutter color="#2196f3" className="mt-auto mx-3 text-3xl" />
            <p className="mt-auto text-l font-semibold text-center">Flutter</p>
          </div>

          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg">
            <SiDart color="#2196f3" className="mt-auto mx-3 text-3xl" />
            <p className="mt-auto text-l font-semibold text-center">Dart</p>
          </div>

          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg">
            <SiFirebase color="orange" className="mt-auto mx-3 text-4xl" />
            <p className="mt-auto text-l font-semibold text-center">Firebase</p>
          </div>

          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg">
            <FaReact color="#2196f3" className="mt-auto mx-3 text-3xl" />
            <p className="mt-auto text-l font-semibold text-center">React</p>
          </div>

          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg">
            <SiJavascript color="#ffdf00" className="mt-auto mx-1 text-4xl" />
            <p className="mt-auto text-l font-semibold text-center">
              JavaScript
            </p>
          </div>

          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg">
            <SiPython color="darkblue" className="mt-auto mx-3 text-3xl" />
            <p className="mt-auto text-l font-semibold text-center">Python</p>
          </div>

          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg">
            <SiDotnet color="gray" className="mt-auto mx-3 text-4xl" />
            <p className="mt-2 mx-2 text-sm font-semibold text-center">C#</p>
          </div>

          <div className="flex h-20 w-40 p-6 m-6 overflow-hidden bg-white shadow-xl rounded-xl sm:w-40 hover:drop-shadow-lg">
            <FiFigma color="orange" className="mt-auto mx-3 text-4xl" />
            <p className="mt-auto text-l font-semibold text-center">Figma</p>
          </div>

          {/* <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            TailwindCSS
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
