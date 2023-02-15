import { FC } from 'react'

const Contact: FC = () => {
  return (
    <section id='contact' className='mt-14 sm:mt-12 xs:mt-6 h-max w-2/3 md:w-full sm:w-full xs:w-full max-w-screen text-white antialiased text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-sm'>
      <p className='mt-14 font-normal text-[#58e953] animate-pulse'>~~~</p>
      <h2 className='mt-12 sm:mt-12 xs:mt-10 text-[#58e953]'>## Say hello!</h2>
      <ul className={`mt-14 sm:mt-12 xs:mt-6 relative list-none`}>
        <li className={`before:content-['-'] ml-10 xs:ml-5 before:absolute before:left-0`}>
          <p> GitHub</p>
          <a href='https://github.com/dileep-reddy-aella' target='_blank' className='text-[#58e953] border-b-2 border-b-[#0b4409]'>
            github.com/dileep-reddy-aella
          </a>
        </li>
        <li className={`my-14 sm:my-12 xs:my-6 before:content-['-'] ml-10 xs:ml-5 before:absolute before:left-0`}>
          <p> LinkedIn</p>
          <a href='https://www.linkedin.com/in/sai-dileep-reddy-aella/' target='_blank' className='text-[#58e953] border-b-2 border-b-[#0b4409]'>
            linkedin.com/in/sai-dileep-reddy-aella
          </a>
        </li>
        <li className={`before:content-['-'] ml-10 xs:ml-5 before:absolute before:left-0`}>
          <p> E-Mail</p>
          <a href='mailto:saidileepreddyaella@gmail.com' target='_blank' className='text-[#58e953] border-b-2 border-b-[#0b4409]'>
            saidileepreddyaella@gmail.com
          </a>
        </li>
        <li className={`before:content-['-'] mt-14 ml-10 xs:ml-5 before:absolute before:left-0`}>
          <p> Blog</p>
          <a href='https://dev.to/dileepreddyaella' target='_blank' className='text-[#58e953] border-b-2 border-b-[#0b4409]'>
            dev.to/dileepreddyaella
          </a>
        </li>
      </ul>
      <p className='mt-14 font-normal text-[#58e953] animate-pulse'>~~~</p>
    </section>
  )
}

export default Contact
