import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
      <div className='h-20 z-50 shadow   top-0 bg-[#CBCBCB] flex justify-between items-center p-6 '>
        <div>
           <h1 className='font-(--font-comic)'></h1> Home
        </div>
        <div className='flex gap-3'>
            <Link to={'/login'}>Sign in</Link>
            <Link to={'/register'}>Register</Link>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar

