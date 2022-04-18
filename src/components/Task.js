import React from 'react'

const Task = ({task}) => {
    let {title,description} = task;
  return (
    <div>
      <h3 className="task-slider__header-title">{title}</h3>
      <p className="task-slider__header-description">{description}</p>
    </div>
  );
}

export default Task