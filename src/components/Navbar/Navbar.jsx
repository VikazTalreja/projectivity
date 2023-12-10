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
    <nav className="flex justify-end space-x-7 p-3 items-center h-[70px] bg-white text-white">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white border-3 shadow-md shadow-gray-500 cursor-pointer">
        <img src={Search} alt="Chat" className="w-5 h-5" />
      </div>
      <div className="flex items-center justify-center h-14 w-14 rounded-full  bg-white border-3 shadow-md shadow-gray-500 cursor-pointer">
        <img src={Notification_2} alt="Chat" className="w-5 h-5 " />
      </div>
      <div className="flex items-center justify-center h-14 w-14 rounded-full  bg-white border-3 shadow-md shadow-gray-500 cursor-pointer">
        <img src={chat} alt="Chat" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center h-14 w-14 rounded-full  bg-white border-3 shadow-md shadow-gray-500 cursor-pointer">
        <img src={Notification_1} alt="Chat" className="w-6 h-6" />
      </div>

      <div className="relative inline-block">
        <button>
          <div
            className="flex items-center h-14 w-[180px] rounded-full  bg-white border-3 shadow-md shadow-gray-500 cursor-pointer text-black"
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
            <div className="absolute flex bg-white my-1 shadow-md shadow-gray-500 z-30 text-black py-4 w-[170px] text-start font-light text-sm right-0 rounded-md">
              <ul className="ml-2">
                <li className="mb-3">Edit Prodile</li>
                <hr className="w-full h-[2px] bg-black bg-opacity-20" />
                <li className="mt-3">Logout</li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
