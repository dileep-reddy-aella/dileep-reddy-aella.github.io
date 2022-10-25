import React from 'react'
import Resume from '../assets/DileepReddyResume.pdf'

const Skills = () => {
  return (
    <div className='mt-14'>
      <h2>What makes my work possible <span className='animate-beating text-[#8b0000] font-bold'>^_^</span></h2>
      <p className='mt-12'><span className='mr-5'>-</span>React, Vue.js, Ruby on Rails, JavaScript, Ruby, PostgreSQL</p>
    </div>
  )
}

const Experience = () => {
  return (
    <section id='experience' className='mt-14 sm:mt-12 xs:mt-12 h-max w-2/3 md:w-full sm:w-full xs:w-full text-white antialiased text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-lg'>
      <div className='mt-14 sm:mt-12 xs:mt-12 font-mono font-extralight antialiased'>
        <a href={Resume} target="_blank">
          <p className='underline underline-offset-8 text-[#00b4e6] animate-bounce'>
            {`-> Download Resume <-`}
          </p>
        </a>
      </div>
      <p className='mt-14 sm:mt-12 xs:mt-12 text-[#58e953]'>## Experience <span className='text-4xl'>&#8595;</span></p>
      <div className='mt-10 sm:mt-10 xs:mt-10'>
        <a href="https://www.ekincare.com/" target='_blank'>
          <p className=''>
            <span className='text-[#0951e1] underline underline-offset-8'>ekincare</span>
            <span className='mx-3 text-[#364e36]'>~</span>
            <span className='text-[#364e36] xs:leading-9'><em>SDE II - Fullstack</em></span>
          </p>
        </a>
        <p className='mt-10 text-[#8f8f8f]'>{` -> As a fullstack developer I work closely with design and product team in creating complex UI elements and developing API's to ineract with server.`}</p>
      </div>
      <div className='mt-14 sm:mt-10 xs:mt-10'>
        <a href="https://www.linkedin.com/in/mylost-crypto-940659220/" target='_blank'>
          <p className=''>
            <span className='text-green-600 underline underline-offset-8'>MyLostCrypto</span>
            <span className='mx-3 text-[#364e36]'>~</span>
            <span className='text-[#364e36] xs:leading-9'><em>{`Frontend developer, Freelance`}</em></span>
          </p>
        </a>
        <p className='mt-10 text-[#8f8f8f]'>{` -> Designed and developed entire frontend. Integrated third party API's to show relatime data of crypto currencies. Created templates for Newsletters.`}</p>
      </div>
      { Skills() }
      <p className='mt-14 font-normal text-[#58e953] animate-pulse'>~~~</p>
    </section>
  )
}

export default Experience
