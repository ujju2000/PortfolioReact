import React from 'react'
import ProjectCard from './ProjectCard';
import {ProjectsInfo} from '../info';

export default function Projects() {
  return (
    <div className = 'w-full mx-auto my-[10px] sm:my-[20px] p-10 sm:p-20 ' id = 'projects'>
        <h1 className = 'text-4xl text-white tracking-wide text-center font-bold '>Projects I've built</h1>
        <p className = 'text-xl md:text-2xl text-center my-4 '>"Discover a compilation of my diverse projects, each showcasing my dedication and expertise in crafting unique digital experiences with meticulous attention to detail."</p>
        <div className='text-white w-full sm:w-[80%]  sm:mx-auto grid md:grid-cols-2 gap-5'>
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
