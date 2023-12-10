import React, { useState } from "react";

const PhaseForm = ({ onClose, onSubmit }) => {
  const [newAccordionTitle, setNewAccordionTitle] = useState("");
  const [newAccordionItems, setNewAccordionItems] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccordion = {
      title: newAccordionTitle,
      items: newAccordionItems.split(",").map((item) => item.trim()),
      isOpen: false,
    };
    onSubmit(newAccordion);
    setNewAccordionTitle("");
    setNewAccordionItems("");
  };

  return (
    <div className=" z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md filter backdrop-filter z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-md shadow-md flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Enter Accordion Title"
            value={newAccordionTitle}
            onChange={(e) => setNewAccordionTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Comma-separated Items"
            value={newAccordionItems}
            onChange={(e) => setNewAccordionItems(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhaseForm;
