import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3 '>

      <div className='border-2 h-24 hover:border-green-400 hover:text-green-400 border-white rounded-full flex 
      items-center px-8  uppercase overflow-hidden'>

        <Link className='text-[6vw] mt-3 ' to='/projects'>Projects</Link>
      </div>

      <div className='border-2 h-24 hover:border-green-400 hover:text-green-400 border-white rounded-full  flex items-center  px-8  uppercase overflow-clip'>

        <Link className='text-[6vw] mt-3 ' to='/agence'>Agence</Link>
      </div>
      
    </div>
  )
}

export default HomeBottomText