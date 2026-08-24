import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Agence = () => {

  const imgDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    '/img%20arr/image.png',
    '/img%20arr/image2.png',
    '/img%20arr/image3.png',
    '/img%20arr/image4.png',
    '/img%20arr/image5.png',
    '/img%20arr/image6.png',
    '/img%20arr/image7.png',
    '/img%20arr/image8.png'
  ]

  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        markers: true,
        start: 'top 15%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 3,
        anticipatePin: 1,
        invalidateOnRefresh: true ,

        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          // abhi yahan dikkt hai...last image nahi dikh nhi rahi hai at the end.
          imageRef.current.src = imageArray[imageIndex]
        }

      }
    })
  })

  return (
    <div>
      <div className='secion1 py-1'>
        <div ref={imgDivRef} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-0 left-[30vw]'>

          <img ref={imageRef} className='h-full w-full object-cover' src="/img%20arr/image.png" alt="" />
        </div>

        <div className='relative font-[font2] '>

          <div className='mt-[55vh]'>

            <h1 className="text-[19vw]  text-center uppercase leading-[15vw]">
              Soixan7e <br />
              Douze
            </h1>

          </div>

          <div
            className='pl-[40%] mt-20'>
            <p
              className='text-3xl'
            > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
            </p>

          </div>

        </div>
      </div>

      <div className="section2 h-screen">
        
      </div>
    </div>
  )
}

export default Agence