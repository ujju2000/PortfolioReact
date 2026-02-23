import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import { motion } from "motion/react";
const h1Style = "text-1xl sm:text-2xl md:text-3xl text-white font-bold ";

export default function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between p-10 sm:p-20">
      <div className="w-full  md:w-[90%] lg:w-[60%]">
        <h1 className={h1Style}>
          Hi,
          <PiHandWavingFill className="inline mx-2 " size={40} color="wheat" />
          I'm Ujjwal Tarika.
        </h1>
        {/* <h1 className={h1Style}>
                    I am a full Stack developer and I love to building things.
                </h1>
                <p className='my-2  sm:leading-8'>
                    I am a <b className = 'text-white'> computer science and engineering</b> graduate from <b className = 'text-white' >Galgotias University </b> with a CGPA of 8.7. As a fresher, I am actively seeking job opportunities, whether remote or onsite, to further enhance my skills and delve into new technologies.
                    
                    My skill set includes proficiency in OOPs, JavaScript, HTML, CSS, MongoDB, React, Tailwind, Bootstrap, Node.js, and Express. I possess a strong ability to learn quickly, allowing me to adapt to new challenges and solve complex problems efficiently.
                    
                    I am passionate about software development and committed to delivering high-quality solutions. I am eager to contribute my knowledge and skills to a dynamic team and make a positive impact in the field.
                </p> */}
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-gray-300">
          I’m a hands-on developer who builds and ships full-stack products
          using{" "}
          <span className="text-white font-medium">
            Next.js, React, Tailwind, Node.js, MongoDB, Supabase
          </span>
          , and I’m continuously exploring{" "}
          <span className="text-white font-medium">
            modern backend systems, payments, authentication, and AI
            integrations
          </span>
          . I work closely with{" "}
          <span className="text-white font-medium">business needs</span>,
          turning ideas and real operational problems into practical, scalable
          software. I believe in learning by building, moving fast, and creating
          products that deliver real value—not just writing code.
        </p>

        <div className="my-2 md:my-10 ">
          <a href="#contact">
            <button className="text-white py-2 px-4 mr-2 sm:mr-4 rounded-md bg-green-700 hover:bg-slate-950">
              Work with me
            </button>
          </a>
          <a href="#projects">
            <button className="sm:my-0 py-2 px-4 mt-4 sm:mx-4 rounded-md bg-slate-800 hover:bg-slate-950">
              See my past work
            </button>
          </a>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 mx-auto"
      >
        <img
          className="h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full fill-slate-500"
          src="assets/hero.jpg"
          alt="not found"
        />
      </motion.div>
    </div>
  );
}
