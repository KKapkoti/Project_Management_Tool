//src/components/Layout/RightSidebar.jsx
import { FaTasks, FaUserFriends } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <aside className="w-80 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mt-6 mb-4">Team Members</h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-2 p-2 bg-gray-700 rounded">
          <FaUserFriends /> Alice
        </li>
        <li className="flex items-center gap-2 p-2 bg-gray-700 rounded">
          <FaUserFriends /> Bob
        </li>
        <li className="flex items-center gap-2 p-2 bg-gray-700 rounded">
          <FaUserFriends /> John
        </li>
        <li className="flex items-center gap-2 p-2 bg-gray-700 rounded">
          <FaUserFriends /> Tony
        </li>
        <li className="flex items-center gap-2 p-2 bg-gray-700 rounded">
          <FaUserFriends /> Alice
        </li>
      </ul>

      <h2 className="text-lg font-bold mb-4">My Tasks</h2>
      <ul className="space-y-3">
        <li className="p-2 bg-gray-700 rounded">Task 1 - Due Today</li>
        <li className="p-2 bg-gray-700 rounded">Task 2 - In Progress</li>
      </ul>

    </aside>
  );
};

export default RightSidebar;
