import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: "Workspace A", description: "Description A" },
    { id: 2, name: "Workspace B", description: "Description B" }
  ]);

  return (
    <ProjectContext.Provider value={{ workspaces, setWorkspaces }}>
      {children}
    </ProjectContext.Provider>
  );
};
