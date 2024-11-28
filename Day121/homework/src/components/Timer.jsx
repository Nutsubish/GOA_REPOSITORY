import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, settime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval = 0;
    if (isRunning === true) {

      timerInterval = setInterval(() => {
        settime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    

    return () => clearInterval(timerInterval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    settime(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>{time} seconds</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
