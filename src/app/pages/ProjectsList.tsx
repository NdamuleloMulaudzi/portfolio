import React from 'react';
import Projects from '../components/Project';
import '../styles/Projects.css'

function ProjectList() {
  const projects = [
    {
      id: 1,
      image: '/note_project.png',
      title: 'Docket',
      description:
        'Docket is a modern note-taking web application designed for efficiency and organization. It allows users to create, edit, and manage notes seamlessly, ensuring easy access to important information anytime.',
      githubLink: 'https://github.com/your-username/docket',
      liveLink: 'https://docket-app.com',
      techStack: [
        { name: 'Angular', image: '/tech/angular.svg' },
        { name: 'Node.js', image: '/tech/nodejs.svg' },
        { name: 'PostgreSQL', image: '/tech/postgres.svg' },
        { name: 'TailwindCSS', image: '/tech/tailwind.svg' },
        { name: 'docker', image: '/tech/sql.svg' },
        { name: 'docker', image: '/tech/docker.svg' }
      ],
    },
    {
      id: 2,
      image: '/fleet_management.png',
      title: 'Fleet Management Dashboard',
      description:
        'A comprehensive web application designed to monitor and manage a fleet of vehicles in real-time. The dashboard provides key features such as vehicle tracking, route optimization, and status updates. It includes an interactive map powered by Google Maps API.',
      githubLink: 'https://github.com/your-username/another-project',
      liveLink: 'https://another-project.com',
      techStack: [
        { name: 'React', image: '/tech/react.svg' },
        { name: 'Google Maps API', image: '/icons/google-map.svg' },
        { name: 'TailwindCSS', image: '/tech/tailwind.svg' },
        
      ],
    },
    
  ];
  
  return (
    <div id='projects' className="min-h-screen p-6">
      <div className="project-header mx-auto max-w-2xl bg-[#CE5A5A] rounded-lg shadow-lg p-4 mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
          Projects
        </h2>
      </div>

      <div className="projects-container space-y-28 lg:space-y-36 px-4">
        {projects.map((project) => (
          <Projects key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
