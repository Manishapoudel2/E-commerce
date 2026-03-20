import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoStar } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

const SingleProduct = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/product/${id}`);
      setProduct(res.data[0]);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-4 md:p-10 max-w-6xl mx-auto">
      {/* Product Image */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
          src={product.imageurl}
          alt={product.title}
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain shadow-xl rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold">{product.title}</h2>

        <p className="text-gray-700 text-justify">{product.description}</p>
        <p className="text-gray-500 italic">{product.category}</p>

        <div className="flex items-center gap-3 mt-2 text-xl font-semibold text-orange-600">
          <span className="text-blue-600 text-2xl font-normal">Rs {product.price}</span>
          <IoStar /> {product.rating}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-700">
          <label htmlFor="quantity" className="font-medium">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded-sm w-20 px-2 py-1 mt-2 sm:mt-0"
            min={1}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-6">
          <button
            type="button"
            className="h-10 w-full sm:w-40 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition"
            onClick={() => alert(`Added ${quantity} ${product.title}(s) to cart`)}
          >
            Add to Cart
          </button>

          <div
            className="flex items-center text-teal-600 font-normal hover:underline cursor-pointer mt-2 sm:mt-0"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="text-sm mr-2" />
            <span>Back to Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;