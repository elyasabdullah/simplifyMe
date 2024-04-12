import React, { useState, useEffect } from 'react';

interface Iprops {
  timeRemaining: number;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
}
const Timer = ({timeRemaining, setTimeRemaining}:Iprops) => {

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeRemaining]);

  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{fontSize: '1.5rem'}}>
      {formatTime(timeRemaining)}
    </div>
  );
};

export default Timer;