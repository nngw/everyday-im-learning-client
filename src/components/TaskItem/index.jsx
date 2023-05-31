import React from 'react'
import './style.css'

const TaskItem = ({task,provided}) => {
  return (
    <>
      <li className="task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <span className="task-item">{task}</span>
        <button aria-label='delete task button' className="delete-btn">Delete</button>
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
