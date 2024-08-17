import React from 'react';
import Image from 'next/image';
import frame from "../../../public/assets/home.png"

const HomePage = () => {

    console.log('Image source:', frame);    
  return (
    <div className='bg-background flex justify-center items-center container mx-auto'>
        <div className='right-section w-75'>
            <h1 className='text'>Hey IB Folks! Unsure about the quality of your answers? <span className='text-fontColor'>We get you.</span></h1>
        </div>
        <div className='left-section w-25'>
            <Image src={frame} alt="home" className="max-w-full h-auto" />
        </div>
    </div>
  )
}

export default HomePage