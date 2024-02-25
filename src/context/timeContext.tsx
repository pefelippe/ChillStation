// Arquivo: timeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

export const TimeContext = createContext<any>(null);

export const TimeProvider = ({ children }: { children: React.ReactNode }) => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);

  const reset = () => {
    setMinutes(25);
    setSeconds(0);
  };

  const paused = () => {
    setIsPaused((isPaused) => !isPaused);
  };

  const shortBreak = () => {
    setIsPaused(false);
    setMinutes(5);
    setSeconds(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (seconds === 0 && minutes === 0) {
      setIsPaused(true);
    }

    if (!isPaused) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let newMinutes = displayMessage ? 24 : 4;
            setSeconds(59);
            setMinutes(newMinutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [displayMessage, isPaused, minutes, seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const contextValue = {
    timerMinutes,
    timerSeconds,
    isPaused,
    paused,
    reset,
    shortBreak,
  };

  return (
    <TimeContext.Provider value={contextValue}>{children}</TimeContext.Provider>
  );
};

export const useTime = () => {
  const { timerMinutes, timerSeconds, isPaused, paused, reset, shortBreak } =
    useContext(TimeContext);

  return {
    timerMinutes,
    timerSeconds,
    isPaused,
    paused,
    reset,
    shortBreak,
  };
};
