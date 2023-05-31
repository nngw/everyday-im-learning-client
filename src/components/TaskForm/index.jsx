import React,{useState} from "react";
import './style.css'

function TaskForm () {
    const [inputText, setInputText] = useState('');
    function handleInput(e) {
        setInputText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTasks([
            ...tasks,
            {text: inputText, complted: false}
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
