import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { GiIceCube } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from 'axios';
const Dashboard = () => {
  const API = import.meta.env.VITE_API_URL;
  const [orderData, setOrderData] = useState([]);
  const [productData, setProductData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`${API}/orders`);
    setOrderData(res.data)
  }
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/product`);
    setProductData(res.data);
  };
  useEffect(() => {
    fetchData();
    fetchProducts();
  }, []);
  return (
    <div className="bg-gray-50 w-full p-4">
      <div className="text-gray-500 m-5 text-sm">
        <div>
          <h1 className="font-bold text-black text-xl">Dashboard</h1>
          <p>Manage your store's dashboard and data.</p>
        </div>

        <div className="flex mt-5 gap-5 font-semibold">
          <div className="flex flex-col p-5 w-full sm:w-1/3 gap-2 bg-white h-48 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <RiMoneyDollarBoxFill size={35} color="green" />
              <FaChartLine color="green" />
            </div>
            <span>TOTAL REVENUE</span>
          </div>

          <div className="flex flex-col p-5 w-full sm:w-1/3 gap-2 bg-white h-48 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <IoCart size={35} color="blue" />
              <FaChartLine color="green" />
            </div>
            <h1>TOTAL ORDERS  </h1>
            <span className="text-2xl font-bold text-black">
              {orderData.length}
            </span>
          </div>

          <div className="flex flex-col p-5 w-full sm:w-1/3 gap-2 bg-white h-48 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <GiIceCube size={35} color="orange" />
              <FaChartLine color="green" />
            </div>
            <h1>PRODUCTS</h1>
            <span className="text-2xl font-bold text-black">
              {productData.length}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-5">
        <h1 className="font-bold">RECENT ORDERS</h1>
        <table className="sm:w-fit lg:w-6xl text-sm text-left text-gray-600 bg-white">
          <thead className="text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>

          <tbody>

            {orderData.map((val, i) => (
              <tr key={i} className="border-b">
                <td className="px-6 py-3 font-medium text-gray-800"># ORD-{val.order_id}</td>
                <td className="px-6 py-3">{val.fullname}</td>
                <td className="px-6 py-3 text-green-600 font-semibold">Rs.{val.total}</td>
                <td className="px-6 py-3">

                  {val.status}
                </td>
                <td className="px-6 py-3"> {val.order_date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
