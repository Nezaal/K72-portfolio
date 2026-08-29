import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] mb-3 flex items-center justify-center gap-3 sm:gap-10 '>

      <div className='lg:h-24 hover:border-green-400 hover:text-green-400 border-white
      border-[3px] rounded-full flex 
      items-center px-5  uppercase overflow-hidden'>

        <Link className='text-[6vw] mt-2 ' to='/projects'>Projects</Link>
      </div>

      <div className=' lg:h-24 hover:border-green-400 hover:text-green-400 border-white border-[3px] rounded-full  flex items-center  px-5 uppercase overflow-hidden '>

        <Link className='text-[6vw] mt-2' to='/agence'>Agence</Link>
      </div>
      
    </div>
  )
}

export default HomeBottomText