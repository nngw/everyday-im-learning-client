import React from 'react'
import './style.css'

const TaskItem = ({text,provided}) => {
  return (
    <>
      <li className="task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <span className="task-item">{text}</span>
        <button aria-label='mark task as complete' className="complete-btn">Done</button>
        {/* <button aria-label = 'delete task' className="trash-btn"
          onClick ={()=> deleteTask(task)}>&#128465;</button> */}
      </li>
      <li className="break">
      <span className="break-item">Break</span>
      {/* <button aria-label = 'delete task' className="trash-btn"
        onClick ={()=> deleteTask(task)}>&#128465;</button> */}
      </li>
    </>
   
  )
}

export default TaskItem;
