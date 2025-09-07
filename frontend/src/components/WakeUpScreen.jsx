// WakeUpScreen.jsx
import React from "react";
import "./WakeUpScreen.css"; // for CSS animation/styles
import networkGif from "../assets/Network.gif"; // Adjust path based on your file location

export default function WakeUpScreen({ onRetry }) {
  return (
    <div className="wakeup-screen-container">
      <div className="mascot-anim">
        {/* Use your animated GIF here */}
        <img
          alt="Server waking up animation"
          src={networkGif}
          width={140}
          style={{ maxWidth: "90vw" }}
        />
      </div>
      <div className="wakeup-messages">
        <h2>Server is waking up...</h2>
        <p>
          Please wait while we connect to our backend.
          <br />
          This may take up to 30 seconds on first load.
        </p>
      </div>
      <div className="progress-bar-animated">
        <div className="progress-inner" />
      </div>
      <button className="retry-btn" onClick={onRetry}>
        Retry Now
      </button>
    </div>
  );
}
