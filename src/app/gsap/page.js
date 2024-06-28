"use client"
import { useGSAP } from '@gsap/react';
import gsap, { clamp } from 'gsap';
import React, { useRef, useState } from 'react'

const page = () => {

  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const tomRef = useRef(null)
  const jerryRef = useRef(null)
  const [run, setrun] = useState(false)
  const moveHandler = (e)=>{
    setx(e.clientX-200)
    sety(e.clientY-170)
  };
  useGSAP(()=>{
    if(run){
      gsap.to(jerryRef.current,{
        x:gsap.utils.random(["0","1000","100"]),y:gsap.utils.random(["0","500","100"])
      })
    }
    gsap.to(tomRef.current,{
      x:x,y:y
    })
  },[x,y])

  return (
    <div onMouseMove={(e)=>moveHandler(e)} className='h-screen font-[monument] w-full flex items-center  gap-10 justify-center'>
      <img ref={tomRef} className='h-40 -scale-x-100  absolute top-5 left-5 z-0' src='https://i.pinimg.com/originals/78/3f/13/783f1396a50a46367d0680228e95f0d5.png'/>
      <img ref={jerryRef} onMouseEnter={(e)=>setrun(true)} onMouseLeave={(e)=>setrun(false)} className='h-20 absolute  mix-blend-darken top-28 left-56' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44m8d8JZo82cBIGUKMC0XG7ACIrz9GW-6oA&s'/>
      <h1 className='text-7xl relative'>GSAP</h1>
    </div>
  )
}

export default page