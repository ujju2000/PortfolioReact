
import React from 'react'
import {clientWork} from '../info';

export default function ClientWork() {
  return (
    <div className = 'w-full mx-auto my-[20px] p-10 sm:p-20 ' id = 'clients'>
        <h1 className = 'text-4xl text-white tracking-wide text-center font-bold my-5 '>My Work </h1>
        {/* <p className = 'text-xl md:text-2xl text-center my-4 mb-[10px]'>There are some projects I made for some of my clients</p> */}
        <div className='w-full sm:w-[80%] mx-auto grid md:grid-cols-2 gap-5'>
            {clientWork.map((work) => {
                return(
                   <DisplayClientWork title = {work.name} img = {work.img} link = {work.link} />
                )
            })}
        </div>
    </div>
  )
}


function DisplayClientWork(props) {
    return (
        <div className = 'w-full relative'>
        <a href={props.link} target= "_blank">
            <div className = ''>
                <img src={props.img} alt="" className='w-full h-[250px] object-cover'/>
            </div>
            <div className='w-full bottom-0 left-0 opacity-0 hover:opacity-100  duration-300 ease-in absolute  text-white bg-[#F2EBD3] h-[50px] p-8 text-center border-2 border-slate-100 '>
                <h4 className = 'text-center font-bold uppercase text-[#1E6C8E] md:text-2xl text-1xl leading-6 '>{props.title}</h4>
            </div>  
        </a>
    </div>
    )
}