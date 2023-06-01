import React,{useState} from "react";

import { useTasksContext } from "../../hooks/useTasksConext";
import { useAuthContext } from "../../hooks/useAuthContext";

import './style.css'

// import { useTaskContext } from '../hooks/useTaskConext'
// import { useAuthContext } from '../hooks/useAuthContext'

function TaskForm () {
    
    const {dispatch} = useTasksContext()
    const {user} = useAuthContext()

    const [task, setTask] = useState('');
    const [time, setTime] = useState(25) //IN FUTURE THIS CAN BE SET BY THE USER
    // const [error,setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])
    
    function handleInput(e) {
        setTask(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // setTasks([
        //     ...tasks,
        //     {text: inputText, complted: false}
        // ])
        // setInputText('')

        const tasks = {task, time}

        const res = await fetch('http://localhost:9000/tasks', {
            method: 'POST',
            body: JSON.stringify(tasks),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await res.json()

        if (res.ok) {
            setTime(25)//IN FUTURE THIS WILL BE RESET SO THAT IT CAN BE SET BY THE USER
            setTask("") 
            console.log("new task added", json)
            dispatch({type: 'CREATE_TASK', payload: json})
        }
    }
    
    return (
        <form className ='TaskForm' onSubmit={handleSubmit}>
            <label htmlFor="add-task">Tasks</label>
            <input
                id="add-task"
                value={task} 
                type="text" 
                className="task-input"
                onChange={handleInput} 
                aria-label="Input tasks"/>

            {/* IN FUTURE RELEASE TIME CAN BE SET BY THE USER */}
            {/* <label htmlFor="add-time">Task duration (min)</label>
            <input
                id="add-time"
                type="number" 
                onChange={(e) => setTime(e.target.value)}
                value={time}/> */}
        

            <button type="submit" className="task-button" aria-label="Submit tasks">Add Task</button>
        </form>
    )
}

export default TaskForm;
