import React from "react";
import { FcTodoList } from "react-icons/fc";
import { GiMirrorMirror } from "react-icons/gi";  
import { GiTicTacToe } from "react-icons/gi";  


function Project() {
  return (
    <div>
      <div className="max-w-4xl mx-auto justify-center py-12" id="Projects">
        <p className="text-2xl text-slate-800  md:text-4xl font-bold text-center">
          Projects
        </p>

        <table class="table-auto justify-center text-base text-center md:text-center font-semibold leading-relaxed mt-4 ">
          <tbody>
            <tr className="border-b-2 border-slate-400">
              <td className="w-2/10 ">
                <a
                  className="text-5xl m-1 sm:m-0"
                  href="https://github.com/suhaassmh/myTODO"
                >
                  <FcTodoList />
                </a>
              </td>
              <td className="w-2/10">
                <p className="text-xl font-semibold m-1 p-1 sm:m-2 sm:p-2  text-slate-800  transition-colors duration-300">
                  Smart Mirror{" "}
                </p>
              </td>
              <td className="w-5/10 invisible sm:visible ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left text-slate-800   transition-colors duration-300 ">
                  A simple fully-fl-fledged TODO mobileile TODO mobileile TODO
                  mobileile TODO mobileile TODO mobileile TODO mobileileappleap
                </p>
              </td>
              <td className="w-1/10 text-slate-800 ">Link🔗</td>
            </tr>
            <tr className="border-b-2 border-slate-400">
              <td className="w-2/10 ">
                <a
                  className="text-5xl m-1 sm:m-0 transition-colors duration-300"
                  href="https://github.com/suhaassmh/myTODO"
                >
                  <FcTodoList />
                </a>
              </td>
              <td className="w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2  transition-colors duration-300">
                  ToDo{" "}
                </p>
              </td>
              <td className="w-5/10 invisible sm:visible ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A simple fully-fl-fledged TODO mobileile TODO mobileile TODO
                  mobileile TODO mobileile TODO mobileile TODO mobileileappleap
                </p>
              </td>
              <td className="w-1/10">Link🔗</td>
            </tr>
            <tr className="border-b-2 border-slate-400">
              <td className="w-2/10 ">
                <a
                  className="text-5xl m-1 sm:m-0 transition-colors duration-300"
                  href="https://github.com/suhaassmh/myTODO"
                >
                  <GiMirrorMirror />
                </a>
              </td>
              <td className="w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2  transition-colors duration-300">
                  Smart Mirror{" "}
                </p>
              </td>
              <td className="w-5/10 invisible sm:visible ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A simple fully-fl-fledged TODO mobileile TODO mobileile TODO
                  mobileile TODO mobileile TODO mobileile TODO mobileileappleap
                </p>
              </td>
              <td className="w-1/10">Link🔗</td>
            </tr>
            <tr className="border-b-2 border-slate-400">
              <td className="w-2/10 ">
                <a
                  className="text-5xl  m-1 sm:m-0 transition-colors duration-300"
                  href="https://github.com/suhaassmh/myTODO"
                >
                  <GiTicTacToe />
                </a>
              </td>
              <td className="w-2/10">
                <p className="text-xl m-1 p-1 sm:m-2 sm:p-2  transition-colors duration-300">
                  TicTacToe{" "}
                </p>
              </td>
              <td className="w-5/10 invisible sm:visible ">
                <p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left  transition-colors duration-300 ">
                  A simple fully-fl-fledged TODO mobileile TODO mobileile TODO
                  mobileile TODO mobileile TODO mobileile TODO mobileileappleap
                </p>
              </td>
              <td className="w-1/10">Link🔗</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
