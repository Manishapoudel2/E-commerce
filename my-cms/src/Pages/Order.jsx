import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Order = () => {
  const [order , setOrders] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const fetchData= async()=>{
    const res = await axios.get(`${API}/orders`);
    setOrders(res.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
     <div className=' text-gray-500 text-sm  font-sans px-4' >
     
    <div className='text-gray-500 m-5 text-sm'>
           <h1 className='font-bold text-black text-xl'>Orders</h1>
        <p >Manage your store's orders and data.</p>
    </div>
        <div className="w-full overflow-x-auto">
  <table className="sm:w-fit lg:w-lvw text-sm text-left text-gray-600">
        
    <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
      <tr>
        <th className="px-6 py-3">Order ID</th>
        <th className="px-6 py-3">Customer</th>
        <th className="px-6 py-3">Total</th>
        <th className="px-6 py-3">Status</th>
        <th className="px-6 py-3">Date</th>
      </tr>
    </thead>

    <tbody>
      {order.map((val, i) => (
        <tr key={i} className="border-b">
          <td className="px-6 py-3 font-medium text-gray-800">
            # {val.order_id}
          </td>

          <td className="px-6 py-3">{val.fullname}</td>

          <td className="px-6 py-3 text-green-600 font-semibold">
            Rs. {val.total}
          </td>

          <td className="px-6 py-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold">
              {val.status}
            </span>
          </td>

          <td className="px-6 py-3">
            {val.order_date}
          </td>
        </tr>
      ))}
    </tbody>

  </table>
</div>
     </div>
        
    
  )
}

export default Order