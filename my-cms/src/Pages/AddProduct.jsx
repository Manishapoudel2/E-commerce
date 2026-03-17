import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate=useNavigate()
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
    <div className='flex flex-col justify-center items-center min-h-screen w-full p-4 sm:p-6 md:p-10'>
      
      <div className='bg-white shadow-md p-5 sm:p-6 w-full max-w-md rounded-md'>
        
        <h1 className='font-semibold text-xl text-center sm:text-left'>
          Add New Product
        </h1>

        <form onSubmit={handleSubmit}>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-gray-500 text-xs font-semibold'>PRODUCT NAME</label>
            <input
              type="text"
              name='title'
              value={product.title}
              onChange={handelChange}
              className='h-9 border border-gray-300 rounded-sm px-2 w-full'
            />
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-gray-500 text-xs font-semibold'>DESCRIPTION</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handelChange}
              className='w-full h-20 border border-gray-300 rounded-sm p-2'
            ></textarea>
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-gray-500 text-xs font-semibold'>CATEGORY</label>
            <input
              type="text"
              name='category'
              value={product.category}
              onChange={handelChange}
              className='w-full h-9 border border-gray-300 rounded-sm px-2'
            />
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-gray-500 text-xs font-semibold'>PRICE</label>
            <input
              type="text"
              name='price'
              value={product.price}
              onChange={handelChange}
              className='w-full h-9 border border-gray-300 rounded-sm px-2'
            />
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-gray-500 text-xs font-semibold'>RATING</label>
            <input
              type="text"
              name='rating'
              value={product.rating}
              onChange={handelChange}
              className='w-full h-9 border border-gray-300 rounded-sm px-2'
            />
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-gray-500 text-xs font-semibold'>IMAGE URL</label>
            <input
              type="url"
              name='imageurl'
              value={product.imageurl}
              onChange={handelChange}
              className='w-full h-9 border border-gray-300 rounded-sm px-2'
            />
          </div>

          <div className='flex justify-center items-center mt-6'>
            <button
              type='submit'
              className='font-normal bg-black text-white w-full sm:w-auto px-6 py-2 rounded-md'
            >
              Create Product
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default AddProduct