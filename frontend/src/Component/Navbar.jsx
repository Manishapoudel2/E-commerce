import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const userobj = JSON.parse(user)
  

  return (
    <nav className="bg-teal-500 px-4 py-3 shadow-md ">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-7">
        
       
        <h1
          className="font-bold text-2xl text-white cursor-pointer tracking-wide"
          onClick={() => navigate("/")}
        >
          QuickCart
        </h1>

       
        <div className="flex items-center w-full md:w-[50%]">
          <input
            className="w-full p-2 h-10 rounded-l-md bg-white text-gray-600 text-sm focus:outline-none"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in QuickCart"
          />

          <div className="flex items-center justify-center h-10 w-12 bg-teal-100 text-teal-600 rounded-r-md cursor-pointer hover:bg-teal-200 transition">
            <IoIosSearch size={22} />
          </div>

          <div
            className="ml-4 text-white cursor-pointer hover:scale-110 transition"
            onClick={() => navigate("/cart")}
          >
            <CiShoppingCart size={39} />
          </div>
        </div>

   
        <div className="flex items-center gap-4 text-white text-sm font-medium">
          
         
          {user ? (
            <span className="hover:text-gray-200 cursor-pointer    ">
              {userobj?.fullname} 
            </span>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="hover:text-gray-200"
              >
                LOGIN
              </button>

              <button
                onClick={() => navigate("/signup")}
                className=" text-white px-3 py-1 rounded-md hover:text-gray-100 transition"
              >
                SIGNUP
              </button>
            </>
          )}

       
          <span className="hover:text-gray-200 cursor-pointer">
            HELP & SUPPORT
          </span>

          <span className="hover:text-gray-200 cursor-pointer">
            BECOME A SELLER
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;