import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoStar } from "react-icons/io5";
import Likedunlike from "./LikedUnlike";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Products = ({ search }) => {
 const { token } = useAuth();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState([]);
  const [visibleItem , setVisibleItems]=useState(6)


  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/product`);
    setProduct(res.data);
    } catch (error) {
      console.log("error",error)
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

const handleAddToCart = (e) => {
  e.stopPropagation();

  

  if (!token) {
  
    navigate("/login");
    return;
  }

  navigate("/cart");
};

// load more
 const loadProducts=()=>{
  setVisibleItems(prev=>prev+6)
 }


  const filterProducts = product.filter((item) => {
    const term = search.toLowerCase();

    return (
      item.title?.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term) ||
      item.category?.toLowerCase().includes(term)
    );
  });
  console.log(search);

  return (
    <div className="p-3 min-h-screen  ">
      <h1 className="font-sans text-2xl text-black mb-5 px-2">Just For You</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 cursor-pointer  lg:grid-cols-6 gap-4 space-y-6 ">
        {filterProducts.slice(0, visibleItem).map((val, i) => {
          return (
            <div
              key={i}
              className="text-black w-full p-2  bg-gray-50 shadow-xs flex flex-col h-full hover:shadow-xl"
            >
              <Likedunlike />
              <div>
              <div onClick={() => navigate(`/product/${val.id}`)}>
                <div>
                  <img
                    src={val.imageurl}
                    alt={val.title}
                    className="object-cover  w-full h-40"
                  />
                </div>
                <div className="p-2 flex flex-col gap-1 grow">
                  <h1 className="font-semibold line-clamp-1">{val.title}</h1>
                  <p className="line-clamp-2 text-xs sm:text-sm font-sans min-h-10">
                    {val.description}
                  </p>
                  <p className="text-xs font-semibold">{val.category}</p>
                  <p className="text-orange-500">Rs. {val.price}</p>
                  <div className="text-sm text-yellow-300 flex gap-1 items-center mt-auto">
                    {val.rating} <IoStar />
                  </div>
  </div>
                  <button className="bg-teal-500 text-white font-sans py-2 hover:bg-teal-600 cursor-pointer w-full rounded-md"
               onClick={handleAddToCart}
                >
                    Add to cart
                  </button>
              
              </div>
            </div>
            </div>
          );
        })}
      </div>
        {visibleItem < filterProducts.length && (
      <div className="flex justify-center mt-4 text-teal-500 p-4 ">
        <button className="w-96 sm:w-1/4 md:w-96 lg:w-96 border border-teal-500 py-2 cursor-pointer"
        onClick={loadProducts}>
          LOAD MORE
        </button>
      </div>
       )}
    </div>
  );
};

export default Products;
