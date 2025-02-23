//src/screens/SignUp.jsx
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Signup = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`flex items-center justify-center h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
      {/* Left Side Illustration */}
      <div className="hidden md:block w-1/2">
        <img
          src="assets/Images/loginsignupPage.png"
          alt="llustration"
          className="w-full h-auto"
        />
      </div>

      {/* Signup Form */}
      <div className={`w-full max-w-sm ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"} p-6 rounded-lg shadow-lg border`}>
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>

        {/* Name Input */}
        <div className="mb-3">
          <label>Full Name</label>
          <div className={`flex items-center ${darkMode ? "bg-gray-800" : "bg-gray-300"} p-2 rounded-md`}>
            <FaUser className="text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label>Email</label>
          <div className={`flex items-center ${darkMode ? "bg-gray-800" : "bg-gray-300"} p-2 rounded-md`}>
            <FaEnvelope className="text-gray-400 mx-2" />
            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label>Password</label>
          <div className={`flex items-center ${darkMode ? "bg-gray-800" : "bg-gray-300"} p-2 rounded-md`}>
            <FaLock className="text-gray-400 mx-2" />
            <input
              type="password"
              placeholder="Create password"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-3">
          <label>Confirm Password</label>
          <div className={`flex items-center ${darkMode ? "bg-gray-800" : "bg-gray-300"} p-2 rounded-md`}>
            <FaLock className="text-gray-400 mx-2" />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Signup Button */}
        <button className={`w-full ${darkMode ? "bg-yellow-500 text-black" : "bg-blue-500 text-white"} py-2 rounded-md mr-3`}>
          Sign Up
        </button>

        {/* Already have an account? */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/#" className="text-yellow-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
