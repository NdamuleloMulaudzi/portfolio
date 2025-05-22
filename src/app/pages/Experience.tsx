"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "ABSA",
    date: "Apr 2025 - Present",
    description: [
      "Developing and maintaining secure backend services using C# .NET, SQL, and AWS.",
      "Designed scalable Java-based services and integrated secure REST APIs.",
      "Optimized data pipelines using SSIS for improved data flow.",
      "Collaborated with cross-functional teams to deliver enterprise-level solutions.",
      "Applied best practices in cloud deployment, monitoring, and CI/CD for high system performance.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Shaper",
    date: "Oct 2024 – Mar 2025",
    description: [
      "Built full-stack web apps using Angular, TypeScript, Node.js, Java (Spring Boot), and PostgreSQL.",
      "Developed and integrated RESTful APIs with JWT-based authentication and role-based access control.",
      "Created reusable Angular components to enhance UI consistency.",
      "Optimized backend performance through advanced SQL and data modeling.",
      "Monitored app logs and collaborated with users to resolve issues and ensure smooth experiences.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    date: "2023 – 2024",
    description: [
      "Built responsive websites using HTML, CSS, JavaScript, and React.js.",
      "Focused on clean UI/UX design, cross-device compatibility, and performance optimization.",
      "Delivered tailored digital solutions through direct client collaboration.",
      "Implemented modular front-end architecture for scalability.",
      "Enhanced SEO and page load performance to boost client visibility.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="experience-container min-h-screen flex justify-center items-center px-6 py-12"
    >
      <motion.div
        className="glass-box w-full max-w-4xl p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Experience
        </h2>

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
                <p className="text-gray-300">
                  {exp.company} - {exp.date}
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
