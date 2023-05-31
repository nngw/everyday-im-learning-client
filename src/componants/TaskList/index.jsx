import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//import axios from 'axios';

import {TaskItem} from '../'
import './style.css'

const TaskList = (props) => {
  const [dnd, updatednd] = useState(props.tasks); 

  // async function isCompleted(id, bool) {
  //   const options = {
  //       method: "PATCH",
  //       headers: { 'Content-Type': 'application/json' },    
  //       body: JSON.stringify({
  //           task_id: id,
  //           completed: bool
  //       })
  //   }
  //   const response = await fetch(`http://localhost:3000/tasks/${id}`, options);
  //   const data = await response.json();
    
  //   setTasks(tasks.map(t => t.id == data.id ? { ...t, completed: data.completed } : t))
  // }
//   useEffect(() => {
//     async function loadTasks() {
//         const response = await fetch(`http://localhost:3000/tasks`);
//         const data = await response.json();
//         setSnacks(data);
//     };
    
//     loadTasks();
// }, [tasks])
// function deleteTask(task){
//   let filteredTask = props.tasks.filter(el => el !== task)
//   props.setTasks(filteredTask)
// }
  // function displaytasks() {
  //   return tasks
  //           .filter(s => !TopPiroity || s.Piroity)
  //           .map()
  // }
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(dnd);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updatednd(items);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div role ="list" className="tasks-container">
        <Droppable droppableId="task-list">
        {(provided) => (
          <ul className = "task-list"{...provided.droppableProps} ref={provided.innerRef}>
              {
                  dnd.map(({text,id}, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}> 
                        {(provided) => (
                          <TaskItem  key={id} text={text} provided ={provided}/>
                        )}
                      </Draggable>
                      )
                  })
              }
             {provided.placeholder}
          </ul>
        )}
        </Droppable>
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
