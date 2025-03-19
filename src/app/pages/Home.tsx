import React from 'react'
import '../styles/Home.css'
import Navbar from '../shared/Navbar'

function Home() {
  return (
    <div className='home-container h-[100vh] w-[100vw] text-white'>
       <Navbar />
    </div>
  )
}

export default Home