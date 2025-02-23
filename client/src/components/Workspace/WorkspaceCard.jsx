//src/components/Workspace/WorkspaceCard.jsx
import { FaFolderOpen } from "react-icons/fa";

const WorkspaceCard = ({ title, description, onClick }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-2 mb-2">
        <FaFolderOpen className="text-yellow-400" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default WorkspaceCard;
