import React from 'react'
import styles from './Task.module.css'

const Task = ({task}) => {
    let {title,description} = task;
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Task