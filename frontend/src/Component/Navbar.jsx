import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const links = ["BECOME A SELLER", "HELP & SUPPORT", "LOGIN", "SIGNUP"];
  return (
    <nav className="  bg-teal-500 flex flex-col p-4 gap-2">
       <div className="flex  justify-end mr-7 text-sm font-normal  gap-4  ">
        {links.map((link, i) => (
          <span key={i} className="hover:text-gray-100 cursor-pointer">
            {link}
          </span>
        ))}
             </div>
        <div className="flex justify-around items-center  ">
      <div>
        <h1 className="font-bold text-xl">QuickCart</h1>
      </div>

      <div className=" flex items-center">
        <input
          className="w-lvh  p-6 h-10 rounded-l-sm bg-white text-gray-500 text-sm focus:outline-none"
          type="text"
          name="search"
          placeholder="Search in QuickCart"
        />
        <div className="flex items-center justify-center h-12 w-10 bg-teal-50 text-teal-500 rounded-r-sm ">
          <IoIosSearch size={30} />
        </div>
        <div className="ml-5">
          <CiShoppingCart size={40} />
        </div>
      </div>
  
     
      </div>
    </nav>
   
  );
  
};

export default Navbar;
