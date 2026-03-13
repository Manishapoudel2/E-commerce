import React from 'react'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col h-screen gap-3  w-fit mt-5   bg-white shadow-xl p-6 font-semibold text-gray-500'> 
      <div className='cursor-pointer hover:bg-black hover:text-white rounded-md p-3  transition all  2s ease-in'> <h1>Dashboard</h1></div>
      <div onClick={()=>navigate('/product')} className='cursor-pointer hover:bg-black hover:text-white rounded-md p-3  transition all  2s ease-in'> <h1>Product</h1></div>
      <div className='cursor-pointer hover:bg-black hover:text-white rounded-md p-3  transition all  2s ease-in'> <h1>Orders</h1></div>
    </div>
  )
}

export default Sidebar