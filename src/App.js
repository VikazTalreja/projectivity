import "./App.css";
import SidebarApp from "./components/Sidebar/Items";
import Navbar from "./components/Navbar/Navbar";
import Phasemanager from "./components/PhaseManager/PhaseManager";
import KanbanBoard from "./components/Kanban/kanban";
export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarApp></SidebarApp>

      {/* Content area */}
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main className="flex flex-col md:flex-row bg-[#F4F6FF]">
          {/* First part taking 20% of remaining space */}
          <div className="w-1/3 ">
            <Phasemanager />
          </div>

          {/* Second part taking the rest */}
          <div>
            <KanbanBoard />
          </div>
        </main>
      </div>
    </div>
  );
}
