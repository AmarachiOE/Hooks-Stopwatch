import React, { useState } from 'react';
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

  const startStop = () => {
    if (running) {
      clearInterval();
    } else {
      const startTime = Date.now() - lapse;
      setInterval(() => {
        setLapse(Date.now() - startTime)
      }, 0)
    }
    setRunning(!running);
  }

  const clear = () => {
    setLapse(0)
  }
  
  console.log("Running", running)

  return (
    <div className="App">
      <h2>STOPWATCH</h2>
      <h1>{lapse} ms</h1>
      <button style={buttonStyle} onClick={startStop}>{running ? "STOP" : "START"}</button>
      <button style={buttonStyle} onClick={clear}>CLEAR</button>

    </div>
  );
}

export default App;
