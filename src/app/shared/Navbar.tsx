import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='flex justify-between'>
        <div className='px-8 py-15 flex items-center gap-5'>
            <p className='header-logo text-[40px]'>NDAMU</p>
            <div className='bg-[#CE5A5A] border w-[20px] h-[20px] rounded-[16px]'></div>
        </div>

        <div className='flex gap-9 px-15 py-15 text-[20px] font-bold'>
            <a href="about">ABOUT</a>
            <a href="projects">PROJECTS</a>
            <a href="experience">EXPERIENCE</a>
            <a href="contact">CONTACT</a>
        </div>   

    </div>
  )
}

export default Navbar