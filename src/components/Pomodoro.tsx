import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

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
    let interval = null;

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

    return () => clearInterval(interval);
  }, [displayMessage, isPaused, minutes, seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="h-full p-8 py-12 items-center flex flex-col w-full max-w-xl text-white">
      <div className="text-[350px] text-yellow-300 font-extrabold leading-[1.2] ">
        {timerMinutes}:{timerSeconds}
      </div>
      {/* <div className="grid grid-cols-3 gap-3 w-full max-w-md text-yellow-400 pt-10">
        <Button className="bg-[#222222] text-[#f1fa8c] py-6" onClick={paused}>
          {isPaused ? "Start" : "Pause"}
        </Button>
        <Button className="bg-[#222222] text-[#f1fa8c] py-6" onClick={reset}>
          Reset Pomodoro
        </Button>
        <Button
          className="bg-[#222222] text-[#f1fa8c] py-6"
          onClick={shortBreak}
        >
          Short break
        </Button>
      </div> */}
    </div>
  );
}
