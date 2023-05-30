function TaskForm ({inputText, setInputText, tasks, setTasks}) {
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
        <form onSubmit={handleSubmit}>
            <input value={inputText} type="text" className="task-input"
            onChange={handleInput}/>
            <button type="submit" className="task-button">Add Task</button>
        </form>
    )
}

export default TaskForm;
