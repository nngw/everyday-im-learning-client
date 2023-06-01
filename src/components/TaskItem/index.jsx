import React from 'react'
import './style.css'

const TaskItem = ({task,provided}) => {
  return (
    <>
      <ul className="task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <span className="task-item">{task}</span>
        <button aria-label='delete task button' className="delete-task-btn"><span className="material-symbols-outlined">delete</span></button>
        {/* <button aria-label = 'delete task' className="trash-btn"
          onClick ={()=> deleteTask(task)}>&#128465;</button> */}
          <li className="break" >
            <span className="break-item">Break</span>
            {/* <button aria-label = 'delete task' className="trash-btn"
              onClick ={()=> deleteTask(task)}>&#128465;</button> */}
          </li>
      </ul>
      
    </>
   
  )
}

export default TaskItem;
