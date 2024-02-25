import { useTime } from "@/context/timeContext";
import { Button } from "./ui/button";

export default function Pomodoro() {
  const { timerMinutes, timerSeconds, isPaused, reset, shortBreak, paused } =
    useTime();
  return (
    <div className="h-full p-8 py-12 items-center flex flex-col w-full max-w-xl text-white ">
      <div className="text-[20vw] text-yellow-300 font-extrabold leading-[0.9] ">
        {timerMinutes}:{timerSeconds}
      </div>
      <div
        className="w-fit  gap-4  items-center grid grid-cols-3 max-sm:grid-cols-2 
      justify-center rounded-full h-16 px-12 mt-5 text-[#F8F8F2] shadow mx-auto"
      >
        <Button
          className="bg-[#222222] text-[#f1fa8c] p-6 max-w-xl w-full"
          onClick={paused}
        >
          {isPaused ? "Start" : "Pause"}
        </Button>
        <Button
          className="bg-[#222222] text-[#f1fa8c] p-6 max-w-xl w-full"
          onClick={reset}
        >
          Reset Pomodoro
        </Button>
        <Button
          className="bg-[#222222] text-[#f1fa8c] p-6 max-w-xl w-full"
          onClick={shortBreak}
        >
          Short break
        </Button>
      </div>
    </div>
  );
}
