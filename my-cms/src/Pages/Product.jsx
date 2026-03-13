import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Product = () => {
    
    const [productdata,setProductdata]=useState([]);
    const navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;
    const fetchData= async()=>{
        const res = await axios.get(`${API}/product`);
        setProductdata(res.data)
    }
     const handleDelete = async(id)=>{
        await axios.delete(`${API}/product/${id}`)
        window.location.reload()

    }
    useEffect(()=>{
        fetchData()
    },[])
   
  return (
   <div className=' mt-6 p-7 w-full   '>
   <div className='flex justify-between items-center m-2 '>
     <div className='mb-5' >
    <h1 className='font-semibold  text-xl'>Products</h1>
    <p className='text-xm text-gray-500 font-normal'>Manage your store products and data</p>
  </div>
  <button 
    onClick={() => navigate("/addproduct")}
    className='w-35 bg-black p-1 text-white font-semibold cursor-pointer rounded-md '
  >
   + Add Product
  </button>
 
</div>
        <table className='bg-white  shadow-xl rounded-2xl w-full    '>
    <thead>
        <tr className="  font-normal bg-gray-50  className='p-2'   ">
            <th className='p-2' >Product</th>
            {/* <th >Product Id</th> */}
            <th >Product Name</th>
            <th >Description</th>
            <th  >Category</th>
            <th >Price</th>
            <th >Rating</th>
            <th >Action</th>
            
        </tr>
    </thead>
    <tbody className='m-7'>
        {productdata.map((val,i)=>(
            <tr key={i} className=''>
               <td className='p-2'>
  <img 
    src={val.imageurl} 
    alt={val.title} 
    className="w-14 h-14 object-cover rounded-md  " 
  />
</td>
{/* <td >{val.id}</td> */}
<td className='font-bold p-2' >{val.title}</td>
<td  className='p-2'>{val.description}</td>
<td className='p-2' >{val.category}</td>
<td className='p-2' >{val.price}</td>
<td className='p-2' >{val.rating}</td>
<td >
<div className='flex text-xl gap-2 items-center justify-center p-2'>
    <RiEdit2Line color='gray'  />
    <MdOutlineDeleteOutline color='gray' onClick={()=>{
        handleDelete(val.id)
    }} />


</div>
</td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  )
}

export default Product