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

         <a className='text-gray-500 mt-2 lg:p-5 tracking-[3px]  hover:text-white' href="https://imgbgremove.netlify.app" target='blank'>Image Background Remover</a>
         <a className='text-gray-500 mt-2 lg:p-5 tracking-[3px]  hover:text-white' href="https://2dobyraushan.netlify.app" target='blank'>ToDo app </a>
         <a className='text-gray-500 mt-2 lg:p-5 tracking-[3px]  hover:text-white' href="https://animated-dusk-3f0ff3.netlify.app" target='blank'>Weather App</a>


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
          
         <a className='text-gray-500 mt-2 lg:p-5 tracking-[3px] hover:text-white' href="https://quiz-app-raushan.netlify.app" target='blank'>Quiz App</a>
         <a className='text-gray-500 mt-2 lg:p-5 tracking-[3px]  hover:text-white' href="https://calculatorbyraushan.netlify.app" target='blank'>Calculator</a>
         <a className='text-gray-500 mt-2 lg:p-5 tracking-[3px]  hover:text-white' href="https://raushan.vercel.app/" target='blank'>Portfolio</a>
          
         
        </motion.div>
      
    </div>
  )
}

export default Project