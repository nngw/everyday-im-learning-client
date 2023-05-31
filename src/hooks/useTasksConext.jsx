import { useContext } from "react"

import { tasksReducer  } from "../context/TasksContext"

export const useTasksContext = () => {
  const context = useContext(tasksReducer )

  if (!context) {
    throw Error('useTasksContext must be used inside TasksContextProvider')
  }
  return context
}
