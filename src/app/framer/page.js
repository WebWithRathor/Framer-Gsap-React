"use client"
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import mountain from '../../../public/mountain.png'

const page = () => {
  const {scrollYProgress}=useScroll()
  const cloudRef = useRef(null)
  return (
    <div className='h-full w-full '>
      <div className='h-[200vh] w-full relative bg-[#900000] flex items-center justify-center z-0'>

        <div ref={cloudRef} className='clouds fixed flex items-center top-0 w-full h-44'>
          <motion.img drag dragConstraints={cloudRef} className='   h-[250%] absolute left-[20%] ' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <motion.img drag dragConstraints={cloudRef} className='   h-[250%] absolute left-[40%] ' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <motion.img drag dragConstraints={cloudRef} className='   h-[250%] absolute left-[60%] ' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <motion.img drag dragConstraints={cloudRef} className='   h-[250%] absolute left-[80%] ' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />

          <img className='pointer-events-none   h-[250%] absolute left-[-10%] ' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <img className='pointer-events-none top-[-25%] h-[250%] absolute ' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <img className='pointer-events-none   h-[250%] absolute left-[10%]' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <img className='pointer-events-none top-[-25%] h-[250%] absolute left-[30%] ' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <img className='pointer-events-none   h-[250%] absolute left-[50%]' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
          <img className='pointer-events-none top-[-25%]   h-[250%] absolute left-[70%]' src='https://ik.imagekit.io/Devrajrathor124/cloud.png?updatedAt=1719597058426' />
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
        <div className='mountains flex fixed bottom-0 overflow-hidden w-full h-52 '>
          <img className='h-full absolute left-[0%] ' src='https://ik.imagekit.io/Devrajrathor124/mountain.png?updatedAt=1719596814530'/>
          <img className='h-full absolute left-[10%] ' src='https://ik.imagekit.io/Devrajrathor124/mountain.png?updatedAt=1719596814530'/>
          <img className='h-full absolute left-[25%] ' src='https://ik.imagekit.io/Devrajrathor124/mountain.png?updatedAt=1719596814530'/>
          <img className='h-full absolute left-[55%] ' src='https://ik.imagekit.io/Devrajrathor124/mountain.png?updatedAt=1719596814530'/>
          <img className='h-full absolute left-[75%] ' src='https://ik.imagekit.io/Devrajrathor124/mountain.png?updatedAt=1719596814530'/>
          <img className='h-full absolute left-[95%] ' src='https://ik.imagekit.io/Devrajrathor124/mountain.png?updatedAt=1719596814530'/>
          </div>

      </div>
    </div>
  )
}

export default page