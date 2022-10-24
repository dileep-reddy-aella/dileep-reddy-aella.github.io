import React from 'react'

const Experience = () => {
  return (
    <div className='mt-14 sm:mt-12 xs:mt-12 h-max w-2/3 md:w-full sm:w-full xs:w-full text-white antialiased text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-lg'>
      <p className='mt-12 sm:mt-12 xs:mt-12 text-[#58e953]'>## Experience <span className='text-4xl'>&#8595;</span></p>
      <div className='mt-10 sm:mt-10 xs:mt-10'>
        <a href="https://www.ekincare.com/" target='_blank'>
          <p className=''>
            <span className='text-[#0951e1] underline underline-offset-8'>ekincare</span>
            <span className='mx-3 text-[#364e36]'>~</span>
            <span className='text-[#364e36]'><em>SDE II - Fullstack</em></span>
          </p>
        </a>
        <p className='mt-10 text-[#8f8f8f]'>{` -> As a fullstack developer I work closely with design and product team in creating complex UI elements and developing API's for interaction.`}</p>
      </div>
      <div className='mt-10 sm:mt-10 xs:mt-10'>
        <a href="https://www.linkedin.com/in/mylost-crypto-940659220/" target='_blank'>
          <p className=''>
            <span className='text-green-600 underline underline-offset-8'>MyLostCrypto</span>
            <span className='mx-3 text-[#364e36]'>~</span>
            <span className='text-[#364e36]'><em>{`Frontend developer, Freelance`}</em></span>
          </p>
        </a>
        <p className='mt-10 text-[#8f8f8f]'>{` -> Designed and developed entire frontend. Integrated third party API's to show relatime data of crypto currencies. Created templates for Newsletters.`}</p>
      </div>
      <p className='mt-14 font-normal text-[#58e953] animate-pulse'>~~~</p>
    </div>
  )
}

export default Experience
