import { useContext, createContext, useState } from "react";
import { Logo, Settings, menu } from "../../imports.js";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);
  const [ShowSidebar, SetShowSidebar] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(false);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const toggleSidebar = () => {
    SetShowSidebar(!ShowSidebar);
  };

  return (
    <>
      <button
        className="md:hidden absolute left-6 top-4 h-8 w-8 rounded-full border-3  cursor-pointer"
        onClick={toggleSidebar}
      >
        <img src={menu} className="" />
      </button>
      <aside>
        <nav
          className={`  ${
            ShowSidebar ? "flex flex-col h-screen" : "hidden"
          }  md:flex flex-col h-screen top-[60px] md:top-0 fixed justify-between left-0 w-[80px] z-50 bg-white border-r shadow-sm`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hidden md:flex p-4 pb-2 justify-between items-center">
            <img
              src={Logo}
              className={`overflow-hidden transition-all `}
              alt=""
            />
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex flex-col justify-between items-center m-0 p-0">
              {children}
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3 overflow-hidden">
            <img src={Settings} alt="" className="w-9 ml-4 p-1 rounded-md" />
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
    </>
  );
}

export function SidebarItem({ icon, text, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        flex py-2 px-3 
         rounded-md cursor-pointer h-10 mt-3
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
          absolute left-full rounded-md px-2 ml-6
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
