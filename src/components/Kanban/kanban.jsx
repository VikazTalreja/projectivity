import React, { useState } from "react";
import tasks from "./TaskData";
import Column from "./Column";
import {
  calneder,
  checklist,
  columns,
  hierarchy,
  lines,
  menu,
  roundedplus,
  sorting,
} from "../../imports";

const KanbanBoard = () => {
  const [boardTasks, setBoardTasks] = useState(tasks);

  const handleDragStart = (e, taskTitle, status) => {
    e.dataTransfer.setData("task", taskTitle);
    e.dataTransfer.setData("status", status);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const taskTitle = e.dataTransfer.getData("task");
    const prevStatus = e.dataTransfer.getData("status");

    if (prevStatus !== status) {
      const updatedTasks = { ...boardTasks };
      const taskIndex = updatedTasks[prevStatus].findIndex(
        (task) => task.title === taskTitle
      );

      if (taskIndex !== -1) {
        const taskToMove = updatedTasks[prevStatus][taskIndex];
        updatedTasks[prevStatus].splice(taskIndex, 1);
        updatedTasks[status] = [...updatedTasks[status], taskToMove];
        setBoardTasks(updatedTasks);
      }
    }
  };

  return (
    <div className="flex-1 w-full justify-center">
      <div className="flex-1 flex-col mt-2">
        {/* Header section */}
        <div className="mt-7 h-12 grid grid-cols-2 mb-7 ">
          <div className="flex flex-row justify-start text-start  mb-3 text-indigo-300 ml-3">
            <div className=" flex h-fit p-1 mr-2 bg-blue-600 bg-opacity-10 rounded-lg ">
              <img
                src={columns}
                className="w-auto opacity-40 h-5 items-center"
              />
            </div>
            <span className="text-xl">Kanban View</span>
          </div>
          <div className="flex flex-row space-x-2 justify-end text-xs text-gray-600">
            <span className="mr-2">Sort by (Default)</span>
            <img src={sorting} className="w-100% h-4 opacity-30" />
            <img src={lines} className="w-100% h-4 opacity-30" />
            <img src={hierarchy} className="w-100% h-4 opacity-30" />
            <img src={calneder} className="w-100% h-4 opacity-30" />
            <img src={menu} className="w-100% h-4 opacity-30" />
          </div>
        </div>

        {/* Columns and "More Column +" section */}
        <div className="flex flex-row justify-start space-x-5 ml-2">
          <Column
            status="ToDo"
            tasks={boardTasks.ToDo}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          <Column
            status="InProgress"
            tasks={boardTasks.InProgress}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          <Column
            status="Done"
            tasks={boardTasks.Done}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          {/* "More Column +" section */}
          <div className="flex flex-col items-end">
            <div className="h-[240px] w-16 bg-blue-400 bg-opacity-10 text-blue-800 rounded-lg text-lg flex flex-row justify-center items-center font-bold">
              <span className="flex flex-row -rotate-90 whitespace-nowrap">
                More Column
                <img src={roundedplus} className="ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
