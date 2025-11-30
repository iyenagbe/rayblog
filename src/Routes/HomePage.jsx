import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (

    <div className='mt-4 flex flex-col gap-4'>
      {/* breadcrumbs */}
      <div className='flex gap-4'>
       <Link to='/'>Home</Link>
        <span>.</span>
        <span className='text-blue-800'>Blogs Articles</span>
        </div>

        {/* Intruduction */}
        <div className='flex items-center justify-between'></div>

        {/* titles */}
        <div className=''>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>Improving your page speed and mobile responsiveness.</h1>

          <p className='mt-7 text-md md:text-xl'>Good UI design is more than beautiful layouts; it’s about creating interfaces that users understand.</p>
        </div>

        <div className='mt-10 flex justify-center items-center'>

        {/* Animation Button */}
        <Link to='write'>
          <svg
           viewBox="0 0 200 200"
            width="200"
            height="200"
          >
           
            
              <path
              id='circlePath'
              d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
              />
              <text>

              </text>
          </svg>
        </Link>

        </div>
      
      {/* Feature Post */}
      {/* Post List */}
    </div>
  )
}

export default HomePage
