import React from "react";
import SkillsList from "../components/SkillsList";
import '../styles/Skills.css'

function Skills() {
  return (
    <div className="min-h-screen  text-white flex flex-col items-center py-12 px-6">
      <h2 className="text-3xl font-bold text-center">My Skills</h2>
      <p className="text-gray-400 mt-2 text-center">
        Technologies I work with:
      </p>
      <SkillsList />
    </div>
  );
}

export default Skills;
