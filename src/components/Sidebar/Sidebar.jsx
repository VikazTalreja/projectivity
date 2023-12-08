import { useContext, createContext, useState } from "react";
import { Logo, Settings } from "../../imports.js";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  const handleMouseEnter = () => {
    setExpanded(false);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };
  return (
    <aside className="h-screen">
      <nav
        className="h-screen  flex  flex-col fixed top-0 left-0 w-[80px] z-50 bg-white border-r shadow-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={Logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-24" : "w-12"
            }`}
            alt=""
          />
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 space-y-1">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 overflow-hidden">
          <img src={Settings} alt="" className="w-9 h-9 ml-4 p-1 rounded-md" />
          <div
            className={`
            flex justify-between ml-3 
            overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <span className="text-xs text-gray-600">Settings</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-1 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group hover:bg-gray-100
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
