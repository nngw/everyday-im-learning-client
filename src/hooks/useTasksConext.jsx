import { useContext } from "react"

import { TaskContext  } from "../context/TasksContext"

export const useTasksContext = () => {
  const context = useContext(TaskContext )

  if (!context) {
    throw Error('useTasksContext must be used inside TasksContextProvider')
  }
  return context
}
