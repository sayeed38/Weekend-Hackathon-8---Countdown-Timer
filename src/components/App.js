import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [input, setInput] = useState("");
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

  const handleInput = (e) => {
    e.persist();
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      setInput(input + e.key);
    }
    if (e.keyCode === 13) {
      setTimer(parseInt(input, 10));
      setInput("");
    }
  };
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            value={input}
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
