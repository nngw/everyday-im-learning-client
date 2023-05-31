import React, { useState } from "react";
import { TaskForm, TaskList, WeeklyCalendar} from "../../components";
import './style.css'

const Profile = () => {
  //const [inputText, setInputText] = useState('');


  return (
     <div className='profile-container'>
      <h1>Tasks</h1>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default Profile;
