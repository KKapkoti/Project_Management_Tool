//src/components/UI/InputField.jsx
const InputField = ({ label, type = "text", value, onChange }) => {
    return (
      <div className="mb-3">
        <label className="block text-white mb-1">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
      </div>
    );
  };
  
  export default InputField;
  