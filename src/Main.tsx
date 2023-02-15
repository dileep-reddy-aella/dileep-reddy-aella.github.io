import React, { FC } from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Menu from './components/Menu';

const Main: FC = () => {
  return (
    <div className='h-full w-full bg-black p-14 sm:p-12 xs:p-12 font-mono'>
      <Intro />
      <Experience />
      <Contact />
      <Menu />
    </div>
  )
}

export default Main;