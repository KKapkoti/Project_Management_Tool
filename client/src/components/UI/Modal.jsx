//src/components/UI/Modal.jsx
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <div>{children}</div>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  