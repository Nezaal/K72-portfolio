import React from 'react'


const Video = () => {
  return (  
    <div className='h-full w-full rounded-[inherit] overflow-hidden'>
        <video autoPlay muted loop
        className='h-full w-full object-cover'
        src="../video/vdo.mp4"></video>
    </div>
  )
}

export default Video