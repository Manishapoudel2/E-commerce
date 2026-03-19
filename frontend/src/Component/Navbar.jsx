import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const links = ["BECOME A SELLER", "HELP & SUPPORT", "LOGIN", "SIGNUP"];

  return (
    <nav className="bg-teal-500 p-4 flex flex-col gap-3">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-3">
        <h1 className="font-bold text-xl text-white">QuickCart</h1>

        <div className="flex items-center w-full md:w-auto">
          <input
            className="w-full md:w-80 p-2 h-10 rounded-l-sm bg-white text-gray-500 text-sm focus:outline-none"
            type="text"
            placeholder="Search in QuickCart"
          />

          <div className="flex items-center justify-center h-10 w-10 bg-teal-50 text-teal-500 rounded-r-sm">
            <IoIosSearch size={22} />
          </div>

          <div className="ml-3 text-white">
            <CiShoppingCart size={39} />
          </div>
        </div>
        <div className="flex justify-center text-xs sm:text-sm gap-4">
          {links.map((link, i) => (
            <span key={i} className="hover:text-gray-100 cursor-pointer">
              {link}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
