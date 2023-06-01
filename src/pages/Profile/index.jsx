import React from "react";
import { TaskForm, TaskList, WeeklyCalendar} from "../../components";
import './style.css'
const Profile = () => {

  return (
     <div className='profile-container'>
      <div className="cal-form-container">
        <TaskList />
        <WeeklyCalendar/>
      </div>
        <TaskForm />
    </div>
  );
};

export default Profile
