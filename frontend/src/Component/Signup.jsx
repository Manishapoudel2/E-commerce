import React, { useState } from 'react'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
  
    
  return (
   <div className="flex flex-col min-h-screen justify-center items-center p-5 text-gray-500">
  <div className="bg-white shadow-md flex flex-col gap-6 p-6 rounded-md justify-center items-center w-full max-w-sm">
      <div className="flex items-center justify-between w-full">
  <h1 className="text-teal-500 font-sans text-2xl font-semibold">Sign up</h1>
  <RxCross1 size={24} className="cursor-pointer hover:text-gray-500" onClick={()=>{
    navigate('/')
  }} />
</div>
       <div className="flex w-full gap-2">
  <input
    type="text"
    value="+977"
    
    className="w-20 border border-gray-400 rounded-md py-2 px-2 bg-gray-100 text-sm"
  />
  <input
    type="text"
    name="number"
    placeholder="Please enter your number"
    className="flex-1 border border-gray-400 rounded-md py-2 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
  />
</div>
       <div className='flex gap-2 '>
        <input type="checkbox" name="check" />
        <p className='text-xs wrap-break-word  '>By creating and/or using your account, you agree to our <span  className='text-blue-600 '>Terms of Use</span>  and <span className='text-blue-600 '>Privacy Policy</span>.</p>
       </div>
     <button className="w-full  text-teal-500 border-teal-500 border py-2 rounded-md hover:bg-teal-100 cursor-pointer">
  Send code via SMS
</button>
      
      <div>
       <p className='text-sm'>
            Already have an account?
            <span className='hover:underline text-blue-500 cursor-pointer ' onClick={()=>{
                navigate('/login')
            }}>
            {" "} Log in Now
            </span>
          </p>
      </div>
        <div className='flex flex-col gap-3 items-center justify-center'>
                <p className='text-sm'>Or , Sign up with</p>
      <div className='flex flex-col  sm:flex-row gap-3 sm:gap-4 items-center'>
      <p className='flex text-sm  justify-center items-center gap-2'>  <FcGoogle size={20} /> Google</p>
      <p className='flex justify-center items-center text-sm gap-2'>  <BiLogoFacebookCircle size={20} color='blue' /> Facebook</p>
      </div>
              </div>
      </div>
      
    </div>
  )
}

export default Signup
