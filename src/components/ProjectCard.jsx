
import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className = 'w-full relative'>
        <a href={props.link} target= "_blank">
            <div className = ''>
                <img src={props.img} alt="" className='w-full h-[250px] object-cover'/>
            </div>
            <div className='opacity-0 hover:opacity-100 duration-300 ease-in-out absolute top-0 left-0 text-white bg-slate-800 h-[250px] p-10 text-center outline-none border-4 border-slate-400 '>
                <h4 className = 'text-center font-bold uppercase text-[#54B435] text-xl leading-6 '>{props.name}</h4>
                <p className='uppercase font-normal text-2xl'>{props.tech}</p>
                <p className = 'text-slate-400'>
                   {props.desc}
                </p>
            </div>  
        </a>
    </div>
  )
}
