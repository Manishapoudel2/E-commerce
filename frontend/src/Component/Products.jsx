import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoStar } from "react-icons/io5";

const Products = () => {
  const API = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`${API}/product`);
    setProduct(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-3 min-h-screen ">
      <h1 className='font-sans text-xl text-black'>Just For You</h1>
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {product.map((val, i) => {
          return (
            
       <div key={i} className="text-black w-full bg-white shadow-md flex flex-col h-full">
            
              <div>
              <img src={val.imageurl} alt={val.title} className="object-cover w-full h-40"  />
            </div>
  <div className="p-2 flex flex-col gap-1 grow">
          <h1 className="font-semibold line-clamp-1">{val.title}</h1>
<p className="line-clamp-2 text-xs sm:text-sm font-sans">
  {val.description}
</p>
            <p className="text-xs font-semibold">{val.category}</p>
            <p className="text-orange-500">Rs. {val.price}</p>
<div className="text-sm text-yellow-300 flex gap-1 items-center mt-auto">
             {val.rating}     <IoStar />
                </div>
    </div>
          </div>
      
          );
        })}
        
      </div>
    <div className="flex justify-center mt-4 text-teal-500 ">
  <button className="w-1/2 sm:w-1/4 border border-teal-500 py-2 cursor-pointer">
    LOAD MORE
  </button>
</div>
    </div>
  );
};

export default Products;
