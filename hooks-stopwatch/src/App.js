import React, { useState, useRef, useEffect } from "react";
import "./App.css";

// Custom Hook:
function useButtons() {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  // don't need to do action when component mounts
  // only do action when component unmounts
  // so add clean-up function to return statement
  // pass empty brackets as 2nd arg so this function and the return function only runs once
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleStartStop = () => {
    if (running) {
      // do something to stop running
      // need interval ID to pass into clearInterval, so we know which interval to clear
      clearInterval(intervalRef.current);
    } else {
      // if not running
      // do something to start running
      const startTime = Date.now() - lapse;

      // set intervalRef to this specific setInterval
      // 0 as 2nd arg so callback is called as quick as possible
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }

    // always toggle running state with each click
    setRunning(!running);
  };

  const handleClear = () => {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunning(false);
  };

  // return the items you need or will reference in JSX
  return { lapse, running, handleStartStop, handleClear };
}

function App() {

  const stopwatchDiv = {
    background: "#F3F2EC",
    padding: "2px 0 3%"
  }
  const buttonStyle = {
    display: "block",
    margin: "10px auto 0",
    width: "200px",
    height: "50px",
    background: "indigo",
    fontSize: "25px",
    borderRadius: "5px",
    fontWeight: "700",
    color: "#D175F0"
  };

  const lapseDiffBorder = {
    border: "20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50px",
    margin: "20px auto",
    fontSize: "18px",
    background: "#F3ECF0"
  };

  // to use custom hook
  const stopwatchOne = useButtons();
  const stopwatchTwo = useButtons();

  return (
    <div className="App">
      <h1>HOOKS <br></br>STOPWATCH</h1>
      <div className="stopwatch-one" style={stopwatchDiv}>
        <h1>{stopwatchOne.lapse} ms</h1>
        <button style={buttonStyle} onClick={stopwatchOne.handleStartStop}>
          {stopwatchOne.running ? "STOP" : "START"}
        </button>
        <button style={buttonStyle} onClick={stopwatchOne.handleClear}>
          CLEAR
        </button>
      </div>

      <div className="time-difference" style={lapseDiffBorder}>
        <p>Lapse Difference: {(stopwatchOne.lapse - stopwatchTwo.lapse)/1000} seconds</p>
      </div>

      <div className="stopwatch-two" style={stopwatchDiv}>
        <h1>{stopwatchTwo.lapse} ms</h1>
        <button style={buttonStyle} onClick={stopwatchTwo.handleStartStop}>
          {stopwatchTwo.running ? "STOP" : "START"}
        </button>
        <button style={buttonStyle} onClick={stopwatchTwo.handleClear}>
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default App;
