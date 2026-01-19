import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='h-20 z-20 shadow rounded-xl  w-full fixed top-0 bg-[#CBCBCB] flex justify-between items-center p-6 '>
        <div>
           <h1 className='font-(--font-comic)'></h1> Home
        </div>
        <div className='flex gap-3'>
            <Link>Sign in</Link>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar

