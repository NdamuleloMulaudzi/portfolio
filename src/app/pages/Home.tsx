'use client'

import React from 'react'
import '../styles/Home.css'
import Image from 'next/image'
import Navbar from '../shared/Navbar'
import { motion } from "framer-motion"




function Home() {
  return (
    <div className='home-container h-[100vh]  text-white'>
  
      <Navbar />

      <div className="circles">
      {/* Circle 4 (Smallest, appears first) */}
      <motion.div 
        className="circle four"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

   
      <motion.div 
        className="circle three"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      ></motion.div>

      <motion.div 
        className="circle two"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      ></motion.div>

  
      <motion.div 
        className="circle one"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
      ></motion.div>
    </div>


    <div className="socials">
     
      <div className="social">
        <motion.div
          className="line one"
          initial={{ top: -50, opacity: 0 }} // Start position
          animate={{ top: "36%", opacity: 1 }} // End position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        />
        <Image
          className="icons absolute top-[36%] right-[330px] mt-[160px]"
          src="/icons/x.svg"
          alt="X (Twitter) Icon"
          width={55}
          height={55}
        />
      </div>

      <div className="social">
        <motion.div
          className="line two"
          initial={{ top: -50, opacity: 0 }}
          animate={{ top: "29%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Delayed start
        />
        <Image
          className="icons absolute top-[36%] right-[285px] mt-[90px]"
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={60}
          height={60}
        />
      </div>

      <div className="social">
        <motion.div
          className="line three"
          initial={{ top: -50, opacity: 0 }}
          animate={{ top: "22%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }} // Delayed start
        />
        <Image
          className="icons absolute top-[39%] right-[242px] mt-[3px]"
          src="/icons/linkedin.svg"
          alt="LinkedIn Icon"
          width={55}
          height={55}
        />
      </div>
    </div>      


       
      <div className="hello flex items-center py-[170px] px-[120px]">
        <p className='font-bold text-[40px]'>Hello</p>
        <div className='orange_line bg-[#CE5A5A] w-[100px] h-[3px] mt-[40px] mx-[-20px]'></div>
      </div>

      <div className="introduction">
        <p className='text-[40px] font-["dw"]'>I’m Ndamulelo Mulaudzi – A Passionate Full Stack Developer</p>
      </div>

      <div className="sub-heading">
        <p>I create innovative, scalable, and user-friendly web applications. With a passion for clean code and solving real-world problems, I’m always looking to learn and grow in the tech space.</p>
      </div>

    </div>
  )
}

export default Home