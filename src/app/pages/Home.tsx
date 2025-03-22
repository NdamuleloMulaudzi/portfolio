import React from 'react'
import '../styles/Home.css'
import Image from 'next/image'
import Navbar from '../shared/Navbar'

function Home() {
  return (
    <div className='home-container h-[100vh] w-[100vw] text-white'>
       <Navbar />

       <div className='circles'>
          <div className="circle one"></div>
          <div className="circle two"></div>
          <div className="circle three"></div>
          <div className="circle four"></div>
       </div>


       <div className='socials'>
          <div className="social">
            <div className="line one"></div>
            <Image  className="icons absolute top-[36%] right-[330px] mt-[160px]"  
            src="/icons/x.svg" alt="X (Twitter) Icon" width={55} height={55} />
          </div>

          <div className="social">
            <div className="line two"></div>
            <Image className="icons absolute top-[36%] right-[285px] mt-[90px]"  src="/icons/github.svg" alt="GitHub Icon" width={60} height={60} />
          </div>

          <div className="social">
            <div className="line three"></div>
            <Image className="icons absolute top-[39%] right-[242px] mt-[3px] "  src="/icons/linkedin.svg" alt="LinkedIn Icon" width={55} height={55} />
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