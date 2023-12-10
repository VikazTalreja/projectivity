import "./App.css";
import SidebarApp from "./components/Sidebar/App";
import Navbar from "./components/Navbar/Navbar";
import Phasemanager from "./components/PhaseManager/PhaseManager";
import KanbanBoard from "./components/Kanban/kanban";
export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarApp>
        {/* Sidebar items */}
        {/* ... */}
      </SidebarApp>

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 flex bg-[#F4F6FF]">
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
