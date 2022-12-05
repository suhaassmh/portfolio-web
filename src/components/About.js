import React from "react";
function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto justify-center py-12" id="aboutme">
        <p className="text-2xl text-slate-800  md:text-4xl font-bold text-center">
          Hello World,
        </p>
        <p className="text-base  text-center text-slate-800 font-semibold leading-loose mt-4 justify-around">
          About Me: CSE undergrad, software development engineer, and tech
          enthusiast who is fascinated about chatbots, machine learning, design,
          UI/UX, and app development. Making something more general, dynamic,
          and resilient always excites me. Enjoys a challenge, is constantly
          eager to learn something new, and is creatively inclined.{" "}
          <a
            href="https://drive.google.com/file/d/11rs0W4cCEVUYWi736OCv8pTO2HYfW0Tf/view?usp=sharing"
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
