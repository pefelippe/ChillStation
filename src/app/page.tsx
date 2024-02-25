"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pomodoro from "@/components/Pomodoro";
import PomodoroCard from "@/components/PomodoroCard";
import React from "react";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#121212] p-6">
      <Header />
      <Pomodoro />
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl" /> */}
      <Footer />
    </main>
  );
}
