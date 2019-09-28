import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const buttonStyle = {
    "display": "block",
    "margin": "0 auto 10px",
    "width": "200px",
    "height": "50px",
    "background": "indigo",
    "fontSize": "25px",
    "borderRadius": "5px",
    "fontWeight": "700",
    "color": "#D175F0",
  }
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStartStop = () => {
    if (running) {
      // do something to stop running
      // need interval ID to pass into clearInterval, so we know which interval to clear
      clearInterval(intervalRef.current);
    } else {
      // if not running, we want it to run, so we need to see the time change
      const startTime = Date.now() - lapse;
      
      // set intervalRef to this specific setInterval
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime)
      }, 0) // 0 so callback is called as quick as possible
    }
    setRunning(!running);
  }

  const handleClear = () => {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunning(false);
  }
  
  return (
    <div className="App">
      <h2>STOPWATCH</h2>
      <h1>{lapse} ms</h1>
      <button style={buttonStyle} onClick={handleStartStop}>{running ? "STOP" : "START"}</button>
      <button style={buttonStyle} onClick={handleClear}>CLEAR</button>

    </div>
  );
}

export default App;
