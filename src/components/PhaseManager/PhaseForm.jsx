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
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Accordion Title"
          value={newAccordionTitle}
          onChange={(e) => setNewAccordionTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Comma-separated Items"
          value={newAccordionItems}
          onChange={(e) => setNewAccordionItems(e.target.value)}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PhaseForm;
