//components/UI/Alert.jsx
const Alert = ({ message, type = "success" }) => {
    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  
    return (
      <div className={`p-3 rounded text-white ${bgColor}`}>
        {message}
      </div>
    );
  };
  
  export default Alert;
  