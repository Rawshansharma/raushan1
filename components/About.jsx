import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const About = () => {
  return (
    
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className='h-screen relative  xl:max-w-5xl flex flex-col text-center md:flex-row px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-0 text-[#FF9933] lg:text-4xl font-bold uppercase tracking-[20px]'>About</h3>
      <Image
       
       src='/profile1.jpg'
       width='200'
       height='200'
       alt='profilegir'
       priority
      >

      </Image>
      <motion.div
      initial={{
        x:200,
        opacity:-5,
       }}
       transition={{
        duration:1.2,
       }}
       whileInView={{
        x:0,
        opacity:1,
       }}
        
      className='m-10'>
        <p className='xl:p-8 xl:ml-7'>Hi I'm Raushan Sharma, a front-end web developer with a background in computer systems. My 2 years of Collage experience has given me a strong foundation for web development and building complex solutions. I am currently studying in<span> delhi university</span>. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
      </motion.div>
    </motion.div>
  )
}

export default About