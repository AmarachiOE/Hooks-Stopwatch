import React, { useState } from 'react';
import './App.css';

function App() {
  const buttonStyle = {
    "display": "block",
    "margin": "0 auto 10px",
    "width": "200px",
    "height": "50px",
    "background": "indigo",
    "font-size": "25px",
    "border-radius": "5px",
    "font-weight": "700",
    "color": "#D175F0",
  }
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h2>STOPWATCH</h2>
      <h1>{count} ms</h1>
      <button style={buttonStyle} onClick={() => {setCount(count + 1)}}>START</button>
      <button style={buttonStyle}>CLEAR</button>

    </div>
  );
}

export default App;
