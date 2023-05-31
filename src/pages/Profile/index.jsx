import React, { useState } from "react";
import { TaskForm, TaskList, WeeklyCalendar} from "../../components";
import './style.css'
import MainTitle from "../../components/MainTitle";

const Profile = () => {
  const [inputText, setInputText] = useState('');
  const [ tasks, setTasks ] = useState([
    { id: '1', text: "Teach React" },
    { id: '2', text: "Complain About something random" },
    { id: '3', text: "Take a Break" },
  ]);

  return (
     <div className='profile-container'>
      <MainTitle  title='Tasks'/>
      <TaskList tasks = {tasks} setTasks = {setTasks} />
      <TaskForm inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks} />
      <WeeklyCalendar />
      
    </div>
  );
};

export default Profile;
