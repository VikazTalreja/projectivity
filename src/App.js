import "./App.css";
import SidebarApp from "./components/Sidebar/App";
import Navbar from "./components/Navbar/Navbar";
import Phasemanager from "./components/PhaseManager/PhaseManager";

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
        <main className="flex-1 flex">
          {/* First part taking 20% of remaining space */}
          <div className="w-1/4 ">
            <Phasemanager />
          </div>

          {/* Second part taking the rest */}
          <div className="flex-1 bg-gray-300">Rest of the space</div>
        </main>
      </div>
    </div>
  );
}
