import React, { useRef } from 'react'
import { useTasksContext }  from '../../hooks/useTasksConext'
import { useAuthContext } from '../../hooks/useAuthContext';

import './style.css'

const TaskItem = ({task,provided }) => {
  
  const { dispatch } = useTasksContext()
  const { user } = useAuthContext()
  
  const handleClick = async (e) => {
    e.preventDefault()
    
    const taskId = provided.draggableProps["data-rbd-draggable-id"]
    
    const res = await fetch('https://protectthepanda-api.onrender.com/tasks/' + taskId, {
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
      <div className='task-container'>
          <ul className="task" /*ref={dragDropRef} style={{opacity}}*/ ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div className='task-del-container'>
              <span className="task-item">{task}</span>
              <button aria-label='delete task button' className="delete-task-btn" onClick={handleClick}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
            <li className="break" >
              <span className="break-item">break</span>
            </li>
          </ul>
      </div>
    </>
   
  )
}

export default TaskItem;
