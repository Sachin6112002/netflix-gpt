import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {  FaPlay } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen pt-72 px-12 absolute text-white bg-gradient-to-r from-black aspect-video'>
      <h1 className= 'w-2/5  font-bold text-6xl'>
        {title}
      </h1>
      <p className='py-6 text-lg w-1/3 text-justify'>{overview}</p>
      <div className='flex gap-2'>
        <button className='bg-gray-100 hover:bg-gray-300 text-black p-4  px-16 text-xlg  items-center gap-0.5 flex rounded-md'><FaPlay/>Play</button>
        <button className='bg-gray-600 text-white p-4  px-12 text-xlg  items-center gap-0.5 flex rounded-md opacity-80'><AiOutlineInfoCircle size={20} color="white"/> More Info</button>

      </div>

    </div>
  )
}

export default VideoTitle