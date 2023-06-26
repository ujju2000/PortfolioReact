import React from 'react'
import {skillsTech} from '../info';
import Card from './Card';

export default function skillsAndTech() {
  return (
    <div id= "skills">
        <div className='text-center mx-auto p-10'>
            <h1 className = 'text-4xl text-white tracking-wide font-bold'>Skills and Technologies</h1>
            <p>

            </p>
        </div>
        <div className = 'text-white w-[80%] mx-auto grid md:grid-cols-2 gap-3 '>
            {
                skillsTech.map((skill) => <Card name = {skill.name} width  = {skill.percent} />)
            }
            
        </div>
    </div>
  )
}
