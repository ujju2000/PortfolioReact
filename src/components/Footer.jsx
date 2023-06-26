
import React from 'react'
import { icons } from 'react-icons';
import { FaPhone, FaTwitter, FaLinkedin,FaGithub , FaInstagram}  from 'react-icons/fa';
import {MdLocationOn, MdMessage} from 'react-icons/md';
const classStyles = 'flex items-center ';
const iconStyle = 'mr-10 cursor-pointer hover:bg-slate-700 hover:duration-500 hover:ease-in-out rounded-md';
export default function Footer() {
  return (
    <footer className='w-[90%] md:w-[60%] p-[20px] md:p-[40px] bg-black flex mx-auto my-20 '>
            <div className = 'w-full flex flex-col text-[20px] justify-between '>
                <div className = {classStyles}>
                    <MdLocationOn size = {20} className = {iconStyle}/>
                    GovindPuram, Ghaziabad
                </div>
                <div className = {classStyles}>
                    <FaPhone size = {20} className = {iconStyle}/>
                    +91 8368377522
                </div>
                <div className = {classStyles}>
                    <MdMessage size = {20} className = {iconStyle}/>
                    ujjwal.tarika@gmail.com
                </div>
            </div>
            <div className  ='flex flex-col '>
                <h2 className = 'font-[20px] md:font-[18px] text-white font-bold'>About me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel voluptates ea? Eius, aliquam magnam! Recusandae quasi aut molestiae id.
                </p>

                <div className = 'flex items-center justify-start text-2xl my-10  '>
                    <FaTwitter className = {iconStyle}/>
                    <FaLinkedin className = {iconStyle}/>
                    <FaGithub className = {iconStyle}/>
                    <FaInstagram className = {iconStyle}/>
                </div>
            </div>
    </footer>
  )
}
