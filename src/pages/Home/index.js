import { Header, Footer } from '@/components/layout/Layout'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const index = () => {
  return (
    <>
    <Header />
    <div className='grid grid-cols-5 h-screen'>
      <div>
        <Navbar />
      </div>
      <div className='col-span-4'>
        <p className='text-white'>Content</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default index