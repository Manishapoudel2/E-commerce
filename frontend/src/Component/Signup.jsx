import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { email, z } from "zod";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const API = import.meta.env.VITE_API_URL;
  const [error, setError] = useState({});
  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const schema = z.object({
    fullname: z.string().min(3, "Username required"),
    email: z
      .string()
      .email("email should be in email format")
      .min(1, "email must required "),
    // password: z
    //   .string()
    //   .regex(
    //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8}$/,
    //     "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
    //   ),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = schema.safeParse(signup);
    if (!result.success) {
      const fieldError = {};
      result.error.issues.forEach((issue) => {
        fieldError[issue.path[0]] = issue.message;
      });

      setError(fieldError);
      return;
    }

    await axios.post(`${API}/user/signup`, signup);
    toast.success("Data added successfully");
    // alert("Login successfully")
    setSignup({
      fullname: "",
      email: "",
      password: "",
    });
  };
  const handelChange = async (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen justify-center items-center px-4  text-gray-500 bg-teal-50">
      <div className="bg-white shadow-md flex flex-col gap-5 rounded-md justify-center items-center p-6 sm:p-10 w-full max-w-sm">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-teal-500 font-sans text-xs lg:text-2xl  font-semibold ">
            Signup
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
            className="w-full mb-3 h-10 px-3 border border-gray-400 rounded-sm md:text-sm lg:text-sm text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="text"
            name="fullname"
            value={signup.fullname}
            onChange={handelChange}
            placeholder="Please enter your fullname"
          />
          {error.fullname && (
            <p className="text-red-500 text-[10px] py-2">{error.fullname}</p>
          )}
          <input
            className="w-full mb-3 h-10 px-3 border border-gray-400 rounded-sm md:text-sm lg:text-sm text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="email"
            name="email"
            value={signup.email}
            onChange={handelChange}
            placeholder="Please enter your e-mail"
          />
          {error.email && (
            <p className="text-red-500 text-[10px] py-2">{error.email}</p>
          )}
          <input
            className="w-full mb-3 h-10 px-3 border border-gray-400 rounded-sm md:text-sm lg:text-sm text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="password"
            name="password"
            value={signup.password}
            onChange={handelChange}
            placeholder="Please enter your Password"
          />
          {error.password && (
            <p className="text-red-500 text-[10px] py-2">{error.password}</p>
          )}

          <button
            type="submit"
            className="w-full lg:h-10 md:h-10 h-6  bg-teal-500 text-white rounded-sm hover:bg-teal-600 cursor-pointer md:text-sm lg:text-sm text-[10px]"
          >
            Signup
          </button>
        </form>

        <div className="text-center">
          <p className="md:text-sm lg:text-sm text-[10px]">
            Already have an account?
            <span
              className="hover:underline text-blue-500 cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              {""} Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
