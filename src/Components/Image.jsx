import React from 'react'
import { IKImage } from "imagekitio-react";

const Image = ({scr, className, w, h, alt}) => {

  return (
    <div className='flex items-center gap-3 text-2xl font-bold'>
            <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            path={scr} 
            className={className} 
            loading='lazy'
            lqip={{active: true, quality: 20}}
            width={w}
            height={h}
            alt={alt} 
            />
    </div>
  )
}

export default Image
