'use client'

import React from 'react'
import '../styles/Home.css'
import Image from 'next/image'
import Navbar from '../shared/Navbar'
import { motion } from "framer-motion"




function Home() {
  return (
    <div className='home-container   text-white flex flex-col'>
  
  
      <Navbar />

      <div className="circles">
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
          initial={{ top: -50, opacity: 0 }} 
          animate={{ top: "36%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
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
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
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


       
    <div className="home-text relative">
  <div className="hello flex items-center justify-center py-[170px] px-[120px] z-10">
    <p className="font-bold text-[40px]">Hello</p>
    <div className="orange_line bg-[#CE5A5A] w-[100px] h-[3px] mt-[40px] mx-[-20px]"></div>
  </div>

  <div className="mb-5 animate-slideIn z-10">

  <p className="text-[70px] font-['dw'] font-semibold tracking-[2px] capitalize text-white text-shadow-md">
  Ndamulelo Mulaudzi
  </p>
    <p className="role text-[30px] font-['dw']">Software Developer</p>
  </div>

  <div className="sub-heading z-10">
    <p>
      I create innovative, scalable, and user-friendly web applications. With a
      passion for clean code and solving real-world problems, I’m always looking
      to learn and grow in the tech space.
    </p>
  </div>
  </div>

    
     <div className="home-img absolute top-[550px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image
        className=""
        src="/home.svg"
        alt="GitHub Icon"
        width={790}
        height={680}
      />
    </div>


    </div>
  )
}

export default Home