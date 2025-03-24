import React from "react";
import Image from "next/image";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page min-h-screen bg-gradient-to-r from-black via-blue-900 to-red-800 relative">
      <div className="circles">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="circle four"></div>
      </div>

      <div className="container mx-auto px-6 py-12 text-white relative z-10">
        <div className="about-header text-center mb-8">
          <div className="project-header bg-[#CE5A5A] w-[350px] h-[78px] rounded-lg shadow-lg mx-auto flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">About Me</h2>
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
              className="rounded-full shadow-lg mx-auto"
            />
          </div>

          <div className="about-details text-center md:text-left md:w-2/3">
            <p className="text-lg text-gray-200 leading-relaxed">
              Hi! I'm <span className="font-bold text-white">Ndamulelo Mulaudzi</span>, a passionate front-end developer focused on creating
              intuitive user interfaces. With a love for animation, technology,
              and gaming, I always seek creative ways to bring ideas to life.
            </p>
            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              I believe in the power of continuous learning and enjoy staying
              updated with the latest industry trends. Lets connect and create
              amazing experiences together!
            </p>

            <div className="orange_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
