console.log("ENV TEST:", import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT);
import React, { useState } from 'react'
import { IKImage } from "imagekitio-react";



const Navbar = () => {

    const [open,setOpen] = useState(false);
  return (

    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <div className='flex items-center gap-3 text-2xl font-bold'>
            <IKImage path="blog_logo.png" className='w-8 h-8' alt="" />
            <span>Ray Blog</span>
        </div>

        {/* MOBILE button */}
        <div className='md:hidden'>
            <div className='cursor-pointer text-2xl' onClick={() => setOpen(prev => ! prev)}>{open ? "x" : "="}

            </div>
                {/* Mobile link */}
                        <div 
                className={`w-full flex h-screen flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out 
                    ${open ? "-right-0" : "-right-[100%]"}`}
                >
                   <a href="">Home</a>
            <a href="">Trending</a>
            <a href="">Most Popular</a>
            <a href="">About</a>
            <a href="">
                <button className='py-1 px-5 rounded-2xl bg-blue-700 text-white'>Login</button>
            </a>
                </div>
        </div>

        {/* DESKTOP MENU*/}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
            <a href="">Home</a>
            <a href="">Trending</a>
            <a href="">Most Popular</a>
            <a href="">About</a>
            <a href="">
                <button className='py-1 px-5 rounded-2xl bg-blue-700 text-white'>Login</button>
            </a>
        </div>
      
    </div>
  )
}

export default Navbar
