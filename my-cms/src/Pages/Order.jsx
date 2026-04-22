import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";

const Order = () => {
  const [order, setOrders] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const API = import.meta.env.VITE_API_URL;
  const fetchData = async () => {
    const res = await axios.get(`${API}/orders`);
    setOrders(res.data)
  }
  const handleStatusUpdate = async (id) => {
    try {
      await axios.put(`${API}/orders/${id}`, {
        status: newStatus
      });

      setEditId(null);
      fetchData();

    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className=' text-gray-500 text-sm  font-sans px-4' >

      <div className='text-gray-500 m-5 text-sm'>
        <h1 className='font-bold text-black text-xl'>Orders</h1>
        <p >Manage your store's orders and data.</p>
      </div>

      <table className="sm:w-fit lg:w-6xl text-sm text-left text-gray-600">

        <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Order ID</th>
            <th className="px-6 py-3">Customer</th>
            <th className="px-6 py-3">Total</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {order.map((val, i) => (
            <tr key={i} className="border-b">
              <td className="px-6 py-3 font-medium text-gray-800">
                # ORD-{val.order_id}
              </td>

              <td className="px-6 py-3">{val.fullname}</td>

              <td className="px-6 py-3 text-green-600 font-semibold">
                Rs. {val.total}
              </td>
 
              <td className="px-6 py-3">
                {editId === val.order_id ? (
                  <div className="flex gap-2 items-center">
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      className=" px-2 py-1 focus:outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>

                    <button
                      onClick={() => handleStatusUpdate(val.order_id)}
                      className="text-green-600 font-semibold"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  val.status
                )}
              </td>

              <td className="px-6 py-3">
                {val.order_date.slice(0, 10)}
              </td>
              <td>
                <FaRegEdit
                  color='green'
                  className='cursor-pointer'
                  onClick={() => {
                    setEditId(val.order_id);
                    setNewStatus(val.status);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>



  )
}

export default Order