
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
    <div  className = 'w-full shadow-black py-5 px-10 sm:py-5 sm:px-15 bg-[#000a14] text-slate-300 flex justify-between items-center '>
        <div className = 'flex justify-between items-center '>
            <h1 className = ' text-white font-bold text-2xl pr-5 md:border-r border-grey-300 mr-1 tracking-wide '>Ujjwal Tarika</h1>
            <div className='hidden md:flex'>
             
              <a href="#projects" className = 'px-5 hover:text-slate-200'> My Projects</a>
              <a href="#skills" className = 'hover:text-slate-200'>Skills</a>
            </div>
        </div>
        <div className = 'w-[100px] justify-between items-center hover:bg-slate-700 duration-300 ease-in hidden md:flex'>
            <button className = 'hover:text-slate-200 w-[80px] h-30'><a href = "#contact" >Hire me</a> </button>
            <BiSolidRightArrowAlt  size = {30}  />
        </div>
        <div onClick = {handleClick} className = 'md:hidden cursor-pointer '>
          {!menu ? <BiMenu size = {30} /> : <AiOutlineClose size = {30} />}
        </div>
        <div className= {!menu ? 'fixed left-[-100%] ease-in-out duration-500 ': 'p-5 fixed top-0 w-[60%] left-0 h-[500px] border-r bg-[#000a14] ease-in-out duration-500 md:hidden border-r-grey-100 '}>
        <h1 className = ' text-white font-bold text-2xl pr-5 md:border-r border-grey-300 mr-1 tracking-wide '>Ujjwal Tarika</h1>
            <ul className = 'mt-10 uppercase text-2xl font-bold'>
              <li className = {liStyles}><a href = "#" onClick={handleClick}>My Projects</a>  </li>
              <li className = {liStyles}><a href = "#skills" onClick = {handleClick}>Skills</a> </li>
              <li className = {liStyles}><a href = "#contact" onClick={handleClick}>Hire me</a> </li>
            </ul>
        </div>
    </div>
  )
}
