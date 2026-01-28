import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/AuthSlice'
const Navbar = () => {
  const  {user}=useSelector(x=>x.auth)
  const dispatch=useDispatch()
  return (
      <div>
      <div className='h-20 z-50 shadow   top-0 bg-[#CBCBCB] flex justify-between items-center p-6 '>
        <div>
           <h1 className='font-(--font-comic)'></h1> Home
        </div>
      {
        user?<div>
            <Link onClick={()=>{dispatch(logout())}}>logout</Link>

        </div> :<div className='flex gap-3'>
            <Link to={'/login'}>Sign in</Link>
            <Link to={'/register'}>Register</Link>
            
        </div>
        
      }
        
      </div>
    </div>
  )
}

export default Navbar

