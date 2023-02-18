import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <> 
    <div
     className=' realtive h-screen justify-evenly  text-center flex flex-col'>
       

       
  <div className="py- lg:py-16 px-4 mx-auto max-w-screen-md">
  <motion.h1 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:2}}
      className='tracking-[15px] p-8 top-20 text-gray-500 text-3xl font-bold uppercase'>Get In Touch</motion.h1> 
       <motion.form 
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
       action="/" className="space-y-8 text-gray-500">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 tracking-[2px]">Your email : -</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 tracking-[2px]">Subject : -</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 tracking-[2px]">Your message : -</label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="bg-black-500 hover:bg-gray-700 text-white  py-2 px-4 rounded-full">Send message</button>
      </motion.form>
  </div>
  </div>
       

      </>
  )
}

export default Contact