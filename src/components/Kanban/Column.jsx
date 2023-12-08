import React from "react";

const Column = ({
  status,
  tasks,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      className={`w-[310px] h-fit bg-indigo-400
        p-4 rounded `}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, status)}
    >
      <h3 className="text-md font-semibold mb-2">{status.toUpperCase()}</h3>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded p-2 mb-2 cursor-pointer"
          draggable
          onDragStart={(e) => handleDragStart(e, task.title, status)}
        >
          <div>
            <img
              src={task.image}
              alt="Task Image"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div>{task.title}</div>
          <div>Date: {task.date}</div>
          <div>Progress: {task.progress}%</div>
          {/* Render other properties such as date, progress bar, etc. */}
        </div>
      ))}
    </div>
  );
};

export default Column;
