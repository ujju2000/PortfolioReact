
import React , {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { NotificationManager } from 'react-notifications';

const inputStyle = 'w-full  block p-3 bg-slate-800 outline-0 border-0 hover:outline-1 hover:outline-sky-500';
export default function Contact() {
    const [formDetails, setFormDetails] = useState({user_name : '' , user_email : '' , message  : ''});
    const form = useRef();
   const handleChange =(event) => {
       setFormDetails(prev => ({...prev , [event.target.name] : event.target.value}))   
   }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0c3wr1c', 'template_bspjl2s', form.current, 'M8mv6attyx7PfSJom')
      .then((result) => {
          console.log(result.text);
          setFormDetails({user_name : '' , user_email : '' , message  : ''});
          NotificationManager.success('Form submitted sucessfully');
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
  };
  return (

    <div className = 'w-[90%]  my-[200px] flex flex-col md:flex-row mx-auto justify-between items-center' id = 'contact'>
        <div className='w-[90%] md:w-[70%] '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.1594110504!2d77.31262712199596!3d28.69977877032748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1687684335299!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" className = 'rounded-md h-[550px] h-[400px] w-full md:w-[90%] my-10 ' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='w-[90%] md:w-[30%]'>
            <h1 className = 'text-white font-bold text-4xl'>Hire Me</h1>
            <p>Feel Free to contact me</p>

            <form ref= {form} className="w-full flex flex-col " onSubmit = {sendEmail} >
            {/* https://forms.gle/B6HwbqR13RrNwCZN7 */}
                <label className = 'text-1xl my-2 rounded' htmlFor="">Name:
                    <input className ={inputStyle} type="text" id="" 
                     autoComplete='off' name = "user_name" onChange={handleChange}
                        value = {formDetails.user_name}
                    />
                </label>

                <label className = 'text-1xl my-2 ' htmlFor="">
                    Email:
                    <input className ={inputStyle} type="email" name="user_email" id="" 
                        onChange = {handleChange}
                        value = {formDetails.user_email}
                    />
                </label>

                <label className = 'text-1xl my-2 ' htmlFor="">
                    Message: 
                    <textarea className ={inputStyle} name="message" id="" cols="10" rows="8"
                        onChange = {handleChange}
                        value = {formDetails.message}
                    >

                    </textarea>
                </label>

                <button className = 'w-full bg-blue-700 text-white text-1xl rounded-md p-2 my-4 font-normal hover:bg-sky-800' type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}
