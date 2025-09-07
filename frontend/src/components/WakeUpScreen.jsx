// WakeUpScreen.jsx
import React from "react";
import "./WakeUpScreen.css"; // for CSS animation/styles

export default function WakeUpScreen({ onRetry }) {
  return (
    <div className="wakeup-screen-container">
      {/* Running Mascot Animation (SVG or GIF) */}
      <div className="mascot-anim">
        {/* Example: Replace with your SVG, Lottie, GIF, etc */}
        <img alt="Mascot running" src="/assets/mascot-running.gif" width={120} />
      </div>
      <div className="wakeup-messages">
        <h2>Server is waking up...</h2>
        <p>Please wait while we connect to our backend.<br />This may take up to 30 seconds on first load.</p>
      </div>
      {/* Fake/animated progress bar */}
      <div className="progress-bar-animated">
        <div className="progress-inner" />
      </div>
      <button className="retry-btn" onClick={onRetry}>
        Retry Now
      </button>
    </div>
  );
}
