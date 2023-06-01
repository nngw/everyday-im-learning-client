import React, { useState, useEffect } from "react";
import image from '../../assets/lying_panda.png';
import StepProgressBar from './ProgressBar';

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60);

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

  const calculateProgressPercent = (time) => {
    const totalSeconds = 25 * 60;
    const remainingSeconds = Math.max(0, time);
    const percent = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
    return percent;
  };
  
  const progressPercent = calculateProgressPercent(time);

  return (
    <div className="pomodoro-div">
      <div className="image-container">
        <img src={image} alt="panda lying down" className="lying-panda" />
      </div>
      <h3 className="pom-text">Time to focus!</h3>
      <div className="pomodoro-text" data-testid="pomodoro-text">
        {formatTime(time)}
      </div>
      <div className="pom-button">
        {!isActive ? (
          <button onClick={handleStart} className="start-btn">
            Start
          </button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
      <StepProgressBar percent={progressPercent} />
    </div>
  );
};

export default Pomodoro;