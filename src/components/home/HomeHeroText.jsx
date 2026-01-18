import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5 text-center'>
            <div className='flex justify-center items-center text-[9.5vw] uppercase leading-[8vw]' >L'étincelle</div>

            <div className='flex  justify-center items-start text-[9.5vw] uppercase leading-[8vw] ' >
                qui
                <div className='h-[8vw] w-[14vw] -mt-2 rounded-full overflow-hidden '>
                    <Video />
                </div>
                génère
            </div>

            <div className='flex justify-center items-center text-[9.5vw] uppercase leading-[8vw]' >la créativité</div>
        </div>
    )
}

export default HomeHeroText