import React,{useState} from "react";
import './style.css'

import { useTaskContext } from '../hooks/useTaskConext'
import { useAuthContext } from '../hooks/useAuthContext'

function TaskForm () {

    
    const {dispatch}  = useTasksContext()
    const {user} = useAuthContext()
    const [inputText, setInputText] = useState('');

    function handleInput(e) {
        setInputText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTasks([
            ...tasks,
            {text: inputText, completed: false}
        ])
        setInputText('')
    }
    
    return (
        <form className ='TaskForm' onSubmit={handleSubmit}>
            <input value={inputText} type="text" className="task-input"
            onChange={handleInput}/>
            <button type="submit" className="task-button">Add Task</button>
        </form>
    )
}

export default TaskForm;
