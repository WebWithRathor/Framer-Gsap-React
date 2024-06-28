import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex relative z-0 flex-col gap-10 font-[monument] w-full h-screen bg-gradient-to-b from-[#900002] from-[4%]  to-black items-center justify-center'>
      <img className='absolute h-2/3 object-center mix-blend-darken  top-0 w-full z-[-1]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOsTofvygW7rOwEV8nzAJ3IlE7-E2tterKw&s' />
      <h1 className=' text-5xl tracking-wider font-bold text-white'>Welcome to Animation!</h1>
      <div className='btns space-x-10'>
       <Link href='/gsap'><button className='px-10 py-4 after:h-full after:w-full after:bg-black hover:text-white after:absolute relative after:hover:right-0 after:right-full overflow-hidden duration-300 after:transition-all z-0 after:z-[-1] after:top-0 tracking-wider bg-white'>GSAP</button></Link>
        <Link href='/framer'><button className='px-10 py-4 after:h-full after:w-full after:bg-black hover:text-white after:absolute relative after:hover:left-0 after:left-full overflow-hidden duration-300 after:transition-all z-0 after:z-[-1] after:top-0 tracking-wider bg-white'>FRAMER</button></Link>
      </div>
    </div>
  )
}

export default page