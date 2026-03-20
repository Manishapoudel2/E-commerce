import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='flex min-h-screen justify-center items-center px-4  text-gray-500'>
      
      <div className='bg-white shadow-md flex flex-col gap-5 rounded-md justify-center items-center p-6 sm:p-10 w-full max-w-sm'>
        <div className='flex justify-between items-center w-full'>
           
            <h1 className="text-teal-500 font-sans text-2xl font-semibold">Login to Quickcart</h1>
            <RxCross1 size={24} className="cursor-pointer hover:text-gray-500" onClick={()=>{
              navigate('/')
            }} />
        </div>
        <div className='w-full'>
          <input
            className='w-full h-10 px-3 border border-gray-400 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
            type="text"
            name="email"
            placeholder='Please enter your Phone or Email'
          />
        </div>

        <div className='w-full'>
          <input
            className='w-full h-10 px-3 border border-gray-400 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
            type="password"
            name="password"
            placeholder='Please enter your Password'
          />
        </div>

       <div className="w-full text-right">
  <span className="text-sm cursor-pointer hover:underline">
    Forget Password
  </span>
</div>

        <button
          type='submit'
          className='w-full h-11 sm:h-10 bg-teal-500 text-white rounded-sm hover:bg-teal-600 cursor-pointer'
        >
          Login
        </button>

        <div className='text-center'>
          <p className='text-sm'>
            Don't have an account?
            <span className='hover:underline text-blue-500 cursor-pointer' onClick={()=>{
              navigate('/signup')
            }}>
           {""}   Sign up
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <p className='text-sm'>Or , login with</p>
<div className='flex flex-col  sm:flex-row gap-3 sm:gap-4 items-center'>
<p className='flex text-sm  justify-center items-center gap-2'>  <FcGoogle size={20} /> Google</p>
<p className='flex justify-center items-center text-sm gap-2'>  <BiLogoFacebookCircle size={20} color='blue' /> Facebook</p>
</div>
        </div>

      </div>

    </div>
  )
}

export default Login