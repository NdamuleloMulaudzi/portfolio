import React from "react";
import Image from "next/image";
import "../styles/About.css";
import SkillList from "../components/SkillsList";

function About() {
  return (
    <div id="about" className="about-page min-h-screen relative">
      <div className="project-circles">
        <div className="project-circle four"></div>
      </div>

      <div className="container mx-auto px-6 py-12 text-white relative z-10">
        <div className="about-header text-center mb-8">
          <div className="project-header mx-auto max-w-2xl border-b border-b-[#CE5A5A]  shadow-lg p-4 mb-16">
            <h2 className="text-white text-2xl md:text-5xl font-bold text-center">
              About Me
            </h2>
          </div>
          <p className="text-lg text-gray-300 mt-4 font-light">
            A passionate developer with a love for technology and animation.
          </p>
        </div>

        <div className="about-content flex flex-col md:flex-row items-center gap-10">
          <div className="about-image w-full md:w-1/3">
            <Image
              src="/me.jpeg"
              alt="About Me"
              width={455}
              height={455}
              className=" shadow-lg mx-auto"
            />
            <div className="w-full mt-8 hidden md:block">
              <SkillList categoriesToShow={["other"]} />
            </div>
          </div>

          <div className="about-details text-center md:text-left md:w-2/3">
            <p className="text-lg text-gray-200 leading-relaxed">
              Hi! I&apos;m{" "}
              <span className="font-bold text-white">Ndamulelo Mulaudzi</span>,
              a passionate front-end developer focused on creating intuitive
              user interfaces. With a love for animation, technology, and
              gaming, I always seek creative ways to bring ideas to life.
            </p>

            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              I believe in the power of continuous learning and enjoy staying
              updated with the latest industry trends. Lets connect and create
              amazing experiences together!
            </p>

            <div className="orange_line"></div>

            <h2 className="text-3xl font-bold text-center">My Skills</h2>
            <p className="text-gray-400 mt-2 text-center">
              Technologies I work with:
            </p>
            <div>
              <SkillList categoriesToShow={["frontend", "backend"]} />
            </div>
            <div className="block md:hidden mt-8">
              <SkillList categoriesToShow={["other"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
