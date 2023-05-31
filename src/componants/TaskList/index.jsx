import React, { useState, useEffect } from 'react'
import {TaskItem} from '../'

const TaskList = (props) => {

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

  // function displaytasks() {
  //   return tasks
  //           .filter(s => !TopPiroity || s.Piroity)
  //           .map()
  // }
  return (
    <div className="tasks-container">
        <ul className = "task-list">
            {
                props.tasks.map((task,idx) => {
                    return <TaskItem  key={idx} task={task} />
                })
            }
          
        </ul>
    </div>
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
