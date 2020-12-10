import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (timer <= 0) {
        return;
      }
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  });

  const handleInput = (event) => {
    if (event.keyCode === 13) {
      if (isNaN(event.target.value)) {
        setTimer(0);
        return;
      }
      setTimer(
        parseInt(event.target.value, 10) <= 0
          ? 0
          : parseInt(event.target.value, 10)
      );
    }
  };
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleInput(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
