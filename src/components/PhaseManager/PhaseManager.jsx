import React, { useState, useEffect } from "react";
import AccordionForm from "./PhaseForm";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { chat } from "../../imports";

const PhaseManager = () => {
  const [accordions, setAccordions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setAccordions([
      {
        title: "Phase 1",
        items: ["Option 1", "option 2"],
        isOpen: false,
      },
      {
        title: "Phase 2",
        items: ["Option 1", "option 2"],
        isOpen: false,
      },
      {
        title: "Production",
        items: ["set design", "Shoot"],
        isOpen: true,
      },
      {
        title: "Pre-Production",
        items: ["Editing", "Composing"],
        isOpen: true,
      },
    ]);
  }, []);

  const handleToggle = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[index].isOpen = !updatedAccordions[index].isOpen;
    setAccordions(updatedAccordions);
  };

  const addAccordion = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (newAccordion) => {
    setAccordions([...accordions, newAccordion]);
    setShowForm(false);
  };

  return (
    <>
      <main className="ml-[80px] bg-[#F4F6FF]">
        <div className="text-2xl text-center mt-2 font-bold  ">
          <h1>Task Manager</h1>
        </div>
        <div className="flex justify-end">
          <button
            className="px-3 py-1 bg-blue-500 rounded-md text-center font-semibold text-white text-[10px] mt-4 mr-5"
            onClick={addAccordion}
          >
            + phase
          </button>
          {showForm && (
            <AccordionForm
              onClose={handleFormClose}
              onSubmit={handleFormSubmit}
            />
          )}
        </div>
        {accordions.map((accordion, index) => (
          <Accordion key={index} open={accordion.isOpen}>
            <div className="bg-blue-500">
              <AccordionHeader
                className="border-0 cursor-pointer mt-0"
                onClick={() => handleToggle(index)}
              >
                <div className="flex flex-row w-full h-[40px] bg-black">
                  <div className="w-1/6 bg-blue-300">
                    <img src={chat} alt={`Chat ${index}`} />
                  </div>
                  <div className="w-1/3 bg-black">{accordion.title}</div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  {accordion.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </AccordionBody>
            </div>
            <br />
          </Accordion>
        ))}
      </main>
    </>
  );
};

export default PhaseManager;
