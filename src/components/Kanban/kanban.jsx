import React, { useState } from "react";
import tasks from "./TaskData";
import Column from "./Column";

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
    <div className="flex justify-center mt-8 bg-indigo-400 bg-opacity-20">
      <div className="w-full ">
        <div className="flex flex-row justify-between space-x-3">
          <Column
            status="todo"
            tasks={boardTasks.todo}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          <Column
            status="inProgress"
            tasks={boardTasks.inProgress}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          <Column
            status="done"
            tasks={boardTasks.done}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          <div className="h-auto w-auto bg-black  "> More Column + </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
