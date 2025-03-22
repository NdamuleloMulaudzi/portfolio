import React from 'react';
import Image from 'next/image';
import { ProjectInterface } from '../interface/Project.interface';

function Projects(props:ProjectInterface) {
  return (
    <div className="flex items-center gap-5">
      <div className="project-image shadow-md w-[595px] p-4 rounded-lg">
        <Image src={props.image} alt={props.title} width={525} height={260} />
      </div>
      <div className="description bg-[#CE5A5A] mx-[-90px] text-white w-[425px] h-[215px] rounded-[4px] flex flex-col items-center gap-4 p-2">
        <h2 className="text-center font-bold py-2 text-[24px]">{props.title}</h2>
        <p>{props.description}</p>
        <div className="buttons flex justify-between gap-[100px]">
          <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
            <button className="flex justify-center w-[130px] bg-[#3F2789] p-3 rounded-lg font-semibold">
              View Live
            </button>
          </a>
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <button className="flex justify-center w-[130px] bg-[#3F2789] p-3 rounded-lg font-semibold">
              Source Code
            </button>
          </a>
        </div>
      </div>
      <div className="tech-stack w-[290px] h-[128px] bg-[#5A32D8] mx-[100px] flex items-center justify-center gap-3 p-2 rounded-lg text-white ">
        <h2 className='font-semibold text-[20px]'>Technologies Used</h2>
        <div>
            {props.techStack.map((tech, index) => (
          <Image key={index} src={tech.image} alt={tech.name} width={40} height={40} title={tech.name} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
