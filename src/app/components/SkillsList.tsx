import React from "react";
import SkillItem from "./SkillItem";
import '../styles/Skills.css'

const skills = {
  frontend: [
    { name: "HTML5", icon: "/tech/html.svg" },
    { name: "CSS3", icon: "/tech/css.svg" },
    { name: "JavaScript", icon: "/tech/javascript.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "Next.js", icon: "/tech/next.svg" },
    { name: "Angular", icon: "/tech/angular.svg" },
    { name: "TailwindCSS", icon: "/tech/tailwind.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Spring Boot", icon: "/tech/spring-boot.svg" },
    { name: "Express.js", icon: "/tech/express.svg" },
    { name: "Java", icon: "/tech/java.svg" },
    { name: "C++", icon: "/tech/c++.svg" },
    { name: "Qt Framework", icon: "/tech/qt.svg" },
    { name: "PostgreSQL", icon: "/tech/postgres.svg" },
    { name: "MongoDB", icon: "/tech/mongo.svg" },
  ],
  other: [
    
    { name: "Git", icon: "/tech/git.svg" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "Firebase", icon: "/tech/firebase.svg" },

  ],
  
};

function SkillsList({ categoriesToShow }) {
  return (
    <div className="mt-6 space-y-10">
      {Object.entries(skills)
        .filter(([category]) => categoriesToShow.includes(category))
        .map(([category, skillSet], index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold text-center capitalize mb-4">
              {category === "other"
                ? "Other Technologies"
                : category === "backend"
                ? "Backend and Database"
                : category}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
              {skillSet.map((skill, i) => (
                <SkillItem key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}


export default SkillsList;
