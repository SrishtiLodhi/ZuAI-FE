import React from 'react';
import Image from 'next/image';
import frame from "../../../public/assets/home.png";
import upload from "../../../public/assets/upload.svg"

const HomePage = () => {

    console.log('Image source:', frame);    
  return (
    <div className='bg-background flex justify-center items-center container mx-auto gap-3'>
        <div className='right-section w-75'>
            <h1 className='text'>Hey IB Folks! Unsure about the quality of your answers? <span className='text-fontColor'>We get you.</span></h1>
            <div className='card'>
<div className='upload-container'>
<Image src={upload} alt="home" className="" />
<h3 className='heading-text'>Drag and drop a PDF </h3>
<p className='para-text'>*Limit 25 MB per file.</p>
</div>
            </div>
        </div>
        <div className='left-section w-25'>
            <Image src={frame} alt="home" className="max-w-full h-auto" />
        </div>
    </div>
  )
}

export default HomePage