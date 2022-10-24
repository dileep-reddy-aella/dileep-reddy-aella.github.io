import React from 'react'

const Contact = () => {
  return (
    <section className='mt-14 sm:mt-12 xs:mt-12 h-max w-2/3 md:w-full sm:w-full xs:w-full text-white antialiased text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-lg'>
      <h2 className='mt-12 sm:mt-12 xs:mt-12 text-[#58e953]'>## Say hello!</h2>
      <ul className={`mt-14 sm:mt-12 xs:mt-12 relative list-none`}>
        <li className={`before:content-['-'] ml-10 before:absolute before:left-0`}>
          <p> GitHub</p>
          <a href='https://github.com/dileep-reddy-aella' target='_blank' className='text-[#58e953] border-b-2 border-b-[#0b4409]'>
            github.com/dileep-reddy-aella
          </a>
        </li>
        <li className={`my-14 sm:my-12 xs:my-12 before:content-['-'] ml-10 before:absolute before:left-0`}>
          <p> LinkedIn</p>
          <a href='https://www.linkedin.com/in/sai-dileep-reddy-aella/' target='_blank' className='text-[#58e953] border-b-2 border-b-[#0b4409]'>
            linkedin.com/in/sai-dileep-reddy-aella
          </a>
        </li>
        <li className={`before:content-['-'] ml-10 before:absolute before:left-0`}>
          <p> E-Mail</p>
          <a href='mailto:saidileepreddyaella@gmail.com' target='_blank' className='text-[#58e953] border-b-2 border-b-[#0b4409]'>
            saidileepreddyaella@gmail.com
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
