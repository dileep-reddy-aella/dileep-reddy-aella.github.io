import React from 'react'
import { Link, animateScroll } from 'react-scroll'

const animation = {
  animationTimingFunction: 'linear',
  WebkitAnimationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  WebkitAnimationIterationCount: 'infinite',
  transitionProperty: 'transform',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-out',
  transitionDelay: '0s',
  animationDuration: '30s',
  WebkitAnimationDuration: '30s',
  animationName: 'hovering'
}

const Menu = () => {
  const position = '2xl:fixed xl:fixed lg:fixed xs:mt-14 sm:mt-14 md:mt-14 rounded-[20px] 2xl:top-24 xl:top-24 lg:top-24 right-14 bottom-24 m-0'
  const font = 'text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-lg'
  return (
    <footer style={animation} className={`${position} ${font} min-w-[300px] bg-[#0f150f] py-10 pr-10 pl-8 text-[#58e953]`}>
      <nav className='h-full bg-[#0f150f]'>
        <ul className='h-full bg-[#0f150f] flex flex-row xs:flex-col xs:items-center xs:mx-auto 2xl:flex-col xl:flex-col lg:flex-col xs:justify-between sm:justify-between md:justify-between justify-center items-end antialiased'>
          <Link
            activeClass='menu-active'
            to='intro'
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            <li className='bg-[#0f150f] cursor-pointer border-b-2 border-b-[#0b4409]'>
              {`About Me`}
            </li>
          </Link>
          <Link
            activeClass='menu-active'
            to='experience'
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            style={{backgroundColor: '#0f150f'}}
          >
            <li className='bg-[#0f150f] cursor-pointer my-8 sm:my-0 md:my-0 xs:my-6 border-b-2 border-b-[#0b4409]'>
              Experience
            </li>
          </Link>
          <Link
            activeClass='menu-active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            <li className='bg-[#0f150f] cursor-pointer border-b-2 border-b-[#0b4409]'>
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </footer>
  )
}

export default Menu
