//src/components/Layout/Navbar.jsx
// import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext"; 
const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`p-4 flex justify-between items-center ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Link to="/dashboard" className="text-xl font-bold">
      FlowTasker
      </Link>
      <div className="flex items-center gap-6">
        {/* <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-white text-black"
        /> */}
        <button onClick={toggleTheme} className="p-2 rounded">
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
        </button>
        <Link to="/Workspace" className="p-2 rounded-full">
          Workspace
        </Link>
        <Link to="/about" className="p-2 rounded-full">
          AboutUs
        </Link>
        <Link to="/Contact" className="p-2 rounded-full">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
