import React, { useState } from "react";
import { Button } from "./ui/button";

function Footer() {
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

  return (
    <div className="w-full  ">
      <div className="w-fit bg-[#222222] h-16 items-center flex justify-center rounded-full p-6 text-[#F8F8F2] shadow mx-auto">
        <div className="grid grid-cols-3 gap-3 w-full max-w-sm text-yellow-400 ">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
