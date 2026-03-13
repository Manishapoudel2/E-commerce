import React from 'react'

const Login = () => {
  return (
    <div className='flex     gap-7 h-screen text-gray-500 justify-center items-center '>
        <div className='bg-white shadow-xl  flex flex-col gap-6 rounded-md  justify-center items-center p-10'>
        <div>
            <input className='w-72 h-10 px-2 py-2 border-gray-400 border rounded-sm  text-sm  focus:outline-none  focus:ring-1 focus:ring-blue-400' type="text" name="email" placeholder='Please enter your Phone or Email' />
        </div>
        <div>
  <input className='w-72 h-10 px-2 py-2 border-gray-400 rounded-sm border  text-sm   focus:outline-none  focus:ring-1 focus:ring-blue-400'type="text" name="password" placeholder='Please enter your Password' />
        </div>
         <div className="relative w-full ">
          <span className="text-sm  absolute right-0 bottom-0 cursor-pointer hover:underline">
            Forget Password
          </span>
          </div>
     
          <button type='submit' className='w-72 h-8 
         bg-teal-500  text-white  rounded-sm  hover:bg-teal-600 cursor-pointer   '>Login</button>
     
        <div>
        <p className='text-sm '>Don't have an account? <span className='hover:underline text-blue-500'>Sign up</span> 
        </p>
        </div>
      

    </div>
    </div>
  )
}

export default Login