import React, { act, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";
     import { CiShoppingCart } from "react-icons/ci";
     import { GiIceCube } from "react-icons/gi";


const Sidebar = () => {
  const navigate = useNavigate();
  const[active,setActive]=useState("")
 
  return (
<div className='flex flex-col h-screen gap-3 w-fit mt-5 shadow-xl p-6 font-semibold '>
  
  <div onClick={()=>{
    setActive('Dashboard');navigate('/')
  }} className={`cursor-pointer flex items-center gap-2  rounded-md p-3 transition-all duration-200 ease-in ${active==='Dashboard'? 'bg-black text-white':'text-gray-500 bg-white'}`}>
    <MdOutlineDashboardCustomize />
    <h1>Dashboard</h1>
  </div>

  <div onClick={()=>{
    setActive('Product');navigate('/product')
  }} className={`flex items-center gap-2 cursor-pointer rounded-md p-3 transition-all duration-200 ease-in ${active==='Product'? 'bg-black text-white':'bg-white text-gray-500'}`}>
    <GiIceCube />
    <h1>Product</h1>
  </div>

  <div onClick={()=>{
    setActive('Orders');navigate('/order')
  }} className={`flex items-center gap-2 cursor-pointer rounded-md p-3 transition-all duration-200 ease-in ${active==='Orders' ? 'bg-black text-white' :'bg-white text-gray-500'}`}>
    <CiShoppingCart />
    <h1>Orders</h1>
  </div>

</div>
  )
}

export default Sidebar