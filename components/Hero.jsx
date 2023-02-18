import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroudCircles'
import Image from 'next/image'

const Hero = () => {
  
    const [text] = useTypewriter({
        words: [
            'Hey! 👋',
             "I'm Raushan Sharma", 
            "< A  FrontEnd Developer /> ", 
            "< A  Web Developer />",
        ],
        loop: 0
      })

      return (
        <div className='h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden z-0 '>
          <BackgroundCircles/>
           <Image 
            className='rounded-full'
            src='/profile.jpg'
            width='110'
            height='110'
            alt='profile'
            priority
           >

           </Image>
            <div className='z-20'>
              <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                FrontEnd Developer
              </h2>
            <h1 className='p-10 text-4xl lg:text-6xl font-semibold px-10 text-gray-400'>
            <span>{text}</span>

            <Cursor cursorColor='#F7AB0A' />
            </h1>
            </div>
        </div>
      )
}

export default Hero