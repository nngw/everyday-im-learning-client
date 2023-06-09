import React, { createContext, useReducer } from 'react'

export const TaskContext = createContext()


export const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASK':
      return{
        tasks:action.payload
      }
      
      case 'CREATE_TASK':
        return {
        tasks: [...state.tasks, action.payload] 
      }
      // case 'UPDATE_TASK_DND':
      //   //console.log(state.tasks)
      //   return {
      //     tasks: action.payload
      //     //...state, tasks: action.payload
      // }

    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter((t) => t._id !== action.payload._id )
      }

    default:
      return state 
  }
}


export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks: null
  })

  return (
    <TaskContext.Provider value={{...state, dispatch}}>
      { children }
    </TaskContext.Provider>
  )
}
