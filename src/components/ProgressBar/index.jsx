import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressBar = ({ percent }) => {
  return (
    <div className="progressBar">
    <ProgressBar
      percent={percent}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://em-content.zobj.net/thumbs/120/facebook/355/grinning-face-with-sweat_1f605.png"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://em-content.zobj.net/source/microsoft-teams/363/folded-hands_1f64f.png"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/confetti-ball_1f38a.gif"
          />
        )}
      </Step>
    </ProgressBar>
    </div>
  );
};

export default StepProgressBar;