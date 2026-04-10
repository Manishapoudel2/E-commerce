import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const [logininfo, setLogininfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(`${API}/user/signin`, logininfo);
      login(res.data);
      toast.success("Login successfully");
      navigate("/");
      setLogininfo({
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error("Error");
    }
  };
  const handelChange = async (e) => {
    const { name, value } = e.target;
    setLogininfo({ ...logininfo, [name]: value });
    setError({ ...error, [name]: "" });
  };

  return (
    <div className="flex min-h-screen justify-center items-center px-4  text-gray-500 bg-teal-50">
      <div className="bg-white shadow-md flex flex-col gap-5 rounded-md justify-center items-center p-6 sm:p-10 w-full max-w-sm">
        <div className="flex justify-between items-center w-full ">
          <h1 className="text-teal-500 font-sans text-xs lg:text-2xl  font-semibold ">
            Login to Quickcart
          </h1>
          <RxCross1
            size={24}
            className="cursor-pointer hover:text-gray-500"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-4  h-10 px-3 border border-gray-400 rounded-sm  md:text-sm lg:text-sm text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="text"
            name="email"
            value={logininfo.email}
            onChange={handelChange}
            placeholder="Please enter your e-mail"
          />

          <input
            className="w-full h-10 px-3 border md:text-sm lg:text-sm text-[10px] border-gray-400 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="password"
            name="password"
            value={logininfo.password}
            onChange={handelChange}
            placeholder="Please enter your Password"
          />

          <div className="w-full text-right">
            <span className="md:text-sm lg:text-sm text-[10px] cursor-pointer hover:underline">
              Forget Password
            </span>
          </div>

          <button
            type="submit"
            className="w-full lg:h-10 md:h-10 h-6  bg-teal-500 text-white rounded-sm hover:bg-teal-600 cursor-pointer md:text-sm lg:text-sm text-[10px]"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="md:text-sm lg:text-sm text-[10px]">
            Don't have an account?
            <span
              className="hover:underline text-blue-500 cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              {""} Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
