import React from "react";
import profile from '../images/suhaas-bitmoji-headphone.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

function Card() {
  
    return(
        <div className="w-full">
             <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
                <div className = "">
                    <img className=" w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-slate-800'>
                        Suhaas Swamy MH
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Software Engineer
                    </p>
                    <div className="flex align-center justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-700 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/suhaassmh">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/suhaassmh/">
              <FaLinkedin />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-500 hover:bg-pink-400 rounded-full hover:text-white transition-colors duration-300" href="https://dribbble.com/suhaassmh">
              <FaDribbble />
              <span class="sr-only">Dribble</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-400 rounded-full hover:text-white transition-colors duration-300" href="https://mailto:suhaas.smh@gmail.com">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
          </div>
        </div>
      </div>
      <ScrollIntoView selector = "#aboutme">

        <div class='mx-auto p-20'>
          
           <FaChevronDown class= "animate-bounce mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </ScrollIntoView>
    </div>
    
  )
}


export default Card; 
