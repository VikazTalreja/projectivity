import React, { useState, useEffect } from "react";
import AccordionForm from "./PhaseForm";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { pfp1, pfp2, pfp3, pfp4 } from "../../imports";

const PhaseManager = () => {
  const [accordions, setAccordions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setAccordions([
      {
        title: "Phase 1",
        items: ["Option 1", "Option 2"],
        isOpen: false,
      },
      {
        title: "Phase 2",
        items: ["Option 1", "Option 2"],
        isOpen: false,
      },
      {
        title: "Production",
        items: ["set design", "Shoot"],
        isOpen: false,
      },
      {
        title: "Pre-Production",
        items: ["Editing", "Composing"],
        isOpen: false,
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

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-yellow-500",
    // Add more valid Tailwind CSS color classes as needed
  ];

  return (
    <>
      <main className="ml-0 md:ml-[80px] mr-3">
        <div className="text-4xl text-center mt-5 font-bold">
          <h1>Task Manager</h1>
        </div>
        <div className="flex w-screen md:w-auto justify-end">
          <button
            className="px-4 md:px-3 py-2 md:py-1 bg-blue-500 rounded-md text-center font-medium text-white text-sm md:text-[12px] -mt-10 md:mt-3  mr-6 md:mr-[-5px] mb-0"
            onClick={addAccordion}
          >
            + Phase
          </button>
          {showForm && (
            <AccordionForm
              onClose={handleFormClose}
              onSubmit={handleFormSubmit}
            />
          )}
        </div>
        <div className="flex md:flex-col w-screen  md:w-auto overflow-auto scroll-smooth flex-row">
          {accordions.map((accordion, index) => (
            <Accordion
              className="py-2 md:w-full  mx-3 bg-white  my-[6px] rounded-md"
              key={index}
              open={accordion.isOpen}
            >
              <div className=" h-fit rounded-lg mx-1">
                <AccordionHeader className="border-0 cursor-pointer py-3 mt-0">
                  <div className="flex flex-row w-full justify-center space-x-1 h-[40px]">
                    <div className={`w-1/6  p-2`}>
                      <div
                        className={`border-[1.5px] mr-2 md:mr-0 border-opacity-30 border-black 
                      ${colors[index % colors.length]} bg-opacity-80
                          w-[16px] h-[16px] mt-2 flex items-center justify-center text-center text-sm rounded-[4px] ${
                            accordion.isOpen
                              ? "bg-transparent text-gray-400"
                              : "text-white"
                          }
                  
                      `}
                        onClick={() => handleToggle(index)}
                      >
                        {accordion.isOpen ? "-" : "+"}
                      </div>
                    </div>
                    <div className="w-[120px] h-[80px] md:h-auto md:w-1/2 text-start mt-4 font-extrabold text-xs    ">
                      {accordion.title}
                    </div>

                    <div className="w-1/4 flex flex-row text-center">
                      <div className="mx-3 flex flex-row-50  items-center justify-center w-full relative">
                        <div className="z-40 rounded-full h-[30px] w-[30px] shadow-sm overflow-hidden absolute bottom-0">
                          <img
                            src={pfp1}
                            className="h-full w-full object-cover object-center"
                            alt="Profile picture"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="z-30 -ml-9 rounded-full h-[30px] w-[30px] shadow-sm  overflow-hidden absolute bottom-0">
                          <img
                            src={pfp4}
                            className="h-full w-full object-cover object-center"
                            alt="Profile picture"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="z-20 -ml-16 rounded-full h-[30px] w-[30px] shadow-sm   overflow-hidden absolute bottom-0">
                          <img
                            src={pfp3}
                            className="h-full w-full object-cover object-center"
                            alt="Profile picture"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>

                    <button className="w-fit h-full flex text-gray-800 items-center justify-center ml-1 text-center">
                      ...
                    </button>
                  </div>
                </AccordionHeader>
                <AccordionBody
                  className="text-xs font-semibold text-gray-400 flex 
                  justify-start text-start mb-2 py-1"
                >
                  <ul className="mt-0 ml-11  ">
                    {accordion.items.map((item, itemIndex) => (
                      <li className="mb-5 cursor-pointer" key={itemIndex}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </div>
            </Accordion>
          ))}
        </div>
      </main>
    </>
  );
};

export default PhaseManager;
