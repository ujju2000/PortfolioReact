import React from 'react'
import ProjectCard from './ProjectCard';
import {ProjectsInfo} from '../info';

export default function Projects() {
  return (
    <div className = 'w-full mx-auto my-[20px] p-20 ' id = 'projects'>
        <h1 className = 'text-4xl text-white tracking-wide text-center font-bold '>Projects I've built</h1>
        <p className = 'text-center mt-4 mb-[10px]'>There are some projects I have worked on and there are many more to come that I'm currently working on the project</p>
        <div className='text-white w-[80%] mx-auto grid md:grid-cols-2 gap-5'>
         { ProjectsInfo.map((project) => {
              return (
                  <ProjectCard 
                      name = {project.name}
                      img = {project.img}
                      tech = {project.techUsed}
                      desc = {project.desc}
                      link = {project.link}
                  />
              )
          })}
        </div>
    </div>  
  )
}
