import React from 'react'

import { useTasksContext }  from '../../hooks/useTasksConext'
import { useAuthContext } from '../../hooks/useAuthContext';

import './style.css'

const TaskItem = ({task,provided}) => {
  const { dispatch } = useTasksContext()
  const { user } = useAuthContext()
  
  const handleClick = async (e) => {
    e.preventDefault()
    
    const taskId = provided.draggableProps["data-rbd-draggable-id"]
    
    const res = await fetch('http://localhost:9000/tasks/' + taskId, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await res.json()

    if (res.ok) {
      dispatch({
        type: 'DELETE_TASK', payload: json 
      })
    }
  } 


  return (
    <>
      <li className="task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <span className="task-item">{task}</span>
        <button 
          aria-label='delete task button' 
          className="delete-btn"
          onClick={handleClick}>
            Delete
        </button>
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
