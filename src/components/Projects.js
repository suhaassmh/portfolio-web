import React, { useEffect } from "react";
import { FcTodoList } from "react-icons/fc";
import { GiMirrorMirror } from "react-icons/gi";
import { GiTicTacToe } from "react-icons/gi";
import { FcNews } from "react-icons/fc";
import { RiScalesFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";




function Project() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });
  return (
    <div>
      <div
        className="sm:max-w-4xl sm:mx-auto justify-center py-12"
        id="Projects"
      >
        <p className="text-2xl text-slate-800  md:text-4xl font-bold text-center">
          Personal Projects
        </p>

        <table class="table-auto justify-center text-base font-semibold leading-relaxed mt-4 mx-auto">
          <tbody>
            <tr className="border-b-2 max-w-4xl" data-aos="fade-right" data-aos-duration="400" data-aos-delay="100">
              <td className="w-3/10 px-auto sm:w-2/10 text-3xl sm:text-5xl m-auto sm:m-0 transition-colors duration-300 ">
                <GiMirrorMirror />
              </td>

              <td className="w-6/10 sm:w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-center transition-colors duration-300">
                  Smart Mirror{" "}
                </p>
              </td>

              <td className="w-5/10 hidden sm:table-cell ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  An IoT based project. A mirror with Face and Emotion
                  Recognition capabilities. Also worked on Voice based command
                  to switch on/off devices like fan & light.
                </p>
              </td>

              <td className="w-3/10 sm:w-1/10">
                {" "}
                <a href="https://github.com/suhaassmh/FYP-SmartMirror">
                  Link🔗
                </a>
              </td>
            </tr>

            <tr className="border-b-2 max-w-4xl"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="200">
              <td className="w-3/10 px-auto sm:w-2/10 text-3xl sm:text-5xl m-auto sm:m-0 transition-colors duration-300 ">
                <FcTodoList />
              </td>

              <td className="w-6/10 sm:w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-center transition-colors duration-300">
                  ToDo app{" "}
                </p>
              </td>

              <td className="w-5/10 hidden sm:table-cell ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A fully-fledged TODO mobile application. Built using Flutter
                  framework. User can set priority for their upcoming task in
                  the app.
                </p>
              </td>

              <td className="w-3/10 sm:w-1/10">
                {" "}
                <a href="https://github.com/suhaassmh/myTODO">Link🔗</a>
              </td>
            </tr>

            <tr className="border-b-2 max-w-4xl"  data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
              <td className="w-3/10 px-auto sm:w-2/10 text-3xl sm:text-5xl m-auto sm:m-0 transition-colors duration-300 ">
                <GiTicTacToe />
              </td>

              <td className="w-6/10 sm:w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-center transition-colors duration-300">
                  TicTacToe{" "}
                </p>
              </td>

              <td className="w-5/10 hidden sm:table-cell ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A simple interactive TicTacToe mobile game application, with
                  clean UI. Developed using Flutter framework.
                </p>
              </td>

              <td className="w-3/10 sm:w-1/10">
                {" "}
                <a href="https://github.com/suhaassmh/TicTacToe">Link🔗</a>
              </td>
            </tr>

            <tr className="border-b-2 max-w-4xl"  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
              <td className="w-3/10 px-auto sm:w-2/10 text-3xl sm:text-5xl m-auto sm:m-0 transition-colors duration-300 ">
                <FcNews />
              </td>

              <td className="w-6/10 sm:w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-center transition-colors duration-300">
                  Bulletin{" "}
                </p>
              </td>

              <td className="w-5/10 hidden sm:table-cell ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A social-media themed web application for instant news
                  sharing. Users can create a profile and share on-going news
                  around them instantly.
                </p>
              </td>

              <td className="w-3/10 sm:w-1/10">
                {" "}
                <a href="https://github.com/suhaassmh/Bulletin">Link🔗</a>
              </td>
            </tr>

            <tr className="border-b-2 max-w-4xl"  data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
              <td className="w-3/10 px-auto sm:w-2/10 text-3xl sm:text-5xl m-auto sm:m-0 transition-colors duration-300">
                <RiScalesFill style={{ color: "crimson" }} />
              </td>

              <td className="w-6/10 sm:w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-center transition-colors duration-300">
                  iAntrix{" "}
                </p>
              </td>

              <td className="w-5/10 hidden sm:table-cell ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A mini-project on e-commerce website. Where users can singup
                  and browse through antique catalogue and proceed to purchase
                  one.
                </p>
              </td>

              <td className="w-3/10 sm:w-1/10">
                {" "}
                <a href="https://github.com/suhaassmh/iANTRIX">Link🔗</a>
              </td>
            </tr>

            {/* <tr className="border-b-2 ">
              <td className="w-3/10 sm:w-2/10 ">
                <a
                  className="text-5xl m-1 sm:m-0 transition-colors duration-300"
                  href="https://github.com/suhaassmh/myTODO"
                >
                  <FcTodoList />
                </a>
              </td>
              <td className="w-4/10 sm:w-2/10 ">
                <p className="text-center text-xl m-1 p-1 sm:m-2 sm:p-2  transition-colors duration-300">
                  ToDo{" "}
                </p>
              </td>
              <td className="w-5/10 hidden sm:table-cell ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A simple fully-fledged TODO mobile application. Built using
                  Flutter framework. User can set priority for their upcoming
                  task in the app.
                </p>
              </td>
              <td className="w-3/10 sm:w-1/10">
                {" "}
                <a href="https://github.com/suhaassmh/myTODO">Link🔗</a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
