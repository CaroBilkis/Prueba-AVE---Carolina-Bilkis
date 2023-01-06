import React from 'react'
import Button from './Button'

const Header = (props) => {
  return (
<div className='relative w-full'>
        <div className='flex flex-col w-full h-[560px] justify-center items-center relative '>
              <h3 className='absolute top-10 self-center font-extrabold text-white z-10'>Front-End <span className='text-orange-300'>Challenge</span></h3>
              <div className='flex justify-center md:justify-start px-10 w-full  lg:px-32  animation-300'>
                 <h1 className='flex flex-col uppercase z-10 text-white'>A Brand <span className='font-bold'>New Arrivals</span></h1>
              </div>
              <img className='w-full h-full object-cover absolute top-0 z-0 blur-sm' src="percha.jpg" alt="" />
      </div>
    
       <div className='bg-white w-full h-6 relative -top-2 z-10'></div>
    

</div>
  )
}

export default Header