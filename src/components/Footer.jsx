
import React from 'react'

import {  FaTwitter, FaLinkedin,FaGithub }  from 'react-icons/fa';
import {MdLocationOn, MdMessage} from 'react-icons/md';
const classStyles = 'flex items-center ';
const iconStyle = 'ml-10 mr-5 cursor-pointer hover:bg-slate-700 hover:duration-500 hover:ease-in-out rounded-md';
export default function Footer() {
  return (
    <footer className='border-y-2 border-slate-50 backdrop-blur-lg shadow-md container mx-auto w-11/12 p-5 my-10 rounded-lg flex justify-between flex-col md:flex-row '>
            <div className = ' flex flex-col md:flex-row text-xl justify-between '>
                <div className = {classStyles}>
                    <MdLocationOn size = {20} className = {iconStyle}/>
                         Ghaziabad
                </div>
                {/* <div className = {classStyles}>
                    <FaPhone size = {20} className = {iconStyle}/>
                    +91 8745075753
                </div> */}
                <div className = {classStyles}>
                    <MdMessage size = {20} className = {iconStyle}/>
                    ujjwal.tarika@gmail.com
                </div>
            </div>
            <div className  =''>
                {/* <h2 className = 'font-[20px] md:font-[18px] text-white font-bold'>About me</h2> */}
                {/* <p>I'm self taught fullstack dev.I am eager to bring my enthusiasm, technical skills, and passion for creating exceptional software solutions to the team.
                </p> */}

                <div className = 'flex items-center justify-start text-2xl my-10  '>
                    <a href = 'https://twitter.com/TarikaUjjwal' ><FaTwitter href = '' className = {iconStyle}/></a>
                    <a href = 'https://www.linkedin.com/in/ujjwal-tarika-41928a20b/' ><FaLinkedin className = {iconStyle}/></a>
                    <a href = 'https://github.com/ujju2000'><FaGithub className = {iconStyle}/></a>
                    {/* <a href = 'https://www.instagram.com/ujjwal_tarika_/'><FaInstagram className = {iconStyle}/></a> */}
                </div>
            </div>
    </footer>
  )
}
