import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
    const API = import.meta.env.VITE_API_URL
  const [product , setProduct]=useState({
    title:"",
    description:"",
    category:"",
    price:"",
    rating:"",
    imageurl:""

  })
   const handleSubmit= async(e)=>{
try {
     
    e.preventDefault()
    const res = await axios.post(`${API}/product`,product)
    alert("Product created successfully")
    setProduct({
  title:"",
  description:"",
  category:"",
  price:"",
  rating:"",
  imageurl:""
})
   
  }
 catch (error) {
    alert('error')
}
   }
  const handelChange = (e)=>{
    const {name,value}=e.target
    setProduct({
        ...product,[name]:value
    })
  }
  
  return (
    <div className='flex  flex-col justify-center items-center h-screen  p-5'>
        <div className=' p-10 rounded-md bg-white shadow-xl  w-96 '  onClick={() => navigate('/addproduct')}>
        <h1 className='font-semibold text-xl'  >Add New Product</h1>
        <form  onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="title" className='text-gray-500 text-xs font-semibold'>PRODUCT NAME</label>
                <input type="text" name='title' value={product.title} onChange={handelChange} className=' h-8 border border-gray-300  rounded-sm' />
            </div>
              <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="description" className='text-gray-500 text-xs font-semibold'>DESCRIPTION</label>

           <textarea name="description"  value={product.description} onChange={handelChange} className='w-full h-8 border border-gray-300  rounded-sm'  ></textarea>
            </div>
             <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="category" className='text-gray-500 text-xs font-semibold'>CATEGORY</label>
                <input type="text" name='category' value={product.category} onChange={handelChange} className='w-full h-8 border border-gray-300  rounded-sm'  />
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="price" className='text-gray-500 text-xs font-semibold'>PRICE</label>
                <input type="text"  name='price' value={product.price} onChange={handelChange} className='w-full h-8 border border-gray-300  rounded-sm' />
            </div>
           <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="rating" className='text-gray-500 text-xs font-semibold'>RATING</label>
                <input type="text" name='rating' value={product.rating} onChange={handelChange} className='w-full h-8 border border-gray-300  rounded-sm'  />
            </div>
             <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="imageurl" className='text-gray-500 text-xs font-semibold'>IMAGE URL</label>
                <input type="url" name='imageurl'  value={product.imageurl} onChange={handelChange} className='w-full h-8 border border-gray-300  rounded-sm' />
            </div>
            <div className='flex justify-center items-center mt-5 '>
                <button type='submit' className='font-normal bg-black text-white w-65 rounded-md p-2'>Create Product</button>
                </div>
        </form>
        </div>
    </div>
  )
}

export default AddProduct