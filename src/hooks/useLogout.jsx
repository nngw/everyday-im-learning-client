import { useAuthContext } from "./useAuthContext"
import { useTasksContext } from "./useTasksConext"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: tasksDispatch } = useTasksContext()

  const logout = () => {
    //Remove user fron storage
    localStorage.removeItem('user')

    //dispatch logout action
    dispatch({type:'LOGOUT'})
    tasksDispatch({type: 'SET_TASKS', payload: null})
  }

  return {logout}
}
