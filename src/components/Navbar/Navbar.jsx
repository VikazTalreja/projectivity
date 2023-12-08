import React, { useState } from "react";
import {
  JohnDoe,
  Notification_1,
  Notification_2,
  Search,
  chat,
  dropdown,
} from "../../imports";

export default function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex justify-end space-x-5 p-3 items-center h-16 bg-white text-white">
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-500 cursor-pointer">
        <img src={Search} alt="Chat" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-500 cursor-pointer">
        <img src={Notification_2} alt="Chat" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-500 cursor-pointer">
        <img src={chat} alt="Chat" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-blue-500 cursor-pointer">
        <img src={Notification_1} alt="Chat" className="w-6 h-6" />
      </div>

      <div className="relative inline-block">
        <div
          className="flex items-center h-11 w-[180px] rounded-full bg-blue-500 cursor-pointer"
          onClick={toggleDropdown}
        >
          {/*John Doe content */}
          <img
            src={JohnDoe}
            alt="John Doe"
            className="w-9 h-9 ml-1 rounded-full"
          />
          <div className="flex flex-col ml-2 mt-0">
            <h4 className="font-extrabold mb-0 text-[15px] pb-0 m-0 p-0">
              John Doe
            </h4>
            <span className="text-center pt-0 mt-0 text-[10px] mb-0 p-0">
              Line producer
            </span>
          </div>
          <img src={dropdown} alt="drop-down" className="w-5 h-3 ml-5" />
        </div>
        {showDropdown && (
          <div className="absolute bg-blue-500 w-[160px] right-0 rounded-md">
            <ul>
              <li>Edit Prodile</li>
              <li>Logout</li>
              {/* Add other dropdown options */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
