import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product , setProduct]=useState([])
  const {id} = useParams()
  const API = import.meta.env.VITE_API_URL;
const [edit , setEdit] = useState([{
 id:"",
  title:"",
  description:"",
  category:"",
  price:"",
  rating:"",
  imageurl:""
}]);
  const fetchData=async()=>{
   const res= await axios.get(`${API}/product/${id}`)
   setEdit(res.data)
  }

  useEffect(()=>{
    fetchData()
  },[])
 

 const handleUpdate =async()=>{
  await axios.put(`${API}/product/${id}`,{
    title:edit.title,
    description:edit.description,
    category:edit.category,
    price:edit.price,
    rating:edit.rating,
    imageurl:edit.imageurl
  });
  fetchData();
  setEdit(null)

 }
return (
 <div className='flex  flex-col justify-center items-center h-screen w-full p-5'>
<div className='bg-white shadow-md p-5 w-96'>
        <h1 className='font-semibold text-xl'  >Update Product</h1>
        <form >
            <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="title" className='text-gray-500 text-xs font-semibold'>PRODUCT NAME</label>
                <input type="text"  value={edit[0].title}  onChange={(e) =>
                    setEdit({ ...edit, title:e.target.value })
                  } className=' h-8 border border-gray-300  rounded-sm' />
            </div>
              <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="description" className='text-gray-500 text-xs font-semibold'>DESCRIPTION</label>

           <textarea  onChange={(e) =>
                    setEdit({ ...edit, description:e.target.value })
                  } value={edit[0].description} className='w-full h-8 border border-gray-300  rounded-sm'  ></textarea>
            </div>
             <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="category" className='text-gray-500 text-xs font-semibold'>CATEGORY</label>
                <input type="text"  onChange={(e) =>
                    setEdit({ ...edit, category:e.target.value })
                  } value={edit[0].category}  className='w-full h-8 border border-gray-300  rounded-sm'  />
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="price" className='text-gray-500 text-xs font-semibold'>PRICE</label>
                <input type="text" onChange={(e) =>
                    setEdit({ ...edit, price:e.target.value })
                  } value={edit[0].price}  className='w-full h-8 border border-gray-300  rounded-sm' />
            </div>
           <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="rating" className='text-gray-500 text-xs font-semibold'>RATING</label>
                <input type="text"  value={edit[0].rating}  onChange={(e) =>
                    setEdit({ ...edit, rating:e.target.value })
                  } className='w-full h-8 border border-gray-300  rounded-sm'  />
            </div>
             <div className='flex flex-col gap-2 mt-5'>
                <label htmlFor="imageurl" className='text-gray-500 text-xs font-semibold'>IMAGE URL</label>
                <input type="url" value={edit[0].imageurl}  onChange={(e) =>
                    setEdit({ ...edit, imageurl:e.target.value })
                  } className='w-full h-8 border border-gray-300  rounded-sm' />
            </div>
            <div className='flex justify-center items-center mt-5 '>
                <button type='submit' onClick={() => handleUpdate()} className='font-normal bg-black text-white w-65 rounded-md p-2'>Update Product</button>
                </div>
        </form>
        </div>
        </div>
      
  )
}


export default EditProduct