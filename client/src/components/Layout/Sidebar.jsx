//src/components/Layout/Sidebar.jsx
import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Workspaces</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/projects" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <FaProjectDiagram /> My Projects
          </Link>
        </li>
        <li>
          <button className="w-full p-2 mt-4 bg-blue-500 hover:bg-blue-600 rounded">
            + Create Workspace
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
