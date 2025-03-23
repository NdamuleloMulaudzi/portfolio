import React from 'react';
import Image from 'next/image';
import { ProjectInterface } from '../interface/Project.interface';

function Projects(props: ProjectInterface) {
  return (
    <div className="group relative flex flex-col lg:flex-row items-center justify-center gap-8 hover:scale-[1.02] transition-transform duration-300">
      {/* Project Image */}
      <div className="project-image w-full lg:w-1/2 lg:h-[400px] relative rounded-xl overflow-hidden shadow-xl">
        <Image
          src={props.image}
          alt={props.title}
          width={800}
          height={450}
          className="object-cover h-64 lg:h-100 w-full"
        />
        
        {/* Overlay Card */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-4">{props.title}</h3>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-4">
            {props.techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
              >
                <Image 
                  src={tech.image} 
                  alt={tech.name} 
                  width={20} 
                  height={20} 
                  className="h-4 w-4 object-contain"
                />
                <span className="text-xs text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Card */}
      <div className="w-full lg:w-1/4 lg:h-[300px]  bg-[#CE5A5A]/90 backdrop-blur-sm rounded-xl p-8 shadow-xl lg:-ml-16 lg:mt-16 transform hover:shadow-2xl transition-shadow duration-300">
        <p className="text-white mb-6 leading-relaxed">{props.description}</p>
        
        <div className="flex gap-4 justify-between">
         <div  className="flex-1 bg-[#3F2789] hover:bg-[#2E1B6B] text-white  py-3 rounded-lg font-semibold text-center transition-colors">
         <a
            href={props.liveLink} 
            target="_blank"
            className=""
          >
            Live
          </a>
         </div>
          <div className="flex-1 bg-[#3F2789] hover:bg-[#2E1B6B] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
            <a 
            href={props.githubLink} 
            target="_blank"
            className="flex-1 bg-[#3F2789] hover:bg-[#2E1B6B] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
          >
            Code
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
