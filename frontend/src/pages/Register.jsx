import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col md:flex-row  h-[calc(100vh-160px)] '>
      <div className='flex-2 bg-[#6D8196] flex justify-center items-center'>
             <form action="" className='flex flex-col gap-5 justify-center items-center p-7 rounded-xl w-100 bg-[#CBCBCB]'>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="">Name</label>
                <input className='outline-1 rounded-md p-1 ' type="text" placeholder='john Doe' />

            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="">Email</label>
                <input className='outline-1 rounded-md p-1' type="text" placeholder='abc@gmail.com' />

            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="">Password</label>
                <input className='outline-1 rounded-md p-1' type="text" placeholder='••••••••' />

            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-[#FFFFE3] p-2 active:scale-95 duration-300 w-full rounded-md'>Register</button>
            </div>
           </form>
          </div>
      <div className='flex-2'></div>
    </div>
  )
}

export default Register
