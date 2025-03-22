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
        { name: 'Google Maps API', image: '/tech/google-maps.png' },
        { name: 'Express.js', image: '/tech/express.png' },
        { name: 'MongoDB', image: '/tech/mongodb.png' },
      ],
    },
    {
      id: 3,
      image: '/fleet_management.png',
      title: 'Fleet Management Dashboard',
      description:
        'A comprehensive web application designed to monitor and manage a fleet of vehicles in real-time. The dashboard provides key features such as vehicle tracking, route optimization, and status updates. It includes an interactive map powered by Google Maps API.',
      githubLink: 'https://github.com/your-username/another-project',
      liveLink: 'https://another-project.com',
      techStack: [
        { name: 'React', image: '/tech/react.svg' },
        { name: 'Google Maps API', image: '/tech/google-maps.png' },
        { name: 'Express.js', image: '/tech/express.png' },
        { name: 'MongoDB', image: '/tech/mongodb.png' },
      ],
    },
  ];
  
  return (
    <div className="projects h-[100vh] p-6">
      <div className="project-header bg-[#CE5A5A] w-[488px] h-[78px] rounded-lg shadow-md">
        <p className="text-white py-10 px-60 text-[60px] font-bold">Projects</p>
      </div>

      <div className="projects-container mt-[8rem] flex flex-wrap gap-5">
        {projects.map((project) => (
          <Projects
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
