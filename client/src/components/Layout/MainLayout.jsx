//src/components/Layout/MainLayout.jsx
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Footer from "./Footer";
import ChatBox from "/Workspace/ChatBox";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow p-4 flex justify-between">
          <div className="flex-grow">{children}</div>
          <RightSidebar />
        </main>
        <ChatBox />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
