import React, { useState } from "react";

const AccordionForm = ({ onClose, onSubmit }) => {
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
  );
};

export default AccordionForm;
