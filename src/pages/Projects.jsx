import React from 'react'
import ProjectCard from "../components/projects/ProjectCard"




const Projects = () => {
  
  const projects = [{
    image1: '../project-images/image copy 1.png',
    image2: '../project-images/image copy 2.png',
  }, {
  
    image1: '../project-images/image copy 3.png',
    image2: '../project-images/image copy 4.png',
  }, {
  
    image1: '../project-images/image copy 5.png',
    image2: '../project-images/image copy 6.png',
  }, {
    image1: '../project-images/image copy 7.png',
    image2: '../project-images/image copy 8.png',
  }, {
    image1: '../project-images/image copy 9.png',
    image2: '../project-images/image copy 10.png',
  }]

  return (
    <div className='p-3'>
      <div className=' pt-[40vh]' >
        <h2 className='font-[font2] text-[11vw] uppercase font-bold text-black'>Projects</h2>
      </div>

      <div className='-mt-15'>
        {projects.map(function (elem) {
          return <ProjectCard  image1 = {elem.image1} image2 = {elem.image2}/>
        })}
      </div>
    </div>
  )
}

export default Projects