import React, { useState } from "react";
import { TaskForm, TaskList, WeeklyCalendar} from "../../components";
import './style.css'
import MainTitle from "../../components/MainTitle";

const Profile = () => {
  //const [inputText, setInputText] = useState('');


  return (
     <div className='profile-container'>
      <MainTitle  title='Tasks'/>
      <TaskList />
      <TaskForm />
      <WeeklyCalendar />
    </div>
  );
};

export default Profile;
