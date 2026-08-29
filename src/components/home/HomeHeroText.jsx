import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5  mt-72 text-center lg:mt-0 '>
            <div className='flex justify-center items-center text-[9.5vw] uppercase lg:leading-[8vw] sm:leading-[10vw]' >L'étincelle</div>

            <div className='flex  justify-center items-start text-[9.5vw] uppercase lg:leading-[8vw] sm:leading-[10vw]' >
                qui
                <div className='h-[8vw] w-[18vw] mt-3 rounded-full overflow-hidden isolate'>
                    <Video />
                </div>
                génère
            </div>

            <div className='flex justify-center items-center text-[9.5vw] uppercase lg:leading-[8vw] sm:leading-[10vw]' >la créativité</div>
        </div>
    )
}

export default HomeHeroText