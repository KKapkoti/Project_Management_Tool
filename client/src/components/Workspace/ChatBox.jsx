//src/components/Workspace/ChatBox.jsx
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "You" }]);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Team Chat</h2>
      <div className="h-40 overflow-y-auto bg-gray-700 p-2 rounded">
        {messages.map((msg, index) => (
          <p key={index} className="p-1">{msg.sender}: {msg.text}</p>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 bg-gray-600 rounded"
        />
        <button onClick={sendMessage} className="p-2 bg-blue-500 rounded ml-2 hover:bg-blue-600">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
