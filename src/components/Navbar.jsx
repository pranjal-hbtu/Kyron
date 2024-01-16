import React from 'react'
import logoPng from '../assetes/Kyron-logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
  
    <div className="bg-[#FCFFF6]  md:mx-4 mt-4">

       <nav className="w-full flex justify-between py-2 px-8 items-center  " >
           <div><img className=' w-15 h-4 md:w-23 md:h-7 ' src={logoPng} alt="/" /></div>
           <ul className=" md:flex hidden text-[14px]  font-normal">
               <li className="mx-3 cursor-pointer hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">
                <NavLink to="/">Home</NavLink>
               </li>
               <li className="mx-3 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">
                <NavLink to="/recruit">Recruit</NavLink>
               </li>
               <li className="mx-3 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">Acadmy</li>

               <li className="mx-3 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">
                <NavLink to="/science">Science</NavLink></li>
               <li className="mx-3 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">
               <NavLink to="/customers">Customers</NavLink></li>
               <li className="mx-3 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">
                <NavLink to="/company">Company</NavLink> </li>
               <li className="mx-3 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">
                <NavLink to="/events">Event</NavLink></li>
               <li className="mx-3 cursor-pointer  hover:bg-[#e5ffb6] px-2 py-1 rounded-xl">
                <NavLink to='/faq'>FAQ</NavLink></li>
           </ul>
   
           <div className="hidden md:block">
                  <div className='flex justify-between'>
               <button class="  py-[8px] px-10  text-[14px] font-bold mx-2 hover:bg-black hover:text-white  "><NavLink to='/contactus'>Contact Us</NavLink> </button>
               <button class="bg-[#B8FB3C] px-10 py-[8px] text-[12px] font-bold hover:bg-black hover:text-white mx-2">Log in</button>
                  </div>
                    
           </div>
       </nav>
    </div>
    
  )
}

export default Navbar