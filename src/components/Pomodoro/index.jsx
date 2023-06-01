import React, { useState, useEffect } from "react";
import image from '../../../assets/images/lying_panda.png'
import { useTasksContext }  from '../../hooks/useTasksConext'

import './index.css'

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false); //this will be used to determine if the user is on a break or not
  const [time, setTime] = useState(1 * 60);
  const {tasks, dispatch} = useTasksContext()

  console.log(tasks)

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && time === 0) {
      clearInterval(interval);
      logTasks(time)
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const handleTimerEnd = () => {
    setIsBreak(true); //this will be changed to true when the timer ends
    setTime(5 * 60); //this will be changed to 5 minutes
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const logTasks = (time) => {
    // const taskElement = []; //this is where the tasks will be displayed
    let activeTaskIndex = -1;

    for ( let i = 0; i < tasks.length; i++){
      if (tasks[i].completed === false){
        activeTaskIndex = i;
        break;
      } else if (time === 0) {
        i + 1;
      }
    }

    if (activeTaskIndex !== -1){
      const focusTask = tasks[activeTaskIndex].task;
      return focusTask
      // taskElement.push(<div key={i}>{focusTask}</div>)
    }
    return "No tasks to focus on!"
  }

  return (
    <div className="pomodoro-div">
      <div className="image-container">
        <img src={image} alt="panda lying down" className="lying-panda" />
      </div>
      <h3 className="pom-text" onClick={logTasks}>Time to focus!</h3>
      <div className="active-task">
        {logTasks() && <div dangerouslySetInnerHTML={{ __html: logTasks() }} />}
        </div>
      <div className="pomodoro-text">{formatTime(time)}</div>
      <div className="pom-button">
        {!isActive ? (
          <button onClick={handleStart} className="start-btn">Start</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
      <div className="task-list">
      </div>
    </div>
  );  
};

export default Pomodoro;
