import React, { useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//import axios from 'axios';
import { useTasksContext }  from '../../hooks/useTasksConext'
import { useAuthContext } from '../../hooks/useAuthContext';
import {TaskItem} from '../'
import './style.css'

const TaskList = () => {
  
  const {user} = useAuthContext()
  const {tasks, dispatch} = useTasksContext()

  async function loadTasks() {
    const response = await fetch(`http://localhost:9000/tasks`,{
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    sessionStorage.setItem("tasks", JSON.stringify(json));
    if (response.ok) {
      dispatch({
        type: 'SET_TASK',
        payload: json
      })
    
    }
  }

  useEffect(() => {
      if(user) {
        if(localStorage.getItem('tasks') == null){
           loadTasks()
          }else{
            const items =  JSON.parse(localStorage.getItem('tasks'));
            dispatch({
              type: 'SET_TASK',
              payload: items
            })
          }
       }
  
    function addItemToArray(){
      myArray.push(document.getElementById("txtMyText").value);
      localStorage.setItem('textValues', JSON.stringify(myArray));
      //------------^store the item by stringify--^
      }

      
    }, [dispatch, user]);
  
              
  //4 drag and drop
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
      localStorage.setItem('tasks', JSON.stringify(items));
    dispatch({
      type: 'SET_TASK',
      payload: items
    });  
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
  )
}

export default TaskList
