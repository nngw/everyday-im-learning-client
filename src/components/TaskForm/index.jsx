import React,{useState} from "react";

import { useTasksContext } from "../../hooks/useTasksConext";
import { useAuthContext } from "../../hooks/useAuthContext";

import './style.css'

// import { useTaskContext } from '../hooks/useTaskConext'
// import { useAuthContext } from '../hooks/useAuthContext'

function TaskForm () {
<<<<<<< HEAD

    
    // const {dispatch}  = useTaskContext()
    //const {user} = useAuthContext()
    const [inputText, setInputText] = useState('');

=======
    const {dispatch} = useTasksContext()
    const {user} = useAuthContext()

    const [inputText, setInputText] = useState('');
    const [duration, setDuration] = useState('')
    // const [error,setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])
    
>>>>>>> e68c69d55b8174b7f357910c610dad20c0fe7d5f
    function handleInput(e) {
        setInputText(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
<<<<<<< HEAD
        setTasks([
            ...tasks,
            {text: inputText, completed: false}
        ])
        setInputText('')
=======
        // setTasks([
        //     ...tasks,
        //     {text: inputText, complted: false}
        // ])
        // setInputText('')

        const task = {inputText, duration}

        const res = await fetch('http://localhost:9000/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await res.json()

        console.log(user.token)

        if (res.ok) {
            setDuration("")
            setInputText("")
            console.log("new task added", json)
            dispatch({type: 'CREATE_TASK', payload: json})
        }

>>>>>>> e68c69d55b8174b7f357910c610dad20c0fe7d5f
    }
    
    return (
        <form className ='TaskForm' onSubmit={handleSubmit}>
            <label>Tasks</label>
            <input 
                value={inputText} 
                type="text" 
                className="task-input"
                onChange={handleInput} 
                aria-label="Input tasks"/>

            <label>Task duration (min)</label>
            <input 
                type="number" 
                onChange={(e) => setDuration(e.target.value)}
                value={duration}/>
        

            <button type="submit" className="task-button" aria-label="Submit tasks">Add Task</button>
        </form>
    )
}

export default TaskForm;
