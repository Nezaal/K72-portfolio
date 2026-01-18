import React from 'react'


const Video = () => {
  return (  
    <div>
        <video autoPlay muted loop
        className='h-full w-full object-cover'
        src="public\video\vdo.mp4"></video>
    </div>
  )
}

export default Video