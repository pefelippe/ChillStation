import { useTime } from "@/context/timeContext";
import { Button } from "./ui/button";

export default function Pomodoro() {
  const { timerMinutes, timerSeconds, isPaused, reset, shortBreak, paused } =
    useTime();
  return (
    <div className="absolute h-fit p-8 py-12 items-center flex flex-col w-fit max-w-xl text-[#F8F8F2] justify-center rounded-3xl  ">
      <div className="text-[8vw] font-extrabold leading-[0.9] text-[#ffb86c]">
        {timerMinutes}:{timerSeconds}
      </div>
      <div
        className="w-fit  gap-4  items-center grid grid-cols-3 max-sm:grid-cols-2 
      justify-center rounded-full h-16 px-12 mt-5  shadow mx-auto"
      >
        <Button
          className="bg-[#44475a] text-[#f1fa8c] p-6 max-w-xl w-full"
          onClick={paused}
        >
          {isPaused ? "Start" : "Pause"}
        </Button>
        <Button
          className="bg-[#44475a] text-[#f1fa8c] p-6 max-w-xl w-full"
          onClick={reset}
        >
          Reset Pomodoro
        </Button>
        <Button
          className="bg-[#44475a] text-[#f1fa8c] p-6 max-w-xl w-full"
          onClick={shortBreak}
        >
          Short break
        </Button>
      </div>
    </div>
  );
}
