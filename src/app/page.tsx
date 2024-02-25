"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pomodoro from "@/components/Pomodoro";
import { TimeProvider } from "@/context/timeContext";
import ReactPlayer from "react-player";
import Image from "next/image";
import Draggable from "react-draggable";

export default function Home() {
  return (
    <TimeProvider>
      <main className="w-screen h-screen overflow-hidden ">
        <Image
          src="/lofi.gif"
          alt="sim"
          width={200}
          height={200}
          className="w-full h-full object-cover absolute z-0"
        />
        <ReactPlayer
          playing
          url="https://soundcloud.com/lofi-hip-hop-music/sets/lofi-lofi?si=d512feea9637447784690ddedcb834b0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
        <Header />
        <Draggable>
          <div className="flex flex-col items-center justify-center ">
            <Pomodoro />
          </div>
        </Draggable>
        <Footer />
      </main>
    </TimeProvider>
  );
}
