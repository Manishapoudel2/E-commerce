import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoStar } from "react-icons/io5";
import Likedunlike from "./LikedUnlike";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import { useAuth } from "../Context/AuthContext";

const Allproduct = ({ search, category, setCategory }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`${API}/product`);
    setProduct(res.data);
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

  const filterProducts = product.filter((item) => {
    const term = (search || "").toLowerCase();

    const matchSearch =
      item.title?.toLowerCase().includes(term) ||
      item.category?.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term);

    const matchCategory =
      category === "" ||
      category === "All" ||
      item.category?.toLowerCase() === category?.toLowerCase();

    return matchCategory && matchSearch;
  });
  return (
    <>
      <Category category={category} setCategory={setCategory} />
      {filterProducts.length === 0 ? (
        <p className="text-center p-4 text-teal-500 text-xm font-sans mt-12">
          No product found.
        </p>
      ) : (
        <div className="p-3 min-h-screen bg-gray-100 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 cursor-pointer px-6 py-6  lg:grid-cols-6 gap-4 space-y-6 ">
            {filterProducts.map((val, i) => {
              return (
                <div
                  key={i}
                  className="text-black w-full p-2  bg-gray-50 shadow-xs flex flex-col h-full hover:shadow-xl"
                >
                  <Likedunlike />
                  <div onClick={() => navigate(`/product/${val.id}`)}>
                    <div>
                      <img
                        src={val.imageurl}
                        alt={val.title}
                        className="object-cover  w-full h-40"
                      />
                    </div>
                    <div className="p-2 flex flex-col gap-1 grow">
                      <h1 className="font-semibold line-clamp-1">
                        {val.title}
                      </h1>
                      <p className="line-clamp-2 text-xs sm:text-sm font-sans min-h-10">
                        {val.description}
                      </p>
                      <p className="text-xs font-semibold">{val.category}</p>
                      <p className="text-orange-500">Rs. {val.price}</p>
                      <div className="text-sm text-yellow-300 flex gap-1 items-center mt-auto">
                        {val.rating} <IoStar />
                      </div>

                      <button
                        className="bg-teal-500 text-white font-sans py-2 hover:bg-teal-600 cursor-pointer w-full rounded-md"
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
        </div>
      )}
    </>
  );
};

export default Allproduct;
