import React from "react";
function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto justify-center py-12" id="aboutme">
        <p className="text-2xl text-slate-800  md:text-4xl font-bold text-center">
          Hello World,
        </p>
        <p className="text-base  text-center text-slate-800 font-semibold leading-loose mt-4 justify-around">
          About Me: CSE undergrad, a Software Developer, and a Tech Enthusiast;
          passionate about App development, Design, UI/UX, ChatBots, Machine
          learning. I'm always excited about making things more generic,
          dynamic, and robust. Loves good challenges and always up for learning
          new and explore creative ideas.{" "}
          <a
            href="https://drive.google.com/file/d/19SBb1-iw-sklCMazSHqzUwCCc645ODwC/view?usp=sharing"
            className="text-sky-600"
          >
            {" "}
            Click here{" "}
          </a>{" "}
          to view my Resume.
        </p>
      </div>

      {/* <ScrollIntoView selector = "#tech">

        <div class='mx-auto p-20'>
          
           <FaChevronDown class= "animate-bounce mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </ScrollIntoView> */}
    </div>
  );
}

export default About;
