import React from 'react'
import wiprologo from '../images/wipro-logo.png'
import offbeatlogo from '../images/offbeat-logo-png.png'

function Experience() {
  return (
    <div>
      <div className='max-w-4xl mx-auto justify-center py-12'  id="Projects">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
        Experience 
        </p>
        <table class="table-auto justify-center text-base text-center md:text-center  text-slate-700 leading-relaxed mt-4 ">
  <tbody>
    <tr className=''>
      <td className='w-2/10 justify-center '><img class= "h-24 w-28" src={wiprologo} alt="Wipro logo" /></td>  
      <td className='w-8/10 invisible sm:visible '><p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left transition-colors duration-300 ">A simple fully-fl-fledged TODO mobileile  TODO mobileile TODO mobileile TODO mobileile TODO mobileile TODO mobileileappleap</p></td>
    </tr>
    <tr className=''>
      <td className='w-2/10 justify-center'><img class= "h-24 w-32" src={offbeatlogo} alt="Offbeat logo" /></td>  
      <td className='w-8/10 invisible sm:visible '><p className=" text-l m-1 p-1 sm:m-2 sm:p-2 text-left transition-colors duration-300 ">A simple fully-fl-fledged TODO mobileile  TODO mobileile TODO mobileile TODO mobileile TODO mobileile TODO mobileileappleap</p></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Experience

