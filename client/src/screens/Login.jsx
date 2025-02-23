//src/screens/Login.jsx
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const Login = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`flex items-center justify-center h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
      {/* Left Side Illustration */}
      <div className="hidden md:block w-1/2">
        <img
          src="/assets/Images/loginsignupPage.png "
          alt="Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Login Form */}
        <div className={`w-full max-w-sm ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"} p-6 rounded-lg shadow-lg border`}>
        <h2 className="text-2xl font-bold text-center mb-4">FlowTasker</h2>

        {/* Email Input */}
        <div className="mb-3">
          <label>Email</label>
          <div className={`flex items-center ${darkMode ? "bg-gray-800" : "bg-gray-300"} p-2 rounded-md`}>
            <FaEnvelope className="text-gray-400 mx-2" />
            <input type="email" placeholder="Enter email" className="w-full bg-transparent outline-none" />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
        <label>Password</label>

           <div className={`flex items-center ${darkMode ? "bg-gray-800" : "bg-gray-300"} p-2 rounded-md`}>
            <FaLock className="text-gray-400 mx-2" />
            <input type="password" placeholder="Enter password" className="w-full bg-transparent outline-none" />
          </div>
        </div>

        {/* Forgot Password */}
        <a href="#" className="text-gray-400 text-sm hover:underline block text-center">
          Forgot your password?
        </a>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          {/* <button className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-md mr-2"> */}
          <button className={`w-full ${darkMode ? "bg-yellow-500 text-black" : "bg-blue-500 text-white"} py-2 rounded-md mr-3`}>
            Login
          </button>
          {/* <button className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-md ml-2"> */}
          <button className={`w-full ${darkMode ? "bg-yellow-500 text-black" : "bg-blue-500 text-white"} py-2 rounded-md ml-2`}>
            Signup
          </button>
        </div>

        {/* Signup Prompt */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-yellow-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
