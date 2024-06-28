"use client"
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const page = () => {
  const {scrollYProgress}=useScroll()
  const cloudRef = useRef(null)
  return (
    <div className='h-full w-full '>
      <div className='h-[200vh] w-full relative bg-[#900000] flex items-center justify-center z-0'>

        <div ref={cloudRef} className='clouds fixed flex overflow-hidden items-center top-0 bg-[#900000] w-full h-52'>
          <motion.img drag dragConstraints={cloudRef} className=' h-72  mix-blend-multiply absolute left-[20%] ' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <motion.img drag dragConstraints={cloudRef} className=' h-72  mix-blend-multiply absolute left-[40%] ' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <motion.img drag dragConstraints={cloudRef} className=' h-72  mix-blend-multiply absolute left-[60%] ' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <motion.img drag dragConstraints={cloudRef} className=' h-72  mix-blend-multiply absolute left-[80%] ' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />

          <img className='pointer-events-none  h-72  mix-blend-multiply absolute left-[-10%] ' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <img className='pointer-events-none h-72 top-[-25%] mix-blend-multiply absolute ' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <img className='pointer-events-none  h-72  mix-blend-multiply absolute left-[10%]' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <img className='pointer-events-none h-72 mix-blend-multiply absolute left-[30%] ' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <img className='pointer-events-none  h-72  mix-blend-multiply absolute left-[50%]' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
          <img className='pointer-events-none  h-72  mix-blend-multiply absolute left-[70%]' src='https://imgs.search.brave.com/vcRaskD8DSpJzfxpNHjGXtTH9s949KX0qIRdchzm2sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkzLzc2LzE4/LzM2MF9GXzc5Mzc2/MTgwNV9qMzh6TWhj/NFV1Vm5rNG1aNjZ3/aUd6S29jNUFDRWkx/ci5qcGc' />
        </div>
        <div className='bar fixed top-0 z-50 left-0 w-6 h-full bg-white'>
          <motion.div style={{scaleY:scrollYProgress}} className='h-full origin-top w-full overflow-hidden bg-red-300 pt-72 text-center uppercase'><h1 className='absolute top-1/2 left-1 font-semibold -translate-y-1/2'>p <br/> r<br/>o<br/>g<br/>r<br/>e<br/>s<br/>s</h1></motion.div>
        </div>
        <motion.img animate={{
          x:[0,600,0],
          y:[0,20,0],
          rotate:[0,-120,-360],
        }} transition={{duration:5 , delay:2}} className='mr-96 mix-blend-darken' src='https://w7.pngwing.com/pngs/238/310/png-transparent-bird-flight-bird-flight-silhouette-bird-watercolor-animals-monochrome-fauna-thumbnail.png'/>
        <div className='circle h-44 shadow-[0px_0px_20px_10px_white] rounded-full aspect-square bg-white'></div>
        <div className='mountains flex bg-[#900000] fixed bottom-0 overflow-hidden w-full h-52 '>
          <img className='h-full absolute left-[0%] z-[-1]  mix-blend-darken' src='https://w7.pngwing.com/pngs/147/633/png-transparent-black-and-white-mountain-design-studio-codepen-mountain-angle-photography-monochrome-thumbnail.png'/>
          <img className='h-full absolute left-[10%] z-[-1]  mix-blend-darken' src='https://w7.pngwing.com/pngs/147/633/png-transparent-black-and-white-mountain-design-studio-codepen-mountain-angle-photography-monochrome-thumbnail.png'/>
          <img className='h-full absolute left-[25%] z-[-1]  mix-blend-darken' src='https://w7.pngwing.com/pngs/147/633/png-transparent-black-and-white-mountain-design-studio-codepen-mountain-angle-photography-monochrome-thumbnail.png'/>
          <img className='h-full absolute left-[55%] z-[-1]  mix-blend-darken' src='https://w7.pngwing.com/pngs/147/633/png-transparent-black-and-white-mountain-design-studio-codepen-mountain-angle-photography-monochrome-thumbnail.png'/>
          <img className='h-full absolute left-[75%] z-[-1]  mix-blend-darken' src='https://w7.pngwing.com/pngs/147/633/png-transparent-black-and-white-mountain-design-studio-codepen-mountain-angle-photography-monochrome-thumbnail.png'/>
          <img className='h-full absolute left-[95%] z-[-1]  mix-blend-darken' src='https://w7.pngwing.com/pngs/147/633/png-transparent-black-and-white-mountain-design-studio-codepen-mountain-angle-photography-monochrome-thumbnail.png'/>
          </div>

      </div>
    </div>
  )
}

export default page