import React from 'react'

const TaskItem = ({task}) => {
  return (
    <li className="task">
      <span className="task-item">{task.text}</span>
      <button aria-label='mark task as complete' className="complete-btn">Done</button>
    </li>
  )
}

export default TaskItem;
