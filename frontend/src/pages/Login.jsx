import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
  return (
    <div className='overflow-hidden flex flex-col md:flex-row gap-3 h-[calc(100vh-160px)]'>
         <div className='flex-3 p-10 pt-15 flex justify-center items-center bg-[#6D8196] h-full'>
            
            
            <form action="" className='bg-[#CBCBCB] text-slate-600 shadow-xl p-10 w-100 rounded-md flex flex-col gap-3 items-center justify-center '>
                <h1 className='text-xl text-slate-600'>Sign in</h1>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Email  </label>
                <input type="text" className='outline-1 rounded-md p-2 hover:outline-slate-500' placeholder='you@example.com' />


                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Password  </label>                    
                <input type="text" className='outline-1 rounded-md p-2 hover:outline-slate-500'  placeholder='••••••••'/>

                </div>
                <div className='mt-5 w-full'>
                    <button className='p-2 w-full rounded-md bg-slate-500 text-white shadow-md active:scale-95 duration-200'>Sign In</button>
                </div>
                <div>
                    <p>Don't have an account?<span className='underline hover:text-blue-500' onClick={()=>{navigate('/register')}} > Sign up</span> </p>
                </div>
            </form>
        </div>
        <div className='flex-3'>
            <div>asdasd</div>
        </div>
       
      
    </div>
  )
}

export default Login
// #4A4A4A
// #FFFFE3
// #6D8196
// #CBCBCB