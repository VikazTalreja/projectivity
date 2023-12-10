import React, { useState } from "react";
import { Progress } from "@material-tailwind/react";
import {
  attachment,
  calender2,
  chatting,
  roundedplus,
  smiley,
} from "../../imports";

const emojis = ["🔥", "⚡️", "✨", "❤️", "😂", "🤗"];

const Column = ({
  status,
  tasks,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  const [chosenEmoji, setChosenEmoji] = useState({});
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const handleEmojiSelect = (emoji, index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].chosenEmoji = emoji;
    setChosenEmoji({ ...chosenEmoji, [index]: emoji });
  };

  return (
    <div
      className={`  md:w-[320px] h-fit bg-gray-600 bg-opacity-10 border-1 border-white  p-4 rounded-lg`}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, status)}
    >
      <h3 className="text-md font-semibold mb-2">{status}</h3>
      <hr className="h-[3px] bg-white mb-3 opacity-70 rounded-lg" />
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="bg-white cursor-grab rounded p-1 mb-2"
          draggable
          onDragStart={(e) => handleDragStart(e, task.title, status)}
        >
          {task.image && (
            <div>
              <img
                src={task.image}
                alt="Task Image"
                className="w-full h-28 object-cover rounded-lg"
              />
            </div>
          )}
          <div className="grid grid-cols-2">
            <div className="text-start justify-start mt-1  font-bold text-blue-gray-700">
              {task.title}
            </div>
            <div className="justify-end text-end">
              <button
                onClick={() => {
                  setSelectedTaskIndex(index);
                }}
                className="text-2xl focus:outline-none"
              >
                <img src={smiley} className="h-7 w-7" />
              </button>
              {selectedTaskIndex === index && (
                <div
                  onMouseLeave={() => {
                    setSelectedTaskIndex(null);
                  }}
                  className="absolute bg-white border-2 border-opacity-25 drop-shadow-lg rounded-lg border-black grid grid-cols-4"
                >
                  {emojis.map((emoji, i) => (
                    <button
                      key={i}
                      onClick={() => handleEmojiSelect(emoji, index)}
                      className="text-2xl focus:outline-none"
                    >
                      {emoji}
                    </button>
                  ))}
                  {chosenEmoji[index] && <span>{chosenEmoji[index]}</span>}
                </div>
              )}
            </div>
          </div>
          <div className="text-start text-sm w-10/12 text-blue-gray-600 mb-2">
            {task.desc}
          </div>
          <div className=" text-blue-gray-600 text-sm w-1/3  flex items-center flex-row space-x-2">
            <img src={chatting} className="w-4 h-4 mr-2 opacity-50" /> 8
            <img src={attachment} className="w-4 h-4 mr-2 opacity-50 " /> 1
          </div>
          <div className="flex flex-row mb-2 items-center text-sm text-gray-500">
            <img src={calender2} className="w-4 h-4 opacity-50 mr-2" />
            {task.date}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={`w-full h-2 rounded-full`}>
              <Progress
                value={task.Completed}
                variant="gradient"
                className="h-1"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="h-11 w-full cursor-pointer bg-blue-400 bg-opacity-10 text-blue-800 rounded-lg text-lg flex justify-center items-center font-bold">
        <span className="flex">
          Add a Card
          <img src={roundedplus} className="ml-2" />
        </span>
      </div>
    </div>
  );
};

export default Column;
