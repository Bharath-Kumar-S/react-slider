import React, { useState } from "react";
import Task from "./Task";

const TaskSlider = ({ tasks }) => {
  const allTask = [
    {
      title: "Task1",
      description: "Description",
    },
    {
      title: "Task2",
      description: "Description2",
    },
    {
      title: "Task3",
      description: "Description3",
    },
    {
      title: "Task4",
      description: "Description4",
    },
    {
      title: "Task5",
      description: "Description5",
    },
    {
      title: "Task6",
      description: "Description6",
    },
  ];

  const [taskIndex, setTaskIndex] = useState(0);
  const [prevBtn, setPrevBtn] = useState(true);
  const [nextBtn, setNextBtn] = useState(false);

  const handlePrev = () => {
    if (taskIndex !== 0) {
      setTaskIndex((prev) => prev - 1);
      setNextBtn(false);
      if (taskIndex === 1) {
        setPrevBtn(true);
      }
    }
  };

  const handleNext = () => {
    if (taskIndex < allTask.length - 1) {
      setTaskIndex((prev) => prev + 1);
      setPrevBtn(false);
      if (taskIndex === allTask.length - 2) {
        setNextBtn(true);
      }
    }
  };

  const handleReset = () => {
    setTaskIndex(0);
    setPrevBtn(true);
    setNextBtn(false);
  };

  return (
    <React.Fragment>
      <div className="task-slider">
        <div className="task-slider__header">
          <div className="task-slider__header-buttons">
            <button
              className="task-slider__header-button"
              onClick={handlePrev}
              disabled={prevBtn}
            >
              Previous
            </button>
            <button
              className="task-slider__header-button"
              onClick={handleReset}
            >
              
              Restart
            </button>
            <button
              className="task-slider__header-button"
              onClick={handleNext}
              disabled={nextBtn}
            >
              
              Next
            </button>
          </div>
          <Task task={allTask[taskIndex]} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskSlider;
