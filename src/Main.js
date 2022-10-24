import React from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';

const Main = () => {
  return (
    <div className='h-full w-full bg-black p-14 sm:p-12 xs:p-12 font-mono'>
      <Intro />
      <Experience />
      <Contact />
    </div>
  )
}

export default Main;