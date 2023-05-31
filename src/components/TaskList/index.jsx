import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//import axios from 'axios';
//import { useDispatch } from 'react-redux';
import { useTasksContext }  from '../../hooks/useTasksConext'
import { useAuthContext } from '../../hooks/useAuthContext';
import {TaskItem} from '../'
import './style.css'

const TaskList = () => {
  //const [tasks,setTasks] = useState('')
  const {user} = useAuthContext()
  const {tasks, dispatch} = useTasksContext()
  //const dispatch = useDispatch()
  // async function isCompleted(id, bool) {
  //   const options = {
  //       method: "PATCH",
  //       headers: { 'Content-Type': 'application/json' },    
  //       body: JSON.stringify({
  //           task_id: id,
  //           completed: bool
  //       })
  //   }
  //   const response = await fetch(`http://localhost:9000/tasks/${id}`, options);
  //   const data = await response.json();
    
  //   setTasks(tasks.map(t => t.id == data.id ? { ...t, completed: data.completed } : t))
  // }

  useEffect(() => {
    async function loadTasks() {
        const response = await fetch(`http://localhost:9000/tasks`,{
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })

        const json = await response.json()
        if (response.ok) {
          dispatch({
            type: 'SET_TASK',
            payload: json
          })
        }
      }
      if(user) {
        loadTasks()
      }
    }, [dispatch, user]);
    
// function deleteTask(task){
  // }

  //4 drag and drop
  const [dnd, updatednd] = useState(tasks); 

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(dnd);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updatednd(items);
  }
  return (

    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="tasks-container">
        {!tasks ? <p>No task</p> : 
        <>
        <Droppable droppableId="task-list">
        {(provided) => (
          <ul className = "task-list" {...provided.droppableProps} ref={provided.innerRef}>
            {
              tasks.map(({task,_id}, index) => {
                return (
                  <Draggable key={_id} draggableId={_id} index={index}> 
                  {(provided) => (
                    <TaskItem  key={_id} task={task} provided ={provided}/>
                  )}
                </Draggable>
                )
              })
            }
            {provided.placeholder}
          </ul>
        )}
        </Droppable>
          </>}

      </div>    
    </DragDropContext>
    // <div>
    //   <div>TaskList</div>
    //   <div className="todo-container">
    //     <ul className = "todo-list">
    //       {
    //         tasks.map((tasks,idx) => {
    //           return <li>
    //                     <li key={idx} className="tasks">
    //                       <span className="tasks-listed">{tasks.Task}</span>
    //                       <button aria-label='mark task as complete' className="complete-btn">Done</button>
    //                     </li>
    //                       <li className="break">
    //                       <span className="break-listed">Break 15 mins</span>
    //                       {/* <button aria-label='mark task as complete' className="complete-btn">Done</button> */}
    //                     </li>  
    //                  </li>   
    //         })
    //       }
    //     </ul>
    //   </div> 
    // </div>
  )
}

export default TaskList
