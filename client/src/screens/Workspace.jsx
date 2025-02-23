//src/screens/Workspace.jsx
import Sidebar from "../components/Layout/Sidebar";
import RightSidebar from "../components/Layout/RightSidebar";
import WorkspaceCard from "../components/Workspace/WorkspaceCard";
import ChatBox from "../components/Workspace/ChatBox";
import { useContext } from "react";

const Workspace = () => {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Workspace</h1>
        <div className="grid grid-cols-3 gap-4">
          {Workspace.map((workspace) => (
            <WorkspaceCard key={workspace.id} title={workspace.name} description={workspace.description} />
          ))}
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
