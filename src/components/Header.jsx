
import React, {useState} from 'react'
import {BiSolidRightArrowAlt , BiMenu } from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

const liStyles = 'p-4 border-b-2 border-b-grey-600 cursor-pointer';
export default function Header() {
  const [menu , showMenuIcon] = useState(false);  

  function handleClick() {
    showMenuIcon(!menu);
  }

  return (
    <div  className = 'w-full shadow-black py-5 px-10 md:py-5 md:px-15 bg-[#000a14] text-slate-300 flex justify-between items-center '>
        <div className = 'flex justify-between items-center '>
            <h1 className = ' text-white font-bold text-2xl pr-5 md:border-r border-grey-300 mr-1 tracking-wide '>Ujjwal Tarika</h1>
            <div className='hidden md:flex'>
              <a href="#" className = 'px-5 hover:text-slate-200'>My Projects</a>
              <a href="#" className = 'hover:text-slate-200'>Skills</a>
            </div>
        </div>
        <div className = 'w-[100px] justify-between items-center hover:bg-slate-700 duration-300 ease-in hidden md:flex'>
            <button className = 'hover:text-slate-200 w-[80px] h-30'>Hire me </button>
            <BiSolidRightArrowAlt  size = {30}  />
        </div>
        <div onClick = {handleClick} className = 'md:hidden cursor-pointer '>
          {!menu ? <BiMenu size = {30} /> : <AiOutlineClose size = {30} />}
        </div>
        <div className= {!menu ? 'fixed top-[-100%] ease-in-out duration-500 ': 'p-5 fixed top-0 w-[80%] left-0 h-[500px] border-r bg-[#000a14] ease-in-out duration-500 md:hidden border-r-grey-100 '}>
        <h1 className = ' text-white font-bold text-2xl pr-5 md:border-r border-grey-300 mr-1 tracking-wide '>Ujjwal Tarika</h1>
            <ul className = 'mt-10 uppercase text-2xl font-bold'>
              <li className = {liStyles}> My Projects </li>
              <li className = {liStyles}>Skills</li>
              <li className = {liStyles}>Hire me.</li>
            </ul>
        </div>
    </div>
  )
}
