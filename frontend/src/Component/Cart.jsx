
import { useNavigate } from "react-router-dom";

const Cart = () => {

  return (
    <div className="flex flex-col items-center justify-center p-12 text-black ">
      <h1 className="font-bold text-3xl ">Your Cart</h1>
      <p className="mt-4 text-gray-600">Your cart is empty🛒</p>
       <button
        type="button"
        className=" p-2 h-12 w-32 mt-6 bg-teal-500 text-white rounded-3xl hover:bg-teal-600  cursor-pointer"
      
      >
        Shop Now
      </button>
    </div>
  );
};

export default Cart;
