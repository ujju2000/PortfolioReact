import React from 'react'


export default function Card(props) {
    const name = props.name;
    const width = props.width;
    const widthStyle = `w-[${width}%]`;
    
  return (
    <div className ={`w-full bg-slate-700 p-4 rounded border-b-2 border-sky-500 `}>
       <h5 className = {`text-white capitalize font-bold `}>{name}</h5>
       
    </div>
  )
}
