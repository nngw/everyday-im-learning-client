import React, { useState, useEffect } from "react";
import image from '../../../assets/images/lying_panda.png'
import { useTasksContext }  from '../../hooks/useTasksConext'
//import { useAuthContext } from '../../hooks/useAuthContext';
import Button from '../Button/index'
import './index.css'

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const {tasks, dispatch} = useTasksContext()
  
  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && time === 0) {
      clearInterval(interval);
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="pomodoro-div">
      <div className="image-container">
        <img src={image} alt="panda lying down" className="lying-panda" />
      </div>
      <h3 className="pom-text">Time to focus!</h3>
      <div className="pomodoro-text" data-testid="pomodoro-text">{formatTime(time)}</div>
      <div className="pom-buttons">
        {!isActive ? (
          <Button onClick={handleStart} className="start-btn" name='Start'></Button>
        ) : (
          <Button onClick={handlePause} name='Pause'></Button>
        )}
        <Button onClick={handleReset} className="reset-btn" name='Reset'></Button>
      </div>
    </div>
  );  
};

export default Pomodoro;


