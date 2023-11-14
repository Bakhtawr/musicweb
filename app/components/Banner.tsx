
import React from 'react'
import Image from 'next/image'
import bannermobile from '../assets/Images/SoundCloudBanner.png'

const Banner = () => {
  return (   
    <div className="bg-blue-500 text-white py-4 px-4 banner-bg  md:flex p-5">
       <div className="block p-5">
       <h1 className="md:text-7xl text-4xl font-semibold md:pt-5 md:leading-relaxed">Sound Cloud Music World!</h1>
        <h2 className="md:text-4xl text-2xl my-3">Explore our products and services.</h2>
        <a href="#" className="bg-white text-orange-500 mt-5 py-2 px-4 rounded-full inline-block">Learn more</a>
        </div>
        <div className='block'>
        <Image
           src={bannermobile}         
           alt="Picture of the author"
           />
        </div>
    </div>
  )
}

export default Banner
