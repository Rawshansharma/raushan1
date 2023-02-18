import React from 'react'
 

const BackgroudCircles = () => {
  return (
    <div 
    className='relative flex justify-center items-center '>
        <div className='border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute'/>
        <div className='border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 opacity-30  absolute'/>
        <div className='border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 opacity-25   absolute'/>
        <div className='border border-[#333333] rounded-full h-[600px] w-[600px] mt-52 opacity-20 animate-pulse absolute'/>
        <div className='border border-[#333333] rounded-full h-[800px] w-[800px] mt-52  opacity-30 absolute'/>        
    </div>
  )
}

export default BackgroudCircles