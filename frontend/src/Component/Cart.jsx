import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Cart = () => {
  const {user} = useAuth()
  const userObject = JSON.parse(user);
  const [selectedItem , setSelectedItem] = useState(null)

  const API = import.meta.env.VITE_API_URL;
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/cart/user/${userObject?.id}`);
      setCart(res.data);
    } catch (err) {
      console.error("Error ", err);
    } 
  };
const updateQuantity = async (cart_id, newQuantity) => {
  if (newQuantity < 1) return; 

  try {
    await axios.put(`${API}/cart/${cart_id}`, {
      quantity: newQuantity
    });

    fetchData(); 
  } catch (err) {
    console.error("Error updating quantity:", err);
  }
};
  const handleDelete = async (cart_id) => {
    try {
      await axios.delete(`${API}/cart/${cart_id}`);
      console.log(cart_id)
    fetchData()
     
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

return (
  <div className="bg-gray-100 min-h-screen p-4 sm:p-6 text-black flex flex-col gap-6">
    
    {cart.length === 0 ? (
      <div className="text-center flex flex-col justify-center items-center gap-5 text-gray-500 mt-20 w-full">
        <p className="text-sm">There are no items in this cart</p>
        <button
          className="border border-teal-500 w-fit px-3 py-2 text-teal-500 rounded-sm hover:bg-teal-100"
          onClick={() => navigate("/allproducts")}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    ) : (
      <>
               <div className="flex px-4  bg-white lg:w-5xl sm:w-full md:w-full rounded-md ">
         <input type="checkbox" name=""   />
         <span className="text-gray-500 text-sm p-2 ">SELECT ALL</span>
      </div>
        <div className="flex flex-col lg:flex-row gap-6">
          
      
          <div className="w-full lg:w-2/2 bg-white shadow-md rounded-md p-3 sm:p-4">
            {/* <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b pb-2">
              Shopping Cart
            </h2> */}
          


            {cart.map((val, i) => (
              
              <div
                // onClick={() => setSelectedItem(val)}
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-b-gray-300 py-4  gap-3"
              >
                
        
                
               
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-1/2">
                 <input
                      type="checkbox"
                    onClick={() => setSelectedItem(val)}
                    />
                  <img
                    src={val.imageurl}
                    alt={val.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover  rounded"
                  />
                  <h3 className="font-medium text-xs sm:text-sm">
                    {val.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between sm:justify-center gap-2 w-full sm:w-auto">
                  <button
                    className="px-2 py-1 bg-gray-100"
                    onClick={() =>
                      updateQuantity(val.cart_id, val.quantity - 1)
                    }
                  >
                    -
                  </button>

                  <span>{val.quantity}</span>

                  <button
                    className="px-2 py-1 bg-gray-200"
                    onClick={() =>
                      updateQuantity(val.cart_id, val.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <div className="text-teal-500 text-sm sm:text-base w-full sm:w-auto">
                  Rs. {val.price}
                </div>

                <RiDeleteBin6Line 

                  color="gray"
                  size={20}
                  className="cursor-pointer self-end sm:self-auto"
                  onClick={() => handleDelete(val.cart_id)}
                />
              </div>
            ))}
          </div>
          

         
          {selectedItem ? (
  <div className="w-full lg:w-1/4">
    <div className="flex flex-col bg-white w-full rounded-md p-6 gap-4 shadow-md lg:sticky lg:top-6">
      <h1 className="font-semibold">Order Summary</h1>

      <div className="flex flex-col justify-between text-sm">
        <span className="text-gray-500">Product</span>
        <span className="font-sans">{selectedItem.title}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Subtotal ({selectedItem.quantity} items)</span>
        <span className="font-sans">Rs. {selectedItem.quantity * selectedItem.price}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Quantity</span>
        <span className="font-sans">{selectedItem.quantity}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Total</span>
        <span className="font-sans text-teal-500 font-semibold">
          Rs. {selectedItem.price * selectedItem.quantity}
        </span>
      </div>

      <button className="text-xs w-full bg-teal-500 hover:bg-teal-700 text-white p-2">
        PROCEED TO CHECKOUT
      </button>
    </div>
  </div>
) : (
  <div className="w-full lg:w-1/4">
    <div className="flex flex-col bg-white w-full rounded-md p-6 gap-4 shadow-md lg:sticky lg:top-6">
      <h1 className="font-semibold">Order Summary</h1>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Product</span>
        <span className="font-sans"></span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Subtotal (0 items)</span>
        <span className="font-sans">Rs. 0</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Quantity</span>
        <span className="font-sans">0</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Total</span>
        <span className="font-semibold font-sans text-teal-500">Rs. 0</span>
      </div>

      <button className="text-xs w-full bg-teal-500 hover:bg-teal-700 cursor-pointer  text-white p-2">
        PROCEED TO CHECKOUT
      </button>
    </div>
  </div>
)}
        </div>

     
        <div className="flex justify-center items-center mt-4">
          <button
            className="border border-teal-500 px-4 py-2 rounded-sm cursor-pointer text-teal-500 w-full sm:w-fit hover:bg-teal-100"
            onClick={() => navigate("/allproducts")}
          >
            SHOP MORE
          </button>
        </div>
      </>
    )}
  </div>
);
};

export default Cart;
