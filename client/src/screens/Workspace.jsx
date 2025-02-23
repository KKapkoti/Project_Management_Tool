//src/screens/Workspace.jsx
import Sidebar from "../components/Layout/Sidebar";
import RightSidebar from "../components/Layout/RightSidebar";
import WorkspaceCard from "../components/Workspace/WorkspaceCard";
import ChatBox from "../components/Workspace/ChatBox";
import { useContext } from "react";

const Workspace = () => {
  const { workspaces } = useContext(ProjectContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Workspace</h1>
        <div className="grid grid-cols-3 gap-4">
        {workspaces?.length > 0 ? (
          workspaces.map((workspace) => (
            <WorkspaceCard key={workspace.id} title={workspace.name} description={workspace.description} />
          ))
        ) : (
          <p className="text-gray-400">No workspaces found.</p>
        )}
        </div>
        <div className="mt-6 flex gap-4">
          <ChatBox />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Workspace;
