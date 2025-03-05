import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='text-white'>
        <div className="max-w-[900px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-[#00df9a] font-bold py-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Grow with data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
                strings={['BTB','BTC','SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero