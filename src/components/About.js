import React from "react";
// import { FaChevronDown } from 'react-icons/fa';
// import ScrollIntoView from 'react-scroll-into-view';

//  max-w-4xl mt-20 mx-auto     'max-w-4xl mx-auto justify-center py-12'   📎
function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto justify-center py-12" id="aboutme">
        <p className="text-2xl text-slate-800  md:text-4xl font-bold text-center">
          Hi,
        </p>
        <p className="text-base text-left md:text-center text-slate-800 font-semibold leading-loose mt-4 justify-around">
          I'm a Passionate Engineer, Quick learner, adept at picking up cutting
          edge tech with a passion for Software development and Design. Loves
          good challenges and always up for learning new annd exploring creative
          ideas. Completed BE in Computer Science Engineering.
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
