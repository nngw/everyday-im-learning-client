import React, { useState } from "react";
import { TaskForm, TaskList } from "../../componants";

const Profile = () => {
  const [inputText, setInputText] = useState('');
  const [ tasks, setTasks ] = useState([
    { id: 0, text: "Teach React" },
    { id: 1, text: "Complain About something random" },
    { id: 2, text: "Take a Break" },
  ]);

  return (
     <div className='task-container'>
      <h1>Tasks</h1>
      <TaskForm inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks} />
       <TaskList tasks = {tasks} setTasks = {setTasks} />
    </div>
  );
};

export default Profile;