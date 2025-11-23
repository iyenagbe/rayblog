// console.log("ENV TEST:", import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT);
import React, { useState } from 'react'
import { IKImage } from "imagekitio-react";
import Image from './Image';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [open,setOpen] = useState(false);
  return (

    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <Link to="/" className='flex items-center gap-3 text-2xl font-bold'>
              {/* ImageKit */}
            {/* <Image src="blog_logo.png" alt="blog_logo.png"  /> */}
            <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src="https://ik.imagekit.io/8b15zl0rj/blog_logo.png" className='w-8 h-8' alt="Ray Blog" w={32} h={32}
            />

            <span>Ray Blog</span>
        </Link>

        {/* MOBILE button */}
        <div className='md:hidden'>
            <div className='cursor-pointer text-2xl' onClick={() => setOpen(prev => ! prev)}>{open ? "x" : "="}

            </div>
                {/* Mobile link */}
                        <div 
                className={`w-full flex h-screen flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out 
                    ${open ? "-right-0" : "-right-[100%]"}`}
                >
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="/">
                <button className='py-1 px-5 rounded-2xl bg-blue-700 text-white'>Login</button>
            </Link>
                </div>
        </div>

        {/* DESKTOP MENU*/}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="/">
                <button className='py-1 px-5 rounded-2xl bg-blue-700 text-white'>Login</button>
            </Link>
        </div>
      
    </div>
  )
}

export default Navbar
