import React from 'react'
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className=' realtive h-screen justify-evenly  text-center flex flex-col '>
    <h1 className='uppercase top-20 text-white font-bold lg:text-3xl tracking-[20px]'>Skills</h1>
     <div className='items-center '>
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
              className='mb-20 text-gray-500 font-bold tracking-[5px]'>
             <h1 className='mb-2'>HTML</h1>
             <h1 className='mb-2'>CSS</h1>
             <h1 className='mb-2'>JAVASCRIPT</h1>
             <h1 className='mb-2'>PYTHON</h1>
 
             
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
              className=' m-10 text-gray-500 font-bold tracking-[5px]'>
               <h1 className='mb-2'>BOOTSTARAP CSS</h1>
               <h1 className='mb-2'>TAILWIND CSS</h1>
               <h1 className='mb-2'>RACT JS</h1>
               <h1 className='mb-2'>NEXT JS </h1>
               <h1 className='text-md'> <span className='text-[#FF9933]'>still</span>  <span className='text-white'>learning</span> <span className='text-green-500'>.....</span></h1>
              </motion.div>
     </div>
     </motion.div>
  )
}

export default Skills