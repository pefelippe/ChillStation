import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

function PomodoroCard() {
  return (
    <Card className="w-[380px] p-5">
      <CardTitle>Pomodorofy</CardTitle>
      <CardDescription>Pomodoro.</CardDescription>
      <CardContent></CardContent>
      <Button className="w-full">
        {" "}
        <CheckIcon className="mr-2 h-4 w-4" /> Start Pomodoro
      </Button>
    </Card>
  );
}

export default PomodoroCard;
