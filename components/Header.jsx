import React from 'react'
import { motion } from "framer-motion"
import { GrInstagram } from 'react-icons/gr';
import { BsGithub,BsLinkedin } from 'react-icons/bs' 
import { SiGmail } from 'react-icons/si'
 
const Header = () => {
  return (
     <header className='sticky top-0 max-w-5xl mx-auto flex items-start z-20 xl:items-center p-5 justify-between'>
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,

        }}
        transition={{
            duration:1.5,
        }}
         className='flex flex-row items-center'>
            
            <a className='mr-10' href="https://www.instagram.com/__raushan_sharma__/"><GrInstagram size={30} color='#FF9933'/></a>
            <a  className='mr-10' href="https://github.com/Rawshansharma"><BsGithub size={30} color='#F5F5F5'/></a>
            <a href="https://www.linkedin.com/in/raushan-sharma-3067851b1/"><BsLinkedin size={30} color='green'/></a>
            
          
        </motion.div>
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,

        }}
        transition={{
            duration:1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
         <a className='cursor-pointer p-2 ' href='mailto:raushankumar7485852533@gmail.com'  ><SiGmail color='red'/> </a>
         <p className='uppercase hidden md:inline text-sm tracking-[2px] text-gray-400'>Get in touch</p>
        </motion.div>
     </header>
  )
}

export default Header