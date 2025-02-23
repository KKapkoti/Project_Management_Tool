const Button = ({ text, onClick, type = "button", className = "" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  