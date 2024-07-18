
import React from 'react'

import { FaPhone, FaTwitter, FaLinkedin,FaGithub , FaInstagram}  from 'react-icons/fa';
import {MdLocationOn, MdMessage} from 'react-icons/md';
const classStyles = 'flex items-center ';
const iconStyle = 'mr-10 cursor-pointer hover:bg-slate-700 hover:duration-500 hover:ease-in-out rounded-md';
export default function Footer() {
  return (
    <footer className='w-[90%] md:w-[80%] lg:w-[60% ] p-[20px] sm:p-[20px] md:p-[40px] bg-black flex mx-auto my-20 flex-col md:flex-row '>
            <div className = 'w-full flex flex-col text-[20px] justify-between mb-[20px]'>
                <div className = {classStyles}>
                    <MdLocationOn size = {20} className = {iconStyle}/>
                         Ghaziabad
                </div>
                <div className = {classStyles}>
                    <FaPhone size = {20} className = {iconStyle}/>
                    +91 8745075753
                </div>
                <div className = {classStyles}>
                    <MdMessage size = {20} className = {iconStyle}/>
                    ujjwal.tarika@gmail.com
                </div>
            </div>
            <div className  ='flex flex-col '>
                <h2 className = 'font-[20px] md:font-[18px] text-white font-bold'>About me</h2>
                <p>I'm self taught fullstack dev.I am eager to bring my enthusiasm, technical skills, and passion for creating exceptional software solutions to the team.
                </p>

                <div className = 'flex items-center justify-start text-2xl my-10  '>
                    <a href = 'https://twitter.com/TarikaUjjwal' ><FaTwitter href = '' className = {iconStyle}/></a>
                    <a href = 'https://www.linkedin.com/in/ujjwal-tarika-41928a20b/' ><FaLinkedin className = {iconStyle}/></a>
                    <a href = 'https://github.com/ujju2000'><FaGithub className = {iconStyle}/></a>
                    <a href = 'https://www.instagram.com/ujjwal_tarika_/'><FaInstagram className = {iconStyle}/></a>
                </div>
            </div>
    </footer>
  )
}
