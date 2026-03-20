import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";

const Flashsale = () => {
  const API = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`${API}/product`);
    setProduct(res.data.slice(5, 11));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="text-black  sm:p-4  mt-5  ">
      <h1 className='font-sans text-2xl text-black mb-5 px-2'>Flash Sale</h1>

      <div className="text-black  bg-gray-50 shadow-md p-2 flex  flex-col justify-center sm:p-4">
        <div >
          <div className="flex justify-between mb-2  text-teal-500">
            <h1 className=" font-sans sm:text-xs lg:text-xl md:text-sm">On Sale Now</h1>
            <button className="w-fit p-1 lg:text-[16px] sm:text-xs border border-teal-500 cursor-pointer">
              SHOP ALL PRODUCTS
            </button>
           
          </div>
           <hr className=" border-0.5 border-gray-400 py-2"/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {product.map((val, i) => {
            return (
              <div
                key={i}
                className="text-black w-full bg-white shadow-xs flex flex-col h-full"
              >
                <div>
                  <img
                    src={val.imageurl}
                    alt={val.title}
                    className="object-cover w-full h-35"
                  />
                </div>
                <div className="p-2 flex flex-col gap-1 grow">
                  <h1 className="font-semibold line-clamp-1">{val.title}</h1>

                  <p className="line-clamp-2 text-xs font-sans">
                    {val.description}
                  </p>
                  <p className="font-sans ">{val.category}</p>
                  <p className="text-orange-500">Rs. {val.price}</p>
                  <div className="font-normal  text-sm text-yellow-300 flex gap-1 items-center">
                    {val.rating} <IoStar />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Flashsale;
