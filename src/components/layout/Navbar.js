import React from 'react'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='fixed left-10'>
        <div className='flex flex-col bg-242527 text-white rounded-lg my-5 p-3 w-48'>
            <button className='flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6'>
                <FaHome />
                <p className='ml-2'>Home</p>
            </button>
            <button className='flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6'>
                <FaUserCircle />
                <p className='ml-2'>My question</p>
            </button>
            <button className='flex justify-start items-center p-2 rounded-lg hover:bg-08D9D6'>
                <BsFillBookmarkFill />
                <p className='ml-2'>Book</p>
            </button>
        </div>

        <div className='flex flex-col bg-242527 text-white rounded-lg my-5 p-3 w-48'>
            <button className='p-2 rounded-lg hover:bg-08D9D6'>SF340</button>
            <button className='p-2 rounded-lg hover:bg-08D9D6'>SF340</button>
            <button className='p-2 rounded-lg hover:bg-08D9D6'>SF340</button>
        </div>
    </nav>
  )
}

export default Navbar