

import React from 'react'
const inputStyle = 'w-full  block p-3 bg-slate-800 outline-0 border-0 hover:outline-1 hover:outline-sky-500';
export default function Contact() {
  return (
    <div className = 'w-[90%]  my-[200px] flex flex-col md:flex-row mx-auto justify-between items-center'>
        <div className='w-[90%] md:w-[70%] '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.1594110504!2d77.31262712199596!3d28.69977877032748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1687684335299!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" className = 'rounded-md h-[550px] h-[400px] w-full md:w-[90%] my-10 ' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='w-[90%] md:w-[30%]'>
            <h1 className = 'text-white font-bold text-4xl'>Hire Me</h1>
            <p>Feel Free to contact me</p>

            <form className="w-full flex flex-col " action ='post'>
                <label className = 'text-1xl my-2 rounded' htmlFor="">Name:
                    <input className ={inputStyle} type="text" name="" id="" autoComplete='off'/>
                </label>

                <label className = 'text-1xl my-2 ' htmlFor="">
                    Email:
                    <input className ={inputStyle} type="email" name="" id="" />
                </label>

                <label className = 'text-1xl my-2 ' htmlFor="">
                    Message: 
                    <textarea className ={inputStyle} name="" id="" cols="10" rows="8">

                    </textarea>
                </label>

                <button className = 'w-full bg-blue-700 text-white text-1xl rounded-md p-2 my-4 font-normal hover:bg-sky-800' type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}
