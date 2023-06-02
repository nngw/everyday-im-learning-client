
import React, { useState, useEffect } from "react";
import image from '../../../assets/images/lying_panda.png'
import { useTasksContext } from '../../hooks/useTasksConext'
//import { useAuthContext } from '../../hooks/useAuthContext';
// import Button from '../Button/index'
import './index.css'

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false); //this will be used to determine if the user is on a break or not
  const [time, setTime] = useState(1 * 60);
  const {tasks, dispatch} = useTasksContext()
  const [activeTaskIndex, setActiveTaskIndex] = useState(-1);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && time === 0) {
      clearInterval(interval);
      handleTimerEnd();
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  useEffect(() => { //this will be used to determine if the user is on a break or not
    if (isBreak) {
      setTime(5 * 60);
    } else {
      setActiveTaskIndex(getNextIncompleteTaskIndex());
      setTime(25 * 60);
    }
  }, [isBreak]);
  

  const handleStart = () => {
    console.log('Start button clicked');
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(25 * 60);
    setActiveTaskIndex(-1);
  };

  const handleTimerEnd = () => {
    setIsBreak(!isBreak);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const getNextIncompleteTaskIndex = () => {
    let activeTaskIndex = -1;

    for (let i = 0; i < tasks.length; i++) {
      if (!tasks[i].completed) {
        activeTaskIndex = i;
        break;
      }
    }

    return activeTaskIndex;
  };

  const logTasks = () => {
    let activeTask = null;

    for (let i = 0; i < tasks.length; i++) {
      if (!tasks[i].completed) {
        activeTask = tasks[i].task;
        break;
      }
    }

    return activeTask ? activeTask : "No tasks to focus on!";
  };

  return (
    <div className="pomodoro-div">
      <div className="image-container">
        <img src={image} alt="panda lying down" className="lying-panda" />
      </div>
      <h3 className="pom-text" onClick={logTasks}>Time to focus!</h3>
      <div className="active-task">
      {!isBreak && (
          <div dangerouslySetInnerHTML={{ __html: logTasks() }} />
        )}
        {isBreak && <div>Take a break!</div>}
        </div>
      <div className="pomodoro-text">{formatTime(time)}</div>
      <div className="pom-buttons">
        {!isActive ? (
          <button onClick={handleStart} className="btn" name='Start'>Start</button>
        ) : (
          <button onClick={handlePause} className="btn" >Pause</button>
        )}
        <button onClick={handleReset} className="btn" name='Reset'>Reset</button>
      </div>
      <div className="task-list">
      </div>
    </div>
  );  
};

export default Pomodoro;
