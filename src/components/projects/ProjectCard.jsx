import React from 'react'

const ProjectCard = (props) => {

    return (
        <div className='w-full h-[800px] flex gap-3 mb-3     '>
            <div className=' group w-1/2 h-full relattive transition-all ease-in-out duration-300 hover:rounded-[50px] overflow-hidden relative'>
                <img className='w-full h-full object-cover' src={props.image1} alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex justify-center items-center ">
                    <h2 className='opacity-0 group-hover:opacity-100  transition-all duration-300 uppercase text-6xl font-[font2] text-[4vw] text-white border-2 rounded-full pt-2 px-3 '>vior le project</h2>
                </div>
            </div>
                <div className=' group w-1/2 h-full relattive transition-all ease-in-out duration-300 hover:rounded-[50px] overflow-hidden relative'>
                    <img className='w-full h-full object-cover' src={props.image2} alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex justify-center items-center ">
                        <h2 className='opacity-0 group-hover:opacity-100  transition-all duration-300 uppercase text-6xl font-[font2] text-[4vw] text-white border-2 rounded-full pt-2 px-3 '>vior le project</h2>
                    </div>
                </div>
        </div>
    )
}

export default ProjectCard