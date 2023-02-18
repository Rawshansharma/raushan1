import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const Project = () => {
  return (
    <div className='h-screen  relative flex items-center  overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-autotext-center z-0  '>
        <h3 className='uppercase tracking-[20px] top-20  lg:top-10 absolute text-green-500 text-3xl font-bold'>
            projects
        </h3>
   
        <motion.div 
         initial={{
          x:-200,
          opacity:-5,
         }}
         transition={{
          duration:1.2,
         }}
         whileInView={{
          x:0,
          opacity:1,
         }}
        className=' md:top-28 lg:flex flex-col  items-center p-10 '>
          <Image
           width='200'
           height='200'
           priority
           
          src="/cal.jpg" alt="kjvj" />
         <p className='text-gray-500 mt-10 lg:p-5 tracking-[3px] text-2xl'>Calculator </p>
         <p className='text-gray-500 mt-2 lg:p-5 tracking-[3px]'>JavaScript</p>
         <p className='text-gray-500 mt-2 lg:p-5 tracking-[3px]'>HTML&&CSS</p>

        </motion.div>
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
        className='lg:flex flex-col  items-center  '>
          <Image
          width='200'
          height='200'
          priority
            
          src="/clone.png" alt="kgkg" />
         <p className='text-gray-500 mt-10  lg:p-5 tracking-[3px] text-2xl'>SliceIt clone </p>
         <p className='text-gray-500 mt-2 lg:p-5 tracking-[3px]'>React JS</p>
         <p className='text-gray-500 mt-2 lg:p-5 tracking-[3px]'>HTML&&Bootstarp</p>

        </motion.div>
      
    </div>
  )
}

export default Project