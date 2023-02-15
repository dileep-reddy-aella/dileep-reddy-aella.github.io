import React, { useState } from 'react'
import { profilePic } from '../assets/images'
import Typewriter from './Typewriter'

const Intro = () => {
  const [showJobRole, setJobRole] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false)

  return (
    <section id='intro' className='h-full text-white text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-sm'>
      <div className='w-full'>
        <img src={profilePic} className='h-24 w-24 rounded-lg'/>
      </div>
      <div className='mt-14 sm:mt-12 xs:mt-8 font-mono font-extralight antialiased'>
        <p>Hello, I'm <Typewriter classes={'text-violet-700'} text='Dileep Reddy' endBlinker={true} finishedTyping={() => setJobRole(true)}/></p>
        { showJobRole &&
          <p style={{color: '#58e953'}}><span className=''><Typewriter endBlinker={true} text='a Fullstack developer' finishedTyping={() => setShowAbout(true)}/></span><span className={`transition-opacity ease-in-out delay-500 duration-300 ${showAbout ? 'opacity-100' : 'opacity-0'}`}> from Hyderabad, India</span></p>
        }
      </div>
      <div className={`mt-14 sm:mt-12 xs:mt-8 w-2/3 md:w-full sm:w-full xs:w-full font-mono font-extralight antialiased transition-opacity ease-in-out delay-1000 duration-300 ${showAbout ? 'opacity-100' : 'opacity-80 blur-sm'}`}>
        <p className={`transition-all ease-in-out delay-1000 duration-300 ${showAbout ? 'opacity-100' : 'opacity-80 blur-sm'}`}>
          Being a web developer, I constantly learn how to shape difficult interfaces and creating an interaction between the UI and metal minded servers.
        </p>
      </div>
      <p className='mt-14 sm:mt-12 xs:mt-8 font-normal text-[#58e953] animate-pulse'>~~~</p>
    </section>
  )
}

export default Intro
