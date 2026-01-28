import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registeruser } from '../features/AuthSlice';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form,setForm] = useState({
    name:'',
    email:'',
    password:''
  })
  const handleinput=(e)=>{
      const {name,value}=e.target
      setForm((prev)=>({...prev,[name]:value}))
  }
  const handlesubmit =(e)=>{
    e.preventDefault()
    dispatch(registeruser(form))

  }
  return (
    <div className='flex flex-col md:flex-row  h-[calc(100vh-160px)] '>
      <div className='flex-2  bg-[#6D8196] flex justify-center items-center'>
             <form onSubmit={handlesubmit} action="" className='flex flex-col  shadow-[2px_13px_10px_3px_rgba(0,0,0,0.1)] gap-5 justify-center items-center p-7 rounded-xl w-100 bg-[#CBCBCB]'>
              <h1 className='text-xl text-slate-600'>Register</h1>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="">Name</label>
                <input onChange={handleinput} name='name' value={form.name} className='outline-1 rounded-md p-2 hover:outline-slate-500' type="text" placeholder='john Doe' />

            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="">Email</label>
                <input onChange={handleinput} name='email' value={form.email} className='outline-1 rounded-md p-2 hover:outline-slate-500' type="text" placeholder='abc@gmail.com' />

            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="">Password</label>
                <input onChange={handleinput} name='password' value={form.password} className='outline-1 rounded-md p-2 hover:outline-slate-500' type="password" placeholder='••••••••' />

            </div>
            <div className='w-full flex justify-center mt-4'>
                <button className='p-2 w-full rounded-md bg-slate-500 text-white shadow-md active:scale-95 duration-200'>Register</button>
            </div>
            <div>
                    <p>Already have an account?<span className='underline cursor-pointer text-blue-500 hover:text-blue-700 duration-200' onClick={()=>{navigate('/login')}} > Sign up</span> </p>
                </div>
           </form>
          </div>
      <div className='flex-2'></div>
    </div>
  )
}

export default Register
