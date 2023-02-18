import React from 'react'
import { GrInstagram } from 'react-icons/gr';
import { BsGithub,BsLinkedin } from 'react-icons/bs';


export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <hr className='w-60' />
         <p className='header-p text-[15px] text-gray-400 pt-10 tracking-[2px] ml-10 w-[55%]'>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.</p>
        <div className='flex flex-row mt-3 p-5'>
            <a className='mr-10' href="https://www.instagram.com/__raushan_sharma__/"><GrInstagram size={30} color='#FF9933'/></a>
            <a  className='mr-10' href="https://github.com/Rawshansharma"><BsGithub size={30} color='#F5F5F5'/></a>
            <a href="https://www.linkedin.com/in/raushan-sharma-3067851b1/"><BsLinkedin size={30} color='green'/></a>
        </div>
        <p className='text-gray-400 p-5 hover:underline hover:cursor-pointer'>Developed by Raushan</p>
     </div>
  )
}
