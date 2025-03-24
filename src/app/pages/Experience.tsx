'use client'

import React from "react";
import { motion } from "framer-motion";
import '../styles/Experience.css'

const experiences = [
  {
    role: "C# Developer",
    company: "ABSA",
    date: "Apr 2025 - Present",
    description: "Developing scalable web applications using Java, Spring Boot, Node.js, and Angular.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Shaper",
    date: "Oct 2024 - Mar 2025",
    description: "Worked on responsive UIs and API integrations using React and Angular.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    date: "2023 - 2024",
    description: "Built custom websites and applications for small businesses and startups.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-container min-h-screen flex justify-center items-center px-6 py-12">
      <motion.div
        className="glass-box w-full max-w-4xl p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white text-center mb-8">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="dot"></div>
              <div className="content">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-gray-300">{exp.company} - {exp.date}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
