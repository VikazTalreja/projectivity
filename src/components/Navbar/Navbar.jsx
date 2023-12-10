import React, { useState } from "react";
import {
  JohnDoe,
  Notification_1,
  Notification_2,
  Search,
  chat,
  dropdown,
  pullup,
  cross,
} from "../../imports";

export default function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex justify-end w-screen space-x-4 p-3 items-center h-[60px] z-10 bg-white text-white">
      <div className={`flex space-x-3 items-center`}>
        <button
          className="md:hidden flex mr-5  items-center justify-start h-12 w-20 rounded-full bg-white border-3 shadow-md shadow-gray-500 cursor-pointer transition-transform"
          onClick={toggleIcons}
        >
          <img
            src={showIcons ? cross : JohnDoe}
            alt="Menu"
            className=" flex justify-center ml-1 mt-2 w-9 h-9"
          />
          <img
            src={showIcons ? pullup : dropdown}
            className=" ml-4 mt-2 h-2 w-4"
          />
        </button>
        <div
          className={` z-50 absolute md:static top-14 right-4 md:space-x-3 space-y-3 md:space-y-0 py-2 px-4 shadow-lg shadow-gray-500 md:shadow-transparent rounded-lg bg-white md:bg-inherit ${
            showIcons ? "flex flex-col" : "hidden md:flex"
          }`}
        >
          <div
            className={` ${showIcons ? "flex" : "hidden"} md:flex items-center
             justify-center h-12 w-12 rounded-full bg-white border-3 shadow-md shadow-gray-500 cursor-pointer`}
          >
            <img src={Search} alt="Search" className="w-5 h-5" />
          </div>
          <div
            className={` ${
              showIcons ? "flex" : "hidden"
            } md:flex items-center justify-center h-12 w-12 rounded-full bg-white border-3 shadow-md shadow-gray-500 cursor-pointer`}
          >
            <img
              src={Notification_2}
              alt="Notification_2"
              className="w-5 h-5"
            />
          </div>
          <div
            className={` ${
              showIcons ? "flex" : "hidden"
            } md:flex items-center justify-center h-12 w-12 rounded-full bg-white border-3 shadow-md shadow-gray-500 cursor-pointer`}
          >
            <img src={chat} alt="Chat" className="w-6 h-6" />
          </div>
          <div
            className={` ${
              showIcons ? "flex" : "hidden"
            } md:flex items-center justify-center h-12 w-12 rounded-full bg-white border-3 shadow-md shadow-gray-500 cursor-pointer`}
          >
            <img
              src={Notification_1}
              alt="Notification_1"
              className="w-6 h-6"
            />
          </div>

          <div className="relative inline-block sm:static">
            <div
              className={` ${
                showIcons ? "flex" : "hidden"
              } md:flex items-center md:h-14 h-12 w-12 md:w-[180px] rounded-full bg-white border-3 shadow-md shadow-gray-500 cursor-pointer text-black`}
              onClick={toggleDropdown}
            >
              <img
                src={JohnDoe}
                alt="John Doe"
                className=" md:w-9 w-11 sm:h-9 h-11 ml-1  rounded-full"
              />
              <div className="flex flex-col ml-2 mt-0">
                <h4 className=" hidden md:flex font-extrabold mb-0 text-[15px] pb-0 m-0 p-0">
                  John Doe
                </h4>
                <span className=" hidden md:flex text-center pt-0 mt-0 text-[10px] mb-0 p-0">
                  Line producer
                </span>
              </div>
              <img
                src={showDropdown ? dropdown : pullup}
                alt="drop-down"
                className=" w-5 h-3 ml-5"
              />
            </div>
            {showDropdown && (
              <div className="absolute  flex flex-col bg-white my-1 shadow-md shadow-gray-500 z-30 text-black py-4 w-[170px] text-start font-light text-sm right-0 rounded-md">
                <button className="mb-3">Edit Profile</button>
                <hr className="w-full h-[2px] bg-black bg-opacity-20" />
                <button className="mt-3">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
