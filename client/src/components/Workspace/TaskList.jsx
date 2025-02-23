//src/components/Workspace/TaskList.jsx
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const TaskList = ({ tasks }) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">My Tasks</h2>
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-gray-700 rounded">
            <span>{task.name}</span>
            {task.completed ? <FaCheckCircle className="text-green-400" /> : <FaTimesCircle className="text-red-400" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
